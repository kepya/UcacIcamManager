import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Session } from '../shared/models/session';
import { SessionExamenService } from './session-examen.service';
import { ZoneService } from 'src/app/shared/services/zone.service';

@Component({
  selector: 'app-session-examen-page',
  templateUrl: './session-examen-page.component.html',
  styles: [
  ]
})
export class SessionExamenPageComponent implements OnInit {

  sessions: Session[] = [];
  session!: Session;
  zones: Zone[] = [];
  searchSessions: Session[] = [];
  loading: boolean = true;
  sortIcon!: string;
  sortProperty!: string;
  isAsc!: boolean;
  downUpIcon!: string;
  searchValue!: string;
  page!: number;
  pageSize!: number;
  collectionSize!: number;
  nbrOfPage!: number;
  isFormSession!: boolean;

  formSession: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    date_debut: new FormControl(null, [Validators.required]),
    date_limite: new FormControl(null, [Validators.required]),
    date_examen: new FormControl(null, [Validators.required]),
    statut: new FormControl(true, [Validators.required]),
  });

  constructor(private sessionSrv: SessionExamenService, private zoneSrv: ZoneService) { }

  ngOnInit(): void {
    this.sortProperty = "nom";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getSessions();
  }

  sort(property: string, sessions: Session[] = this.sessions) {
    console.log("session", sessions);

    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'nom') {
      if (this.isAsc) {
        sessions.sort((a, b) => {
          if (a.nom > b.nom) {
            return 1;
          }
          if (b.nom > a.nom) {
            return -1;
          }
          return 0;
        });
      } else {
        sessions.sort((a, b) => {
          if (a.nom > b.nom) {
            return -1;
          }
          if (b.nom > a.nom) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'date_debut') {
      if (this.isAsc) {
        sessions.sort((a, b) => {
          if (a.date_debut > b.date_debut) {
            return 1;
          }
          if (b.date_debut > a.date_debut) {
            return -1;
          }
          return 0;
        });
      } else {
        sessions.sort((a, b) => {
          if (a.date_debut > b.date_debut) {
            return -1;
          }
          if (b.date_debut > a.date_debut) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'date_limite') {
      if (this.isAsc) {
        sessions.sort((a, b) => {
          if (a.date_limite > b.date_limite) {
            return 1;
          }
          if (b.date_limite > a.date_limite) {
            return -1;
          }
          return 0;
        });
      } else {
        sessions.sort((a, b) => {
          if (a.date_limite > b.date_limite) {
            return -1;
          }
          if (b.date_limite > a.date_limite) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'date_examen') {
      if (this.isAsc) {
        sessions.sort((a, b) => {
          if (a.date_examen > b.date_examen) {
            return 1;
          }
          if (b.date_examen > a.date_examen) {
            return -1;
          }
          return 0;
        });
      } else {
        sessions.sort((a, b) => {
          if (a.date_examen > b.date_examen) {
            return -1;
          }
          if (b.date_examen > a.date_examen) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'statut') {
      if (this.isAsc) {
        sessions.sort((a, b) => {
          if (a.statut > b.statut) {
            return 1;
          }
          if (b.statut > a.statut) {
            return -1;
          }
          return 0;
        });
      } else {
        sessions.sort((a, b) => {
          if (a.statut > b.statut) {
            return -1;
          }
          if (b.statut > a.statut) {
            return 1;
          }
          return 0;
        });
      }
    }

    return sessions;
  }

  get formSessionControl(): { [key: string]: AbstractControl } {
    return this.formSession.controls;
  }

  handlePageSize(event: any) {
    console.log('value: ', event.target.value);
    this.getSessions();
  }

  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let names = this.searchSessions.map(session => session.nom);
      let name = names.filter(name => name.toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);

      if (name.length === 0) {
        this.sessions = [];
      } else {
        let sessions: Session[] = [];
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          let z = this.searchSessions.filter(session => session.nom.indexOf('' + element) > -1);
          sessions.push(...z);
        }
        this.sessions = sessions;
      }
    } else {
      this.sessions = this.searchSessions;
    }
  }

  next() {
    this.page++;
    this.getSessions();
  }

  previous() {
    this.page--;
    this.getSessions();
  }

  getSessions() {
    this.sessionSrv.liste().subscribe({
      next: (value: Session[]) => {
        value = this.sort('nom', value);
        this.searchSessions = [];
        this.searchSessions = value;
        this.sessions = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  viewSession(view: string = 'data') {
    if (view === 'data') {
      this.isFormSession = false;
    } else {
      this.isFormSession = true;
    }
  }

  updateSession(session: Session) {
    this.isFormSession = true;
    this.session = session;
    this.formSession.setValue({
      nom: session.nom,
      date_debut: formatDate(session.date_debut, 'yyyy-MM-dd', "en"),
      date_limite: formatDate(session.date_limite, 'yyyy-MM-dd', "en"),
      date_examen: formatDate(session.date_examen, 'yyyy-MM-dd', "en"),
      statut: session.statut
    });
  }

  createOrUpdateSession() {
    if (this.session?.id || 0 > 0) {
      this.sessionSrv.update({ ...this.formSession.value, id: this.session?.id }).subscribe({
        next: (value) => {
          this.getSessions();
          this.session = new Session();
          this.formSession.reset();
          this.isFormSession = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    } else {
      this.sessionSrv.create({ ...this.formSession.value }).subscribe({
        next: (value) => {
          this.getSessions();
          this.session = new Session();
          this.formSession.reset();
          this.isFormSession = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    }
  }
}


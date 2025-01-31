import { Component, OnInit } from '@angular/core';
import { Session } from 'inspector';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Role } from 'src/app/shared/enums/role.enum';
import { Compte } from 'src/app/shared/models/compte';
import { CompteDisponibilite, Disponibility } from 'src/app/shared/models/entretient';
import { Note, NoteResponse } from 'src/app/shared/models/note';
import { CommonService } from 'src/app/shared/services/common.service';
import { CompteDisponibiliteService } from 'src/app/shared/services/compte-disponibilite.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-calendrier-entretien',
  templateUrl: './calendrier-entretien.component.html',
  styles: [
  ]
})
export class CalendrierEntretienComponent implements OnInit {
  interviewers: string[] = [];
  interviewer!: string;
  entretiensBeforeBreak: any[] = [];
  entretiensAfterBreak: any[] = [];
  datesOfEntretiens: Date[] = [];
  currentDate!: Date;
  indexCurrentDate: number = 0;
  compte!: Compte;

  showForAllInterviwer = false;

  constructor(private noteService: NoteService, private storageService: StorageService,
     private compteDisponibiliteService: CompteDisponibiliteService, private commonService: CommonService, 
     private sessionSrv: SessionExamenService) { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.getActiveSession();
    this.compte = this.storageService.getUserConnected();
    this.interviewer = this.compte.name + ' ' + this.compte.prenom;
    if (this.compte.role == Role.JURY) {
      this.getEntretiens();
    }
    this.getCompteDisponibilite();
  }

  downloadPlanningEntretien() {
    window.open(this.noteService.downloadPlanningEntretienUrl(), '_blank');
  }

  showAllInterviewer() {
    if (!this.showForAllInterviwer) {
      this.showForAllInterviwer = true;
      this.getEntretiens();
    } else {
      this.entretiensBeforeBreak = [];
      this.entretiensAfterBreak = [];
      this.showForAllInterviwer = false;
    }
  }

  getCompteDisponibilite() {
    this.compteDisponibiliteService.liste().subscribe({
      next: (compteDisponibilites: CompteDisponibilite[]) => {
        let intervenants: string[] = [];
        for (let compteDisponibilite of compteDisponibilites) {
          intervenants.push(compteDisponibilite.compte?.name + ' ' + compteDisponibilite.compte?.prenom);
        }
        this.interviewers = [...new Set(intervenants)];
      }
    })
  }

  getActiveSession() {
    this.sessionSrv.getActive().subscribe({
      next: (value) => {
        let d = new Date(value.date_debut_entretien!);
        let d2 = new Date(value.date_fin_entretien!);

        this.datesOfEntretiens = this.commonService.genererDates(d.getTime(), d2.getTime());

        this.indexCurrentDate = 0;

        this.currentDate = this.datesOfEntretiens[this.indexCurrentDate];

        // this.getEntretiens();
      },
    })
  }

  handleInterviewerSelect(event: any) {
    this.showForAllInterviwer = false;
    this.getEntretiens(event.value);
  }

  getEntretiens(jury?: string) {
    this.noteService.liste().subscribe({
      next: (result: NoteResponse[]) => {
        let value: any[] = [];

        if (jury != null) {
          value = result.filter((v) => (new Date(v.debut_entretien).getDate() === this.currentDate.getDate()) && (v.compte?.name + ' ' + v.compte?.prenom) === (jury));
        } else {
          value = (this.compte.role == Role.JURY) ?
            result.filter((v) => (
              new Date(v.debut_entretien).getDate() === this.currentDate.getDate())
              && (v.compte?.name + ' ' + v.compte?.prenom) === (this.interviewer))
            : result.filter((v) => (new Date(v.debut_entretien).getDate() === this.currentDate.getDate()));
        }

        value.sort((a, b) => new Date(a.fin_entretien).getTime() - new Date(b.fin_entretien).getTime());

        let entretiens = value.map((v) => {
          return {
            centre: v.candidature?.centre || '',
            interviewer: v.compte?.name + ' ' + v.compte?.prenom,
            candidat: v.candidature,
            disponibility: {
              date_disponibilite: v.debut_entretien,
              debut_disponibilite: this.commonService.formatDate1(new Date(v.debut_entretien)) ,
              fin_disponibilite: this.commonService.formatDate1(new Date(v.fin_entretien)),
            }
          };
        });

        entretiens.sort((a, b) => {
          if (a.disponibility?.debut_disponibilite > b.disponibility?.debut_disponibilite) {
            return 1;
          }
          if (b.disponibility?.debut_disponibilite > a.disponibility?.debut_disponibilite) {
            return -1;
          }
          return 0;
        });

        this.entretiensBeforeBreak = entretiens.filter((e) => e.disponibility.fin_disponibilite.getHours() <= 12);
        this.entretiensAfterBreak = entretiens.filter((e) => e.disponibility.fin_disponibilite.getHours() > 12);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }


  prochaineDate() {
    if (this.indexCurrentDate < this.datesOfEntretiens.length) {
      this.indexCurrentDate = (this.indexCurrentDate > this.datesOfEntretiens.length) ? this.datesOfEntretiens.length - 1 : this.indexCurrentDate + 1;
      this.currentDate = this.datesOfEntretiens[this.indexCurrentDate];
      this.getEntretiens();
    }
  }

  previousDate() {
    if (this.indexCurrentDate > 0) {
      this.indexCurrentDate = (this.indexCurrentDate < 0) ? 0 : this.indexCurrentDate - 1;
      this.currentDate = this.datesOfEntretiens[this.indexCurrentDate];
      this.getEntretiens();
    }
  }
}

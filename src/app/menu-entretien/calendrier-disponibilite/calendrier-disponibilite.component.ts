import { CompteService } from './../../shared/services/compte.service';
import { CompteDisponibilite, Disponibility } from './../../shared/models/entretient';
import { CompteDisponibiliteService } from './../../shared/services/compte-disponibilite.service';
import { Candidature, Compte } from './../../shared/models/compte';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/shared/enums/role.enum';
import { Cycle } from 'src/app/shared/enums/cycle.enum';
import { Genre } from 'src/app/shared/enums/genre.enum';
import { Langue } from 'src/app/shared/enums/langue.enum';
import { Statut } from 'src/app/shared/enums/statut.enum';
import { candidats } from 'src/app/shared/mocks/mock';
import { Note } from 'src/app/shared/models/note';
import { CandidatureService } from 'src/app/menu-candidature/candidature.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendrier-disponibilite',
  templateUrl: './calendrier-disponibilite.component.html',
  styles: [
  ]
})
export class CalendrierDisponibiliteComponent implements OnInit {
  entretienMap!: Map<string, Note>;


  entretienTimes: string[] = [
    "08h30 - 09h00",
    "09h00 - 09h30",
    "09h30 - 10h00",
    "10h00 - 10h30",
    "10h30 - 11h00",
    "11h00 - 11h30",
    "11h30 - 12h00",
    "12h00 - 13h00",
    "13h00 - 13h30",
    "13h30 - 14h00",
    "14h00 - 14h30",
    "14h30 - 15h00",
    "15h00 - 15h30",
    "15h30 - 16h00",
    "16h00 - 16h30",
  ];

  entretiens: any[] = [
    {
      centre: 'Libreville',
      interviewer: "DIANA MENGUELE",
      disponibility: {
        date_disponibilite: new Date(),
        debut_disponibilite: new Date(),
        fin_disponibilite: new Date(),

      }
    },
    {
      centre: 'Libreville',
      interviewer: "DIANA MENGUELE",
      disponibility: {
        date_disponibilite: new Date(),
        debut_disponibilite: new Date(),
        fin_disponibilite: new Date(),

      }
    },
    {
      centre: 'Libreville',
      interviewer: "DIANA MENGUELE",
      disponibility: {
        date_disponibilite: new Date(),
        debut_disponibilite: new Date(),
        fin_disponibilite: new Date(),
      }
    },
  ];

  entretien!: any;
  candidats: Candidature[] = [];


  //neww
  compteDisponibilites: CompteDisponibilite[] = [];
  entretienTimesBeforeBreak: string[] = [];
  entretienTimesAfterBreak: string[] = [];
  interverwerMap!: Map<string, string[]>;
  interviewers: string[] = [];

  dateIndex: number = 0;
  currentDate!: Date;
  dates: number[] = [];
  horaires: string[] = [];
  comptes: Compte[] = [];


  constructor(private candidatureSrv: CandidatureService, private commonService: CommonService, private noteService: NoteService,
    private compteDisponibiliteService: CompteDisponibiliteService, private compteService: CompteService,
    private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.getCompteDisponibilite();
    this.getCandidatures();
    this.currentDate = new Date();
  }

  checkIfAfterBreak(date: string) {
    let times = date.split('h');
    if (parseInt(times[0], 10) > 12) {
      return true;
    }
    return false;
  }

  getCompteDisponibilite() {
    this.compteDisponibiliteService.liste().subscribe({
      next: (compteDisponibilites) => {
        this.compteDisponibilites = compteDisponibilites;

        let data = compteDisponibilites.map(x => x.disponibilite) || [];

        if (!data.includes(undefined)) {
          let disponibilities: Disponibility[] = data as unknown as Disponibility[];
          let dateDisponibilities = disponibilities.map(x => x?.date_disponibilite.getTime());
          let datesSet = new Set(dateDisponibilities);
          this.dates = [...datesSet] || [];
          this.dates.sort();
          this.currentDate = new Date(this.dates[this.dateIndex]);

          let entretienTimesBeforeBreak: string[] = [];
          let intervenants: string[] = [];
          let entretienTimesAfterBreak: string[] = [];

          let times = [];
          for (let index = 0; index < compteDisponibilites.length; index++) {
            const element = compteDisponibilites[index];
            let startTime = this.commonService.formatDate(element.disponibilite!.debut_disponibilite);
            let endTime = this.commonService.formatDate(element.disponibilite!.fin_disponibilite);
            let horaire = startTime + ' - ' + endTime;
            if (this.checkIfAfterBreak(startTime)) {
              entretienTimesAfterBreak.push(horaire);
            } else {
              entretienTimesBeforeBreak.push(horaire);
            }

            let names: string[] = [];
            times.push(horaire);
            let name = element.compte?.name + ' ' + element.compte?.prenom;
            if (this.interverwerMap.has(element.disponibilite!.date_disponibilite.getTime().toString() + '|' + horaire)) {
              let lastnames = this.interverwerMap.get(element.disponibilite!.date_disponibilite.getTime().toString() + '|' + horaire) || [];
              names.push(...lastnames);
            }
            names.push(name);
            intervenants.push(name);
            this.interverwerMap.set(element.disponibilite!.date_disponibilite.getTime().toString() + '|' + horaire, names);
          }

          this.horaires = [...new Set(times)];
          this.interviewers = [...new Set(intervenants)];
          this.entretienTimesAfterBreak = [...new Set(entretienTimesAfterBreak)];
          this.entretienTimesBeforeBreak = [...new Set(entretienTimesBeforeBreak)];
        }
      }
    })
  }

  getComptes() {
    this.compteService.liste().subscribe({
      next: (comptes) => {
        this.comptes = comptes.filter(c => c.role == Role.JURY);
      }
    })
  }

  getCandidatures() {
    this.candidatureSrv.liste().subscribe({
      next: (candidatures) => {
        this.candidats = candidatures;
      }
    })
  }

  handleInterviewerSelect(event: any, time: string) {
    let interviewer = event.target.value;
    let note: Note = new Note();

    let dates = this.commonService.buildDate(this.currentDate, time);
    note.debut_entretien = new Date(dates.startDate);
    note.fin_entretien = new Date(dates.endDate);

    for (let index = 0; index < this.comptes.length; index++) {
      const compte = this.comptes[index];
      let name = compte?.name + ' ' + compte?.prenom;
      if (name == interviewer) {
        note.compte_id = compte.id || 0;
        note.compte = compte;
      }
    }

    if (this.entretienMap.has(this.currentDate.getTime().toString() + '|' + time)) {
      let n = this.entretienMap.get(this.currentDate.getTime().toString() + '|' + time) as unknown as Note;
      n.compte = note.compte;
      n.compte_id = note.compte_id;
      n.debut_entretien = note.debut_entretien;
      n.fin_entretien = note.fin_entretien;
      note = n;
    }

    this.entretienMap.set(this.currentDate.getTime().toString() + '|' + time, note);
  }

  handleCandidatSelect(event: any, time: string) {
    let candidatEmail = event.target.value;
    let note: Note = new Note();

    let dates = this.commonService.buildDate(this.currentDate, time);
    note.debut_entretien = new Date(dates.startDate);
    note.fin_entretien = new Date(dates.endDate);

    for (let index = 0; index < this.candidats.length; index++) {
      const candidat = this.candidats[index];
      if (candidat.compte.email == candidatEmail) {
        note.candidature_id = candidat.id || 0;
        note.candidature = candidat;
      }
    }

    if (this.entretienMap.has(this.currentDate.getTime().toString() + '|' + time)) {
      let n = this.entretienMap.get(this.currentDate.getTime().toString() + '|' + time) as unknown as Note;
      n.candidature = note.candidature;
      n.candidature_id = note.candidature_id;
      n.debut_entretien = note.debut_entretien;
      n.fin_entretien = note.fin_entretien;
      note = n;
    }

    this.entretienMap.set(this.currentDate.getTime().toString() + '|' + time, note);
  }

  addNote() {
    this.entretienMap.forEach((value: Note, key: string, map: Map<string, Note>) => {
      let note: Note = value;
      this.noteService.create(note).subscribe({
        next: (value) => {
          this.messageService.add({ severity: 'success', summary: 'Assignation du jury ', detail: 'Assignation du jury ' + note.compte?.name + ' ' + note.compte?.prenom + ' à ' + note.candidature?.compte.name + ' ' + note.candidature?.compte.prenom + ' effectuée avec success' });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: `Erreur d'assignation`, detail: err.message });
          console.log("Error: ", err);
        }
      })
    });
    this.router.navigate(['/calendrier_entretiens']);
  }

  prochaineDate() {
    this.currentDate = new Date(this.dates[this.dateIndex + 1]);
  }

  reset() {
    this.entretienMap = new Map<string, Note>();
  }

}

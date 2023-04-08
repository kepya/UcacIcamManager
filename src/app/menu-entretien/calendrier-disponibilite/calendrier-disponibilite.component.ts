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
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Session } from 'src/app/shared/models/session';

@Component({
  selector: 'app-calendrier-disponibilite',
  templateUrl: './calendrier-disponibilite.component.html',
  styles: [
  ]
})
export class CalendrierDisponibiliteComponent implements OnInit {
  entretienNoteMap!: Map<string, Note>;
  interverwerMap!: Map<string, string[]>;

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
  interviewers: string[] = [];

  datesOfDisponibilities: number[] = [];
  currentDate!: Date;
  horaires: string[] = []

  juries: Compte[] = [];

  candidats: Candidature[] = [];
  session!: Session;

  constructor(private candidatureSrv: CandidatureService, private commonService: CommonService, private noteService: NoteService,
    private compteDisponibiliteService: CompteDisponibiliteService, private compteService: CompteService,
    private messageService: MessageService, private router: Router, private sessionSrv: SessionExamenService) { }

  ngOnInit(): void {
    this.entretienNoteMap = new Map<string, Note>();
    this.interverwerMap = new Map<string, string[]>();
    this.getActiveSession();
    this.getCandidatures();
    this.getCompteDisponibilite();
  }

  getActiveSession() {
    this.sessionSrv.getActive().subscribe({
      next: (value) => {
        this.session = value;
      },
    })
  }

  getCandidatures() {
    this.candidatureSrv.liste().subscribe({
      next: (candidatures) => {
        console.log('candidatures: ', candidatures);
        this.candidats = candidatures;
      }
    })
  }

  // getJuryComptes() {
  //   this.compteSrv.findByRole(Role.JURY).subscribe({
  //     next: (value: Compte[]) => {
  //       this.juries = value;
  //     },
  //     error: (err) => {
  //       console.log('error: ', err);
  //     }
  //   });
  // }

  getCompteDisponibilite() {
    this.compteDisponibiliteService.liste().subscribe({
      next: (compteDisponibilites: CompteDisponibilite[]) => {
        let dates: number[] = [];
        let intervenants: string[] = [];

        for (let compteDisponibilite of compteDisponibilites) {
          let d = new Date(compteDisponibilite!.disponibilite!.date_disponibilite).getTime();
          let dateIndex = dates.findIndex(date => date == d);
          if (dateIndex <= -1) {
            dates.push(d);
          }

          this.juries.push(compteDisponibilite.compte as Compte);

          let date_debut = this.commonService.buildDateWithTime(compteDisponibilite!.disponibilite!.debut_disponibilite.toString());
          let date_fin = this.commonService.buildDateWithTime(compteDisponibilite!.disponibilite!.fin_disponibilite.toString());

          let startTime = this.commonService.formatDate(date_debut);
          let endTime = this.commonService.formatDate(date_fin);
          let horaire = startTime + ' - ' + endTime;

          let index = this.horaires.findIndex(h => h == horaire);
          if (index <= -1) {
            this.horaires.push(horaire)
          }


          let names: string[] = [];
          let name = compteDisponibilite.compte?.name + ' ' + compteDisponibilite.compte?.prenom;
          if (this.interverwerMap.has(horaire + ' - ' + d)) {
            let lastnames = this.interverwerMap.get(horaire + ' - ' + d) || [];
            names.push(...lastnames);
          }
          names.push(name);
          intervenants.push(name);
          this.interverwerMap.set(horaire + ' - ' + d, names);
        }


        let datesSet = new Set(dates);
        this.datesOfDisponibilities = [...datesSet] || [];
        this.datesOfDisponibilities.sort();

        this.currentDate = new Date(this.datesOfDisponibilities[0]);
        this.interviewers = [...new Set(intervenants)];
      }
    })
  }

  handleCandidatSelect(event: any, time: string) {
    let candidatEmail = event.target.value;
    let note: Note = new Note();

    let dates = this.commonService.buildDate(this.currentDate, time);
    note.debut_entretien = new Date(dates.startDate);
    note.fin_entretien = new Date(dates.endDate);

    let candidat = candidats.find(c => c.compte.email == candidatEmail)
    note.candidature_id = candidat!.id || 0;
    note.candidature = candidat;

    if (this.entretienNoteMap.has(time + ' - ' + this.currentDate.getTime().toString())) {
      let n = this.entretienNoteMap.get(time + ' - ' + this.currentDate.getTime().toString()) as unknown as Note;
      n.candidature = note.candidature;
      n.candidature_id = note.candidature_id;
      n.debut_entretien = note.debut_entretien;
      n.fin_entretien = note.fin_entretien;
      note = n;
    }

    this.entretienNoteMap.set(time + ' - ' + this.currentDate.getTime().toString(), note);
  }

  handleInterviewerSelect(event: any, time: string) {
    let interviewer = event.target.value;
    let note: Note = new Note();

    let dates = this.commonService.buildDate(this.currentDate, time);
    note.debut_entretien = new Date(dates.startDate);
    note.fin_entretien = new Date(dates.endDate);

    let jury = this.juries.find(j => (j?.name + ' ' + j?.prenom) == interviewer);
    note.compte_id = jury!.id || 0;
    note.compte = jury;

    if (this.entretienNoteMap.has(time + ' - ' + this.currentDate.getTime().toString())) {
      let n = this.entretienNoteMap.get(time + ' - ' + this.currentDate.getTime().toString()) as unknown as Note;
      n.compte = note.compte;
      n.compte_id = note.compte_id;
      n.debut_entretien = note.debut_entretien;
      n.fin_entretien = note.fin_entretien;
      note = n;
    }

    this.entretienNoteMap.set(time + ' - ' + this.currentDate.getTime().toString(), note);
  }

  addNote() {
    this.entretienNoteMap.forEach((value: Note, key: string, map: Map<string, Note>) => {
      let note: Note = value;
      this.noteService.create(note).subscribe({
        next: (value) => {
          this.messageService.add({ severity: 'success', summary: 'Assignation du jury ', detail: 'Assignation du jury ' + note.compte?.name + ' ' + note.compte?.prenom + ' à ' + note.candidature?.compte.name + ' ' + note.candidature?.compte.prenom + ' effectuée avec success pour la date du ' + this.currentDate.toString() });
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
    let index = this.datesOfDisponibilities.findIndex(d => d == this.currentDate.getTime());
    if (index > -1) {
      this.currentDate = new Date(this.datesOfDisponibilities[index >= (this.datesOfDisponibilities.length - 1) ? 0 : (index + 1)]);
    }
  }

  reset() {
    this.entretienNoteMap = new Map<string, Note>();
  }

}

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
import { Note } from 'src/app/shared/models/note';
import { CandidatureService } from 'src/app/menu-candidature/candidature.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { MessageService, TreeNode } from 'primeng/api';
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
  loading = false;
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
  values!: TreeNode[];;

  value = {
    label: "test",
    data: "view",
    selectable: true,
  };
  interviewers: string[] = [];
  entretiensBeforeBreak: string[] = [];
  entretiensAfterBreak: string[] = [];
  interviewer!: string;
  selectCandidat!: any;
  selectCandidatMap: Map<string, any> = new Map<string, any>();
  candidatsMap: Map<string, any> = new Map<string, any>();
  indexCurrentDate: number = 0;
  breakIndex: number = 0;
  datesOfDisponibilities: number[] = [];
  datesOfEntretiens: Date[] = [];
  currentDate!: Date;
  horaires: string[] = []

  juries: Compte[] = [];

  candidats: Candidature[] = [];
  candidatNodes: TreeNode[] = [];
  session!: Session;

  constructor(private candidatureSrv: CandidatureService, private commonService: CommonService, private noteService: NoteService,
    private compteDisponibiliteService: CompteDisponibiliteService, private compteService: CompteService,
    private messageService: MessageService, private router: Router, private sessionSrv: SessionExamenService) { }

  ngOnInit(): void {
    this.breakIndex = this.entretienTimes.findIndex(x => x.includes('12h00 - 13h00'));
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

        let d = new Date(this.session.date_debut_entretien!);
        d.setHours(0, 0, 0, 0);
        let d2 = new Date(this.session.date_fin_entretien!);
        d2.setHours(0, 0, 0, 0);

        this.datesOfEntretiens = this.commonService.genererDates(d.getTime(), d2.getTime());
        console.log('dateOfEntretien: ', this.datesOfEntretiens);
        
        this.indexCurrentDate = 0;
        this.currentDate = this.datesOfEntretiens[this.indexCurrentDate];
      },
    })
  }

  getCandidatures() {
    this.candidatureSrv.liste().subscribe({
      next: (candidatures) => {
        this.candidats = candidatures;
        let faCandidats = candidatures.filter(v => v.formation1 === "FA").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          data: r,
          selectable: true,
        }) as unknown as TreeNode);
        let ipCandidats = candidatures.filter(v => v.formation1 === "IP").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          data: r,
          selectable: true,
        }) as unknown as TreeNode);
        let iCandidats = candidatures.filter(v => v.formation1 === "I").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          data: r,
          selectable: true,
        }) as unknown as TreeNode);
        let xCandidats = candidatures.filter(v => v.formation1 === "X").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          data: r,
          selectable: true,
        }) as unknown as TreeNode);
        let lCandidats = candidatures.filter(v => v.formation1 === "L").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          data: r,
          selectable: true,
        }) as unknown as TreeNode);
        let opCandidats = candidatures.filter(v => v.formation1 === "OP").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          data: r,
          selectable: true,
        }) as unknown as TreeNode);

        if (xCandidats.length > 0) {
          this.candidatNodes.push({
            label: "Formation X",
            draggable: true,
            selectable: false,
            expanded: true,
            children: xCandidats,
          });
        }


        if (faCandidats.length > 0) {
          this.candidatNodes.push({
            label: "Formation FA",
            draggable: true,
            expanded: true,
            selectable: false,
            children: faCandidats,
          });
        }

        if (iCandidats.length > 0) {
          this.candidatNodes.push({
            label: "Formation I",
            draggable: true,
            expanded: true,
            selectable: false,
            children: iCandidats,
          });
        }

        if (ipCandidats.length > 0) {
          this.candidatNodes.push({
            label: "Formation IP",
            draggable: true,
            expanded: true,
            selectable: false,
            children: ipCandidats,
          });
        }

        if (lCandidats.length > 0) {
          this.candidatNodes.push({
            label: "Formation L",
            draggable: true,
            expanded: true,
            selectable: false,
            children: lCandidats,
          });
        }

        if (opCandidats.length > 0) {
          this.candidatNodes.push({
            label: "Formation Op",
            draggable: true,
            selectable: false,
            expanded: true,
            children: opCandidats,
          });

        }
      }
    })
  }

  getCompteDisponibilite() {
    this.compteDisponibiliteService.liste().subscribe({
      next: (compteDisponibilites: CompteDisponibilite[]) => {
        let dates: number[] = [];
        let intervenants: string[] = [];

        for (let compteDisponibilite of compteDisponibilites) {
          let dTemps = new Date(compteDisponibilite!.disponibilite!.date_disponibilite);
          dTemps.setHours(0, 0, 0, 0);
          let d = dTemps.getTime();
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

        this.interviewers = [...new Set(intervenants)];
        this.entretiensBeforeBreak = this.interverwerMap.get('08h00 - 12h00 - ' + this.currentDate.getTime().toString()) || [];
        this.entretiensAfterBreak = this.interverwerMap.get('13h00 - 16h30 - ' + this.currentDate.getTime().toString()) || [];
      }
    })
  }

  getIntervenant(index: number) {
    if (this.breakIndex > -1 && index < this.breakIndex) {
      return this.entretiensBeforeBreak;
    } else {
      return this.entretiensAfterBreak;
    }
  }

  handleCandidatSelect(event: any, time: string, index: number) {
    let candidat = event.node.data;
    let node = {
      label: candidat.compte.name + " " + candidat.compte.prenom,
      data: candidat,
      selectable: true,
    };

    let timeN1: string = '';

    if (this.entretienTimes[index + 1].includes('12h00 - 13h00')) {
      timeN1 = this.entretienTimes[index + 2];
    } else {
      timeN1 = this.entretienTimes[index + 1];
    }

    this.selectCandidatMap.set(timeN1, node);
    this.candidatsMap.set(timeN1 + 'candidat', candidat.compte.name + " " + candidat.compte.prenom);

    this.selectCandidatMap.set(time, node);
    this.candidatsMap.set(time + 'candidat', candidat.compte.name + " " + candidat.compte.prenom);

    let note: Note = new Note();
    let note1: Note = new Note();

    let dates = this.commonService.buildDate(this.currentDate, time);
    note.debut_entretien = new Date(dates.startDate);
    note.fin_entretien = new Date(dates.endDate);

    let dates1 = this.commonService.buildDate(this.currentDate, timeN1);
    note1.debut_entretien = new Date(dates1.startDate);
    note1.fin_entretien = new Date(dates1.endDate);

    note.candidatureid = candidat!.id || 0;
    note.candidature = candidat;

    note1.candidatureid = candidat!.id || 0;
    note1.candidature = candidat;

    let entretiens: Note[] = [];
    this.entretienNoteMap.forEach((value: Note, key: string, map: Map<string, Note>) => {
      entretiens.push(value);
    });

    let n = entretiens.find((value: Note, index: number, array: Note[]) => value.debut_entretien.getTime() == note.debut_entretien.getTime());
    if (n) {
      n.compte = note.compte;
      n.compteid = note.compteid;
      n.debut_entretien = note.debut_entretien;
      n.fin_entretien = note.fin_entretien;
      note = n;
    }

    let n1 = entretiens.find((value: Note, index: number, array: Note[]) => value.debut_entretien.getTime() == note1.debut_entretien.getTime());
    if (n1) {
      n1.compte = note.compte;
      n1.compteid = note.compteid;
      n1.debut_entretien = note.debut_entretien;
      n1.fin_entretien = note.fin_entretien;
      note1 = n1;
    }

    this.entretienNoteMap.set(time + ' - ' + this.currentDate.getTime().toString(), note);
    this.entretienNoteMap.set(timeN1 + ' - ' + this.currentDate.getTime().toString(), note1);
  }

  handleInterviewerSelect(event: any, time: string) {
    let interviewer = event.value;

    let note: Note = new Note();

    let dates = this.commonService.buildDate(this.currentDate, time);
    note.debut_entretien = new Date(dates.startDate);
    note.fin_entretien = new Date(dates.endDate);

    let jury = this.juries.find(j => (j?.name + ' ' + j?.prenom) == interviewer);

    note.compteid = jury!.id || 0;
    note.compte = jury;

    let entretiens: Note[] = [];
    this.entretienNoteMap.forEach((value: Note, key: string, map: Map<string, Note>) => {
      entretiens.push(value);
    });

    let n = entretiens.find((value: Note, index: number, array: Note[]) => value.debut_entretien.getTime() == note.debut_entretien.getTime());
    if (n) {
      n.compte = note.compte;
      n.compteid = note.compteid;
      n.debut_entretien = note.debut_entretien;
      n.fin_entretien = note.fin_entretien;
      note = n;
    }

    this.candidatsMap.set(time + 'intervenant', interviewer);
    // this.entretienNoteMap.set(time + ' - ' + this.currentDate.getTime().toString(), note);
  }

  addNote() {
    this.loading = true;
    console.log(this.entretienNoteMap.values());

    let entretiens: Note[] = [];
    this.entretienNoteMap.forEach((value: Note, key: string, map: Map<string, Note>) => {
      entretiens.push(value);
    });

    for (let index = 0; index < entretiens.length; index++) {
      const value = entretiens[index];
      this.noteService.create({
        candidatureid: value.candidatureid,
        compteid: value.compte?.id || 0,
        debut_entretien: value.debut_entretien,
        fin_entretien: value.fin_entretien,
        noteL: 0,
        noteOP: 0,
        noteX: 0,
      }).subscribe({
        next: (res) => {
          this.loading = false;
          this.messageService.add({ severity: 'success', summary: 'Assignation du jury ', detail: 'Assignation du jury ' + value.compte?.name + ' ' + value.compte?.prenom + ' pour un entretien avec le candidat ' + value.candidature?.compte.name + ' ' + value.candidature?.compte.prenom + ' effectuée avec success pour la date du ' + this.currentDate.toString() });
        },
        error: (err) => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: `Erreur d'assignation`, detail: err.message });
          console.log("Error: ", err);
        }
      })
    }
    this.reset();

    // this.router.navigate(['/calendrier_entretiens']);
  }

  prochaineDate() {
   if (this.indexCurrentDate < this.datesOfEntretiens.length) {
    this.indexCurrentDate = (this.indexCurrentDate > this.datesOfEntretiens.length) ? this.datesOfEntretiens.length - 1 : this.indexCurrentDate + 1;
    this.currentDate = this.datesOfEntretiens[this.indexCurrentDate];
    this.candidatsMap = new Map<string, any>();
    this.selectCandidatMap = new Map<string, any>();
    this.reset();
   }
  }

  previousDate() {
    if (this.indexCurrentDate > 0) {
      this.indexCurrentDate = (this.indexCurrentDate < 0) ? 0 : this.indexCurrentDate - 1;
      this.currentDate = this.datesOfEntretiens[this.indexCurrentDate];
      this.candidatsMap = new Map<string, any>();
      this.selectCandidatMap = new Map<string, any>();
      this.reset();
    }
  }

  reset() {
    this.interviewer = "";
    this.selectCandidat = {};
    this.candidatsMap = new Map<string, any>();
    this.selectCandidatMap = new Map<string, any>();
    this.candidatsMap = new Map<string, any>();
    this.entretienNoteMap = new Map<string, Note>();
  }

}
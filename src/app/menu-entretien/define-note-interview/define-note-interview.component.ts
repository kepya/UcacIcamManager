import { CandidatureService } from 'src/app/menu-candidature/candidature.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription, interval } from 'rxjs';
import { Candidature } from 'src/app/shared/models/compte';
import { Entretien, NoteParcours, NoteResponse } from 'src/app/shared/models/note';
import { NoteParcoursService } from 'src/app/shared/services/note-parcours.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-define-note-interview',
  templateUrl: './define-note-interview.component.html',
  styles: [
  ]
})
export class DefineNoteInterviewComponent implements OnInit {
  totalSeconds = 20 * 60; // 20 minutes in seconds
  minutesLeft = 0;
  secondsLeft = 0;
  interviewerIsFinish: boolean = false;
  twentyMinuteEnd: boolean = false;
  intervalId: any;

  note!: NoteResponse;

  nombre_choix: number = 0;
  entretien!: Entretien;
  notes = [
    1, 2, 3, 4
  ];

  hasBourse: boolean = false;
  noteIsAlreadyValidated: boolean = false;

  timeout: boolean = false;
  comment!: string;

  formationsForFirstCycle = [
    {
      name: 'Ingénieur généraliste par apprentissage ou génie des procédés',
      code: 'L',
    },
    { name: 'Ingénieur généraliste parcours international', code: 'OP' },
    { name: 'Ingénieur génie Informatique', code: 'X' },
  ];

  formationsForSecondCycle = [
    { name: 'Ingénieur genie des procédés', code: 'IP' },
    {
      name: 'Ingénieur géneraliste parcours international et innovation',
      code: 'I',
    },
    { name: 'Ingénieur génie Informatique', code: 'X' },
  ];

  formations: NoteParcours[] = [];

  constructor(private messageService: MessageService, private noteService: NoteService, private location: Location,
    private noteParcoursService: NoteParcoursService, private route: ActivatedRoute,private commonService: CommonService, 
    private confirmationService: ConfirmationService, private candidatService: CandidatureService) { }

  ngOnInit() {
    if (this.route.snapshot.params['idEntretien']) {
      this.getEntretien(parseInt(this.route.snapshot.params['idEntretien'], 10));
      this.startTimer()
    }
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.totalSeconds > 0) {
        this.totalSeconds--;
        this.minutesLeft = Math.floor(this.totalSeconds / 60);
        this.secondsLeft = this.totalSeconds % 60;

        if (this.minutesLeft == 5 && this.secondsLeft == 0) {
          this.messageService.add({ severity: 'warning', summary: '5 min restantes', detail: 'Il vous reste 5 min réglementaires pour finaliser avec cet entretien.' });
        }
      } else {
        if (this.twentyMinuteEnd) {
          this.interviewerIsFinish = true;
          this.validateNotation();
        } else {
          this.messageService.add({ severity: 'info', summary: '5 min additionnelles', detail: 'Vous avez 5 min additionnelles pour finaliser avec cet entretien.' });
          this.twentyMinuteEnd = true;
          this.totalSeconds = 5 * 60;
          this.startTimer();
        }
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Êtes-vous sûr de vouloir continuer ?',
      icon: 'pi pi-question',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.validateNotation();
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Non', detail: 'vous avez annulé la suppresion' });
      }
    });
  }

  addNote() {
    this.timeout = true;
    let validateNote = 0;

    for (let index = 0; index < this.formations.length; index++) {
      let note = this.formations[index];
      note.note = (note.note == 0 ? 4 : note.note);
      this.noteParcoursService.create(note).subscribe({
        next: (result: NoteParcours) => {
          validateNote = validateNote + 1;
          this.noteIsAlreadyValidated = true;
          this.messageService.add({ severity: 'success', summary: "Assignation de note", detail: 'Assignation de note effectuée avec success' });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: "Erreur d'assignation", detail: err.error.message });
          console.log('error: ', err);
        }
      });
    }


    this.updateNote();
    this.updateCandidatAccount();

    if (validateNote >= this.formations.length) {
      this.location.back();
    }

  }

  updateNote() {
    this.noteService.update({
      id: this.note?.id || 0,
      "compteid": this.note?.compteid,
      "candidatureid": this.note?.candidatureid,
      "debut_entretien": this.note?.debut_entretien,
      "fin_entretien": this.note?.fin_entretien,
      "commentaires": this.comment,
      noteL: 0,
      noteOP: 0,
      noteX: 0,
      juryid: 0,
    }).subscribe(
      {
        next: (result: NoteResponse) => {
          this.messageService.add({ severity: 'success', summary: "Mise à jour des notes", detail: 'Mise à jour des notes effectuée avec success' });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: "Erreur d'assignation", detail: err.error.message });
          console.log('error: ', err);
        }
      }
    )
  }

  validateNotation() {
    if (!this.interviewerIsFinish) {
      let hasError: boolean = false;
      for (let index = 0; index < this.formations.length; index++) {
        const element = this.formations[index];
        if (element.note == 0) {
          hasError = true;
        }
      }

      if (hasError) {
        this.messageService.add({ severity: 'error', summary: 'Note manquant', detail: 'Veuillez selectionner les notes pour chaque formation.' });
      } else {
        if (this.noteIsAlreadyValidated) {
          this.messageService.add({ severity: 'error', summary: 'Notes déjà définies', detail: 'Vous avez déjà entré les notes de ce candidat.' });
        } else {
          this.addNote();
        }
      }
    } else {
      if (this.noteIsAlreadyValidated) {
        this.messageService.add({ severity: 'error', summary: 'Notes déjà définies', detail: 'Vous avez déjà entré les notes de ce candidat.' });
      } else {
        this.addNote();
      }
    }
  }

  getFormation(index: number, candidature: Candidature) {
    if (index == 0) {
      return candidature.formation1;
    }
    if (index == 1) {
      return candidature.formation2;
    }
    if (index == 3) {
      return candidature.formation3;
    }
    return '';
  }

  updateCandidatAccount() {
    if (this.hasBourse) {
      let candidat = this.entretien.candidature;
      candidat.has_exchange = true;
      candidat.compteID = candidat?.compte?.id || 0;
      this.candidatService.update(candidat.id || 0, candidat).subscribe({
        next: (value) => {
          this.messageService.add({ severity: 'success', summary: 'Modification de compte candidat', detail: 'Modification effectuée avec success' });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: `Erreur de creation`, detail: err.error });
        }
      })
    }
  }

  getEntretien(idNote: number) {
    this.noteService.getOne(idNote).subscribe({
      next: (result: NoteResponse) => {
        this.note = result;
        this.hasBourse = result.candidature!.has_exchange || false;
        this.nombre_choix = result.candidature.nombre_choix;
        for (let index = 0; index < result.candidature.nombre_choix; index++) {
          this.formations.push({
            cycle: result.candidature.cycle,
            id: 0,
            note: 0,
            noteId: idNote,
            parcours: this.getFormation(index, result.candidature),
          })
        }

        this.entretien = {
          id: result!.id ?? 0,
          candidat: result.candidature.compte?.name + ' ' + result.candidature.compte?.prenom,
          commentaires: result.commentaires,
          done: result.done,
          cycle: result.candidature!.cycle.toString(),
          centre: result.candidature?.centre || '',
          jury: result.compte?.name + ' ' + result.compte?.prenom,
          candidature: result.candidature as unknown as Candidature,
          debut_entretien: new Date(result.debut_entretien),
          fin_entretien: new Date(result.fin_entretien),
        };
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getEntretiens() {
    this.noteService.liste().subscribe({
      next: (result: NoteResponse[]) => {
        let entretiens: Entretien[] = result.map((v) => {
          return {
            id: v!.id ?? 0,
            candidat: v.candidature.compte?.name + ' ' + v.candidature.compte?.prenom,
            commentaires: v.commentaires,
            done: v.done,
            cycle: v.candidature!.cycle.toString(),
            centre: v.candidature?.centre || '',
            jury: v.compte?.name + ' ' + v.compte?.prenom,
            candidature: v.candidature as unknown as Candidature,
            debut_entretien: this.commonService.formatDate1(new Date(v.debut_entretien)) ,
            fin_entretien: this.commonService.formatDate1(new Date(v.fin_entretien)),
          };
        });
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }
}

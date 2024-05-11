import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription, interval } from 'rxjs';
import { Candidature } from 'src/app/shared/models/compte';
import { Entretien, NoteParcours, NoteResponse } from 'src/app/shared/models/note';
import { NoteParcoursService } from 'src/app/shared/services/note-parcours.service';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-define-note-interview',
  templateUrl: './define-note-interview.component.html',
  styles: [
  ]
})
export class DefineNoteInterviewComponent implements OnInit {
  counterSubscription!: Subscription;
  second: number = 0;
  minute: number = 20;
  nombre_choix: number = 0;
  entretien!: Entretien;
  notes = [
    1, 2, 3, 4
  ];

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

  constructor(private messageService: MessageService, private noteService: NoteService, private noteParcoursService: NoteParcoursService, private route: ActivatedRoute, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['idEntretien']) {
      this.getEntretien(parseInt(this.route.snapshot.params['idEntretien'], 10));
      this.startTimer()
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

  getEntretien(idNote: number) {


    this.noteService.getOne(idNote).subscribe({
      next: (result: NoteResponse) => {
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
            debut_entretien: new Date(v.debut_entretien),
            fin_entretien: new Date(v.fin_entretien),
          };
        });
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  startTimer() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      {
        next: (cal) => {
          if (this.minute == 0) {
            if (this.second == 0) {
              this.timeout = true;
              this.validateNotation();
            }
          } else {
            if (this.second == 0) {
              this.second = 60;
              this.minute = this.minute - 1;
            } else {
              this.second = this.second - 1;
            }
          }
        },
        error: (error: any) => { },
        complete: () => {
        },
      }
    );
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Êtes vous sures de vouloir continuer ?',
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

    for (let index = 0; index < this.formations.length; index++) {
      this.noteParcoursService.create(this.formations[index]).subscribe({
        next: (result: NoteParcours) => {
          this.messageService.add({ severity: 'success', summary: "Assignation de note", detail: 'Assignation de note effectuée avec success' });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: "Erreur d'assignation", detail: err.error.message });
          console.log('error: ', err);
        }
      });
    }
  }

  validateNotation() {
    if (!this.timeout) {
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
        this.addNote();
      }
    } else {
      this.addNote();
    }
  }

}

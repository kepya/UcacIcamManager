import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteParcours } from '../../models/note';
import { Compte } from '../../models/compte';
import { NoteParcoursService } from '../../services/note-parcours.service';
import { NoteService } from '../../services/note.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-update-candidat-note-dialog',
  templateUrl: './update-candidat-note-dialog.component.html',
  styles: [
  ]
})
export class UpdateCandidatNoteDialogComponent implements OnInit {

  @Input() notesParcours!: Map<number, NoteParcours[]>;
  @Input() juries!: Compte[];

  jury!: Compte;

  @Output() result: EventEmitter<{
    done: boolean
  }> = new EventEmitter();

  @Input() visible!: boolean;

  constructor(private messageService: MessageService, private noteService: NoteService, private noteParcoursService: NoteParcoursService,) { }

  ngOnInit(): void {

  }

  validate() {
    this.result.emit({
      done: true,
    });
  }

  updateNote() {
    let validateNote = 0;
    if (this.notesParcours) {
      let notes = (this.notesParcours?.get(this.jury?.id ?? 0) || []);
      for (let index = 0; index < notes.length; index++) {
        let note = notes[index];
        note.note = (note.note == 0 ? 4 : note.note);
        this.noteParcoursService.update(note).subscribe({
          next: (result: NoteParcours) => {
            validateNote = validateNote + 1;
            this.messageService.add({ severity: 'success', summary: "Modification de note", detail: 'Modification de note effectuée avec success' });
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: "Erreur d'assignation", detail: err.error.message });
            console.log('error: ', err);
          }
        });
      }


      if (validateNote >= notes.length) {
        this.validate();
      }
    }
  }


}

import { Component, OnInit } from '@angular/core';
import { Session } from 'inspector';
import { Role } from 'src/app/shared/enums/role.enum';
import { Disponibility } from 'src/app/shared/models/entretient';
import { Note } from 'src/app/shared/models/note';
import { NoteService } from 'src/app/shared/services/note.service';

@Component({
  selector: 'app-calendrier-entretien',
  templateUrl: './calendrier-entretien.component.html',
  styles: [
  ]
})
export class CalendrierEntretienComponent implements OnInit {

  entretiens: any[] = [

  ];

  dateIndex: number = 0;
  currentDate!: Date;
  dates: number[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.getEntretiens();
  }

  getEntretiens() {
    this.noteService.liste().subscribe({
      next: (value: Note[]) => {
        this.entretiens = value.map((v) => {
          return {
            centre: v.candidature?.centre || '',
            interviewer: v.compte?.name + ' ' + v.compte?.prenom,
            candidat: v.candidature,
            disponibility: {
              date_disponibilite: v.debut_entretien,
              debut_disponibilite: v.debut_entretien,
              fin_disponibilite: v.fin_entretien,
            }
          };
        });
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  prochaineDate() {
    this.currentDate = new Date(this.dates[this.dateIndex + 1]);
  }
}

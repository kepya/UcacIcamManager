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

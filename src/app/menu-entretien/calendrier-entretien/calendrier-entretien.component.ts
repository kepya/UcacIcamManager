import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/shared/enums/role.enum';
import { Disponibility } from 'src/app/shared/models/entretient';

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

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.getEntretiens();
  }

  getEntretiens() {
    // this.entretienSrv.listeEntretien().subscribe({
    //   next: (value: any[]) => {
    //     this.entretiens = value;
    //   },
    //   error: (err) => {
    //     console.log('error: ', err);
    //   }
    // });
  }

  prochaineDate() {
    this.currentDate = new Date(this.dates[this.dateIndex + 1]);
  }
}

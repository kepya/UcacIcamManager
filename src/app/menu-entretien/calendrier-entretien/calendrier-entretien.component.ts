import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/shared/enums/role.enum';
import { Disponibility, Entretien } from 'src/app/shared/models/entretient';
import { EntretienService } from 'src/app/shared/services/entretien.service';

@Component({
  selector: 'app-calendrier-entretien',
  templateUrl: './calendrier-entretien.component.html',
  styles: [
  ]
})
export class CalendrierEntretienComponent implements OnInit {

  date: Date = new Date();
  entretiens: Entretien[] = [
    {
      centre: 'Libreville',
      interviewer: "DIANA MENGUELE",
      disponibility: {
        date_disponibilite: new Date(),
        debut_disponibilite: new Date(),
        fin_disponibilite: new Date(),
        compte: {
          name: "Kepya",
          prenom: "Christian",
          email: 'christian@gmail.com',
          telephone: '680000000',
          role: Role.CANDIDAT
        }
      }
    },
    {
      centre: 'Libreville',
      interviewer: "DIANA MENGUELE",
      disponibility: {
        date_disponibilite: new Date(),
        debut_disponibilite: new Date(),
        fin_disponibilite: new Date(),
        compte: {
          name: "Kepya",
          prenom: "Christian",
          email: 'christian@gmail.com',
          telephone: '680000000',
          role: Role.CANDIDAT
        }
      }
    },
    {
      centre: 'Libreville',
      interviewer: "DIANA MENGUELE",
      disponibility: {
        date_disponibilite: new Date(),
        debut_disponibilite: new Date(),
        fin_disponibilite: new Date(),
        compte: {
          name: "Kepya",
          prenom: "Christian",
          email: 'christian@gmail.com',
          telephone: '680000000',
          role: Role.CANDIDAT
        }
      }
    },
  ];

  constructor(private entretienSrv: EntretienService) { }

  ngOnInit(): void {
    this.getEntretiens();
  }

  getEntretiens() {
    this.entretienSrv.listeEntretien().subscribe({
      next: (value: Entretien[]) => {
        this.entretiens = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

}

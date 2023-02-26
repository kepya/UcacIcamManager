import { Candidature } from './../../shared/models/compte';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/shared/enums/role.enum';
import { Entretien } from 'src/app/shared/models/entretient';
import { EntretienService } from 'src/app/shared/services/entretien.service';
import { Cycle } from 'src/app/shared/enums/cycle.enum';
import { Genre } from 'src/app/shared/enums/genre.enum';
import { Langue } from 'src/app/shared/enums/langue.enum';
import { Statut } from 'src/app/shared/enums/statut.enum';
import { candidats } from 'src/app/shared/mocks/mock';

@Component({
  selector: 'app-calendrier-disponibilite',
  templateUrl: './calendrier-disponibilite.component.html',
  styles: [
  ]
})
export class CalendrierDisponibiliteComponent implements OnInit {

  horaires: {
    time: string,
    date: Date,
    interviewer: string[]
  }[] = [
      {
        date: new Date("2023-03-23"),
        time: '8H30-12H00',
        interviewer: [
          "DIANA MENGUELE",
          "AUBIN FOSSOUO"
        ]
      },
      {
        date: new Date("2023-03-23"),
        time: '13H00-16H30',
        interviewer: [
          "AUBIN FOSSOUO"
        ]
      },

      {
        time: '8H30-12H00',
        date: new Date("2023-03-24"),
        interviewer: [
          "DIANA MENGUELE",
        ]
      },
      {
        time: '13H00-16H30',
        date: new Date("2023-03-24"),
        interviewer: [
          "AUBIN FOSSOUO"
        ]
      },
      {
        time: '8H30-12H00',
        date: new Date("2023-03-25"),
        interviewer: [
          "AUBIN FOSSOUO"
        ]
      }, {
        time: '13H00-16H30',
        date: new Date("2023-03-25"),
        interviewer: [
          "DIANA MENGUELE",
        ]
      },
      {
        date: new Date("2023-03-26"),
        time: '8H30-12H00',
        interviewer: [
          "DIANA MENGUELE",
          "AUBIN FOSSOUO"
        ]
      },
      {
        date: new Date("2023-03-26"),
        time: '13H00-16H30',
        interviewer: [
          "DIANA MENGUELE",
        ]
      },
    ];

  interverwerMap!: Map<string, string[]>;
  entretienMap!: Map<string, Entretien[]>;
  interviewers: string[] = [];
  currentDate: Date = new Date();
  dates: number[] = [];
  times: string[] = [];

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

  entretien!: Entretien;
  candidats: Candidature[] = [];

  constructor(private entretienSrv: EntretienService) { }

  ngOnInit(): void {
    this.candidats = candidats;
    this.getEntretiens();

    this.times = [...new Set(this.horaires.map(h => h.time))];
    this.interverwerMap = new Map<string, string[]>();
    let datesSet = new Set(this.horaires.map(h => h.date.getTime()));
    this.dates = [...datesSet];
    console.log('dates: ', datesSet);
    let interviewers: string[] = [];
    for (let index = 0; index < this.horaires.length; index++) {
      const horaire = this.horaires[index];
      interviewers.push(...horaire.interviewer);
      this.interverwerMap.set(horaire.date.getTime().toString() + '|' + horaire.time, horaire.interviewer)
    }
    this.interviewers = [...new Set(interviewers)];
  }

  handleCandidatSelect(event: any, time: string) {
    let candidatEmail = event.target.value;




    let entretiensFinal: Entretien[] = [];
    let entretiens = this.entretienMap.get(this.currentDate.getTime().toString() + '|' + time);
    let index = entretiens?.findIndex(e => e.disponibility.compte.email == candidatEmail);
    if ((index || -2) > -1) {
      let entretien = entretiens![index || 0];
    }
  }

  handleInterviewerSelect(event: any, time: string) {
    let interviewer = event.target.value;
    let entretiensFinal: Entretien[] = [];
    console.log('interviewer: ', interviewer);

    let entretiens = this.entretienMap.get(this.currentDate.getTime().toString() + '|' + time);
    for (let index = 0; index < entretiens!.length; index++) {
      const entretien = entretiens![index];
      entretien.interviewer = interviewer;
      entretiensFinal.push(entretien);
    }

    this.entretienMap.set(this.currentDate.getTime().toString() + '|' + time, entretiensFinal);
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

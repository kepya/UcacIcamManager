import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Table } from 'primeng/table';
import { Cycle } from 'src/app/shared/enums/cycle.enum';
import { Genre } from 'src/app/shared/enums/genre.enum';
import { Langue } from 'src/app/shared/enums/langue.enum';
import { Role } from 'src/app/shared/enums/role.enum';
import { Statut } from 'src/app/shared/enums/statut.enum';
import { NoteResponse } from 'src/app/shared/models/note';
import { Session } from 'src/app/shared/models/session';
import { StatCandidatures } from 'src/app/shared/models/stat-candidature';

@Component({
  selector: 'app-jury-home',
  templateUrl: './jury-home.component.html',
  styles: [
  ]
})
export class JuryHomeComponent implements OnInit, AfterViewInit {
  loading: boolean = false;

  public chart: any;
  @Input() statCandidatures!: StatCandidatures;
  @Input() session!: Session;
  @Input() nextSession!: Session;
  @Input() compteARebour!: number;

  @Input() datasetsCandidatEntretenuParZone!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsCandidatEntretenuParZone!: string[];

  @Input() datasetsCandidatEntretenuParSite!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsCandidatEntretenuParSite!: string[];

  @Input() datasetsCandidatEntretenuParConcour!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsCandidatEntretenuParConcour!: string[];

  entretiens:NoteResponse[] = [];

  statuses!: any[];

  constructor() { }

  ngAfterViewInit(): void {
    this.createChartCandidatByConcour();
  }

  ngOnInit(): void {
    this.statuses = [
      { label: 'ToDo', value: 'A faire' },
      { label: 'Realised', value: 'Réalisé' },
  ];

    this.entretiens = [
{
  candidature: {
    centreExamenId: 0,
    lieu_de_naissance: '',
    date_naissance: '',
    nationalite: '',
    dernier_Etablissement: '',
    email_parents: '',
    tel_parents: '',
    formation1: '',
    formation2: '',
    formation3: '',
    centre: '',
    paiement: '',
    reference_paiement: '',
    image: '',
    telephone_paiement: '',
    ville: '',
    code_examen: 0,
    nombre_choix: 0,
    compteID: 0,
    cycle: Cycle.premier,
    statut: Statut.Echec,
    genre: Genre.M,
    langue: Langue.Francais,
    compte: {
      name: 'Arthur',
      prenom: 'Scoty',
      email: '',
      telephone: '',
      role: Role.CANDIDAT,
      idZone: 0
    }
  },
  compte: {
    name: 'Christian',
    prenom: 'Yomba',
    email: '',
    telephone: '',
    role: Role.JURY,
    idZone: 0
  },
  commentaires: "Mauvais",
  debut_entretien: new Date(),
  fin_entretien: new Date(),
  noteParcoursList: [],
  id: 2,
  compteid: 3,
  candidatureid: 75,
  status: 'ToDo'
},
{
  candidature: {
    centreExamenId: 0,
    lieu_de_naissance: '',
    date_naissance: '',
    nationalite: '',
    dernier_Etablissement: '',
    email_parents: '',
    tel_parents: '',
    formation1: '',
    formation2: '',
    formation3: '',
    centre: '',
    paiement: '',
    reference_paiement: '',
    image: '',
    telephone_paiement: '',
    ville: '',
    code_examen: 0,
    nombre_choix: 0,
    compteID: 0,
    cycle: Cycle.premier,
    statut: Statut.Echec,
    genre: Genre.M,
    langue: Langue.Francais,
    compte: {
      name: 'Arthur',
      prenom: 'Scoty',
      email: '',
      telephone: '',
      role: Role.CANDIDAT,
      idZone: 0
    }
  },
  compte: {
    name: 'Christian',
    prenom: 'Yomba',
    email: '',
    telephone: '',
    role: Role.JURY,
    idZone: 0
  },
  commentaires: "Mauvais",
  debut_entretien: new Date("2022-03-03"),
  fin_entretien: new Date(),
  noteParcoursList: [],
  id: 2,
  compteid: 3,
  candidatureid: 75,
  status: 'ToDo'
},
    ];
  }

  clear(table: Table) {
    table.clear();
}

getSeverity(status: string) {
    switch (status.toLowerCase()) {
        case 'ToDo':
            return 'danger';

        case 'Realised':
            return 'success';
        default:
          return 'warning';
    }
}

getStatusLabel(status: string) {
    switch (status) {
        case 'ToDo':
            return 'A faire';

        case 'Realised':
            return 'Réalisé';
        default:
          return '';
    }
}

  createChartCandidatByConcour() {
    this.chart = new Chart("MyConcourChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labelsCandidatEntretenuParConcour,
        datasets: this.datasetsCandidatEntretenuParConcour
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }

  getEventValue(event:any) {
    return event.target != null ? event.target.value: ''; 
  }
}

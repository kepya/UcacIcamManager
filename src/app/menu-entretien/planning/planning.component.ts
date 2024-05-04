import { Component, OnInit } from '@angular/core';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Cycle } from 'src/app/shared/enums/cycle.enum';
import { Genre } from 'src/app/shared/enums/genre.enum';
import { Langue } from 'src/app/shared/enums/langue.enum';
import { Role } from 'src/app/shared/enums/role.enum';
import { Statut } from 'src/app/shared/enums/statut.enum';
import { NoteResponse } from 'src/app/shared/models/note';
import { Session } from 'src/app/shared/models/session';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styles: [
  ]
})
export class PlanningComponent implements OnInit {
  entretiens: NoteResponse[] = [];
  loading: boolean = false;
  session!: Session;
  statuses!: any[];

  constructor(public commonService: CommonService, private sessionSrv: SessionExamenService) { }

  ngOnInit(): void {
    this.statuses = this.commonService.getStatuses();
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

  getEventValue(event: any) {
    return event.target != null ? event.target.value : '';
  }

}

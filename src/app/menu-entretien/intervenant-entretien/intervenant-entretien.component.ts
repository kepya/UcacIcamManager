import { Session } from './../../shared/models/session';
import { horaires } from './../../shared/mocks/mock';
import { CommonService } from 'src/app/shared/services/common.service';
import { DisponibiliteService } from './../../shared/services/disponibilite.service';
import { CompteDisponibiliteService } from './../../shared/services/compte-disponibilite.service';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Compte } from 'src/app/shared/models/compte';
import { CompteDisponibilite, Disponibility } from 'src/app/shared/models/entretient';
import { CompteService } from 'src/app/shared/services/compte.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { MessageService } from 'primeng/api';
import { Role } from 'src/app/shared/enums/role.enum';
import { StorageService } from 'src/app/shared/services/storage.service';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intervenant-entretien',
  templateUrl: './intervenant-entretien.component.html',
  styles: [
  ]
})
export class IntervenantEntretienComponent implements OnInit {

  disponibilities: Disponibility[] = [];
  datesOfDisponibilities: number[] = [];
  disponibilityMap!: Map<string, number>;
  disabledMap!: Map<number, boolean>;
  juriesByDispo!: Map<string, Compte[]>;
  horaires: string[] = []
  userConnected!: Compte;
  juries: Compte[] = [];
  session!: Session;
  i = 0

  selectDisponibilities: {
    disponibilityId: number, selectId: number, jury: number
  }[] = [];

  constructor(private disponibilitySrv: DisponibiliteService, private sessionSrv: SessionExamenService,
    private compteSrv: CompteService, private commonService: CommonService, private storageService: StorageService,
    private compteDisponibiliteService: CompteDisponibiliteService, private router: Router, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.getActiveSession();
    this.userConnected = this.storageService.getUserConnected();
    if (this.userConnected.role == Role.ADMIN) {
      this.getJuryComptes()
    }

    this.getDisponibilities();
    // this.juries = [
    //   {
    //     name: "Arthur",
    //     prenom: "Scoty",
    //     password: "",
    //     email: "",
    //     telephone: "",
    //     role: Role.CANDIDAT,
    //     id_disponibilite: 0,
    //   },
    //   {
    //     name: "Darryl",
    //     prenom: "Leon",
    //     password: "",
    //     email: "",
    //     telephone: "",
    //     role: Role.CANDIDAT,
    //     id_disponibilite: 0,
    //   }
    // ]
  }

  getActiveSession() {
    this.sessionSrv.getActive().subscribe({
      next: (value) => {
        this.session = value;
      },
    })
  }

  getJuryComptes() {
    this.compteSrv.findByRole(Role.JURY).subscribe({
      next: (value: Compte[]) => {
        this.juries = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }


  getDisponibilities() {
    this.disponibilitySrv.liste().subscribe({
      next: (disponibilities: Disponibility[]) => {
        this.disponibilities = disponibilities;
        console.log('date', this.disponibilities)

        let datesSet = new Set(this.disponibilities.map(d => d.date_disponibilite.getTime()));
        this.datesOfDisponibilities = [...datesSet] || [];
        this.datesOfDisponibilities.sort();

        for (let index = 0; index < disponibilities.length; index++) {
          const disponibilite = disponibilities[index];

          let startTime = this.commonService.formatDate(disponibilite!.debut_disponibilite);
          let endTime = this.commonService.formatDate(disponibilite!.fin_disponibilite);
          let horaire = startTime + ' - ' + endTime;
          this.horaires.push(horaire)
          this.disponibilityMap.set(horaire + ' - ' + disponibilite.date_disponibilite.getTime(), disponibilite.id || 0)
        }

      },
      error: (err: any) => {

      }
    })
  }

  enregistrerLesHoraires() {
    let nbrSucess = 0
    for (let index = 0; index < this.selectDisponibilities.length; index++) {
      const element = this.selectDisponibilities[index];

      this.compteDisponibiliteService.create({
        disponibilite_id: element.disponibilityId,
        compte_id: element.jury
      }).subscribe({
        next: (value) => {
          this.messageService.add({ severity: 'success', summary: 'Selection de la plage', detail: 'Selection de la plage éffectuée avec success' });
          nbrSucess = nbrSucess + 1;
        },
        error: (err) => {
          console.log("Error: ", err);
          this.messageService.add({ severity: 'error', summary: `Erreur de sélection de la plage`, detail: err.message });
        }
      });
    }

    if (nbrSucess >= this.selectDisponibilities.length) {
      this.router.navigate(['calendrier_entretiens']);
    }
  }

  selectJury(event: any, horaire: string, date: number) {
    this.juriesByDispo.set(horaire + ' - ' + date, event.value)
  }

  validerJury(event: any, horaire: string, date: number, selectId: number) {

    let disponibilityId = this.disponibilityMap.get(horaire + ' - ' + date) as unknown as number;

    if (this.userConnected.role == Role.ADMIN) {
      let d = this.juriesByDispo.get(horaire + ' - ' + date) || [];
      for (let index = 0; index < d.length; index++) {
        const jury = d[index] as unknown as Compte;
        let sD = {
          disponibilityId, selectId, jury: jury.id || 0
        };

        this.selectDisponibilities.push(sD)
      }

      this.disabledMap.set(selectId, true);
    } else {
      let sD = {
        disponibilityId, selectId, jury: this.userConnected.id || 0
      };

      if (event.target.checked) {
        this.selectDisponibilities.push(sD)
      } else {
        let index = this.selectDisponibilities.findIndex(x => x.jury == this.userConnected.id)
        if (index > -1) {
          this.selectDisponibilities.splice(index, 1)
        }
      }
    }


  }

  reset() {
    window.location.reload();
  }
}

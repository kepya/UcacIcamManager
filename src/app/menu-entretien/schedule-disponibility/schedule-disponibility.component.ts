import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Role } from 'src/app/shared/enums/role.enum';
import { Compte } from 'src/app/shared/models/compte';
import { Disponibility } from 'src/app/shared/models/entretient';
import { Session } from 'src/app/shared/models/session';
import { CommonService } from 'src/app/shared/services/common.service';
import { CompteDisponibiliteService } from 'src/app/shared/services/compte-disponibilite.service';
import { CompteService } from 'src/app/shared/services/compte.service';
import { DisponibiliteService } from 'src/app/shared/services/disponibilite.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-schedule-disponibility',
  templateUrl: './schedule-disponibility.component.html',
  styles: [
  ]
})
export class ScheduleDisponibilityComponent implements OnInit {
  userConnected!: Compte;
  juries: Compte[] = [];
  session!: Session;
  selectedHoraire = "";
  i = 0;
  juriesByDispo!: Map<string, number>;

  beginDate = new Date();
  endDate = new Date();


  horaires: string[] = [
    "08:00 - 13h00",
    "14:00 - 17h00"
  ];

  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  disponibilities: {
    jour: Date;
    horaires: string[];
    disponibilityIds: number[];
  }[] = [];
  disponibilityMap!: Map<string, {
    jour: Date;
    key: string;
    horaires: string[];
    disponibilityIds: number[];
  }>;

  constructor(private disponibilitySrv: DisponibiliteService, private sessionSrv: SessionExamenService,
    private compteSrv: CompteService, private commonService: CommonService, private storageService: StorageService,
    private compteDisponibiliteService: CompteDisponibiliteService, private router: Router, private messageService: MessageService) {

  }
  ngOnInit(): void {
    this.getDisponibilities();
    this.disponibilityMap = new Map();
    this.juriesByDispo = new Map();
    this.getActiveSession();
    this.userConnected = this.storageService.getUserConnected();
    if (this.userConnected.role == Role.ADMIN) {
      this.getJuryComptes()
    }
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

  selectHoraire(event: any, disponibility: {
    jour: Date;
    key: String;
    horaires: string[];
    disponibilityIds: number[];
  }, index: number) {
    console.log('event', event.target.value);
    console.log('defaultValue', event.target.defaultValue);
    this.juriesByDispo.set(event.target.value + ' - ' + disponibility.key, disponibility.disponibilityIds[index])
  }

  validate() {
    let nbrSucess = 0;
    let total = 0;
    console.log(this.juriesByDispo.values());
    console.log(this.juriesByDispo.values);
    

    for (let id of this.juriesByDispo.values()) {
      total = total + 1;
      this.compteDisponibiliteService.create({
        disponibilite_id: id,
        compteId: this.userConnected.id || 0
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
    if (nbrSucess >= total) {
      this.router.navigate(['calendrier_entretiens']);
    }
  }

  getDisponibilities() {
    this.disponibilitySrv.liste().subscribe({
      next: (disponibilities: Disponibility[]) => {
        for (let index = 0; index < disponibilities.length; index++) {
          const disponibilite = disponibilities[index];

          this.beginDate = (new Date(disponibilite.date_disponibilite).getTime() - this.beginDate.getTime()) > 0 ? this.beginDate : new Date(disponibilite.date_disponibilite);
          this.endDate = (new Date(disponibilite.date_disponibilite).getTime() - this.beginDate.getTime()) > 0 ? new Date(disponibilite.date_disponibilite) : this.beginDate;


          let startTime = this.commonService.formatDate(disponibilite!.debut_disponibilite);
          let endTime = this.commonService.formatDate(disponibilite!.fin_disponibilite);
          let horaire = startTime + ' - ' + endTime;
          let key = new Date(disponibilite.date_disponibilite).getDate() + '-' + new Date(disponibilite.date_disponibilite).getMonth() + '-' + new Date(disponibilite.date_disponibilite).getFullYear();

          if (this.disponibilityMap.has(key)) {
            let data = this.disponibilityMap.get(key);
            this.disponibilityMap.set(key, {
              key: key,
              disponibilityIds: [...data!.disponibilityIds, disponibilite.id || 0],
              horaires: [
                ...data!.horaires,
                horaire
              ],
              jour: disponibilite.date_disponibilite,
            })
          } else {
            this.disponibilityMap.set(key, {
              key: key,
              disponibilityIds: [disponibilite.id || 0],
              horaires: [
                horaire,
              ],
              jour: disponibilite.date_disponibilite,
            })
          }
        }

        this.disponibilities = [...this.disponibilityMap.values()];
        console.log(this.disponibilities);

      },
      error: (err: any) => {

      }
    })
  }
}

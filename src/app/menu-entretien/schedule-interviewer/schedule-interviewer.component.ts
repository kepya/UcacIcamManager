import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Role } from 'src/app/shared/enums/role.enum';
import { Compte } from 'src/app/shared/models/compte';
import { CompteDisponibilite, Disponibility } from 'src/app/shared/models/entretient';
import { Zone } from 'src/app/shared/models/zone';
import { CommonService } from 'src/app/shared/services/common.service';
import { CompteDisponibiliteService } from 'src/app/shared/services/compte-disponibilite.service';
import { CompteService } from 'src/app/shared/services/compte.service';
import { DisponibiliteService } from 'src/app/shared/services/disponibilite.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ZoneService } from 'src/app/shared/services/zone.service';

interface Jury {
  name: string,
  horaire: string,
  value: string
}

@Component({
  selector: 'app-schedule-interviewer',
  templateUrl: './schedule-interviewer.component.html',
  styles: [
  ]
})
export class ScheduleInterviewerComponent implements OnInit {
  currentDay = new Date();
  visible: boolean = false;
  visibleMainPlage: boolean = false;

  activeHoraire: string = 'Selectionner';
  plage1: string = 'Selectionner';
  plage2: string = 'Selectionner';

  plageRanking: number = 0;

  selectPlages: string[] = [];

  firstPlages: string[] = [
    "08h00 - 08h20",
    "09h00 - 09h20",
    "10h00 - 10h20",
    "11h00 - 11h20",
  ];

  secondPlages: string[] = [
    "08h30 - 08h50",
    "09h30 - 09h50",
    "10h30 - 10h50",
    "11h30 - 11h50",
  ];

  juriesByDispo!: Map<string, Compte[]>;

  formations = [
    {
      name: 'Ingénieur généraliste par apprentissage ou génie des procédés',
      code: 'L',
    },
    { name: 'Ingénieur généraliste parcours international', code: 'OP' },
    { name: 'Ingénieur génie Informatique', code: 'X' },
    {
      name: 'Ingénieur géneraliste parcours international et innovation',
      code: 'I',
    },
    { name: 'Ingénieur génie Informatique', code: 'X' },
  ];

  juries: Jury[] = [
    {
      name: "",
      value: "",
      horaire: "",
    },
    {
      name: "",
      value: "",
      horaire: "",

    },
    {
      horaire: "",
      name: "",
      value: ""
    },
  ];
  zones!: Map<number, Zone>;
  horaires: string[] = [];
  disponibilities: Disponibility[] = [];

  loading: boolean = false;

  constructor(private disponibilitySrv: DisponibiliteService, private sessionSrv: SessionExamenService, private zoneService: ZoneService,
    private compteSrv: CompteService, public commonService: CommonService, private storageService: StorageService,
    private compteDisponibiliteService: CompteDisponibiliteService, private router: Router, private messageService: MessageService) {

  }

  handleFormationSelect(event: any): void {

  }

  ngOnInit(): void {
    this.zones = new Map();
    this.juriesByDispo = new Map();
    // this.getDisponibilities();
    this.horaires = [
      "08h00 - 12h00",
      "13h00 - 16h00",
    ]
  }

  showDialog(plages: string[], rand: number) {
    this.selectPlages = plages;
    this.plageRanking = rand;
    this.visible = true;
  }

  showMainDialog() {
    this.visibleMainPlage = true;
    this.visible = true;
  }

  selectMainPlage(plage: string) {
    this.activeHoraire = plage;
    if (plage.includes("08") || plage.includes("09")) {
      this.firstPlages = [
        "08h00 - 08h20",
        "09h00 - 09h20",
        "10h00 - 10h20",
        "11h00 - 11h20",
      ];
    
      this.secondPlages = [
        "08h30 - 08h50",
        "09h30 - 09h50",
        "10h30 - 10h50",
        "11h30 - 11h50",
      ];
    } else {
      this.firstPlages = [
        "13h00 - 13h20",
        "14h00 - 14h20",
        "15h00 - 15h20",
        "16h00 - 16h20",
      ];
    
      this.secondPlages = [
        "13h30 - 13h50",
        "14h30 - 14h50",
        "15h30 - 15h50",
        "16h30 - 16h50",
      ];
    }

    this.plage1 = 'Selectionner';
    this.plage2 = 'Selectionner';
    this.visible = false;
    this.visibleMainPlage = false;
  }

  selectPlage(plage: string) {
    if (this.plageRanking == 1) {
      let index = this.firstPlages.findIndex(p => p==plage);
      this.plage1 = plage;
      this.plage2 = this.secondPlages[index];
    } else {
      let index = this.secondPlages.findIndex(p => p==plage);
      this.plage2 = plage;
      this.plage1 = this.firstPlages[index];
    }
    this.visible = false;
  }

  getZones() {
    this.zoneService.liste().subscribe({
      next: (value: Zone[]) => {
        for (let index = 0; index < value.length; index++) {
          const element = value[index];
          this.zones.set(element.id || 0, element);
        }
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  handleInterviewerSelect(event: any) {

  }

  getDisponibilities() {
    this.disponibilitySrv.liste().subscribe({
      next: (disponibilities: Disponibility[]) => {
        this.disponibilities = disponibilities;
        for (let index = 0; index < disponibilities.length; index++) {
          const disponibilite = disponibilities[index];

          let startTime = this.commonService.formatDate(disponibilite!.debut_disponibilite);
          let endTime = this.commonService.formatDate(disponibilite!.fin_disponibilite);
          let horaire = startTime + ' - ' + endTime;

          if (!this.horaires.includes(horaire)) {
            this.horaires.push(horaire);
          }
        }

        this.getCompteDisponibilite();
      },
      error: (err: any) => {

      }
    })
  }

  getCompteDisponibilite() {
    this.compteDisponibiliteService.liste().subscribe({
      next: (disponibilities: CompteDisponibilite[]) => {
        for (let index = 0; index < disponibilities.length; index++) {
          const element = disponibilities[index];
          let disponibility = this.disponibilities.find(d => d.id == element.disponibilite!.id)

          let startTime = this.commonService.formatDate(disponibility!.debut_disponibilite);
          let endTime = this.commonService.formatDate(disponibility!.fin_disponibilite);
          let horaire = startTime + ' - ' + endTime;
          console.log('horaire: ', horaire);


          if (this.juriesByDispo.has(horaire)) {
            let jurys = this.juriesByDispo.get(horaire);
            let reult = jurys?.find(j => j.id == element.compte!.id);
            if (!reult) {
              jurys?.push(element.compte!);
            }
          } else {
            this.juriesByDispo.set(horaire, [element.compte!]);
          }
        }
      }
    })
  }

  validate() {

  }
}

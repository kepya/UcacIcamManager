import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../shared/enums/role.enum';
import { Compte } from '../shared/models/compte';
import { StorageService } from '../shared/services/storage.service';
import { CandidatureService } from '../menu-candidature/candidature.service';
import { StatCandidatures } from '../shared/models/stat-candidature';
import { SessionExamenService } from '../session-examen-page/session-examen.service';
import { Session } from 'src/app/shared/models/session';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  sites: Zone[] = [];
  searchSites: Zone[] = [];
  loading: boolean = false;
  sortIcon!: string;
  sortProperty!: string;
  isAsc!: boolean;
  downUpIcon!: string;
  searchValue!: string;

  isJury: boolean = false;
  isSuperAdmin: boolean = false;
  isAdmin: boolean = false;


  datasetsCandidatEntretenuParZone!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  labelsCandidatEntretenuParZone!: string[];

  datasetsCandidatEntretenuParSite!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  labelsCandidatEntretenuParSite!: string[];

  datasetsCandidatEntretenuParConcour!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  labelsCandidatEntretenuParConcour!: string[];


  datasetsSite!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  labelsSite!: string[];

  datasetsZone!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  labelsZone!: string[];

  datasetsConcour!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  labelsConcour!: string[];

  statCandidatures!: StatCandidatures;
  session!: Session;

  compte!: Compte;
  constructor(private router: Router, private sessionSrv: SessionExamenService, private storageService: StorageService, private candidatureSrv: CandidatureService,) { }

  ngOnInit(): void {
    this.compte = this.storageService.getUserConnected();
    this.isJury = this.compte.role == Role.JURY ? true : false;
    this.isAdmin = this.compte.role == Role.ADMIN ? true : false;
    this.isSuperAdmin = this.compte.role == Role.SUPER_ADMIN ? true : false;

    this.getStatistics();
    this.getSession();
  }

  getStatistics() {
    this.candidatureSrv.getStatistics().subscribe({
      next: (value: StatCandidatures) => {
        this.statCandidatures = value;

        let data = [];
        let data1: {
          label: string,
          data: number[],
        }[] = [];
        let labels = [];

        let dataEntretenu = [];
        let data1Entretenu: {
          label: string,
          data: number[],
        }[] = [];
        let labelsEntretenu = [];

        for (let index = 0; index < value.nbCandidatsBySiteList.length; index++) {
          const element = value.nbCandidatsBySiteList[index];

          if (this.isJury) {
            dataEntretenu.push(element.nbEntretenus);
            labelsEntretenu.push(element.site.nom);
            data1Entretenu.push({
              label: element.site.nom,
              data: [element.nbEntretenus]
            });
          } else {
            data.push(element.nbCandidats);
            labels.push(element.site.nom);
            data1.push({
              label: element.site.nom,
              data: [element.nbCandidats]
            });
          }
        }

        this.datasetsSite = [{
          data: data
        }];
        // this.datasetsSite = data1;
        this.labelsSite = labels;

        this.datasetsCandidatEntretenuParSite = [{
          data: dataEntretenu
        }];
        // this.datasetsCandidatEntretenuParSite = data1Entretenu;
        this.labelsCandidatEntretenuParSite = labelsEntretenu;

        data = [];
        labels = [];
        data1 = [];

        dataEntretenu = [];
        labelsEntretenu = [];
        data1Entretenu = [];

        for (let index = 0; index < value.nbCandidatsByZoneList.length; index++) {
          const element = value.nbCandidatsByZoneList[index];

          if (this.isJury) {
            dataEntretenu.push(element.nbEntretenus);
            labelsEntretenu.push(element.zone.nom);
            data1Entretenu.push({
              label: element.zone.nom,
              data: [element.nbEntretenus]
            });
          } else {
            data.push(element.nbCandidats);
            labels.push(element.zone.nom);
            data1.push({
              label: element.zone.nom,
              data: [element.nbCandidats]
            });
          }
        }

        this.datasetsZone = [{
          data: data
        }];
        // this.datasetsZone = data1;
        this.labelsZone = labels;

        this.datasetsCandidatEntretenuParZone = [{
          data: dataEntretenu
        }];
        // this.datasetsCandidatEntretenuParZone = data1Entretenu;
        this.labelsCandidatEntretenuParZone = labelsEntretenu;

        data = [];
        labels = [];
        data1 = [];

        dataEntretenu = [];
        labelsEntretenu = [];
        data1Entretenu = [];

        for (let index = 0; index < value.nbCandidatsByFormationList.length; index++) {
          const element = value.nbCandidatsByFormationList[index];
          if (this.isJury) {
            dataEntretenu.push(element.nbEntretenus);
            labelsEntretenu.push(element.formation);
            data1Entretenu.push({
              label: element.formation,
              data: [element.nbEntretenus]
            });
          } else {
            data.push(element.nbCandidats);
            labels.push(element.formation);
            data1.push({
              label: element.formation,
              data: [element.nbCandidats]
            });
          }
        }

        this.datasetsConcour = [{
          data: data
        }];
        // this.labelsConcour = ['Candidats'];
        // this.datasetsConcour = data1;
        this.labelsConcour = labels;


        this.datasetsCandidatEntretenuParConcour = [{
          data: dataEntretenu
        }];
        // this.datasetsCandidatEntretenuParConcour = data1Entretenu;
        this.labelsCandidatEntretenuParConcour = labelsEntretenu;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getSession() {
    this.sessionSrv.getActive().subscribe({
      next: (value: Session) => {
        this.session = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }
}

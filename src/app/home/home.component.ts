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

  datasetsSite!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  labelsSite!: string[];


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

        let dataSite = [];
        let labelsSite = [];

        for (let index = 0; index < value.nbCandidatsBySiteList.length; index++) {
          const element = value.nbCandidatsBySiteList[index];
          dataSite.push(element.nbCandidats);
          labelsSite.push(element.nom_site);
        }

        this.datasetsSite = [{
          data: dataSite
        }];
        this.labelsSite = labelsSite;
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

import { Centre } from './../../shared/models/centre';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Candidature, Compte } from 'src/app/shared/models/compte';
import { Site } from 'src/app/shared/models/site';
import { SiteService } from 'src/app/site-page/site.service';
import { CandidatureService } from '../candidature.service';
import { HttpClient } from "@angular/common/http";
import { ExportExcelService } from "../../shared/services/export-excel.service";
import { StorageService } from 'src/app/shared/services/storage.service';
import { Zone } from 'src/app/shared/models/zone';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { Role } from 'src/app/shared/enums/role.enum';
import { CentreExamenService } from 'src/app/centre-examen-page/centre-examen.service';
import { saveAs } from "file-saver";
import { Genre } from 'src/app/shared/enums/genre.enum';

@Component({
  selector: 'app-liste-candidature',
  templateUrl: './liste-candidature.component.html',
  styles: [
  ]
})
export class ListeCandidatureComponent implements OnInit, AfterViewInit {
  visible: boolean = false;


  candidatures: Candidature[] = [];
  date_naissance!: Date;
  formations: string[] = [
    "Ingénieur généraliste parcours international",
    "Ingénieur généraliste par apprentissage ou génie des procédés",
    "Ingénieur genie des procédés",
    "Ingénieur géneraliste parcours international et innovation",
    "Ingénieur génie Informtique",
  ];
  candidature!: Candidature;
  searchCandidatures: Candidature[] = [];
  loading: boolean = false;
  sortIcon!: string;
  nationalites: string[] = [];
  sortProperty!: string;
  isAsc!: boolean;
  downUpIcon!: string;
  idZone!: number;
  searchValue!: string;
  page!: number;
  totalElement!: number;
  pageSize!: number;
  collectionSize!: number;
  nbrOfPage!: number;
  zones: Zone[] = [];
  zone!: Zone;
  sites: Site[] = [];
  site!: Site;
  centres: Centre[] = [];
  centre!: Centre;
  actifOption!: string;
  searchOption!: string;
  compte!: Compte;

  constructor(private candidatureSrv: CandidatureService, private storageService: StorageService,
    private siteSrv: SiteService, private exportExcelService: ExportExcelService,
    private centreSrv: CentreExamenService, private zoneService: ZoneService) { }
  
  ngAfterViewInit(): void {
    this.showDialog();
  }

  ngOnInit(): void {
    this.sortProperty = "code_examen";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.compte = this.storageService.getUserConnected();
    this.getZonesOfUser();
  }

  sort(property: string, candidatures: Candidature[] = this.candidatures) {
    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'nom') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.compte.name > b.compte.name) {
            return 1;
          }
          if (b.compte.name > a.compte.name) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.compte.name > b.compte.name) {
            return -1;
          }
          if (b.compte.name > a.compte.name) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'prenom') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.compte.prenom > b.compte.prenom) {
            return 1;
          }
          if (b.compte.prenom > a.compte.prenom) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.compte.prenom > b.compte.prenom) {
            return -1;
          }
          if (b.compte.prenom > a.compte.prenom) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'statut') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.statut > b.statut) {
            return 1;
          }
          if (b.statut > a.statut) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.statut > b.statut) {
            return -1;
          }
          if (b.statut > a.statut) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'nationalite') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.nationalite > b.nationalite) {
            return 1;
          }
          if (b.nationalite > a.nationalite) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.nationalite > b.nationalite) {
            return -1;
          }
          if (b.nationalite > a.nationalite) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'genre') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.genre > b.genre) {
            return 1;
          }
          if (b.genre > a.genre) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.genre > b.genre) {
            return -1;
          }
          if (b.genre > a.genre) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'langue') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.langue > b.langue) {
            return 1;
          }
          if (b.langue > a.langue) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.langue > b.langue) {
            return -1;
          }
          if (b.langue > a.langue) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'photo') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.image > b.image) {
            return 1;
          }
          if (b.image > a.image) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.image > b.image) {
            return -1;
          }
          if (b.image > a.image) {
            return 1;
          }
          return 0;
        });
      }
    }
    return candidatures;
  }

  getCriteria(data: {
    cycle: string,
    formation: string
  }) {
    this.visible = false;
this.getCandidaturesByCycleAndParcours(data.cycle, data.formation);
  }

  exportToExcel() {
    this.loading = true;
    this.exportExcelService.downloadCandidatureExcel().subscribe(response => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'data.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
      this.loading = false;
    });
  }

  showDialog() {
    this.visible = true;
}

  handlePageSize(event: any) {
    this.page = 1;
    if (this.actifOption == 'centre') {
      this.getCandidaturesByCentre(this.centre.id ?? 0);

    }

    if (this.actifOption == 'site') {
      this.getCandidaturesBySite(this.site.id ?? 0);
    }


    if (this.actifOption == 'zone') {
      this.getCandidaturesByZone(this.zone.id ?? 0);
    }
  }

  handleCategorieSelect(event: any) {
    if (this.compte.role == Role.SUPER_ADMIN) {
      if (event.target.value == 'centre') {
        this.getCentres();
      }

      if (event.target.value == 'site') {
        this.getSites();
      }
    }
  }

  handleZoneSelect(event: any) {
    this.zone = this.zones.find(s => s.id == event.target.value) as unknown as Zone;
    this.getCandidaturesByZone(event.target.value ?? 0);
  }

  handleCentreSelect(event: any) {
    this.centre = this.centres.find(s => s.id == event.target.value) as unknown as Centre;
    this.getCandidaturesByCentre(event.target.value ?? 0);
  }

  getFormationLabel(value: string) {
    if (value == "Ingénieur généraliste parcours international") {
      return "OP";
    }

    if (value == "Ingénieur généraliste par apprentissage ou génie des procédés") {
      return "L";
    }

    if (value == "Ingénieur genie des procédés") {
      return "IP";
    }

    if (value == "Ingénieur géneraliste parcours international et innovation") {
      return "I";
    }

    if (value == "Ingénieur génie Informtique") {
      return "X";
    }
    return "";
  }

  handleFormationSelect(event: any) {
    this.getCandidaturesByParcours(this.getFormationLabel(event.target.value));
  }

  handleCycleSelect(event: any) {
    this.getCandidaturesByCycle(event.target.value);
  }

  handleDateNaissanceSelect(event: any) {
    this.getCandidaturesByDateNaissance();
  }

  handleNationalitySelect(event: any) {
    this.getCandidaturesByNationality(event.target.value);
  }

  handleSexeSelect(event: any) {
    this.getCandidaturesBySexe(event.target.value == "M" ? Genre.M: Genre.F);
  }

  handleSiteSelect(event: any) {
    this.site = this.sites.find(s => s.id == event.target.value) as unknown as Site;
    this.getCandidaturesBySite(event.target.value ?? 0);
  }


  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let names = this.searchCandidatures.map(candidature => candidature.compte.name);
      let name = names.filter(name => name.toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);

      if (name.length === 0) {
        this.candidatures = [];
      } else {
        let candidatures: Candidature[] = [];
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          let z = this.searchCandidatures.filter(candidature => candidature.compte.name.indexOf('' + element) > -1);
          candidatures.push(...z);
        }
        this.candidatures = candidatures;
      }
    } else {
      this.candidatures = this.searchCandidatures;
    }
  }

  next() {
    this.page++;
    if (this.actifOption == 'centre') {
      this.getCandidaturesByCentre(this.centre.id ?? 0);

    }

    if (this.actifOption == 'site') {
      this.getCandidaturesBySite(this.site.id ?? 0);
    }


    if (this.actifOption == 'zone') {
      this.getCandidaturesByZone(this.zone.id ?? 0);
    }
  }

  previous() {
    this.page--;
    if (this.actifOption == 'centre') {
      this.getCandidaturesByCentre(this.centre.id ?? 0);
    }

    if (this.actifOption == 'site') {
      this.getCandidaturesBySite(this.site.id ?? 0);
    }


    if (this.actifOption == 'zone') {
      this.getCandidaturesByZone(this.zone.id ?? 0);
    }
  }

  getCandidaturesByZone(idZone: number) {
    this.actifOption = 'zone';
    this.idZone = idZone;
    this.candidatureSrv.allByZone(idZone).subscribe({
      next: (value: Candidature[]) => {
        this.totalElement = value.length;
        this.nationalites = value.map(c => c.nationalite);
        this.nationalites = [...new Set(this.nationalites)];
        value = this.sort('nom', value);
        this.searchCandidatures = [];
        this.searchCandidatures = value;
        this.candidatures = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getCandidaturesByNationality(nationality: string) {
    this.actifOption = 'zone';
    this.candidatureSrv.allByZone(this.idZone).subscribe({
      next: (value: Candidature[]) => {
        this.totalElement = value.length;
        value = this.sort('nom', value.filter(c => c.nationalite == nationality));
        this.searchCandidatures = [];
        this.searchCandidatures = value;
        this.candidatures = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getCandidaturesBySexe(sexe: Genre) {
    this.actifOption = 'zone';
    this.candidatureSrv.allByZone(this.idZone).subscribe({
      next: (value: Candidature[]) => {
        this.totalElement = value.length;
        value = this.sort('nom', value.filter(c => c.genre == sexe));
        this.searchCandidatures = [];
        this.searchCandidatures = value;
        this.candidatures = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        this.candidatures = [];
        console.log('error: ', err);
      }
    });
  }

  getCandidaturesByDateNaissance() {
    this.actifOption = 'zone';
    let date = this.date_naissance.getFullYear() + "-" + this.date_naissance.getMonth() + "-" + this.date_naissance.getDate();
    this.candidatureSrv.allByZone(this.idZone).subscribe({
      next: (value: Candidature[]) => {
        this.totalElement = value.length;
        value = this.sort('nom', value.filter(c => c.date_naissance == date));
        this.searchCandidatures = [];
        this.searchCandidatures = value;
        this.candidatures = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        this.candidatures = [];
        console.log('error: ', err);
      }
    });
  }

  getCandidaturesByCentre(idCentre: number) {
    this.actifOption = 'centre';
    this.candidatureSrv.allByCentre(idCentre).subscribe({
      next: (value: Candidature[]) => {
        this.totalElement = value.length;
        value = this.sort('nom', value);
        this.searchCandidatures = [];
        this.searchCandidatures = value;
        this.candidatures = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        this.candidatures = [];
        console.log('error: ', err);
      }
    });
  }

  getCandidaturesByParcours(parcours: string) {
    this.candidatureSrv.allByParcours(parcours).subscribe({
      next: (value: Candidature[]) => {
        this.totalElement = value.length;
        value = this.sort('nom', value);
        this.searchCandidatures = [];
        this.searchCandidatures = value;
        this.candidatures = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        this.candidatures = [];
        console.log('error: ', err);
      }
    });
  }

  getCandidaturesByCycle(cycle: string) {
    this.candidatureSrv.allByCycle(cycle).subscribe({
      next: (value: Candidature[]) => {
        this.totalElement = value.length;
        value = this.sort('nom', value);
        this.searchCandidatures = [];
        this.searchCandidatures = value;
        this.candidatures = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        this.candidatures = [];
        console.log('error: ', err);
      }
    });
  }

  getCandidaturesByCycleAndParcours(cycle: string, parcours: string) {
    this.candidatureSrv.allByCycleAndParcours(cycle, parcours).subscribe({
      next: (value: Candidature[]) => {
        this.totalElement = value.length;
        value = this.sort('nom', value);
        this.searchCandidatures = [];
        this.searchCandidatures = value;
        this.candidatures = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        this.candidatures = [];
        console.log('error: ', err);
      }
    });
  }

  getCandidaturesBySite(idSite: number) {
    this.actifOption = 'site';
    this.candidatureSrv.allBySite(idSite).subscribe({
      next: (value: Candidature[]) => {
        this.totalElement = value.length;
        value = this.sort('nom', value);
        this.searchCandidatures = [];
        this.searchCandidatures = value;
        this.candidatures = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        this.candidatures = [];
        console.log('error: ', err);
      }
    });
  }

  getZonesOfUser() {
    if (this.compte.role == Role.SUPER_ADMIN) {
      this.zoneService.liste().subscribe({
        next: (value: Zone[]) => {
          this.zone = value[0];
          this.zones = value;
          this.getCandidaturesByZone(this.zone.id ?? 0);
          this.getSitesByZone(this.zone.id ?? 0);
          this.getCentreByZone(this.zone.id ?? 0);
        },
        error: (err) => {
          console.log('error: ', err);
        }
      });
    }

    if (this.compte.role == Role.ADMIN || this.compte.role == Role.JURY) {
      this.zoneService.getOne(this.compte.idZone ?? 0).subscribe({
        next: (value: Zone) => {
          this.zone = value;
          this.zones = [value];
          this.getCandidaturesByZone(value.id ?? 0);
          this.getSitesByZone(value.id ?? 0);
          this.getCentreByZone(value.id ?? 0);
        },
        error: (err) => {
          console.log('error: ', err);
        }
      });
    }
  }

  getCentreByZone(idZone: number) {
    this.centreSrv.allByZone(idZone).subscribe({
      next: (value: Centre[]) => {
        this.centres = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }


  getSitesByZone(idZone: number) {
    this.siteSrv.allByZone(idZone).subscribe({
      next: (value: Site[]) => {
        this.sites = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getCentres() {
    this.centreSrv.liste().subscribe({
      next: (value: Centre[]) => {
        this.centres = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }


  getSites() {
    this.siteSrv.liste().subscribe({
      next: (value: Site[]) => {
        this.sites = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  downloadCandidatureFile() {
    this.candidatureSrv.downloadCandidatureFile().subscribe({
      next: (value) => {
        saveAs(value, 'liste_candidat.xlsx');
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }
}

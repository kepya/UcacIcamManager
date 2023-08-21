import { Component, OnInit } from '@angular/core';
import { CentreExamenService } from 'src/app/centre-examen-page/centre-examen.service';
import { CandidatureService } from 'src/app/menu-candidature/candidature.service';
import { Cycle } from 'src/app/shared/enums/cycle.enum';
import { Genre } from 'src/app/shared/enums/genre.enum';
import { Langue } from 'src/app/shared/enums/langue.enum';
import { Role } from 'src/app/shared/enums/role.enum';
import { Statut } from 'src/app/shared/enums/statut.enum';
import { Centre } from 'src/app/shared/models/centre';
import { Candidature, Compte } from 'src/app/shared/models/compte';
import { Site } from 'src/app/shared/models/site';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { SiteService } from 'src/app/site-page/site.service';
import { Zone } from 'src/app/shared/models/zone';

@Component({
  selector: 'app-liste-admissibilite',
  templateUrl: './liste-admissibilite.component.html',
  styles: [
  ]
})
export class ListeAdmissibiliteComponent implements OnInit {

  candidatures: Candidature[] = [];
  candidature!: Candidature;
  searchCandidatures: Candidature[] = [];
  loading: boolean = false;
  sortIcon!: string;
  sortProperty!: string;
  isAsc!: boolean;
  downUpIcon!: string;
  searchValue!: string;
  page!: number;
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
    private siteSrv: SiteService, private centreSrv: CentreExamenService, private zoneService: ZoneService) { }

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

    if (property === 'centre') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.centre > b.centre) {
            return 1;
          }
          if (b.centre > a.centre) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.centre > b.centre) {
            return -1;
          }
          if (b.centre > a.centre) {
            return 1;
          }
          return 0;
        });
      }
    }

    return candidatures;
  }

  handlePageSize(event: any) {
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

  handleCentreSelect(event: any) {
    this.getCandidaturesByCentre(this.centre.id ?? 0);
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
    this.getCandidaturesByZone(this.zone.id ?? 0);
  }

  handleSiteSelect(event: any) {
    this.getCandidaturesBySite(this.site.id ?? 0);
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
    this.candidatureSrv.allAdmissibleByZone(idZone).subscribe({
      next: (value: Candidature[]) => {
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

  getCandidaturesByCentre(idCentre: number) {
    this.actifOption = 'centre';
    this.candidatureSrv.allAdmissibleByCentre(idCentre).subscribe({
      next: (value: Candidature[]) => {
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

  getCandidaturesBySite(idSite: number) {
    this.actifOption = 'site';
    this.candidatureSrv.allAdmissibleBySite(idSite).subscribe({
      next: (value: Candidature[]) => {
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

}


import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Cycle } from 'src/app/shared/enums/cycle.enum';
import { Genre } from 'src/app/shared/enums/genre.enum';
import { Langue } from 'src/app/shared/enums/langue.enum';
import { Role } from 'src/app/shared/enums/role.enum';
import { Statut } from 'src/app/shared/enums/statut.enum';
import { Candidature, Compte } from 'src/app/shared/models/compte';
import { Site } from 'src/app/shared/models/site';
import { SiteService } from 'src/app/site-page/site.service';
import { CandidatureService } from '../candidature.service';
import { CentreExamenService } from 'src/app/centre-examen-page/centre-examen.service';
import { Centre } from 'src/app/shared/models/centre';
import { ExportExcelService } from 'src/app/shared/services/export-excel.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { Zone } from 'src/app/shared/models/zone';
import { saveAs } from "file-saver";
import { ConfirmationService, MessageService } from 'primeng/api';
import { formations } from 'src/app/shared/mocks/mock';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-gestion-solvable',
  templateUrl: './gestion-solvable.component.html',
  styles: [
  ]
})
export class GestionSolvableComponent implements OnInit, AfterViewInit {
  visible: boolean = false;
  date_naissance!: Date;
  formations: string[] = formations;
  downloadFile: boolean = false;
  nationalites: string[] = [];
  totalElement!: number;
  idZone!: number;
  
  candidatures: Candidature[] = [];
  candidatsSolvable: Candidature[] = [];
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
    private siteSrv: SiteService, public commonSrv : CommonService,private exportExcelService: ExportExcelService,
    private centreSrv: CentreExamenService, private zoneService: ZoneService,
    private messageService: MessageService, private confirmationService: ConfirmationService,
  ) { }

  ngAfterViewInit(): void {
    //this.showDialog();
  }

  showDialog() {
    this.visible = true;
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

  getEventValue(event: any) {
    return event.target != null ? event.target.value : '';
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
    if (property === 'code_examen') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.code_examen > b.code_examen) {
            return 1;
          }
          if (b.code_examen > a.code_examen) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.code_examen > b.code_examen) {
            return -1;
          }
          if (b.code_examen > a.code_examen) {
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

    if (property === 'reference_paiement') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.reference_paiement > b.reference_paiement) {
            return 1;
          }
          if (b.reference_paiement > a.reference_paiement) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.reference_paiement > b.reference_paiement) {
            return -1;
          }
          if (b.reference_paiement > a.reference_paiement) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'telephone_paiement') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.telephone_paiement > b.telephone_paiement) {
            return 1;
          }
          if (b.telephone_paiement > a.telephone_paiement) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.telephone_paiement > b.telephone_paiement) {
            return -1;
          }
          if (b.telephone_paiement > a.telephone_paiement) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'paiement') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.paiement > b.paiement) {
            return 1;
          }
          if (b.paiement > a.paiement) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.paiement > b.paiement) {
            return -1;
          }
          if (b.paiement > a.paiement) {
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

  
  handleFormationSelect(event: any) {
    this.getCandidaturesByParcours(this.commonSrv.getFormationLabel(event.target.value));
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

  handleSiteSelect(event: any) {
    this.site = this.sites.find(s => s.id == event.target.value) as unknown as Site;
    this.getCandidaturesBySite(event.target.value ?? 0);
  }

  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let names = this.searchCandidatures.map(candidature => candidature.compte.name);
      let code_examens = this.searchCandidatures.map(candidature => candidature.code_examen);
      let name = names.filter(name => name.toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);
      let code_examen = code_examens.filter(code => code.toString().toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);

      if (name.length === 0 && code_examen.length == 0) {
        this.candidatures = [];
      } else {
        if (name.length > 0) {
          let candidatures: Candidature[] = [];
          for (let index = 0; index < name.length; index++) {
            const element = name[index];
            let z = this.searchCandidatures.filter(candidature => candidature.compte.name.indexOf('' + element) > -1);
            candidatures.push(...z);
          }
          this.candidatures = candidatures;
        } else {
          let candidatures: Candidature[] = [];
          for (let index = 0; index < code_examen.length; index++) {
            const element = code_examen[index];
            let z = this.searchCandidatures.filter(candidature => candidature.code_examen.toString().indexOf('' + element) > -1);
            candidatures.push(...z);
          }
          this.candidatures = candidatures;
        }
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
    this.candidatureSrv.allSolvableByZone(idZone, false).subscribe({
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

  getCandidaturesByCentre(idCentre: number) {
    this.actifOption = 'centre';
    this.candidatureSrv.allSolvableByCentre(idCentre, false).subscribe({
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
    this.candidatureSrv.allSolvableBySite(idSite, false).subscribe({
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

  
  getCandidaturesByNationality(nationality: string) {
    this.actifOption = 'zone';
    this.candidatureSrv.allByZone(this.idZone).subscribe({
      next: (val: Candidature[]) => {
        let value = val.filter(c => c.solvable == false);
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
        this.candidatures = [];
        console.log('error: ', err);
      }
    });
  }

  getCandidaturesBySexe(sexe: Genre) {
    this.actifOption = 'zone';
    this.candidatureSrv.allByZone(this.idZone).subscribe({
      next: (val: Candidature[]) => {
        let value = val.filter(c => c.solvable == false);
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
      next: (val: Candidature[]) => {
        let value = val.filter(c => c.solvable == false);
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

  getCandidaturesByParcours(parcours: string) {
    this.candidatureSrv.allByParcours(parcours).subscribe({
      next: (val: Candidature[]) => {
        let value = val.filter(c => c.solvable == false);
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
      next: (val: Candidature[]) => {
        let value = val.filter(c => c.solvable == false);
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
      next: (val: Candidature[]) => {
        let value = val.filter(c => c.solvable == false);
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

    if (this.compte.role == Role.ADMIN || this.compte.role == Role.JURY || this.compte.role == Role.COMPTABLE) {
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


  validateSolvabilityOfCandidats(event: any, candidat: Candidature) {
    if (event.target.checked) {
      this.candidatsSolvable.push(candidat);
    } else {
      let index = this.candidatsSolvable.findIndex(c => c.id == candidat.id);
      if (index > -1) {
        this.candidatsSolvable.splice(index);
      }
    }
  }

  validateSolvabilityCandidats() {
    for (let index = 0; index < this.candidatsSolvable.length; index++) {
      const candidat = this.candidatsSolvable[index];
      
      candidat.compteID = candidat.compte.id!;
      candidat.solvable = true;
      this.candidatureSrv.update(candidat.id || 0, candidat).subscribe({
        next: (value: Candidature) => {
          this.messageService.add({ severity: 'success', summary: 'Candidature passé à solvable', detail: 'Le candidat ' + candidat.compte.name + ' est desormais solvable et peut participer au concours.' });

          if (this.actifOption == 'centre') {
            this.getCandidaturesByCentre(this.centre.id ?? 0);
          }

          if (this.actifOption == 'site') {
            this.getCandidaturesBySite(this.site.id ?? 0);
          }

          if (this.actifOption == 'zone') {
            this.getCandidaturesByZone(this.zone.id ?? 0);
          }
        },
        error: (err) => {
          console.log('error: ', err);
        }
      });
    }
  }

  confirm(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Êtes vous sures de vouloir continuer ?',
      icon: 'pi pi-question',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.validateSolvabilityCandidats();
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Non', detail: 'vous avez annulé la validation' });
      }
    });
  }

    
  getCriteria(data: {
    cycle: string,
    formation: string
  }) {
    this.visible = false;

    if (this.downloadFile) {
   
    } else {
      this.getCandidaturesByCycleAndParcours(data.cycle, data.formation);
    }
  }
  
  statuses!: any[];
  cycles: string[] = [
    "premier",
    "second"
  ];

  getSeverity(status: Statut) {
    switch (status) {
      case Statut.Admis:
        return 'success';
      case Statut.Admissible:
        return 'info';
      case Statut.Echec:
        return 'danger';
      case Statut.En_Attente:
        return 'warning';
      default:
        return 'warning';
    }
  }

  getStatusLabel(status: Statut) {
    return status.toString();
  }
}

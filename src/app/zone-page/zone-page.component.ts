import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { zones } from '../shared/mocks/mock';
import { Zone } from "../shared/models/zone";
import { ZoneService } from 'src/app/shared/services/zone.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Compte } from '../shared/models/compte';
import { StorageService } from '../shared/services/storage.service';
import { Role } from '../shared/enums/role.enum';

@Component({
  selector: 'app-zone-page',
  templateUrl: './zone-page.component.html',
  styles: [
  ]
})
export class ZonePageComponent implements OnInit {

  zones: Zone[] = [];
  zone!: Zone;
  searchZones: Zone[] = [];
  loading: boolean = true;
  sortIcon!: string;
  sortProperty!: string;
  isAsc!: boolean;
  downUpIcon!: string;
  searchValue!: string;
  page!: number;
  pageSize!: number;
  collectionSize!: number;
  nbrOfPage!: number;
  isFormZone!: boolean;
  compte!: Compte;

  formZone: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private confirmationService: ConfirmationService, private zoneSrv: ZoneService, private storageService: StorageService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.sortProperty = "nom";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.compte = this.storageService.getUserConnected();
    if (this.compte.role == Role.SUPER_ADMIN) {
      this.getZones();
    } else {
      this.getZoneById(this.compte.idZone);
    }
  }

  sort(property: string, zones: Zone[] = this.zones) {
    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'nom') {
      if (this.isAsc) {
        zones.sort((a, b) => {
          if (a.nom > b.nom) {
            return 1;
          }
          if (b.nom > a.nom) {
            return -1;
          }
          return 0;
        });
      } else {
        zones.sort((a, b) => {
          if (a.nom > b.nom) {
            return -1;
          }
          if (b.nom > a.nom) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'description') {
      if (this.isAsc) {
        zones.sort((a, b) => {
          if (a.description > b.description) {
            return 1;
          }
          if (b.description > a.description) {
            return -1;
          }
          return 0;
        });
      } else {
        zones.sort((a, b) => {
          if (a.description > b.description) {
            return -1;
          }
          if (b.description > a.description) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'nbreSite') {
      if (this.isAsc) {
        zones.sort((a, b) => {
          if (a.count_site > b.count_site) {
            return 1;
          }
          if (b.count_site > a.count_site) {
            return -1;
          }
          return 0;
        });
      } else {
        zones.sort((a, b) => {
          if (a.count_site > b.count_site) {
            return -1;
          }
          if (b.count_site > a.count_site) {
            return 1;
          }
          return 0;
        });
      }
    }

    return zones;
  }

  get formZoneControl(): { [key: string]: AbstractControl } {
    return this.formZone.controls;
  }

  handlePageSize(event: any) {
    this.page = 1;
    this.getZones();
  }

  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let names = this.searchZones.map(zone => zone.nom);
      let name = names.filter(name => name.toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);

      if (name.length === 0) {
        this.zones = [];
      } else {
        let zones: Zone[] = [];
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          let z = this.searchZones.filter(zone => zone.nom.indexOf('' + element) > -1);
          zones.push(...z);
        }
        this.zones = zones;
      }
    } else {
      this.zones = this.searchZones;
    }
  }

  next() {
    this.page++;
    this.getZones();
  }

  previous() {
    this.page--;
    this.getZones();
  }

  getZones() {
    this.zoneSrv.liste().subscribe({
      next: (value: Zone[]) => {
        value = this.sort('nom', value);
        this.searchZones = [];
        this.searchZones = value;
        this.zones = value
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

  getZoneById(idZone: number) {
    this.zoneSrv.getOne(idZone).subscribe({
      next: (value: Zone) => {
        let result = this.sort('nom', [value]);
        this.searchZones = [];
        this.searchZones = result;
        this.zones = result
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = result.length;
        this.nbrOfPage = Math.ceil(result.length / this.pageSize);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  viewZone(view: string = 'data') {
    if (view === 'data') {
      this.zone = new Zone();
      this.isFormZone = false;
    } else {
      this.isFormZone = true;
    }
  }

  updateZone(zone: Zone) {
    this.isFormZone = true;
    this.zone = zone;
    this.formZone.setValue({
      nom: zone.nom,
      description: zone.description
    })
  }

  createOrUpdateZone() {
    if (this.zone?.id || 0 > 0) {
      this.zoneSrv.update({ ...this.formZone.value, id: this.zone?.id }).subscribe({
        next: (value) => {
          this.getZones();
          this.zone = new Zone();
          this.formZone.reset();
          this.messageService.add({ severity: 'success', summary: 'Modification de zone', detail: 'Modification effectuée avec success' });

          this.isFormZone = false;
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: `Erreur de modification`, detail: err.message });
          console.log("Error: ", err);
        }
      })
    } else {
      this.zoneSrv.create({ ...this.formZone.value }).subscribe({
        next: (value) => {
          this.getZones();
          this.messageService.add({ severity: 'success', summary: 'Création de zone', detail: 'Création effectuée avec success' });
          this.zone = new Zone();
          this.formZone.reset();
          this.isFormZone = false;
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: `Erreur de creation`, detail: err.message });
          console.log("Error: ", err);
        }
      })
    }
  }


  confirm(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Êtes vous sures de vouloir continuer ?',
      icon: 'pi pi-question',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.deleteZone(id)
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Non', detail: 'vous avez annulé la suppresion' });
      }
    });
  }

  deleteZone(id: number) {
    this.zoneSrv.delete(id || 0).subscribe({
      next: (value) => {
        this.getZones();
        this.messageService.add({ severity: 'success', summary: 'Suppression de zone ', detail: 'Suppression effectuée avec success' });
      },
      error: (err) => {
        console.log("Error: ", err);
        this.messageService.add({ severity: 'error', summary: `Erreur de suppression`, detail: err.message });
      }
    })
  }
}

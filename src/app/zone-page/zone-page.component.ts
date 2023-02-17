import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { zones } from '../shared/mocks/mock';
import { Zone } from "../shared/models/zone";
import { ZoneService } from 'src/app/shared/services/zone.service';

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

  formZone: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private zoneSrv: ZoneService) { }

  ngOnInit(): void {
    this.sortProperty = "nom";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getZones();
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
          if (a.nbreSite > b.nbreSite) {
            return 1;
          }
          if (b.nbreSite > a.nbreSite) {
            return -1;
          }
          return 0;
        });
      } else {
        zones.sort((a, b) => {
          if (a.nbreSite > b.nbreSite) {
            return -1;
          }
          if (b.nbreSite > a.nbreSite) {
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
    ;
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

  viewZone(view: string = 'data') {
    if (view === 'data') {
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
          this.isFormZone = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    } else {
      this.zoneSrv.create({ ...this.formZone.value }).subscribe({
        next: (value) => {
          this.getZones();
          this.zone = new Zone();
          this.formZone.reset();
          this.isFormZone = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Site } from '../shared/models/site';
import { Zone } from "../shared/models/zone";
import { ZoneService } from 'src/app/shared/services/zone.service';
import { SiteService } from 'src/app/shared/services/site.service';

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styles: [
  ]
})
export class SitePageComponent implements OnInit {

  sites: Site[] = [];
  site!: Site;
  zones: Zone[] = [];
  searchSites: Site[] = [];
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
  isFormSite!: boolean;

  formSite: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    pays: new FormControl('', [Validators.required]),
    zone_id: new FormControl('', [Validators.required]),
  });

  constructor(private siteSrv: SiteService, private zoneSrv: ZoneService) { }

  ngOnInit(): void {
    this.sortProperty = "nom";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getZones();
    this.getSites();
  }

  sort(property: string, sites: Site[] = this.sites) {
    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'nom') {
      if (this.isAsc) {
        sites.sort((a, b) => {
          if (a.nom > b.nom) {
            return 1;
          }
          if (b.nom > a.nom) {
            return -1;
          }
          return 0;
        });
      } else {
        sites.sort((a, b) => {
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

    if (property === 'pays') {
      if (this.isAsc) {
        sites.sort((a, b) => {
          if (a.pays > b.pays) {
            return 1;
          }
          if (b.pays > a.pays) {
            return -1;
          }
          return 0;
        });
      } else {
        sites.sort((a, b) => {
          if (a.pays > b.pays) {
            return -1;
          }
          if (b.pays > a.pays) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'zone') {
      if (this.isAsc) {
        sites.sort((a, b) => {
          if (a.zone?.nom > b.zone?.nom) {
            return 1;
          }
          if (b.zone?.nom > a.zone?.nom) {
            return -1;
          }
          return 0;
        });
      } else {
        sites.sort((a, b) => {
          if (a.zone?.nom > b.zone?.nom) {
            return -1;
          }
          if (b.zone?.nom > a.zone?.nom) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'description') {
      if (this.isAsc) {
        sites.sort((a, b) => {
          if (a.description > b.description) {
            return 1;
          }
          if (b.description > a.description) {
            return -1;
          }
          return 0;
        });
      } else {
        sites.sort((a, b) => {
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

    return sites;
  }

  get formSiteControl(): { [key: string]: AbstractControl } {
    return this.formSite.controls;
  }

  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let names = this.searchSites.map(site => site.nom);
      let name = names.filter(name => name.toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);

      if (name.length === 0) {
        this.sites = [];
      } else {
        let sites: Site[] = [];
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          let z = this.searchSites.filter(site => site.nom.indexOf('' + element) > -1);
          sites.push(...z);
        }
        this.sites = sites;
      }
    } else {
      this.sites = this.searchSites;
    }
  }

  handlePageSize(event: any) {
    ;
    this.getSites();
  }

  next() {
    this.page++;
    this.getSites();
  }

  previous() {
    this.page--;
    this.getSites();
  }

  getSites() {
    this.siteSrv.liste().subscribe({
      next: (value: Site[]) => {
        value = this.sort('nom', value);
        this.searchSites = [];
        this.searchSites = value;
        this.sites = value
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

  viewSite(view: string = 'data') {
    if (view === 'data') {
      this.isFormSite = false;
    } else {
      this.isFormSite = true;
      this.getZones();
    }
  }

  getZones() {
    this.zoneSrv.liste().subscribe({
      next: (value: Zone[]) => {
        this.zones = value;


      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  updateSite(site: Site) {
    this.isFormSite = true;
    this.site = site;
    this.formSite.setValue({
      nom: site.nom,
      description: site.description,
      zone_id: site.zone?.id,
      pays: site.pays
    });
  }

  createOrUpdateSite() {
    let zone: Zone = new Zone();
    if (this.site?.id || 0 > 0) {
      let d = { ...this.formSite.value };
      delete d.zone_id;
      d = { ...d, zone_id: parseInt(this.formSite.value.zone_id, 10) };

      this.siteSrv.update({ ...d, image: this.site.image, zone, id: this.site.id }).subscribe({
        next: (value) => {
          this.getSites();
          this.site = new Site();
          this.formSite.reset();
          this.isFormSite = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    } else {
      let d = { ...this.formSite.value };
      delete d.zone_id;
      d = { ...d, zone_id: parseInt(this.formSite.value.zone_id, 10) };

      this.siteSrv.create({ ...d, zone }).subscribe({
        next: (value) => {
          this.getSites();
          this.site = new Site();
          this.formSite.reset();
          this.isFormSite = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    }
  }
}

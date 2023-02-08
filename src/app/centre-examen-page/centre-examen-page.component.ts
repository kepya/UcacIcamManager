import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Centre } from '../shared/models/centre';
import { Site } from '../shared/models/site';
import { SiteService } from '../site-page/site.service';
import { CentreExamenService } from './centre-examen.service';

@Component({
  selector: 'app-centre-examen-page',
  templateUrl: './centre-examen-page.component.html',
  styles: [
  ]
})
export class CentreExamenPageComponent implements OnInit {

  centres: Centre[] = [];
  centre!: Centre;
  sites: Site[] = [];
  searchCentres: Centre[] = [];
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
  isFormCentre!: boolean;

  formCentre: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    contacts: new FormControl('', [Validators.required]),
    siteid: new FormControl('', [Validators.required]),
    ville: new FormControl('', []),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private centreSrv: CentreExamenService, private siteSrv: SiteService) { }

  ngOnInit(): void {
    this.sortProperty = "nom";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getCentres();
  }

  sort(property: string, centres: Centre[] = this.centres) {
    console.log("centre", centres);

    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'nom') {
      if (this.isAsc) {
        centres.sort((a, b) => {
          if (a.nom > b.nom) {
            return 1;
          }
          if (b.nom > a.nom) {
            return -1;
          }
          return 0;
        });
      } else {
        centres.sort((a, b) => {
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

    if (property === 'site') {
      if (this.isAsc) {
        centres.sort((a, b) => {
          if (a.site.nom > b.site.nom) {
            return 1;
          }
          if (b.site.nom > a.site.nom) {
            return -1;
          }
          return 0;
        });
      } else {
        centres.sort((a, b) => {
          if (a.site.nom > b.site.nom) {
            return -1;
          }
          if (b.site.nom > a.site.nom) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'contacts') {
      if (this.isAsc) {
        centres.sort((a, b) => {
          if (a.contacts > b.contacts) {
            return 1;
          }
          if (b.contacts > a.contacts) {
            return -1;
          }
          return 0;
        });
      } else {
        centres.sort((a, b) => {
          if (a.contacts > b.contacts) {
            return -1;
          }
          if (b.contacts > a.contacts) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'ville') {
      if (this.isAsc) {
        centres.sort((a, b) => {
          if (a.ville > b.ville) {
            return 1;
          }
          if (b.ville > a.ville) {
            return -1;
          }
          return 0;
        });
      } else {
        centres.sort((a, b) => {
          if (a.ville > b.ville) {
            return -1;
          }
          if (b.ville > a.ville) {
            return 1;
          }
          return 0;
        });
      }
    }

    return centres;
  }

  get formCentreControl(): { [key: string]: AbstractControl } {
    return this.formCentre.controls;
  }

  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let names = this.searchCentres.map(centre => centre.nom);
      let name = names.filter(name => name.toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);

      if (name.length === 0) {
        this.centres = [];
      } else {
        let centres: Centre[] = [];
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          let z = this.searchCentres.filter(centre => centre.nom.indexOf('' + element) > -1);
          centres.push(...z);
        }
        this.centres = centres;
      }
    } else {
      this.centres = this.searchCentres;
    }
  }

  next() {
    this.page++;
    this.getCentres();
  }

  previous() {
    this.page--;
    this.getCentres();
  }

  getCentres() {
    this.centreSrv.liste().subscribe({
      next: (value: Centre[]) => {
        value = this.sort('nom', value);
        this.searchCentres = [];
        this.searchCentres = value;
        this.centres = value
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

  viewCentre(view: string = 'data') {
    if (view === 'data') {
      this.isFormCentre = false;
    } else {
      this.isFormCentre = true;
      this.getSites();
    }
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

  updateCentre(centre: Centre) {
    this.isFormCentre = true;
    this.centre = centre;
    this.formCentre.setValue({
      nom: centre.nom,
      contacts: centre.contacts,
      ville: centre.ville,
      siteid: centre.siteid
    });
  }

  createOrUpdateCentre() {
    let site: Site = new Site();
    if (this.centre?.id || 0 > 0) {
      this.centreSrv.update({ ...this.formCentre.value, site }).subscribe({
        next: (value) => {
          this.getCentres();
          this.centre = new Centre();
          this.formCentre.reset();
          this.isFormCentre = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    } else {
      this.centreSrv.create({ ...this.formCentre.value, Site }).subscribe({
        next: (value) => {
          this.getCentres();
          this.centre = new Centre();
          this.formCentre.reset();
          this.isFormCentre = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    }
  }
}

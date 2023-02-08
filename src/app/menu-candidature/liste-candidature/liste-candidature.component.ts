import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Candidature } from 'src/app/shared/models/compte';
import { Site } from 'src/app/shared/models/site';
import { SiteService } from 'src/app/site-page/site.service';
import { CandidatureService } from '../candidature.service';

@Component({
  selector: 'app-liste-candidature',
  templateUrl: './liste-candidature.component.html',
  styles: [
  ]
})
export class ListeCandidatureComponent implements OnInit {

  candidatures: Candidature[] = [];
  candidature!: Candidature;
  sites: Site[] = [];
  searchCandidatures: Candidature[] = [];
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
  isFormCandidature!: boolean;

  formCandidature: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    contacts: new FormControl('', [Validators.required]),
    siteid: new FormControl('', [Validators.required]),
    ville: new FormControl('', []),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private candidatureSrv: CandidatureService, private siteSrv: SiteService) { }

  ngOnInit(): void {
    this.sortProperty = "nom";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getCandidatures();
  }

  sort(property: string, candidatures: Candidature[] = this.candidatures) {
    console.log("candidature", candidatures);

    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'name') {
      if (this.isAsc) {
        candidatures.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      } else {
        candidatures.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (b.name > a.name) {
            return 1;
          }
          return 0;
        });
      }
    }

    // if (property === 'site') {
    //   if (this.isAsc) {
    //     candidatures.sort((a, b) => {
    //       if (a.site.nom > b.site.nom) {
    //         return 1;
    //       }
    //       if (b.site.nom > a.site.nom) {
    //         return -1;
    //       }
    //       return 0;
    //     });
    //   } else {
    //     candidatures.sort((a, b) => {
    //       if (a.site.nom > b.site.nom) {
    //         return -1;
    //       }
    //       if (b.site.nom > a.site.nom) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //   }
    // }

    // if (property === 'contacts') {
    //   if (this.isAsc) {
    //     candidatures.sort((a, b) => {
    //       if (a.contacts > b.contacts) {
    //         return 1;
    //       }
    //       if (b.contacts > a.contacts) {
    //         return -1;
    //       }
    //       return 0;
    //     });
    //   } else {
    //     candidatures.sort((a, b) => {
    //       if (a.contacts > b.contacts) {
    //         return -1;
    //       }
    //       if (b.contacts > a.contacts) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //   }
    // }

    // if (property === 'ville') {
    //   if (this.isAsc) {
    //     candidatures.sort((a, b) => {
    //       if (a.ville > b.ville) {
    //         return 1;
    //       }
    //       if (b.ville > a.ville) {
    //         return -1;
    //       }
    //       return 0;
    //     });
    //   } else {
    //     candidatures.sort((a, b) => {
    //       if (a.ville > b.ville) {
    //         return -1;
    //       }
    //       if (b.ville > a.ville) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //   }
    // }

    return candidatures;
  }

  get formCandidatureControl(): { [key: string]: AbstractControl } {
    return this.formCandidature.controls;
  }

  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    // if (this.searchValue !== '') {
    //   let names = this.searchCandidatures.map(candidature => candidature.nom);
    //   let name = names.filter(name => name.toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);

    //   if (name.length === 0) {
    //     this.candidatures = [];
    //   } else {
    //     let candidatures: Candidature[] = [];
    //     for (let index = 0; index < name.length; index++) {
    //       const element = name[index];
    //       let z = this.searchCandidatures.filter(candidature => candidature.nom.indexOf('' + element) > -1);
    //       candidatures.push(...z);
    //     }
    //     this.candidatures = candidatures;
    //   }
    // } else {
    //   this.candidatures = this.searchCandidatures;
    // }
  }

  next() {
    this.page++;
    this.getCandidatures();
  }

  previous() {
    this.page--;
    this.getCandidatures();
  }

  getCandidatures() {
    // this.candidatureSrv.liste().subscribe({
    //   next: (value: Candidature[]) => {
    //     value = this.sort('nom', value);
    //     this.searchCandidatures = [];
    //     this.searchCandidatures = value;
    //     this.candidatures = value
    //       .map((mis, i) => ({ id: i + 1, ...mis }))
    //       .slice(
    //         (this.page - 1) * this.pageSize,
    //         (this.page - 1) * this.pageSize + this.pageSize
    //       );
    //     this.collectionSize = value.length;
    //     this.nbrOfPage = Math.ceil(value.length / this.pageSize);
    //   },
    //   error: (err) => {
    //     console.log('error: ', err);
    //   }
    // });
  }

  viewCandidature(view: string = 'data') {
    if (view === 'data') {
      this.isFormCandidature = false;
    } else {
      this.isFormCandidature = true;
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

}

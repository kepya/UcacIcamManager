import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Compte } from 'src/app/shared/models/compte';
import { CompteService } from 'src/app/shared/services/compte.service';

@Component({
  selector: 'app-jury-member',
  templateUrl: './jury-member.component.html',
  styles: [
  ]
})
export class JuryMemberComponent implements OnInit {

  comptes: Compte[] = [];
  compte!: Compte;
  searchComptes: Compte[] = [];
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
  isFormCompte!: boolean;

  formCompte: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private compteSrv: CompteService) { }

  ngOnInit(): void {
    this.sortProperty = "nom";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getComptes();
  }

  sort(property: string, comptes: Compte[] = this.comptes) {

    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'nom') {
      if (this.isAsc) {
        comptes.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
      } else {
        comptes.sort((a, b) => {
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

    if (property === 'prenom') {
      if (this.isAsc) {
        comptes.sort((a, b) => {
          if (a.prenom > b.prenom) {
            return 1;
          }
          if (b.prenom > a.prenom) {
            return -1;
          }
          return 0;
        });
      } else {
        comptes.sort((a, b) => {
          if (a.prenom > b.prenom) {
            return -1;
          }
          if (b.prenom > a.prenom) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'email') {
      if (this.isAsc) {
        comptes.sort((a, b) => {
          if (a.email > b.email) {
            return 1;
          }
          if (b.email > a.email) {
            return -1;
          }
          return 0;
        });
      } else {
        comptes.sort((a, b) => {
          if (a.email > b.email) {
            return -1;
          }
          if (b.email > a.email) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'telephone') {
      if (this.isAsc) {
        comptes.sort((a, b) => {
          if (a.telephone > b.telephone) {
            return 1;
          }
          if (b.telephone > a.telephone) {
            return -1;
          }
          return 0;
        });
      } else {
        comptes.sort((a, b) => {
          if (a.telephone > b.telephone) {
            return -1;
          }
          if (b.telephone > a.telephone) {
            return 1;
          }
          return 0;
        });
      }
    }

    return comptes;
  }

  get formCompteControl(): { [key: string]: AbstractControl } {
    return this.formCompte.controls;
  }

  handlePageSize(event: any) {
    ;
    this.getComptes();
  }

  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let names = this.searchComptes.map(compte => compte.name);
      let name = names.filter(name => name.toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);

      if (name.length === 0) {
        this.comptes = [];
      } else {
        let comptes: Compte[] = [];
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          let z = this.searchComptes.filter(compte => compte.name.indexOf('' + element) > -1);
          comptes.push(...z);
        }
        this.comptes = comptes;
      }
    } else {
      this.comptes = this.searchComptes;
    }
  }

  next() {
    this.page++;
    this.getComptes();
  }

  previous() {
    this.page--;
    this.getComptes();
  }

  getComptes() {
    this.compteSrv.liste().subscribe({
      next: (value: Compte[]) => {
        value = this.sort('nom', value);
        this.searchComptes = [];
        this.searchComptes = value;
        this.comptes = value
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

  viewCompte(view: string = 'data') {
    if (view === 'data') {
      this.isFormCompte = false;
    } else {
      this.isFormCompte = true;
    }
  }

  updateCompte(compte: Compte) {
    this.isFormCompte = true;
    this.compte = compte;
    this.formCompte.setValue({
      name: compte.name,
      prenom: compte.prenom,
      telephone: compte.telephone,
      email: compte.email
    })
  }

  createOrUpdateCompte() {
    if (this.compte?.id || 0 > 0) {
      this.compteSrv.update({ ...this.formCompte.value, id: this.compte?.id }).subscribe({
        next: (value) => {
          this.getComptes();
          this.compte = new Compte();
          this.formCompte.reset();
          this.isFormCompte = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    } else {
      this.compteSrv.create({ ...this.formCompte.value }).subscribe({
        next: (value) => {
          this.getComptes();
          this.compte = new Compte();
          this.formCompte.reset();
          this.isFormCompte = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    }
  }
}

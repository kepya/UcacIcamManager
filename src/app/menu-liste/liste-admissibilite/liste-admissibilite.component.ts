import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/menu-candidature/candidature.service';
import { Cycle } from 'src/app/shared/enums/cycle.enum';
import { Genre } from 'src/app/shared/enums/genre.enum';
import { Langue } from 'src/app/shared/enums/langue.enum';
import { Role } from 'src/app/shared/enums/role.enum';
import { Statut } from 'src/app/shared/enums/statut.enum';
import { Candidature } from 'src/app/shared/models/compte';
import { SiteService } from 'src/app/shared/services/site.service';

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

  constructor(private candidatureSrv: CandidatureService, private siteSrv: SiteService) { }

  ngOnInit(): void {
    this.sortProperty = "nom";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getCandidatures();
    this.candidatures = [{
      Lieu_de_naissance: "",
      Date_naissance: "",
      Nationalite: "",
      Dernier_Etablissement: "",
      Tel_pere: "",
      Tel_mere: "",
      email_pere: "",
      email_mere: "",
      Formation1: "",
      Formation2: "",
      Formation3: "",
      centre: "Centre de Douala",
      Paiement: "",
      Reference_paiement: "",
      Image: "",
      telephone_paiement: "",
      ville: "",
      code_examen: 0,
      nombre_choix: 0,
      CompteID: 0,
      cycle: Cycle.premier,
      statut: Statut.En_Attente,
      Genre: Genre.M,
      langue: Langue.Francais,
      compte: {
        name: "Christian",
        prenom: "kepya",
        password: "",
        email: "",
        telephone: "",
        role: Role.CANDIDAT,
        id_disponibilite: 0,
      }
    }]
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
    ;
    this.getCandidatures();
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
    this.getCandidatures();
  }

  previous() {
    this.page--;
    this.getCandidatures();
  }

  getCandidatures() {
    this.candidatureSrv.liste().subscribe({
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
}


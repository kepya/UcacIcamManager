import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Role } from 'src/app/shared/enums/role.enum';
import { Compte } from 'src/app/shared/models/compte';
import { CompteService } from 'src/app/shared/services/compte.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { Zone } from "src/app/shared/models/zone";

@Component({
  selector: 'app-comptable',
  templateUrl: './comptable.component.html',
  styles: [
  ]
})
export class ComptableComponent implements OnInit {
  zones: Zone[] = [];
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
    idZone: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private confirmationService: ConfirmationService,private zoneSrv: ZoneService, private compteSrv: CompteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.sortProperty = "name";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getComptes();
    this.getZones();
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

  confirm(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Êtes vous sures de vouloir continuer ?',
      icon: 'pi pi-question',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.deleteCompte(id)
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Non', detail: 'vous avez annulé la suppresion' });
      }
    });
  }

  sort(property: string, comptes: Compte[] = this.comptes) {

    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'name') {
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
    this.page = 1;
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
    this.compteSrv.findByRole(Role.COMPTABLE).subscribe({
      next: (response: Compte[]) => {
        let value = this.sort('name', response);
        this.searchComptes = [];
        this.searchComptes = value;
        this.comptes = value;
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
      this.compte = new Compte();
      this.isFormCompte = false;
    } else {
      this.isFormCompte = true;
    }
  }

  updateCompte(compte: Compte) {
    this.isFormCompte = true;
    this.compte = compte;
    this.formCompte.patchValue({
      name: compte.name,
      prenom: compte.prenom,
      idZone: compte.idZone,
      telephone: compte.telephone,
      email: compte.email
    })
  }

  createOrUpdateCompte() {
    if (this.compte?.id || 0 > 0) {
      this.compteSrv.update({ ...this.formCompte.value, id: this.compte?.id, role: Role.COMPTABLE }).subscribe({
        next: (value) => {
          this.getComptes();
          this.compte = new Compte();
          this.formCompte.reset();
          this.messageService.add({ severity: 'success', summary: 'Modification de compte comptable', detail: 'Modification effectuée avec success' });
          this.isFormCompte = false;
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: `Erreur de creation`, detail: err.error });
        }
      })
    } else {
      this.compteSrv.create({ ...this.formCompte.value, role: Role.COMPTABLE }).subscribe({
        next: (value) => {
          this.getComptes();
          this.compte = new Compte();
          this.formCompte.reset();
          this.messageService.add({ severity: 'success', summary: 'Création de compte comptable', detail: 'Création effectuée avec success' });

          this.isFormCompte = false;
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: `Erreur de creation`, detail: err.error });
        }
      })
    }
  }

  deleteCompte(id: number) {
    this.compteSrv.delete(id || 0).subscribe({
      next: (value) => {
        this.getComptes();
        this.messageService.add({ severity: 'success', summary: 'Suppression de compte comptable', detail: 'Suppression effectuée avec success' });
      },
      error: (err) => {
        console.log("Error: ", err);
        this.messageService.add({ severity: 'error', summary: `Erreur de suppression`, detail: err.message });
      }
    })
  }
}

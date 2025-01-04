import { Role } from 'src/app/shared/enums/role.enum';
import { MatterService } from './../../shared/services/matiere.service';
import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/shared/models/compte';
import { Matter, MatterCycleParcours } from 'src/app/shared/models/matter';
import { StorageService } from 'src/app/shared/services/storage.service';
import { MessageService } from 'primeng/api';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-matiere',
  templateUrl: './gestion-matiere.component.html',
  styles: [
  ]
})
export class GestionMatiereComponent implements OnInit {
  matters: Matter[] = [];
  matter!: Matter;
  matterCycleParcours: MatterCycleParcours[] = [];
  searchMatters: Matter[] = [];
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
  isFormMatter!: boolean;
  compte!: Compte;

  isJury: boolean = false;
  isSuperAdmin: boolean = false;
  isAdmin: boolean = false;

  formMatter: FormGroup = new FormGroup({
    intitule: new FormControl('', [Validators.required]),
    duree: new FormControl(0, [Validators.required, Validators.min(1)]),
    coefficient: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

  get formMatterControl(): { [key: string]: AbstractControl } {
    return this.formMatter.controls;
  }

  constructor(private matterService:MatterService, private storageService: StorageService,private messageService: MessageService,) { }

  ngOnInit(): void {
    this.sortProperty = "horaire";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.compte = this.storageService.getUserConnected();
    this.isJury = this.compte.role == Role.JURY ? true : false;
    this.isAdmin = this.compte.role == Role.ADMIN ? true : false;
    this.isSuperAdmin = this.compte.role == Role.SUPER_ADMIN ? true : false;
    this.getAllMatters();
  }

  handlePageSize(event: any) {
    this.page = 1;
    this.getAllMatters();
  }

  sort(property: string, matters: Matter[] = this.matters) {
    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'duree') {
      if (this.isAsc) {
        matters.sort((a, b) => {
          if (a.duree > b.duree) {
            return 1;
          }
          if (b.duree > a.duree) {
            return -1;
          }
          return 0;
        });
      } else {
        matters.sort((a, b) => {
          if (a.duree > b.duree) {
            return -1;
          }
          if (b.duree > a.duree) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'coefficient') {
      if (this.isAsc) {
        matters.sort((a, b) => {
          if (a.coefficient > b.coefficient) {
            return 1;
          }
          if (b.coefficient > a.coefficient) {
            return -1;
          }
          return 0;
        });
      } else {
        matters.sort((a, b) => {
          if (a.coefficient > b.coefficient) {
            return -1;
          }
          if (b.coefficient > a.coefficient) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'intitule') {
      if (this.isAsc) {
        matters.sort((a, b) => {
          if (a.intitule > b.intitule) {
            return 1;
          }
          if (b.intitule > a.intitule) {
            return -1;
          }
          return 0;
        });
      } else {
        matters.sort((a, b) => {
          if (a.intitule > b.intitule) {
            return -1;
          }
          if (b.intitule > a.intitule) {
            return 1;
          }
          return 0;
        });
      }
    }

    return matters;
  }

  viewMatter(view: string = 'data') {
    if (view === 'data') {
      this.matter = new Matter();
      this.isFormMatter = false;
    } else {
      this.isFormMatter = true;
    }
  }
  
  showUpdateMatterView(matter: Matter) {
    this.matter = matter;
    this.viewMatter('update');
  }

  createOrUpdateMatter() {
    if (this.matter?.id || 0 > 0) {
      this.matter.coefficient = parseInt(this.formMatter.value.coefficient, 10);
      this.matter.duree = parseInt(this.formMatter.value.duree, 10);
      this.matter.intitule = this.formMatter.value.intitule;

      this.matterService.update({ ...this.matter }).subscribe({
        next: (value) => {
          this.getAllMatters();
          this.matter = new Matter();
          this.formMatter.reset();
          this.isFormMatter = false;
          this.messageService.add({ severity: 'success', summary: 'Modification de la matière', detail: 'Modification de la matière des évaluations effectuée avec success' });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: `Erreur de modification`, detail: err.message });
          console.log("Error: ", err);
        }
      })
    } else {
      this.matterService.create({...this.formMatter.value}).subscribe({
        next: (value) => {
          this.getAllMatters();
          this.matter = new Matter();
          this.formMatter.reset();
          this.isFormMatter = false;
          this.messageService.add({ severity: 'success', summary: 'Création de la matière', detail: 'Création de la matière des évaluations effectuée avec success' });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: `Erreur de création`, detail: err.message });
          console.log("Error: ", err);
        }
      });
    }
  }

  getAllMatters() {
    this.matterService.liste().subscribe({
      next: (matters) => {
        matters = this.sort('intitule', matters);
        this.searchMatters = [];
        this.searchMatters = matters;

        this.matters = matters
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = matters.length;
        this.nbrOfPage = Math.ceil(matters.length / this.pageSize);
      }
    })
  }

  getAllMattersCyleParcours() {
    this.matterService.listeByCyleParcours().subscribe({
      next: (matters) => {
        this.matterCycleParcours = matters;
      }
    })
  }

  next() {
    this.page++;
    this.getAllMatters();
  }

  previous() {
    this.page--;
    this.getAllMatters();
  }

  
  deleteMatter(id: number) {
    this.matterService.delete(id || 0).subscribe({
      next: (value) => {
        this.getAllMatters();
        this.messageService.add({ severity: 'success', summary: 'Suppression de matière', detail: 'Suppression effectuée avec success' });
      },
      error: (err) => {
        console.log("Error: ", err);
        this.messageService.add({ severity: 'error', summary: `Erreur de suppression`, detail: err.message });
      }
    })
  }
}

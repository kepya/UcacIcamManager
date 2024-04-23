import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/shared/enums/role.enum';
import { MatterService } from './../../shared/services/matiere.service';
import { Compte } from 'src/app/shared/models/compte';
import { Matter, MatterCycleParcours } from 'src/app/shared/models/matter';
import { StorageService } from 'src/app/shared/services/storage.service';
import { MessageService } from 'primeng/api';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Epreuve } from 'src/app/shared/models/epreuve';
import { EpreuveService } from 'src/app/shared/services/epreuve.service';
import { Session } from 'src/app/shared/models/session';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';

@Component({
  selector: 'app-gestion-epreuve',
  templateUrl: './gestion-epreuve.component.html',
  styles: [
  ]
})
export class GestionEpreuveComponent implements OnInit {
  matters: Matter[] = [];
  sessions: Session[] = [];
  epreuves: Epreuve[] = [];
  epreuve!: Epreuve;
  searchEpreuves: Epreuve[] = [];
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
  isFormEpreuve!: boolean;
  compte!: Compte;

  uploadedFile!: string;
  selectedFile! : File;

  isJury: boolean = false;
  isSuperAdmin: boolean = false;
  isAdmin: boolean = false;

  formEpreuve: FormGroup = new FormGroup({
    sessionId: new FormControl(0, [Validators.required, Validators.min(1)]),
    matiereId: new FormControl(0, [Validators.required, Validators.min(1)]),
    file: new FormControl(null, [Validators.required]),
  });

  get formEpreuveControl(): { [key: string]: AbstractControl } {
    return this.formEpreuve.controls;
  }

  constructor(private epreuveService:EpreuveService,private matterService:MatterService,private sessionSrv: SessionExamenService, private storageService: StorageService,private messageService: MessageService,) { }

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
    this.getAllEpreuves();
    this.getSessions();
    this.  getAllMatters();
  }

  handlePageSize(event: any) {
    this.page = 1;
    this.getAllEpreuves();
  }

  sort(property: string, epreuves: Epreuve[] = this.epreuves) {
    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'matiere') {
      if (this.isAsc) {
        epreuves.sort((a, b) => {
          if (a.matiere.intitule > b.matiere.intitule) {
            return 1;
          }
          if (b.matiere.intitule > a.matiere.intitule) {
            return -1;
          }
          return 0;
        });
      } else {
        epreuves.sort((a, b) => {
          if (a.matiere.intitule > b.matiere.intitule) {
            return -1;
          }
          if (b.matiere.intitule > a.matiere.intitule) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'session') {
      if (this.isAsc) {
        epreuves.sort((a, b) => {
          if (a.session!.nom > b.session!.nom) {
            return 1;
          }
          if (b.session!.nom > a.session!.nom) {
            return -1;
          }
          return 0;
        });
      } else {
        epreuves.sort((a, b) => {
          if (a.session!.nom > b.session!.nom) {
            return -1;
          }
          if (b.session!.nom > a.session!.nom) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'path') {
      if (this.isAsc) {
        epreuves.sort((a, b) => {
          if (a.path > b.path) {
            return 1;
          }
          if (b.path > a.path) {
            return -1;
          }
          return 0;
        });
      } else {
        epreuves.sort((a, b) => {
          if (a.path > b.path) {
            return -1;
          }
          if (b.path > a.path) {
            return 1;
          }
          return 0;
        });
      }
    }

    return epreuves;
  }

  viewEpreuve(view: string = 'data') {
    if (view === 'data') {
      this.epreuve = new Epreuve();
      this.isFormEpreuve = false;
    } else {
      this.isFormEpreuve = true;
    }
  }

  getSessions() {
    this.sessionSrv.liste().subscribe({
      next: (value: Session[]) => {
        this.sessions = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  
  showUpdateEpreuveView(epreuve: Epreuve) {
    this.epreuve = epreuve;
    this.viewEpreuve('update');
  }

  createOrUpdateEpreuve() {
    if (this.epreuve?.id || 0 > 0) {
      this.epreuve.matiereId = parseInt(this.formEpreuve.value.matiereId, 10);
      this.epreuve.sessionId = parseInt(this.formEpreuve.value.sessionId, 10);
      // this.epreuve.file = this.uploadedFile;

      this.epreuveService.update({ ...this.epreuve }).subscribe({
        next: (value) => {
          this.getAllEpreuves();
          this.epreuve = new Epreuve();
          this.formEpreuve.reset();
          this.isFormEpreuve = false;
          this.messageService.add({ severity: 'success', summary: "Modification de l'epreuve", detail: "Modification de l'epreuve des évaluations effectuée avec success" });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: `Erreur de modification`, detail: err.message });
          console.log("Error: ", err);
        }
      })
    } else {
      this.epreuveService.create({...this.formEpreuve.value, file: this.selectedFile,},  this.selectedFile,).subscribe({
        next: (value) => {
          this.getAllEpreuves();
          this.epreuve = new Epreuve();
          this.formEpreuve.reset();
          this.isFormEpreuve = false;
          this.messageService.add({ severity: 'success', summary: "Création de l'epreuve", detail: "Création de l'epreuve des évaluations effectuée avec success" });
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: `Erreur de création`, detail: err.message });
          console.log("Error: ", err);
        }
      });
    }
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  async onFileChanged(event: any) {
    this.uploadedFile = (await this.convertBlobToBase64(event.target.files[0])) as string;
    this.selectedFile = event!.target!.files[0] as File;
  }

  getAllEpreuves() {
    this.epreuveService.liste().subscribe({
      next: (epreuves) => {
        epreuves = this.sort('intitule', epreuves);
        this.searchEpreuves = [];
        this.searchEpreuves = epreuves;

        this.epreuves = epreuves
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = epreuves.length;
        this.nbrOfPage = Math.ceil(epreuves.length / this.pageSize);
      }
    })
  }

  
  getAllMatters() {
    this.matterService.liste().subscribe({
      next: (matters) => {
       this.matters = matters;
      }
    })
  }


  next() {
    this.page++;
    this.getAllEpreuves();
  }

  previous() {
    this.page--;
    this.getAllEpreuves();
  }

  
  deleteEpreuve(id: number) {
    this.epreuveService.delete(id || 0).subscribe({
      next: (value) => {
        this.getAllEpreuves();
        this.messageService.add({ severity: 'success', summary: "Suppression d'épreuve", detail: 'Suppression effectuée avec success' });
      },
      error: (err) => {
        console.log("Error: ", err);
        this.messageService.add({ severity: 'error', summary: `Erreur de suppression`, detail: err.message });
      }
    })
  }
}

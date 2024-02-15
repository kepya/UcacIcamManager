import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CentreExamenService } from 'src/app/centre-examen-page/centre-examen.service';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Compte } from 'src/app/shared/models/compte';
import { CompteDisponibilite } from 'src/app/shared/models/entretient';
import { Session } from 'src/app/shared/models/session';
import { CommonService } from 'src/app/shared/services/common.service';
import { CompteDisponibiliteService } from 'src/app/shared/services/compte-disponibilite.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { Zone } from 'src/app/shared/models/zone';

@Component({
  selector: 'app-gestion-disponibilite',
  templateUrl: './gestion-disponibilite.component.html',
  styles: [
  ]
})
export class GestionDisponibiliteComponent implements OnInit {
  loading: boolean = false;
  sortIcon!: string;
  sortProperty!: string;
  isAsc!: boolean;
  downUpIcon!: string;
  searchValue!: string;
  page!: number;
  totalElement!: number;
  pageSize!: number;
  collectionSize!: number;
  nbrOfPage!: number;
  disponibilities: CompteDisponibilite[] = [];
  searchDisponibilities: CompteDisponibilite[] = [];

  actifOption!: string;
  searchOption!: string;
 
  session!: Session;

  compte!: Compte;

  constructor(private centreSrv: CentreExamenService, private storageService: StorageService, private zoneService: ZoneService, private commonSrv : CommonService,
    private messageService: MessageService, private confirmationService: ConfirmationService, private compteDisponibiliteService: CompteDisponibiliteService, private commonService: CommonService, private sessionSrv: SessionExamenService) { }

  ngOnInit(): void {
    this.sortProperty = "centre";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getCompteDisponibilite();
this.compte = this.storageService.getUserConnected();
  }

  handlePageSize(event: any) {
    this.page = 1;
    this.getCompteDisponibilite();
  }

  getCompteDisponibilite() {
    this.compteDisponibiliteService.liste().subscribe({
      next: (disponibilities: CompteDisponibilite[]) => {
        this.totalElement = disponibilities.length;

        disponibilities = disponibilities.map((v) => {
          return {
            id:v!.id ?? 0,
            compteId: v.compteId,
            disponibilite_id: v.disponibilite_id,
            compte: v.compte,
            disponibilite: {
              id: v.disponibilite!.id,
              sessionid: v.disponibilite!.sessionid, 
              date_disponibilite: new Date(v.disponibilite!.date_disponibilite.toString()),
              debut_disponibilite: v.disponibilite!.debut_disponibilite,
              fin_disponibilite: v.disponibilite!.fin_disponibilite,
            }
          };
        });

        this.searchDisponibilities = disponibilities;

        disponibilities = this.sort('nom', disponibilities);
        this.disponibilities = disponibilities
          .map((mis, i) => ({  ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = disponibilities.length;
        this.nbrOfPage = Math.ceil(disponibilities.length / this.pageSize);
      },      error: (err) => {
        console.log('error: ', err);
      }
    })
  }

  sort(property: string, disponibilities: CompteDisponibilite[] = this.disponibilities) {
    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'nom') {
      if (this.isAsc) {
        disponibilities.sort((a, b) => {
          if (a.compte!.name > b.compte!.name) {
            return 1;
          }
          if (b.compte!.name > a.compte!.name) {
            return -1;
          }
          return 0;
        });
      } else {
        disponibilities.sort((a, b) => {
          if (a.compte!.name > b.compte!.name) {
            return -1;
          }
          if (b.compte!.name > a.compte!.name) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'prenom') {
      if (this.isAsc) {
        disponibilities.sort((a, b) => {
          if (a.compte!.prenom > b.compte!.prenom) {
            return 1;
          }
          if (b.compte!.prenom > a.compte!.prenom) {
            return -1;
          }
          return 0;
        });
      } else {
        disponibilities.sort((a, b) => {
          if (a.compte!.prenom > b.compte!.prenom) {
            return -1;
          }
          if (b.compte!.prenom > a.compte!.prenom) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'date_disponibilite') {
      if (this.isAsc) {
        disponibilities.sort((a, b) => {
          if (a.disponibilite!.date_disponibilite > b.disponibilite!.date_disponibilite) {
            return 1;
          }
          if (b.disponibilite!.date_disponibilite > a.disponibilite!.date_disponibilite) {
            return -1;
          }
          return 0;
        });
      } else {
        disponibilities.sort((a, b) => {
          if (a.disponibilite!.date_disponibilite > b.disponibilite!.date_disponibilite) {
            return -1;
          }
          if (b.disponibilite!.date_disponibilite > a.disponibilite!.date_disponibilite) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'debut_disponibilite') {
      if (this.isAsc) {
        disponibilities.sort((a, b) => {
          if (a.disponibilite!.debut_disponibilite > b.disponibilite!.debut_disponibilite) {
            return 1;
          }
          if (b.disponibilite!.debut_disponibilite > a.disponibilite!.debut_disponibilite) {
            return -1;
          }
          return 0;
        });
      } else {
        disponibilities.sort((a, b) => {
          if (a.disponibilite!.debut_disponibilite > b.disponibilite!.debut_disponibilite) {
            return -1;
          }
          if (b.disponibilite!.debut_disponibilite > a.disponibilite!.debut_disponibilite) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'fin_disponibilite') {
      if (this.isAsc) {
        disponibilities.sort((a, b) => {
          if (a.disponibilite!.fin_disponibilite > b.disponibilite!.fin_disponibilite) {
            return 1;
          }
          if (b.disponibilite!.fin_disponibilite > a.disponibilite!.fin_disponibilite) {
            return -1;
          }
          return 0;
        });
      } else {
        disponibilities.sort((a, b) => {
          if (a.disponibilite!.fin_disponibilite > b.disponibilite!.fin_disponibilite) {
            return -1;
          }
          if (b.disponibilite!.fin_disponibilite > a.disponibilite!.fin_disponibilite) {
            return 1;
          }
          return 0;
        });
      }
    }

    return disponibilities;
  }

  
  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let result = this.searchDisponibilities.filter(entretiens => (entretiens.compte!.name.indexOf(this.searchValue) > -1) || 
      (entretiens.compte!.prenom.indexOf(this.searchValue) > -1)
      );

      this.disponibilities = result;
    } else {
      this.disponibilities = this.searchDisponibilities;
    }
  }

  next() {
    this.page++;
this.getCompteDisponibilite() ;
  }

  previous() {
    this.page--;
    this.getCompteDisponibilite() ;
  }
  
  confirm(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Êtes vous sures de vouloir continuer ?',
      icon: 'pi pi-question',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.deleteCompteDisponibilite(id)
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Non', detail: 'vous avez annulé la suppresion' });
      }
    });
  }

  deleteCompteDisponibilite(id: number) {
    this.compteDisponibiliteService.delete(id || 0).subscribe({
      next: (value) => {
        this.getCompteDisponibilite();
        this.messageService.add({ severity: 'success', summary: "Suppression de la disponibilité de l'intervenant", detail: 'Suppression effectuée avec success' });
      },
      error: (err) => {
        console.log("Error: ", err);
        this.messageService.add({ severity: 'error', summary: `Erreur de suppression`, detail: err.message });
      }
    })
  }
 
}

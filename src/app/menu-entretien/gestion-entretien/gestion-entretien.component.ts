import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CentreExamenService } from 'src/app/centre-examen-page/centre-examen.service';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Role } from 'src/app/shared/enums/role.enum';
import { Candidature, Compte } from 'src/app/shared/models/compte';
import { Entretien, Note, NoteResponse } from 'src/app/shared/models/note';
import { CommonService } from 'src/app/shared/services/common.service';
import { CompteDisponibiliteService } from 'src/app/shared/services/compte-disponibilite.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { Zone } from 'src/app/shared/models/zone';
import { Centre } from 'src/app/shared/models/centre';
import { Site } from 'src/app/shared/models/site';
import { Session } from 'src/app/shared/models/session';

@Component({
  selector: 'app-gestion-entretien',
  templateUrl: './gestion-entretien.component.html',
  styles: [
  ]
})
export class GestionEntretienComponent implements OnInit {
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
  entretiens: Entretien[] = [];
  searchEntretiens: Entretien[] = [];

  isJury: boolean = false;

  actifOption!: string;
  searchOption!: string;

  zones: Zone[] = [];
  zone!: Zone;
  sites: Site[] = [];
  site!: Site;
  centres: Centre[] = [];
  centre!: Centre;

  compte!: Compte;
  session!: Session;
  statuses!: any[];

  selectedEntretien: any;

  constructor(private centreSrv: CentreExamenService, private storageService: StorageService, private zoneService: ZoneService,
    private messageService: MessageService, public commonService: CommonService, private confirmationService: ConfirmationService, private noteService: NoteService, private compteDisponibiliteService: CompteDisponibiliteService,
    private sessionSrv: SessionExamenService) { }

  ngOnInit(): void {
    this.compte = this.storageService.getUserConnected();
    this.isJury = this.compte.role == Role.JURY ? true : false;

    this.statuses = this.commonService.getStatuses();
    this.sortProperty = "centre";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.compte = this.storageService.getUserConnected();
    this.getActiveSession();
    this.getEntretiens();
  }

  getActiveSession() {
    this.sessionSrv.getActive().subscribe({
      next: (value) => {
        this.session = value;
      },
    })
  }

  handlePageSize(event: any) {
    this.page = 1;
    if (this.actifOption == 'centre') {
      this.getCentre(this.centre.id ?? 0);
    }
  }

  getEventValue(event: any) {
    return event.target != null ? event.target.value : '';
  }

  handleCycleSelect(event: any) {
    this.getEntretiensByCenter(event.target.value);
  }

  handleCentreSelect(event: any) {
    this.centre = this.centres.find(s => s.id == event.target.value) as unknown as Centre;
    this.getCentre(event.target.value ?? 0);
  }

  handleCategorieSelect(event: any) {
    if (this.compte.role == Role.SUPER_ADMIN) {
      if (event.target.value == 'centre') {
        this.getCentres();
      }
    }
  }

  getCentre(idCentre: number) {
    this.actifOption = 'centre';
    this.centreSrv.getOne(idCentre).subscribe({
      next: (value: Centre) => {
        this.centres = [value];
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getEntretiens() {
    this.noteService.liste().subscribe({
      next: (result: NoteResponse[]) => {
        let entretiens = result.map((v) => {
          return {
            id: v!.id ?? 0,
            candidat: v.candidature.compte?.name + ' ' + v.candidature.compte?.prenom,
            commentaires: v.commentaires, 
            done: v.done,
            cycle: v.candidature!.cycle.toString(),
            centre: v.candidature?.centre || '',
            jury: v.compte?.name + ' ' + v.compte?.prenom,
            candidature: v.candidature as unknown as Candidature,
            debut_entretien: new Date(v.debut_entretien),
            fin_entretien: new Date(v.fin_entretien),
          };
        });

        if (this.compte.role == Role.JURY) {
          entretiens = entretiens.filter(e => e.jury == (this.compte.name + ' ' + this.compte.prenom))
        }

        this.searchEntretiens = entretiens;

        this.totalElement = entretiens.length;

        entretiens = this.sort('nom', entretiens);
        this.entretiens = entretiens
          .map((mis, i) => ({ ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = entretiens.length;
        this.nbrOfPage = Math.ceil(entretiens.length / this.pageSize);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getEntretiensByCenter(center: string) {
    this.noteService.liste().subscribe({
      next: (result: NoteResponse[]) => {
        let entretiens = result.filter(e => e).map((v) => {
          return {
            id: v!.id ?? 0,
            candidat: v.candidature.compte?.name + ' ' + v.candidature.compte?.prenom,
            commentaires: v.commentaires, 
            done: v.done,
            cycle: v.candidature!.cycle.toString(),
            centre: v.candidature?.centre || '',
            jury: v.compte?.name + ' ' + v.compte?.prenom,
            candidature: v.candidature as unknown as Candidature,
            debut_entretien: new Date(v.debut_entretien),
            fin_entretien: new Date(v.fin_entretien),
          };
        });

        if (this.compte.role == Role.JURY) {
          entretiens = entretiens.filter(e => (e.jury == (this.compte.name + ' ' + this.compte.prenom)) && (e.centre.toLowerCase() == center.toLowerCase()))
        } else {
          entretiens = entretiens.filter(e => e.centre.toLowerCase() == center.toLowerCase());
        }

        this.totalElement = entretiens.length;

        entretiens = this.sort('nom', entretiens);
        this.entretiens = entretiens
          .map((mis, i) => ({ ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = entretiens.length;
        this.nbrOfPage = Math.ceil(entretiens.length / this.pageSize);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getEntretiensByCycle(cycle: string) {
    this.noteService.liste().subscribe({
      next: (result: NoteResponse[]) => {
        let entretiens = result.map((v) => {
          return {
            id: v!.id ?? 0,
            candidat: v.candidature.compte?.name + ' ' + v.candidature.compte?.prenom,
            commentaires: v.commentaires, 
            done: v.done,
            cycle: v.candidature!.cycle.toString(),
            centre: v.candidature?.centre || '',
            jury: v.compte?.name + ' ' + v.compte?.prenom,
            candidature: v.candidature as unknown as Candidature,
            debut_entretien: new Date(v.debut_entretien),
            fin_entretien: new Date(v.fin_entretien),
          };
        });

        if (this.compte.role == Role.JURY) {
          entretiens = entretiens.filter(e => (e.jury == (this.compte.name + ' ' + this.compte.prenom)) && (e.cycle.toLowerCase() == cycle.toLowerCase()))
        } else {
          entretiens = entretiens.filter(e => e.cycle.toLowerCase() == cycle.toLowerCase());
        }

        this.totalElement = entretiens.length;

        entretiens = this.sort('nom', entretiens);
        this.entretiens = entretiens
          .map((mis, i) => ({ ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = entretiens.length;
        this.nbrOfPage = Math.ceil(entretiens.length / this.pageSize);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  sort(property: string, entretiens: Entretien[] = this.entretiens) {
    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'nom') {
      if (this.isAsc) {
        entretiens.sort((a, b) => {
          if (a.candidature.compte.name > b.candidature.compte.name) {
            return 1;
          }
          if (b.candidature.compte.name > a.candidature.compte.name) {
            return -1;
          }
          return 0;
        });
      } else {
        entretiens.sort((a, b) => {
          if (a.candidature.compte.name > b.candidature.compte.name) {
            return -1;
          }
          if (b.candidature.compte.name > a.candidature.compte.name) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'prenom') {
      if (this.isAsc) {
        entretiens.sort((a, b) => {
          if (a.candidature.compte.prenom > b.candidature.compte.prenom) {
            return 1;
          }
          if (b.candidature.compte.prenom > a.candidature.compte.prenom) {
            return -1;
          }
          return 0;
        });
      } else {
        entretiens.sort((a, b) => {
          if (a.candidature.compte.prenom > b.candidature.compte.prenom) {
            return -1;
          }
          if (b.candidature.compte.prenom > a.candidature.compte.prenom) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'debut_entretien') {
      if (this.isAsc) {
        entretiens.sort((a, b) => {
          if (a.debut_entretien > b.debut_entretien) {
            return 1;
          }
          if (b.debut_entretien > a.debut_entretien) {
            return -1;
          }
          return 0;
        });
      } else {
        entretiens.sort((a, b) => {
          if (a.debut_entretien > b.debut_entretien) {
            return -1;
          }
          if (b.debut_entretien > a.debut_entretien) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'jury') {
      if (this.isAsc) {
        entretiens.sort((a, b) => {
          if (a.jury > b.jury) {
            return 1;
          }
          if (b.jury > a.jury) {
            return -1;
          }
          return 0;
        });
      } else {
        entretiens.sort((a, b) => {
          if (a.jury > b.jury) {
            return -1;
          }
          if (b.jury > a.jury) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'centre') {
      if (this.isAsc) {
        entretiens.sort((a, b) => {
          if (a.centre > b.centre) {
            return 1;
          }
          if (b.centre > a.centre) {
            return -1;
          }
          return 0;
        });
      } else {
        entretiens.sort((a, b) => {
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
    return entretiens;
  }


  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let result = this.searchEntretiens.filter(entretiens => (entretiens.candidature.compte.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1) ||
        (entretiens.candidature.compte.prenom.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1) || (entretiens.jury.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1)
      );

      this.entretiens = result;
    } else {
      this.entretiens = this.searchEntretiens;
    }
  }

  next() {
    this.page++;
    if (this.actifOption == 'centre') {
      this.getCentre(this.centre.id ?? 0);

    }
  }

  previous() {
    this.page--;
    if (this.actifOption == 'centre') {
      this.getCentre(this.centre.id ?? 0);
    }
  }

  confirm(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Êtes vous sures de vouloir continuer ?',
      icon: 'pi pi-question',
      acceptLabel: 'Oui',
      rejectLabel: 'Non',
      accept: () => {
        this.deleteEntretien(id)
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Non', detail: 'vous avez annulé la suppresion' });
      }
    });
  }

  deleteEntretien(id: number) {
    this.noteService.delete(id || 0).subscribe({
      next: (value) => {
        this.getEntretiens();
        this.messageService.add({ severity: 'success', summary: "Suppression de l'entretien", detail: 'Suppression effectuée avec success' });
      },
      error: (err) => {
        console.log("Error: ", err);
        this.messageService.add({ severity: 'error', summary: `Erreur de suppression`, detail: err.message });
      }
    })
  }

  getCentres() {
    this.centreSrv.liste().subscribe({
      next: (value: Centre[]) => {
        this.centres = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  onRowSelect(event: any) {

  }

  onRowUnselect(event: any) {

  }
}

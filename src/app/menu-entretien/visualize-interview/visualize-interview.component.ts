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
import { Router } from '@angular/router';

@Component({
  selector: 'app-visualize-interview',
  templateUrl: './visualize-interview.component.html',
  styles: [
  ]
})
export class VisualizeInterviewComponent implements OnInit {
  loading: boolean = false;

  entretiens: Entretien[] = [];

  compte!: Compte;
  session!: Session;
  statuses!: any[];

  selectedEntretien: any;
  isJury: boolean = false;

  constructor(private centreSrv: CentreExamenService, private storageService: StorageService, private zoneService: ZoneService,
    private messageService: MessageService, public commonService: CommonService, private confirmationService: ConfirmationService,
    private noteService: NoteService, private router: Router,
    private sessionSrv: SessionExamenService) { }

  ngOnInit(): void {
    this.compte = this.storageService.getUserConnected();
    this.isJury = this.compte.role == Role.JURY ? true : false;

    this.statuses = this.commonService.getStatuses();
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

  getEntretiens() {
    this.noteService.liste().subscribe({
      next: (result: NoteResponse[]) => {
        let entretiens: Entretien[] = result.map((v) => {
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
          this.entretiens = entretiens.filter(e => e.jury == (this.compte.name + ' ' + this.compte.prenom))
        } else {
          this.entretiens = entretiens;
        }
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  goToPlanificationPage(entretien: Entretien) {
    this.router.navigate(['/define_note_planning/' + entretien.id]);
  }

  goToNoteSumaryPage(entretien: Entretien) {
    this.router.navigate(['/note_summary/' + entretien.id]);
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

  getEventValue(event: any) {
    return event.target != null ? event.target.value : '';
  }

}

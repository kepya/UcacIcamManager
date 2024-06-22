import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CentreExamenService } from 'src/app/centre-examen-page/centre-examen.service';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Role } from 'src/app/shared/enums/role.enum';
import { Candidature, Compte } from 'src/app/shared/models/compte';
import { Entretien, Note, NoteInterviewerResponse, NoteParcours, NoteParcoursJury, NoteResponse } from 'src/app/shared/models/note';
import { Session } from 'src/app/shared/models/session';
import { Site } from 'src/app/shared/models/site';
import { CommonService } from 'src/app/shared/services/common.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { SiteService } from 'src/app/site-page/site.service';
import { Zone } from 'src/app/shared/models/zone';
import { saveAs } from "file-saver";

@Component({
  selector: 'app-note-entretien',
  templateUrl: './note-entretien.component.html',
  styles: [
  ]
})
export class NoteEntretienComponent implements OnInit {
  loading: boolean = false;
  visible: boolean = false;

  notes: {
    nom: string,
    idCandidature: number,
    prenom: string,
    centre: string,
    nationalite: string,
    has_exchange: boolean,
    noteParcours: Map<number, NoteParcours[]>,
    juries: Compte[]
  }[] = [];

  entretiens: Entretien[] = [];

  compte!: Compte;
  session!: Session;
  statuses!: any[];

  zones!: Zone[];
  zone!: Zone;

  selectedEntretien: any;
  isJury: boolean = false;
  showNote: boolean = false;
  isSuperAdmin: boolean = false;
  isComptable: boolean = false;
  isAdmin: boolean = false;

  constructor(private centreSrv: CentreExamenService, private storageService: StorageService, private zoneService: ZoneService,
    private messageService: MessageService, public commonService: CommonService, private confirmationService: ConfirmationService,
    private noteService: NoteService, private router: Router,
    private sessionSrv: SessionExamenService) { }

  ngOnInit(): void {
    this.compte = this.storageService.getUserConnected();
    this.isJury = this.compte.role == Role.JURY ? true : false;
    this.isAdmin = this.compte.role == Role.ADMIN ? true : false;
    this.isComptable = this.compte.role == Role.COMPTABLE ? true : false;
    this.isSuperAdmin = this.compte.role == Role.SUPER_ADMIN ? true : false;

    this.statuses = this.commonService.getStatuses();
    this.compte = this.storageService.getUserConnected();
    this.getNotes();
    this.getActiveSession();
  }

  getActiveSession() {
    this.sessionSrv.getActive().subscribe({
      next: (value) => {
        this.session = value;
      },
    })
  }

  getZones() {
    this.zoneService.liste().subscribe({
      next: (value: Zone[]) => {
        this.zones = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getNotes() {
    this.noteService.allNotesEntretien().subscribe({
      next: (result: NoteInterviewerResponse[]) => {

        
        this.notes = result.map(r => {
          // r.noteParcoursJuryList.map(n => n.notes.map(no => no.jury)).flatMap(r => r.)

          return {
            nom: r.candidature.compte.name,
            idCandidature: r.candidature.id || 0,
            prenom: r.candidature.compte.prenom,
            centre: r.candidature.centre,
            nationalite: r.candidature.nationalite,
            has_exchange: r.candidature.has_exchange || false,
            noteParcours: r.noteParcoursJuryList
          };
        });
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
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
            debut_entretien: this.commonService.formatDate1(new Date(v.debut_entretien)),
            fin_entretien: this.commonService.formatDate1(new Date(v.fin_entretien)),
          };
        });

        entretiens.sort((a, b) => {
          if (a.debut_entretien > b.debut_entretien) {
            return 1;
          }
          if (b.debut_entretien > a.debut_entretien) {
            return -1;
          }
          return 0;
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

  showUpdateNoteModal(note: {
    nom: string,
    idCandidature: number,
    prenom: string,
    centre: string,
    nationalite: string,
    has_exchange: boolean,
    noteParcours: NoteParcoursJury[]
  }) {

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

  goToNoteSumaryPage(id: string) {
    this.router.navigate(['/note_summary/' + id]);
  }


  showDialog() {
    this.visible = true;
  }

  getCriteria(data: {
    cycle: string,
    formation: string
  }) {
    this.visible = false;
    this.noteService.downloadNoteEntretienUrlFile(data.cycle, data.formation).subscribe({
      next: (value) => {
        saveAs(value, 'note_entretien_' + data.cycle + '_cycle_' + data.formation + '.xlsx');
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }
}

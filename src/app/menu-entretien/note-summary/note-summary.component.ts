import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/menu-candidature/candidature.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription, interval } from 'rxjs';
import { Candidature, Compte } from 'src/app/shared/models/compte';
import { Entretien, NoteInterviewerResponse, NoteParcours, NoteParcoursJury, NoteResponse } from 'src/app/shared/models/note';
import { NoteParcoursService } from 'src/app/shared/services/note-parcours.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { Zone } from 'src/app/shared/models/zone';

@Component({
  selector: 'app-note-summary',
  templateUrl: './note-summary.component.html',
  styles: [
  ]
})
export class NoteSummaryComponent implements OnInit {
  second: number = 0;
  minute: number = 20;
  nombre_choix: number = 0;
  entretien!: Entretien;

  juries: string[] = [];

  noteJury: Map<string, number> = new Map();
  noteJuryB: Map<string, number> = new Map();

  hasBourse: boolean = false;

  timeout: boolean = false;
  comment!: string;

  formationsForFirstCycle = [
    {
      name: 'Ingénieur généraliste par apprentissage ou génie des procédés',
      code: 'L',
    },
    { name: 'Ingénieur généraliste parcours international', code: 'OP' },
    { name: 'Ingénieur génie Informatique', code: 'X' },
  ];

  formationsForSecondCycle = [
    { name: 'Ingénieur genie des procédés', code: 'IP' },
    {
      name: 'Ingénieur géneraliste parcours international et innovation',
      code: 'I',
    },
    { name: 'Ingénieur génie Informatique', code: 'X' },
  ];

  zones!: Zone[];
  zone!: Zone;

  formations: NoteParcours[] = [];
  notes: NoteParcoursJury[] = [];

  constructor(private messageService: MessageService, private zoneService: ZoneService, private noteService: NoteService,
    private noteParcoursService: NoteParcoursService, private route: ActivatedRoute,
    private confirmationService: ConfirmationService, private candidatService: CandidatureService) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['idEntretien']) {
      this.getEntretien(parseInt(this.route.snapshot.params['idEntretien'], 10));
    }
    this.getZones();
  }

  getFormation(index: number, candidature: Candidature) {
    if (index == 0) {
      return candidature.formation1;
    }
    if (index == 1) {
      return candidature.formation2;
    }
    if (index == 3) {
      return candidature.formation3;
    }
    return '';
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

  getNotes(idCandidat: number) {
    this.noteService.allNotesEntretien().subscribe({
      next: (result: NoteInterviewerResponse[]) => {
        let response = result.find(n => n.candidature.id == idCandidat);
        this.notes = response?.noteParcoursJuryList || [];

        if (response) {

          for (let index = 0; index < response.noteParcoursJuryList.length; index++) {
            const element = response.noteParcoursJuryList[index];
            for (let indexNote = 0; indexNote < element.notes.length; indexNote++) {
              const elementNote = element.notes[indexNote];
              let key = elementNote.jury.name + " " + elementNote.jury.prenom;

              if (!this.juries.includes(key)) {
                this.juries.push(key)
              }

              this.noteJury.set(
                key + element.parcours, elementNote.note
              )
            }
          }
        }
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getEntretien(idNote: number) {
    this.noteService.getOne(idNote).subscribe({
      next: (result: NoteResponse) => {
        this.hasBourse = result.candidature!.has_exchange || false;
        this.nombre_choix = result.candidature.nombre_choix;

        this.getNotes(result.candidature.id || 0);

        for (let index = 0; index < result.candidature.nombre_choix; index++) {
          this.formations.push({
            cycle: result.candidature.cycle,
            id: 0,
            note: 0,
            noteId: idNote,
            parcours: this.getFormation(index, result.candidature),
          })
        }

        this.entretien = {
          id: result!.id ?? 0,
          candidat: result.candidature.compte?.name + ' ' + result.candidature.compte?.prenom,
          commentaires: result.commentaires,
          done: result.done,
          cycle: result.candidature!.cycle.toString(),
          centre: result.candidature?.centre || '',
          jury: result.compte?.name + ' ' + result.compte?.prenom,
          candidature: result.candidature as unknown as Candidature,
          debut_entretien: new Date(result.debut_entretien),
          fin_entretien: new Date(result.fin_entretien),
        };
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }


}

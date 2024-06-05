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
import { saveAs } from "file-saver";

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
  cycle: string = "";
  candidat: string = "";

  visible: boolean = false;
  downloadFile: boolean = false;

  juries: string[] = [];

  noteJury: Map<string, number> = new Map();
  noteJuryB: Map<string, number> = new Map();
  commentJury: Map<string, string> = new Map();

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

  formations: {
    cycle: string,
    totalNote: number,
    parcours: string,
  }[] = [];
  notes: NoteParcoursJury[] = [];

  constructor(private messageService: MessageService, private zoneService: ZoneService, private noteService: NoteService,
    private noteParcoursService: NoteParcoursService, private route: ActivatedRoute,
    private confirmationService: ConfirmationService, private candidatService: CandidatureService) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['idCandidature']) {
      this.getEntretienByCandidat(parseInt(this.route.snapshot.params['idCandidature'], 10));
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

  getEntretienByCandidat(idCandidat: number) {
    this.noteService.getByCandidatureId(idCandidat).subscribe({
      next: (result: NoteInterviewerResponse) => {
        this.hasBourse = result.candidature!.has_exchange || false;
        this.nombre_choix = result.candidature.nombre_choix;
        this.notes = result?.noteParcoursJuryList;
        this.cycle = result.candidature!.cycle.toString();
        this.candidat = result.candidature.compte?.name + ' ' + result.candidature.compte?.prenom;
        console.log("result: ", result);

        //        this.entretien = {
        //   id: result!.id ?? 0,
        //   candidat: result.candidature.compte?.name + ' ' + result.candidature.compte?.prenom,
        //   commentaires: "",
        //   done: true,
        //   cycle: ,
        //   centre: result.candidature?.centre || '',
        //   jury: "",
        //   candidature: result.candidature as unknown as Candidature,
        //   debut_entretien:new Date(),
        //   fin_entretien: new Date(result.fin_entretien),
        // };

        for (let index = 0; index < result.noteParcoursJuryList.length; index++) {
          const element = result.noteParcoursJuryList[index];
          for (let indexNote = 0; indexNote < element.notes.length; indexNote++) {
            const elementNote = element.notes[indexNote];
            let key = elementNote.jury.name + " " + elementNote.jury.prenom;
            this.commentJury.set(
              key + "", elementNote.commentaires,
            )

            if (!this.juries.includes(key)) {
              this.juries.push(key)
            }

            this.noteJury.set(
              key + element.parcours, elementNote.note
            )
          }
        }

        console.log("this.commentJury: ", this.commentJury);
        
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
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

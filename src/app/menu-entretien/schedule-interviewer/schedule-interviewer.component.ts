import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, TreeNode } from 'primeng/api';
import { Table } from 'primeng/table';
import { CandidatureService } from 'src/app/menu-candidature/candidature.service';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Role } from 'src/app/shared/enums/role.enum';
import { Candidature, Compte } from 'src/app/shared/models/compte';
import { CompteDisponibilite, Disponibility } from 'src/app/shared/models/entretient';
import { NoteRequest } from 'src/app/shared/models/note';
import { Session } from 'src/app/shared/models/session';
import { Zone } from 'src/app/shared/models/zone';
import { CommonService } from 'src/app/shared/services/common.service';
import { CompteDisponibiliteService } from 'src/app/shared/services/compte-disponibilite.service';
import { CompteService } from 'src/app/shared/services/compte.service';
import { DisponibiliteService } from 'src/app/shared/services/disponibilite.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ZoneService } from 'src/app/shared/services/zone.service';

interface Jury {
  name: string,
  horaire: string,
  value: string
}

interface SelectItemFormation {
  label: string;
  items: { label: string; candidat: Candidature }[];
}

interface SelectItemInterview {
  horaire: string;
  items: { label: string; candidat: Candidature }[];
}

@Component({
  selector: 'app-schedule-interviewer',
  templateUrl: './schedule-interviewer.component.html',
  styles: [
  ]
})
export class ScheduleInterviewerComponent implements OnInit {
  currentDay = new Date();
  visible: boolean = false;
  canSave: boolean = false;
  visibleMainPlage: boolean = false;

  selectCandidatMap: Map<string, { label: string; candidat: Candidature }> = new Map<string, any>();

  indexCurrentDate: number = 0;

  datesOfEntretiens: Date[] = [];
  session!: Session;

  noteRequests: NoteRequest[] = [];
  noteRequestMaps!: Map<string, NoteRequest>;

  alreadyUseJuries: {
    id: number,
    rowIndex: number
  }[] = [];
  alreadyUseCandidats: {
    id: number,
    rowIndex: number
  }[] = [];

  groupedFormations!: SelectItemFormation[];
  filterGroupedFormations!: SelectItemFormation[];

  activeHoraire: string = 'Selectionner';
  plage1: string = 'Selectionner';
  plage2: string = 'Selectionner';

  plageRanking: number = 0;

  selectPlages: string[] = [];

  firstPlages: string[] = [
    "08h00 - 08h20",
    "09h00 - 09h20",
    "10h00 - 10h20",
    "11h00 - 11h20",
  ];

  secondPlages: string[] = [
    "08h30 - 08h50",
    "09h30 - 09h50",
    "10h30 - 10h50",
    "11h30 - 11h50",
  ];

  juriesByDispo!: Map<string, Compte[]>;

  formations = [
    {
      name: 'Ingénieur généraliste par apprentissage ou génie des procédés',
      code: 'L',
    },
    { name: 'Ingénieur généraliste parcours international', code: 'OP' },
    {
      name: 'Ingénieur géneraliste parcours international et innovation',
      code: 'I',
    },
    { name: 'Ingénieur génie Informatique', code: 'X' },
  ];

  juries: Jury[] = [
    {
      name: "",
      value: "",
      horaire: "",
    },
    {
      name: "",
      value: "",
      horaire: "",

    },
    {
      horaire: "",
      name: "",
      value: ""
    },
  ];
  zones!: Map<number, Zone>;
  horaires: string[] = [];
  disponibilities: Disponibility[] = [];

  loading: boolean = false;

  test = {
    label: "FA",
    items: [
      {
        "label": "Minyemeck danielle",
        "candidat": {
            "id": 27,
            "centreExamenId": 17,
            "sessionId": 1,
            "langue": "Anglais",
            "serie_bac": null,
            "nom_parent1": null,
            "nom_parent2": null,
            "email_pere": null,
            "telephone_pere": null,
            "email_tuteur": null,
            "telephone_tuteur": null,
            "email_mere": null,
            "telephone_mere": null,
            "telephone_paiement": null,
            "has_exchange": false,
            "formation_principal": null,
            "datePaiement": null,
            "statut": "Admis",
            "solvable": false,
            "code_examen": "24",
            "cycle": "second",
            "diplome_universitaire": null,
            "compte": {
                "id": 27,
                "name": "Minyemeck",
                "prenom": "danielle",
                "password": "$2a$10$iyL5gzCHSQtqTRhUu.k8Q.yZ7e.W3sJRrs7ZNwB278BLRadnZ2e3q",
                "email": "vassistanthub@gmail.com",
                "telephone": "675272892",
                "role": "CANDIDAT",
                "id_disponibilite": 0
            },
            "centre": "Maroua",
            "nombre_choix": 1,
            "candidatureActif": true,
            "formation1": "FA",
            "formation2": "",
            "formation3": "",
            "paiement": "20 000 FCFA",
            "reference_paiement": "DE33",
            "image": "",
            "genre": "F",
            "nationalite": "Camerounaise",
            "lieu_de_naissance": "Koyom",
            "date_naissance": "2023-02-28",
            "dernier_Etablissement": "Leti"
        }
    }
    ]
  };

  candidats: Candidature[] = [];

  constructor(private disponibilitySrv: DisponibiliteService, private candidatureSrv: CandidatureService, private sessionSrv: SessionExamenService, private zoneService: ZoneService,
    private compteSrv: CompteService, public commonService: CommonService, private noteService: NoteService,
    private compteDisponibiliteService: CompteDisponibiliteService, private router: Router, private messageService: MessageService) {

  }

  getAvalaibleJury(jurys: Compte[], horaire: string): Jury[] {
    return jurys.map(j => ({
      name: j.name + ' ' + j.prenom,
      horaire: horaire,
      value: (j.id || 0) + ""
    }));
  }


  getCandidatures() {
    this.candidatureSrv.liste().subscribe({
      next: (candidatures) => {
        this.candidats = candidatures;
        this.groupedFormations = [];

        let faCandidats = candidatures.filter(v => v.formation1 === "FA").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          candidat: r
        }));

        if (faCandidats.length > 0) {
          this.groupedFormations.push({
            label: "FA",
            items: faCandidats
          });
        }

        let ipCandidats = candidatures.filter(v => v.formation1 === "IP").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          candidat: r
        }));

        if (ipCandidats.length > 0) {
          this.groupedFormations.push({
            label: "IP",
            items: ipCandidats
          });
        }

        let iCandidats = candidatures.filter(v => v.formation1 === "I").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          candidat: r
        }));

        if (iCandidats.length > 0) {
          this.groupedFormations.push({
            label: "I",
            items: iCandidats
          });
        }

        let xCandidats = candidatures.filter(v => v.formation1 === "X").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          candidat: r
        }));

        if (xCandidats.length > 0) {
          this.groupedFormations.push({
            label: "X",
            items: xCandidats
          });
        }

        let lCandidats = candidatures.filter(v => v.formation1 === "L").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          candidat: r
        }));

        if (lCandidats.length > 0) {
          this.groupedFormations.push({
            label: "L",
            items: lCandidats
          });
        }

        let opCandidats = candidatures.filter(v => v.formation1 === "OP").map((r) => ({
          label: r.compte.name + " " + r.compte.prenom,
          candidat: r
        }));

        if (opCandidats.length > 0) {
          this.groupedFormations.push({
            label: "OP",
            items: opCandidats
          });
        }

        this.filterGroupedFormations = this.groupedFormations;
      }
    })
  }

  ngOnInit(): void {
    this.zones = new Map();
    this.juriesByDispo = new Map();
    this.noteRequestMaps = new Map();
    this.selectCandidatMap = new Map();
    this.getActiveSession();
    this.getDisponibilities();
    this.getCandidatures();
  }

  showDialog(plages: string[], rand: number) {
    this.selectPlages = plages;
    this.plageRanking = rand;
    this.visible = true;
  }

  showMainDialog() {
    this.visibleMainPlage = true;
    this.visible = true;
  }

  selectMainPlage(plage: string) {
    this.activeHoraire = plage;
    this.alreadyUseCandidats = [];
    this.alreadyUseJuries = [];
    this.noteRequestMaps = new Map();
    this.selectCandidatMap = new Map();
    this.noteRequests = [];

    if (plage.includes("08") || plage.includes("09")) {
      this.firstPlages = [
        "08h00 - 08h20",
        "09h00 - 09h20",
        "10h00 - 10h20",
        "11h00 - 11h20",
      ];

      this.secondPlages = [
        "08h30 - 08h50",
        "09h30 - 09h50",
        "10h30 - 10h50",
        "11h30 - 11h50",
      ];
    } else {
      this.firstPlages = [
        "13h00 - 13h20",
        "14h00 - 14h20",
        "15h00 - 15h20",
        "16h00 - 16h20",
      ];

      this.secondPlages = [
        "13h30 - 13h50",
        "14h30 - 14h50",
        "15h30 - 15h50",
        "16h30 - 16h50",
      ];
    }

    this.plage1 = 'Selectionner';
    this.plage2 = 'Selectionner';
    this.visible = false;
    this.visibleMainPlage = false;
  }

  selectPlage(plage: string) {
    this.alreadyUseJuries = [];
    this.alreadyUseCandidats = [];
    this.noteRequests = [];
    this.noteRequestMaps = new Map();
    this.selectCandidatMap = new Map();

    if (this.plageRanking == 1) {
      let index = this.firstPlages.findIndex(p => p == plage);
      this.plage1 = plage;
      this.plage2 = this.secondPlages[index];
    } else {
      let index = this.secondPlages.findIndex(p => p == plage);
      this.plage2 = plage;
      this.plage1 = this.firstPlages[index];
    }
    this.visible = false;
  }

  getZones() {
    this.zoneService.liste().subscribe({
      next: (value: Zone[]) => {
        for (let index = 0; index < value.length; index++) {
          const element = value[index];
          this.zones.set(element.id || 0, element);
        }
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  handleInterviewerSelect(event: any, rowIndex: number) {
    let jury = event.value as unknown as Jury;
    let result = this.alreadyUseJuries.find(j => j.id == parseInt(jury.value));
    if (result) {
      this.messageService.add({ severity: 'error', summary: `Erreur d'assignation`, detail: "Ce jury a déjà été utilisé pour cette plage veuillez changer de jury" });
    } else {
      let key = this.currentDay.getDate() + ' - ' + this.currentDay.getFullYear() + ' - ' + this.activeHoraire + ' - ' + rowIndex;
      console.log("key: ",key);
      console.log("test: ", this.noteRequestMaps.values());

      if (this.noteRequestMaps.has(key)) {
        console.log("test: ", this.noteRequestMaps.values());
        
        let noteRequest = this.noteRequestMaps.get(key);
        this.noteRequestMaps.set(key, {
          compteid: parseInt(jury.value),
          candidatureid: noteRequest!.candidatureid,
          debut_entretien: noteRequest!.debut_entretien,
          fin_entretien: noteRequest!.fin_entretien,
          commentaires: "",
        });
      } else {
        this.noteRequestMaps.set(key, {
          compteid: parseInt(jury.value),
          candidatureid: 0,
          debut_entretien: new Date(),
          fin_entretien: new Date(),
          commentaires: "",
        });
      }
      this.alreadyUseJuries.push({
        rowIndex: rowIndex,
        id: parseInt(jury.value),
      });
    }

    this.randomizeCandidatDisplay();

  }

  handleFormationSelect(event: any): void {
    let formation = event.value as unknown as { name: string; code: string };
    this.filterGroupedFormations = this.groupedFormations.filter(f => f.label == formation.code);
  }

  
  getActiveSession() {
    this.sessionSrv.getActive().subscribe({
      next: (value) => {
        this.session = value;
      },
    })
  }

  handleCandidatSelect(event: any, horaire: string, rowIndex: number) {
    console.log('event.value: ', event.value);
    
    let candidat = event.value as unknown as { label: string; candidat: Candidature };

    let result = this.alreadyUseCandidats.find(c => c.id == candidat.candidat.id);

    if (result) {
      this.messageService.add({ severity: 'error', summary: `Erreur d'assignation`, detail: "Ce candidat a déjà été utilisé pour cette plage veuillez changer de candidat" });
    } else {
      let key = this.currentDay.getDate() + ' - ' + this.currentDay.getFullYear() + ' - ' + this.activeHoraire + ' - ' + rowIndex;
      console.log("key: ",key);
      console.log("test: ", this.noteRequestMaps.values());

      if (this.noteRequestMaps.has(key)) {
        let noteRequest = this.noteRequestMaps.get(key);

        let dates = this.commonService.buildDate(this.currentDay, horaire);
        this.noteRequestMaps.set(key, {
          compteid: noteRequest!.compteid,
          candidatureid: candidat.candidat.id || 0,
          debut_entretien: new Date(dates.startDate),
          fin_entretien: new Date(dates.endDate),
          commentaires: "",
        });

        this.selectCandidatMap.set(key, {
          candidat: candidat.candidat,
          label: candidat.candidat!.compte.name + " " + candidat.candidat!.compte.prenom,
        });
      } else {
        let dates = this.commonService.buildDate(this.currentDay, horaire);
        this.noteRequestMaps.set(key, {
          compteid: 0,
          candidatureid: candidat.candidat.id || 0,
          debut_entretien: new Date(dates.startDate),
          fin_entretien: new Date(dates.endDate),
          commentaires: "",
        });
        this.selectCandidatMap.set(key, {
          candidat: candidat.candidat,
          label: candidat.candidat!.compte.name + " " + candidat.candidat!.compte.prenom,
        });
      }

      this.alreadyUseCandidats.push({
        rowIndex: rowIndex,
        id: candidat.candidat.id || 0,
      });
    }

    this.randomizeCandidatDisplay();
  }

  getCandidat(noteRequest?: NoteRequest) {
    let candidat = this.candidats.find(c => c.id == noteRequest?.candidatureid);
    if (candidat) {
      return {
        label: candidat!.compte.name + " " + candidat!.compte.prenom,
        candidat: candidat
      }
    } else {
      return null;
    }
  }

  getJury(noteRequest?: NoteRequest) {

  }

  randomizeCandidatDisplay() {
    let Juryslength = (this.juriesByDispo.get(this.activeHoraire) || []).length;
    if (this.alreadyUseCandidats.length == Juryslength &&
      this.alreadyUseJuries.length == Juryslength
    ) {
      for (let index = 0; index < Juryslength; index++) {
        let row = (index == (Juryslength - 1)) ? 0 : index + 1;
        let jury = this.alreadyUseJuries[index];
        let candidat = this.alreadyUseCandidats[row];
        let dates = this.commonService.buildDate(this.currentDay, this.plage2);
        let key = this.currentDay.getTime() + ' - ' + this.activeHoraire + ' - ' + index + ' - ' + this.plage2;

        this.noteRequestMaps.set(key, {
          compteid: jury.id,
          candidatureid: candidat.id,
          debut_entretien: new Date(dates.startDate),
          fin_entretien: new Date(dates.endDate),
          commentaires: "",
        });

        let result = this.candidats.find(c => c.id == candidat.id);
        if (result) {
          this.selectCandidatMap.set(key, {
            candidat: result,
            label: result!.compte.name + " " + result!.compte.prenom,
          });
        }
      }
      this.canSave = true;
    }
  }

  getDisponibilities() {
    this.disponibilitySrv.liste().subscribe({
      next: (disponibilities: Disponibility[]) => {
        let dates: Date[] = [];
        this.disponibilities = disponibilities;

        for (let index = 0; index < disponibilities.length; index++) {
          const disponibilite = disponibilities[index];
          let date = new Date(disponibilite.date_disponibilite);
          date.setHours(0, 0, 0, 0);
          let dateIndex = dates.findIndex(d => d.getTime() == date.getTime());
          if (dateIndex <= -1) {
            dates.push(date);
          }

          let startTime = this.commonService.formatDate(disponibilite!.debut_disponibilite);
          let endTime = this.commonService.formatDate(disponibilite!.fin_disponibilite);
          let horaire = startTime + ' - ' + endTime;

          if (!this.horaires.includes(horaire)) {
            this.horaires.push(horaire);
          }
        }

        this.datesOfEntretiens = [...(new Set(dates))] || [];
        this.datesOfEntretiens.sort( (a, b) => {
          return (a.getTime() - b.getTime());
        });
        

        this.indexCurrentDate = 0;
        this.currentDay = this.datesOfEntretiens[this.indexCurrentDate];

        this.getCompteDisponibilite();
      },
      error: (err: any) => {

      }
    })
  }

  getCompteDisponibilite() {
    this.juriesByDispo = new Map();
    this.compteDisponibiliteService.liste().subscribe({
      next: (disponibilities: CompteDisponibilite[]) => {
        for (let index = 0; index < disponibilities.length; index++) {
          const element = disponibilities[index];
          let disponibility = this.disponibilities.find(d => d.id == element.disponibilite!.id)

          let startTime = this.commonService.formatDate(disponibility!.debut_disponibilite);
          let endTime = this.commonService.formatDate(disponibility!.fin_disponibilite);
          let horaire = startTime + ' - ' + endTime;
          console.log('horaire: ', horaire);

          let date = new Date(disponibility!.date_disponibilite);
          date.setHours(0, 0, 0, 0);
          if (this.currentDay.getTime() == date.getTime()) {
            if (this.juriesByDispo.has(horaire)) {
              let jurys = this.juriesByDispo.get(horaire);
              let reult = jurys?.find(j => j.id == element.compte!.id);
              if (!reult) {
                jurys?.push(element.compte!);
              }
            } else {
              this.juriesByDispo.set(horaire, [element.compte!]);
            }
          }
        }
      }
    })
  }

  previousDate(table: Table) {
    if (this.indexCurrentDate > 0) {
      this.indexCurrentDate = this.indexCurrentDate - 1;
      this.currentDay = this.datesOfEntretiens[this.indexCurrentDate];
      this.activeHoraire = 'Selectionner';
      this.plage1 = 'Selectionner';
      this.plage2 = 'Selectionner';
      this.alreadyUseJuries = [];
      this.alreadyUseCandidats = [];
      this.noteRequests = [];
      this.noteRequestMaps = new Map();
      this.commonService.clear(table);
      this.getCompteDisponibilite();
    }
  }

  nextDate(table: Table) {
    if (this.indexCurrentDate < this.datesOfEntretiens.length) {
      this.indexCurrentDate = this.indexCurrentDate + 1;
      this.currentDay = this.datesOfEntretiens[this.indexCurrentDate];
      this.activeHoraire = 'Selectionner';
      this.plage1 = 'Selectionner';
      this.plage2 = 'Selectionner';
      this.alreadyUseJuries = [];
      this.alreadyUseCandidats = [];
      this.noteRequests = [];
      this.noteRequestMaps = new Map();
      this.commonService.clear(table)
      this.getCompteDisponibilite();
    }
  }

  validate() {
console.log(this.selectCandidatMap.values());


    let nbrSucess = 0;
    let total = 0;
    for (let noteRequest of this.noteRequestMaps.values()) {
      this.noteService.create(noteRequest).subscribe({
        next: (res) => {
          this.loading = false;
          nbrSucess++;
          this.messageService.add({
            severity: 'success', summary: 'Assignation du jury pour entretien',
            detail: 'Assignation du jury pour un entretien avec le candidat effectuée avec success pour la date du ' + this.currentDay.toString()
          });
        },
        error: (err) => {
          this.loading = false;
          this.messageService.add({ severity: 'error', summary: `Erreur d'assignation`, detail: err.error.message });
          console.log("Error: ", err);
        }
      });
      total++;
    }

    if (nbrSucess == total) {
      this.alreadyUseJuries = [];
      this.alreadyUseCandidats = [];
      this.noteRequests = [];
      this.noteRequestMaps = new Map();
    }
  }

}

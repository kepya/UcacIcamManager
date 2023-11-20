import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Note } from 'src/app/shared/models/note';
import { Site } from 'src/app/shared/models/site';
import { CommonService } from 'src/app/shared/services/common.service';
import { NoteService } from 'src/app/shared/services/note.service';
import { SiteService } from 'src/app/site-page/site.service';

@Component({
  selector: 'app-note-entretien',
  templateUrl: './note-entretien.component.html',
  styles: [
  ]
})
export class NoteEntretienComponent implements OnInit {

  notes: Note[] = [];
  note!: Note;
  sites: Site[] = [];
  searchNotes: Note[] = [];
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
  isFormNote!: boolean;

  formNote: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    horaire: new FormControl('', [Validators.required]),
    centre: new FormControl('', [Validators.required]),
    note: new FormControl(0, [Validators.required]),
  });

  updateFormNote: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    note: new FormControl(0, [Validators.required]),
  });

  constructor(private noteSrv: NoteService, private messageService: MessageService, private commonService: CommonService, private siteSrv: SiteService) { }

  ngOnInit(): void {
    this.sortProperty = "horaire";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getSites();
    this.getNotes();
  }

  sort(property: string, notes: Note[] = this.notes) {
    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'nom') {
      if (this.isAsc) {
        notes.sort((a, b) => {
          if (a.candidature!.compte!.name > b.candidature!.compte!.name) {
            return 1;
          }
          if (b.candidature!.compte!.name > a.candidature!.compte!.name) {
            return -1;
          }
          return 0;
        });
      } else {
        notes.sort((a, b) => {
          if (a.candidature!.compte!.name > b.candidature!.compte!.name) {
            return -1;
          }
          if (b.candidature!.compte!.name > a.candidature!.compte!.name) {
            return 1;
          }
          return 0;
        });
      }
    }
    if (property === 'prenom') {
      if (this.isAsc) {
        notes.sort((a, b) => {
          if (a.candidature!.compte!.prenom > b.candidature!.compte!.prenom) {
            return 1;
          }
          if (b.candidature!.compte!.prenom > a.candidature!.compte!.prenom) {
            return -1;
          }
          return 0;
        });
      } else {
        notes.sort((a, b) => {
          if (a.candidature!.compte!.prenom > b.candidature!.compte!.prenom) {
            return -1;
          }
          if (b.candidature!.compte!.prenom > a.candidature!.compte!.prenom) {
            return 1;
          }
          return 0;
        });
      }
    }


    if (property === 'note') {
      if (this.isAsc) {
        notes.sort((a, b) => {
          if (a.note > b.note) {
            return 1;
          }
          if (b.note > a.note) {
            return -1;
          }
          return 0;
        });
      } else {
        notes.sort((a, b) => {
          if (a.note > b.note) {
            return -1;
          }
          if (b.note > a.note) {
            return 1;
          }
          return 0;
        });
      }
    }

    return notes;
  }

  get formNoteControl(): { [key: string]: AbstractControl } {
    return this.formNote.controls;
  }

  get updateFormNoteControl(): { [key: string]: AbstractControl } {
    return this.updateFormNote.controls;
  }

  handlePageSize(event: any) {
    this.getNotes();
  }

  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let names = this.searchNotes.map(note => note.candidature?.compte?.name);
      let name = names.filter(name => name!.toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);

      if (name.length === 0) {
        this.notes = [];
      } else {
        let notes: Note[] = [];
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          let z = this.searchNotes.filter(note => note.candidature!.compte!.name.indexOf('' + element) > -1);
          notes.push(...z);
        }
        this.notes = notes;
      }
    } else {
      this.notes = this.searchNotes;
    }
  }

  next() {
    this.page++;
    this.getNotes();
  }

  previous() {
    this.page--;
    this.getNotes();
  }

  getSites() {
    this.siteSrv.liste().subscribe({
      next: (value: Site[]) => {
        this.sites = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  getNotes() {
    this.noteSrv.liste().subscribe({
      next: (value: Note[]) => {
        value = this.sort('nom', value);
        this.searchNotes = [];
        this.searchNotes = value;
        this.notes = value
          .map((mis, i) => ({ id: i + 1, ...mis }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
        this.collectionSize = value.length;
        this.nbrOfPage = Math.ceil(value.length / this.pageSize);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  viewNote(view: string = 'data') {
    if (view === 'data') {
      this.isFormNote = false;
    } else {
      this.isFormNote = true;
    }
  }

  getHoraire(note: Note) {
    let startTime = this.commonService.formatDate(note.debut_entretien);
    let endTime = this.commonService.formatDate(note.fin_entretien);
    return startTime + ' - ' + endTime;
  }

  updateNote(note: Note) {
    this.isFormNote = true;
    this.note = note;
    this.updateFormNote.patchValue({
      nom: note.candidature?.compte?.name,
      prenom: note.candidature?.compte?.prenom,
      note: note.note,
    });
  }

  createNote() {
    let d = { ...this.formNote.value };
    delete d.note;
    d = { ...d, note: parseInt(this.formNote.value.note, 10) };

    this.noteSrv.create(d).subscribe({
      next: (value) => {
        this.getNotes();
        this.note = new Note();
        this.formNote.reset();
        this.isFormNote = false;
      },
      error: (err) => {
        console.log("Error: ", err);
      }
    });
  }

  updateNoteObjet() {
    this.note.note = parseInt(this.updateFormNote.value.note, 10);
    this.noteSrv.update({ ...this.note }).subscribe({
      next: (value) => {
        this.getNotes();
        this.note = new Note();
        this.updateFormNote.reset();
        this.isFormNote = false;
        this.messageService.add({ severity: 'success', summary: 'Modification de la note', detail: 'Modification de la note des entretiens effectuée avec success' });
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: `Erreur de modification`, detail: err.message });
        console.log("Error: ", err);
      }
    })
  }
}

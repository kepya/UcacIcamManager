import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Note } from 'src/app/shared/models/note';
import { Site } from 'src/app/shared/models/site';
import { NoteService } from 'src/app/shared/services/note.service';
import { SiteService } from 'src/app/shared/services/site.service';

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

  constructor(private noteSrv: NoteService, private siteSrv: SiteService) { }

  ngOnInit(): void {
    this.sortProperty = "horaire";
    this.sortIcon = "fa-solid fa-arrow-down-short-wide";
    this.downUpIcon = "pi pi-sort-alt";
    this.pageSize = 10;
    this.page = 1;
    this.getNotes();
  }

  sort(property: string, notes: Note[] = this.notes) {
    this.sortProperty = property;
    this.isAsc = !this.isAsc;
    this.sortIcon = this.isAsc ? 'fa-solid fa-arrow-down-short-wide' : 'fa-solid fa-arrow-down-wide-short';

    if (property === 'horaire') {
      if (this.isAsc) {
        notes.sort((a, b) => {
          if (a.horaire > b.horaire) {
            return 1;
          }
          if (b.horaire > a.horaire) {
            return -1;
          }
          return 0;
        });
      } else {
        notes.sort((a, b) => {
          if (a.horaire > b.horaire) {
            return -1;
          }
          if (b.horaire > a.horaire) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'nom') {
      if (this.isAsc) {
        notes.sort((a, b) => {
          if (a.compte.name > b.compte.name) {
            return 1;
          }
          if (b.compte.name > a.compte.name) {
            return -1;
          }
          return 0;
        });
      } else {
        notes.sort((a, b) => {
          if (a.compte.name > b.compte.name) {
            return -1;
          }
          if (b.compte.name > a.compte.name) {
            return 1;
          }
          return 0;
        });
      }
    }
    if (property === 'prenom') {
      if (this.isAsc) {
        notes.sort((a, b) => {
          if (a.compte.prenom > b.compte.prenom) {
            return 1;
          }
          if (b.compte.prenom > a.compte.prenom) {
            return -1;
          }
          return 0;
        });
      } else {
        notes.sort((a, b) => {
          if (a.compte.prenom > b.compte.prenom) {
            return -1;
          }
          if (b.compte.prenom > a.compte.prenom) {
            return 1;
          }
          return 0;
        });
      }
    }

    if (property === 'centre') {
      if (this.isAsc) {
        notes.sort((a, b) => {
          if (a.centre > b.centre) {
            return 1;
          }
          if (b.centre > a.centre) {
            return -1;
          }
          return 0;
        });
      } else {
        notes.sort((a, b) => {
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

  handlePageSize(event: any) {
    ;
    this.getNotes();
  }

  handleSearchValue(event: any) {
    this.searchValue = event.target.value;

    if (this.searchValue !== '') {
      let names = this.searchNotes.map(note => note.compte.name);
      let name = names.filter(name => name.toLowerCase().indexOf(this.searchValue.toLowerCase() + '') > -1);

      if (name.length === 0) {
        this.notes = [];
      } else {
        let notes: Note[] = [];
        for (let index = 0; index < name.length; index++) {
          const element = name[index];
          let z = this.searchNotes.filter(note => note.compte.name.indexOf('' + element) > -1);
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

  updateNote(note: Note) {
    this.isFormNote = true;
    this.note = note;
    this.formNote.setValue({
      nom: note.compte.name,
      prenom: note.compte.prenom,
      note: note.note,
      horaire: note.horaire,
      centre: note.centre,
    });
  }

  createOrUpdateNote() {

    let site: Site = new Site();
    if (this.note?.id || 0 > 0) {
      let d = { ...this.formNote.value };
      delete d.note;
      d = { ...d, note: parseInt(this.formNote.value.note, 10) };

      this.noteSrv.update({ ...d, site, id: this.note.id }).subscribe({
        next: (value) => {
          this.getNotes();
          this.note = new Note();
          this.formNote.reset();
          this.isFormNote = false;
        },
        error: (err) => {
          console.log("Error: ", err);
        }
      })
    } else {
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
      })
    }
  }
}

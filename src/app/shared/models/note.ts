import { Candidature, Compte } from 'src/app/shared/models/compte';
import { Cycle } from '../enums/cycle.enum';
export class Note {
    id?: number;
    noteL!: number;
    noteOP!: number;
    noteX!: number;
    compte?: Compte;
    compteid!: number;

    jury?: Compte;
    juryid!: number;
    candidatureid!: number;
    debut_entretien!: Date;
    fin_entretien!: Date;
    candidature?: Candidature;
}

export class NoteRequest {
    noteL!: number;
    noteOP!: number;
    noteX!: number;
    compteid!: number;
    candidatureid!: number;
    debut_entretien!: Date;
    fin_entretien!: Date;
}

export class Entretien {
    id!: number;
    jury!: string;
    cycle!: string;
    note?: number;
    centre!: string;
    candidat!: Candidature;
    debut_entretien!: Date;
    fin_entretien!: Date;
}

export class NoteResponse {
    id!: number;
    compteid!: number;
    candidatureid!: number;
    commentaires!: string;
    debut_entretien!: Date;
    fin_entretien!: Date;
    compte!: Compte;
    candidature!: Candidature;
    noteParcoursList!: NoteParcours[];
    status!: string;
}

export class NoteParcours {
    id!: number;
    noteId!: number;
    cycle!: Cycle;
parcours!:string;
note!: number;
}
import { Candidature, Compte } from 'src/app/shared/models/compte';
import { Cycle } from '../enums/cycle.enum';
export class Note {
    noteL!: number;
    noteOP!: number;
    noteX!: number;
    compte?: Compte;

    jury?: Compte;
    juryid!: number;
    debut_entretien!: Date;
    fin_entretien!: Date;
    candidature?: Candidature;


    id?: number;
    candidatureid!: number;
    compteid!: number;
    commentaires!: string;
}

export class NoteRequest {
    noteL?: number;
    noteOP?: number;
    noteX?: number;

    
    compteid!: number;
    candidatureid!: number;
    debut_entretien!: Date;
    fin_entretien!: Date;
    commentaires?: string;
}

export class Entretien {
    id!: number;
    jury!: string;
    cycle!: string;
    note?: number;
    centre!: string;
    candidat!: string;
    commentaires!: string;
    candidature!: Candidature;
    debut_entretien!: Date;
    fin_entretien!: Date;
    done!: boolean;
}


export class NoteEntretien {
    id!: number;
    jury!: string;
    cycle!: string;
    note?: number;
    centre!: string;
    candidat!: string;
    commentaires!: string;
    candidature!: Candidature;
    debut_entretien!: Date;
    fin_entretien!: Date;
    done!: boolean;
}

export class NoteResponse {
    id!: number;
    compteid!: number;
    candidatureid!: number;
    commentaires!: string;
    done!: boolean;
    debut_entretien!: Date;
    fin_entretien!: Date;
    compte!: Compte;
    candidature!: Candidature;
    noteParcoursList!: NoteParcours[];
}

export class NoteParcours {
    id!: number;
    noteId!: number;
    cycle!: Cycle;
    parcours!: string;
    note!: number;
}
import { Candidature, Compte } from 'src/app/shared/models/compte';
export class Note {
    id?: number;
    note!: number;
    compte?: Compte;
    compte_id!: number;
    candidature_id!: number;
    debut_entretien!: Date;
    fin_entretien!: Date;
    candidature?: Candidature;
}
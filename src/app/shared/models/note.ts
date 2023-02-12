import { Compte } from 'src/app/shared/models/compte';
export class Note {
    id?: number;
    note!: number;
    horaire!: string;
    compte!: Compte;
    centre!: string;
}
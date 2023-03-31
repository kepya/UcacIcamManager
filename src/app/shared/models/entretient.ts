import { Compte } from "./compte";

export class Disponibility {
    id?: number;
    session_id!: number;
    date_disponibilite!: Date;
    debut_disponibilite!: Date;
    fin_disponibilite!: Date;
}

export class CompteDisponibilite {
    compte_id!: number;
    disponibilite_id!: number;
    id?: number;
    compte?: Compte;
    disponibilite?: Disponibility
}

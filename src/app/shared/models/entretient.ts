import { Compte } from "./compte";

export class Disponibility {
    id?: number;
    sessionid!: number;
    date_disponibilite!: Date;
    debut_disponibilite!: Date;
    fin_disponibilite!: Date;
}

export class CompteDisponibilite {
    compteId!: number;
    disponibilite_id!: number;
    id?: number;
    compte?: Compte;
    disponibilite?: Disponibility
}

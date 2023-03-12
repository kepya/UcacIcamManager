import { Compte } from "./compte";

export class Disponibility {
    id?: number;
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

export class Entretien {
    id?: number;
    interviewer!: string;
    disponibility!: Disponibility;
    centre!: string;
}
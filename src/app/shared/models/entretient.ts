import { Compte } from "./compte";

export class Disponibility {
    id?: number;
    date_disponibilite!: Date;
    debut_disponibilite!: Date;
    fin_disponibilite!: Date;
    compte!: Compte;
}

export class Entretien {
    id?: number;
    interviewer!: string;
    disponibility!: Disponibility;
    centre!: string;
}
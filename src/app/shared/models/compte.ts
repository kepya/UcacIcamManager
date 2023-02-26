import { Cycle } from "../enums/cycle.enum";
import { Genre } from "../enums/genre.enum";
import { Langue } from "../enums/langue.enum";
import { Role } from "../enums/role.enum";
import { Statut } from "../enums/statut.enum";

export class Compte {
    id?: number;
    name!: string;
    prenom!: string;
    password?: string;
    email!: string;;
    telephone!: string;
    role!: Role;
    id_disponibilite?: number;
}

export class Candidature {
    id?: number;
    Lieu_de_naissance!: string;
    Date_naissance!: string;
    Nationalite!: string;
    Dernier_Etablissement!: string;
    Tel_pere!: string;
    Tel_mere!: string;
    email_pere!: string;
    email_mere!: string;
    Formation1!: string;
    Formation2!: string;
    Formation3!: string;
    centre!: string;
    Paiement!: string;
    Reference_paiement!: string;
    Image!: string;
    telephone_paiement!: string;
    ville!: string;
    code_examen!: number;
    nombre_choix!: number;
    CompteID!: number;
    cycle!: Cycle;
    statut!: Statut;
    Genre!: Genre;
    langue!: Langue;
    compte!: Compte;
    candidatureActif?: boolean;
}

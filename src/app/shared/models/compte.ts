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
    idZone!: number;
    zone?: Zone;
}

export class Candidature {
    id?: number;
    centreExamenId!: number;
    lieu_de_naissance!: string;
    date_naissance!: string;
    nationalite!: string;
    dernier_Etablissement!: string;
    email_parents!: string;
    tel_parents!: string;
    formation1!: string;
    formation2!: string;
    formation3!: string;
    centre!: string;
    paiement!: string;
    reference_paiement!: string;
    image!: string;
    telephone_paiement!: string;
    ville!: string;
    code_examen!: number;
    nombre_choix!: number;
    compteID!: number;
    cycle!: Cycle;
    statut!: Statut;
    genre!: Genre;
    langue!: Langue;
    compte!: Compte;
    candidatureActif?: boolean;
    solvable?: boolean;
    has_exchange?: boolean;
}

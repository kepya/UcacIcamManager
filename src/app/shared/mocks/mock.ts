import { Cycle } from "../enums/cycle.enum";
import { Genre } from "../enums/genre.enum";
import { Langue } from "../enums/langue.enum";
import { Role } from "../enums/role.enum";
import { Statut } from "../enums/statut.enum";
import { Zone } from "../models/zone";

export const zones: Zone[] = [
    {
        id: 0,
        count_site: 1,
        description: 'Zone Congo',
        nom: 'Zone Congo'
    },
    {
        id: 1,
        count_site: 5,
        description: 'Zone Cameroun',
        nom: 'Zone Cameroun'
    },
    {
        id: 0,
        count_site: 1,
        description: 'Zone Congo',
        nom: 'Zone Congo'
    },
    {
        id: 1,
        count_site: 5,
        description: 'Zone Cameroun',
        nom: 'Zone Cameroun'
    },
    {
        id: 0,
        count_site: 1,
        description: 'Zone Congo',
        nom: 'Zone Congo'
    },
    {
        id: 1,
        count_site: 5,
        description: 'Zone Cameroun',
        nom: 'Zone Cameroun'
    },
    {
        id: 0,
        count_site: 1,
        description: 'Zone Congo',
        nom: 'Zone Congo'
    },
    {
        id: 1,
        count_site: 5,
        description: 'Zone Cameroun',
        nom: 'Zone Cameroun'
    },
    {
        id: 0,
        count_site: 1,
        description: 'Zone Congo',
        nom: 'Zone Congo'
    },
    {
        id: 1,
        count_site: 5,
        description: 'Zone Cameroun',
        nom: 'Zone Cameroun'
    },
    {
        id: 1,
        count_site: 5,
        description: 'Zone Cameroun',
        nom: 'Zone Cameroun'
    },
    {
        id: 1,
        count_site: 5,
        description: 'Zone Cameroun yu',
        nom: 'Zone Cameroun'
    },

];

export const candidats = [
    {
        id: 1,
        Lieu_de_naissance: "",
        Date_naissance: "",
        Nationalite: "",
        Dernier_Etablissement: "",
        Tel_pere: "",
        Tel_mere: "",
        email_pere: "",
        email_mere: "",
        Formation1: "",
        Formation2: "",
        Formation3: "",
        centre: "",
        Paiement: "",
        Reference_paiement: "",
        Image: "",
        telephone_paiement: "",
        ville: "",
        code_examen: 0,
        nombre_choix: 0,
        CompteID: 0,
        cycle: Cycle.premier,
        statut: Statut.En_Attente,
        Genre: Genre.M,
        langue: Langue.Francais,
        compte: {
            name: "Christian",
            prenom: "kepya",
            password: "",
            email: "",
            telephone: "",
            role: Role.CANDIDAT,
            id_disponibilite: 0,
        }
    },
    {
        id: 2,
        Lieu_de_naissance: "",
        Date_naissance: "",
        Nationalite: "",
        Dernier_Etablissement: "",
        Tel_pere: "",
        Tel_mere: "",
        email_pere: "",
        email_mere: "",
        Formation1: "",
        Formation2: "",
        Formation3: "",
        centre: "",
        Paiement: "",
        Reference_paiement: "",
        Image: "",
        telephone_paiement: "",
        ville: "",
        code_examen: 0,
        nombre_choix: 0,
        CompteID: 0,
        cycle: Cycle.premier,
        statut: Statut.En_Attente,
        Genre: Genre.M,
        langue: Langue.Francais,
        compte: {
            name: "Arthur",
            prenom: "Scoty",
            password: "",
            email: "",
            telephone: "",
            role: Role.CANDIDAT,
            id_disponibilite: 0,
        }
    },
    {
        id: 3,
        Lieu_de_naissance: "",
        Date_naissance: "",
        Nationalite: "",
        Dernier_Etablissement: "",
        Tel_pere: "",
        Tel_mere: "",
        email_pere: "",
        email_mere: "",
        Formation1: "",
        Formation2: "",
        Formation3: "",
        centre: "",
        Paiement: "",
        Reference_paiement: "",
        Image: "",
        telephone_paiement: "",
        ville: "",
        code_examen: 0,
        nombre_choix: 0,
        CompteID: 0,
        cycle: Cycle.premier,
        statut: Statut.En_Attente,
        Genre: Genre.M,
        langue: Langue.Francais,
        compte: {
            name: "Darryl",
            prenom: "Leon",
            password: "",
            email: "",
            telephone: "",
            role: Role.CANDIDAT,
            id_disponibilite: 0,
        }
    },
]
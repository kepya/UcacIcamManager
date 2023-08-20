import { Cycle } from "../enums/cycle.enum";
import { Genre } from "../enums/genre.enum";
import { Langue } from "../enums/langue.enum";
import { Role } from "../enums/role.enum";
import { Statut } from "../enums/statut.enum";
import { Candidature } from "../models/compte";
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

export const candidats: Candidature[] = [
    {
        id: 1,
        Lieu_de_naissance: "",
        Date_naissance: "",
        Nationalite: "",
        Dernier_Etablissement: "",
        email_parents: "",
        tel_parents: "",
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
            idZone: 0,
        }
    },
    {
        id: 2,
        Lieu_de_naissance: "",
        Date_naissance: "",
        Nationalite: "",
        Dernier_Etablissement: "",
        email_parents: "",
        tel_parents: "",
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
            idZone: 0,
            id_disponibilite: 0,
        }
    },
    {
        id: 3,
        Lieu_de_naissance: "",
        Date_naissance: "",
        Nationalite: "",
        Dernier_Etablissement: "",
        email_parents: "",
        tel_parents: "",
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
            idZone: 0,
        }
    }
]

export const horaires: {
    time: string,
    date: Date,
    interviewer: string[]
}[] = [
        {
            date: new Date("2023-03-23"),
            time: '8H30-12H00',
            interviewer: [
                "DIANA MENGUELE",
                "AUBIN FOSSOUO"
            ]
        },
        {
            date: new Date("2023-03-23"),
            time: '13H00-16H30',
            interviewer: [
                "AUBIN FOSSOUO"
            ]
        },

        {
            time: '8H30-12H00',
            date: new Date("2023-03-24"),
            interviewer: [
                "DIANA MENGUELE",
            ]
        },
        {
            time: '13H00-16H30',
            date: new Date("2023-03-24"),
            interviewer: [
                "AUBIN FOSSOUO"
            ]
        },
        {
            time: '8H30-12H00',
            date: new Date("2023-03-25"),
            interviewer: [
                "AUBIN FOSSOUO"
            ]
        }, {
            time: '13H00-16H30',
            date: new Date("2023-03-25"),
            interviewer: [
                "DIANA MENGUELE",
            ]
        },
        {
            date: new Date("2023-03-26"),
            time: '8H30-12H00',
            interviewer: [
                "DIANA MENGUELE",
                "AUBIN FOSSOUO"
            ]
        },
        {
            date: new Date("2023-03-26"),
            time: '13H00-16H30',
            interviewer: [
                "DIANA MENGUELE",
            ]
        },
    ];
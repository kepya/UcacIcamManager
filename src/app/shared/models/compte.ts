export class Compte {
    id?: number;
    name!: string;
    prenom!: string;
    password!: string;
    email!: string;;
    telephone!: string;
    role!: Role;
    id_disponibilite?: number;
}
export class Candidature {
    id?: number;
    name!: string;
    prenom!: string;
    password!: string;
    email!: string;;
    telephone!: string;
    code_examen!: string;
    nationalite!: string;
    photo!: string;
    statut!: string;
    role!: Role;
    id_disponibilite?: number;
}

class Role {

}

// private String Lieu_de_naissance;
// private String Date_naissance;
// private Genre Genre;
// private String Nationalite;
// private Langue langue;
// private String Dernier_Etablissement;
// private String Tel_pere;
// private String Tel_mere;
// private String email_pere;
// private String email_mere;
// private String Formation1;
// private String Formation2;
// private String Formation3;
// private String Paiement;
// private String Reference_paiement;
// private String Image;
// private Statut statut;
// private long code_examen;
// private Cycle cycle;
// private Long CompteID ;
// private String telephone_paiement;
// private int nombre_choix;
// private String ville;
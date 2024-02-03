export class Session {
    id?: number;
    nom!: string;
    date_debut!: Date;
    date_limite!: Date;
    date_examen!: Date;

    date_debut_entretien?: Date;
    date_fin_entretien?: Date;

    statut!: string;
}
export class Matter {
    id?: number;
    intitule!: string;
    duree!: number;
    coefficient!: number;
}

export class MatterParcours {
    id?: number;
    matiereId!: number;
    parcoursId!: number;
}

export class MatterCycleParcours {
    cycleId?: number;
    cycleIntitule!: string;
    cycleNumero!: number;
    parcours!: {
        parcoursId: number; 
        parcoursIntitule: string; 
        parcoursAbbreviation: string; 
        matieres: Matter[];
    }[];
}
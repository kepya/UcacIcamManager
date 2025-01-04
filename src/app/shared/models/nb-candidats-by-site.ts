import { Site } from "./site";
import { Zone } from "./zone";

export class NbCandidatsBySite {
    nbCandidats!: number;
    nbParticipations!: number;
    nbEntretenus!: number;
    site!: Site;
}

export class NbCandidatsByZone {
    nbCandidats!: number;
    nbEntretenus!: number;
    zone!: Zone;
}

export class NbCandidatsByFormation {
    nbCandidats!: number;
    nbEntretenus!: number;
    formation!: string;
}
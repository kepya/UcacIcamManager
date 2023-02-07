import { Zone } from "./zone";

export class Site {
    id?: number;
    nom!: string;
    pays!: string;
    description?: string;
    nbreSite!: number;
    zone!: Zone
}

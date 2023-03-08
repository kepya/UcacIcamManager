import { Zone } from "./zone";

export class Site {
    id?: number;
    zone_id!: number;
    nom!: string;
    pays!: string;
    msgPaiement!: string;
    indicatif!: string;
    description: string = '';
    image?: string;
    zone!: Zone
}

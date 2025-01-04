import { Centre } from "./centre";
import { Zone } from "./zone";

export class Site {
    id?: number;
    zoneid!: number;
    nom!: string;
    pays!: string;
    msgPaiement!: string;
    indicatif!: string;
    description: string = '';
    image?: string;
    zone!: Zone
    count_centre_examen!: number;
    centreExamenList: Centre[] = [];
}

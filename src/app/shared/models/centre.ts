import { Site } from './site';
import { Zone } from "./zone";
export class Centre {
    id?: number;
    siteid!: number;
    nom!: string;
    email?: string;
    codeCentre?: string;
    contacts!: string;
    ville: string = '';
    zone!: Zone;
    site!: Site;
}
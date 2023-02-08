import { Site } from './site';
export class Centre {
    id?: number;
    siteid!: number;
    nom!: string;
    email?: string;
    contacts!: string;
    ville: string = '';
    zone!: Zone;
    site!: Site;
}
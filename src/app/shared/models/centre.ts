import { Site } from './site';
export class Centre {
    id?: number;
    site_id!: number;
    nom!: string;
    email?: string;
    contacts!: string;
    ville: string = '';
    zone!: Zone;
    site!: Site;
}
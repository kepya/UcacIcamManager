import { Matter } from "./matter";
import { Session } from "./session";

export class Epreuve {
    id?: number;
    matiere!: Matter;
    session?: Session;
    path!: string;
}

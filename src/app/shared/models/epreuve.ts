import { Matter } from "./matter";
import { Session } from "./session";

export class Epreuve {
    id?: number;
    matiereId?: number;
    sessionId?: number;
    file?:string;
    matiere!: Matter;
    session?: Session;
    path!: string;
}

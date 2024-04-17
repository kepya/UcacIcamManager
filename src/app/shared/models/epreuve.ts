import { Matter } from "./matter";
import { Session } from "./session";

export class Epreuve {
    id?: number;
    matiereId?: number;
    sessionId?: number;
    file?:File;
    matiere!: Matter;
    session?: Session;
    path!: string;
}

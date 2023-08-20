import { NbCandidatsBySite } from "./nb-candidats-by-site";

export class StatCandidatures {
    nbCandidaturesEnAttente!: number;
    nbCandidaturesTotal!: number;
    nbCandidatsBySiteList: NbCandidatsBySite[] = [];
}
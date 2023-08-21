import { NbCandidatsByFormation, NbCandidatsBySite, NbCandidatsByZone } from "./nb-candidats-by-site";

export class StatCandidatures {
    nbCandidaturesEnAttente!: number;
    nbCentreExamenParticipant!: number;
    nbCandidaturesTotal!: number;
    nbEntretenusTotal!: number;
    nbZoneParticipant!: number;
    nbSiteParticipant!: number;
    nbCandidatsBySiteList: NbCandidatsBySite[] = [];
    nbCandidatsByZoneList: NbCandidatsByZone[] = [];
    nbCandidatsByFormationList: NbCandidatsByFormation[] = [];
}
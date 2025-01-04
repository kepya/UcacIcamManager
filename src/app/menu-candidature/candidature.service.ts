import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidature } from '../shared/models/compte';
import { BaseUrlService } from '../shared/services/base-url.service';
import { StatCandidatures } from '../shared/models/stat-candidature';
import { ICandidature } from '../shared/interfaces/candidature';
import { ICodeValidatorModels } from '../shared/interfaces/code-validator-models';
import { IMailRequest } from '../shared/interfaces/imail-request';

@Injectable({
  providedIn: 'root',
})
export class CandidatureService {
  url = '';
  urlCodeTest: string = '';
  urlSendEmail: string = '';
  urlUploadImage: string = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.candidaturePath}`;
    this.urlCodeTest = this.url + 'candidature/all-codes';
    this.urlUploadImage = this.url + 'candidature/file/uploadFile';
    this.urlSendEmail = this.url + 'email/send';
    this.url += 'candidature/';
  }

  uploadImage(file: File, candidatureId: number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(this.urlUploadImage + candidatureId, formData);
  }

  sendEmail(mailRequest: IMailRequest): Observable<string> {
    return this.http.post(this.urlSendEmail, mailRequest, {
      responseType: 'text',
    });
  }

  addCandidature(candidature: ICandidature): Observable<ICandidature> {
    return this.http.post<ICandidature>(this.url, candidature);
  }

  allCodes(): Observable<ICodeValidatorModels> {
    return this.http.get<ICodeValidatorModels>(this.urlCodeTest);
  }

  public liste(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + 'candidats');
  }

  public nonEntretenu(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + 'candidats/nonEntretenus');
  }

  public nonEntretenuByZone(idZone: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(
      this.url + 'candidats/nonEntretenusByZone/' + idZone
    );
  }

  public update(
    idCandidature: number,
    candidat: Candidature
  ): Observable<Candidature> {
    return this.http.patch<Candidature>(
      this.url + 'candidats/update/' + idCandidature,
      candidat
    );
  }

  public allByZone(idZone: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + 'allbyzone/' + idZone);
  }

  public allSolvableByZone(
    idZone: number,
    solvable: boolean
  ): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(
      this.url + 'allbysolvabilitezone/' + idZone + '/' + solvable
    );
  }

  public allAdmissibleByZone(idZone: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(
      this.url + 'admissiblebyzone/' + idZone
    );
  }

  public allAdmissByZone(idZone: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + 'admisbyzone/' + idZone);
  }

  public allByCentre(idCentre: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(
      this.url + 'allbycentreexamen/' + idCentre
    );
  }

  public allByParcours(parcours: string): Observable<Candidature[]> {
    return this.http.post<Candidature[]>(this.url + 'filteredcandidats', {
      parcours: true,
      cycle: false,
      valeaurParcours: parcours,
      valeurCycle: 'string',
    });
  }

  public allByCycle(cycle: string): Observable<Candidature[]> {
    return this.http.post<Candidature[]>(this.url + 'filteredcandidats', {
      parcours: false,
      cycle: true,
      valeaurParcours: 'string',
      valeurCycle: cycle,
    });
  }

  public allByCycleAndParcours(
    cycle: string,
    parcours: string
  ): Observable<Candidature[]> {
    return this.http.post<Candidature[]>(this.url + 'filteredcandidats', {
      parcours: true,
      cycle: true,
      valeaurParcours: parcours,
      valeurCycle: cycle,
    });
  }

  public allSolvableByCentre(
    idCentre: number,
    solvable: boolean
  ): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(
      this.url + 'allbysolvabilitecentreexamen/' + idCentre + '/' + solvable
    );
  }

  public allAdmissibleByCentre(idCentre: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(
      this.url + 'admissiblebycentreexamen/' + idCentre
    );
  }

  public allAdmissByCentre(idCentre: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(
      this.url + 'admisbycentreexamen/' + idCentre
    );
  }

  public allBySite(idSite: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + 'allbysite/' + idSite);
  }

  public allSolvableBySite(
    idSite: number,
    solvable: boolean
  ): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(
      this.url + 'allbysolvabilitesite/' + idSite + '/' + solvable
    );
  }

  public allAdmissibleBySite(idSite: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(
      this.url + 'admissiblebysite/' + idSite
    );
  }

  public allAdmissBySite(idSite: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + 'admisbysite/' + idSite);
  }

  public getOne(id: number): Observable<Candidature> {
    return this.http.get<Candidature>(this.url + id);
  }

  public getStatistics(): Observable<StatCandidatures> {
    return this.http.get<StatCandidatures>(this.url + 'statistics');
  }

  public downloadCandidatureFile() {
    return this.http.get(this.url + 'candidatures/download', {
      responseType: 'blob',
    });
  }

  public downloadCandidatureFileFor(cycle: string, parcours: string) {
    return this.http.post(
      this.url + 'filteredcandidats/download',
      {
        parcours: true,
        cycle: true,
        valeaurParcours: parcours,
        valeurCycle: cycle,
      },
      { responseType: 'blob' }
    );
  }

  public downloadAdmissibleCandidatureFile() {
    return this.http.get(this.url + 'candidatures/download', {
      responseType: 'blob',
    });
  }

  public downloadAdmissibleCandidatureFileByZone(idZone: number) {
    return this.http.get(this.url + 'download/admissiblebyzone/' + idZone, {
      responseType: 'blob',
    });
  }

  public downloadAdmissibleCandidatureFileByCentre(idCentre: number) {
    return this.http.get(
      this.url + 'download/admissiblebycentreexamen/' + idCentre,
      { responseType: 'blob' }
    );
  }

  public downloadAdmissibleCandidatureFileBySite(idSite: number) {
    return this.http.get(this.url + 'download/admissiblebysite/' + idSite, {
      responseType: 'blob',
    });
  }

  public downloadAdmissCandidatureFile() {
    return this.http.get(this.url + 'candidatures/download', {
      responseType: 'blob',
    });
  }

  public downloadAdmisCandidatureFileByZone(idZone: number) {
    return this.http.get(this.url + 'download/admisbyzone/' + idZone, {
      responseType: 'blob',
    });
  }

  public downloadAdmisCandidatureFileByCentre(idCentre: number) {
    return this.http.get(
      this.url + 'download/admisbycentreexamen/' + idCentre,
      { responseType: 'blob' }
    );
  }

  public downloadAdmisCandidatureFileBySite(idSite: number) {
    return this.http.get(this.url + 'download/admisbyste/' + idSite, {
      responseType: 'blob',
    });
  }

  public downloadSolvableCandidatureFile(solvable: boolean) {
    return this.http.get(this.url + 'download/allbysolvabilite/' + solvable, {
      responseType: 'blob',
    });
  }

  public delete(idCandidature: number): Observable<void> {
    return this.http.delete<void>(this.url + idCandidature);
  }
}

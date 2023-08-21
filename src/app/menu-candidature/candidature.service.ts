import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidature } from '../shared/models/compte';
import { BaseUrlService } from '../shared/services/base-url.service';
import { StatCandidatures } from '../shared/models/stat-candidature';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.candidaturePath}`;
    this.url += 'candidature/';
  }

  public liste(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "candidats");
  }

  public update(idCandidature: number, candidat: Candidature): Observable<Candidature> {
    return this.http.put<Candidature>(this.url + "candidats/update/" + idCandidature, candidat);
  }

  public allByZone(idZone: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allbyzone/" + idZone);
  }

  public allAdmissibleByZone(idZone: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allAdmissiblebyzone/" + idZone);
  }

  public allAdmissByZone(idZone: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allAdmissbyzone/" + idZone);
  }

  public allByCentre(idCentre: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allbycentreexamen/" + idCentre);
  }

  public allAdmissibleByCentre(idCentre: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allAdmissiblebycentreexamen/" + idCentre);
  }

  public allAdmissByCentre(idCentre: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allAdmissbycentreexamen/" + idCentre);
  }

  public allBySite(idSite: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allbysite/" + idSite);
  }

  public allAdmissibleBySite(idSite: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allAdmissibleBySite/" + idSite);
  }

  public allAdmissBySite(idSite: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allAdmissBySite/" + idSite);
  }

  public getOne(id: number): Observable<Candidature> {
    return this.http.get<Candidature>(this.url + id);
  }

  public getStatistics(): Observable<StatCandidatures> {
    return this.http.get<StatCandidatures>(this.url + 'statistics');
  }

  public downloadCandidatureFile() {
    return this.http.get(this.url + 'candidatures/download', { responseType: 'blob' });
  }

  public downloadAdmissibleCandidatureFile() {
    return this.http.get(this.url + 'candidatures/download', { responseType: 'blob' });
  }

  public downloadAdmissCandidatureFile() {
    return this.http.get(this.url + 'candidatures/download', { responseType: 'blob' });
  }

  public delete(idCandidature: number): Observable<void> {
    return this.http.delete<void>(this.url + idCandidature);
  }
}


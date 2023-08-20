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

  public allByZone(idZone: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allbyzone/" + idZone);
  }

  public allByCentre(idCentre: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allbycentreexamen/" + idCentre);
  }

  public allBySite(idSite: number): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "allbysite/" + idSite);
  }

  public getOne(id: number): Observable<Candidature> {
    return this.http.get<Candidature>(this.url + id);
  }

  public getStatistics(): Observable<StatCandidatures> {
    return this.http.get<StatCandidatures>(this.url + 'statistics');
  }

  public delete(idCandidature: number): Observable<void> {
    return this.http.delete<void>(this.url + idCandidature);
  }
}


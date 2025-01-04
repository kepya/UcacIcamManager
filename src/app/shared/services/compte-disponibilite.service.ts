import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CompteDisponibilite } from '../models/entretient';
import { BaseUrlService } from './base-url.service';

@Injectable({ 
  providedIn: 'root'
})
export class CompteDisponibiliteService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.interviewPath}`;
    this.url += 'comptedisponibilite/';
  }

  public liste(): Observable<CompteDisponibilite[]> {
    return this.http.get<CompteDisponibilite[]>(this.url + "all");
  }

  public allByZone(idZone:number): Observable<CompteDisponibilite[]> {
    return this.http.get<CompteDisponibilite[]>(this.url + "allByZone/"+idZone);
  }

  public allBySession(sessionId: number): Observable<CompteDisponibilite[]> {
    return this.http.get<CompteDisponibilite[]>(this.url + "bysession/" + sessionId);
  }

  public getOne(id: number): Observable<CompteDisponibilite> {
    return this.http.get<CompteDisponibilite>(this.url + id);
  }

  public create(compteDisponibilite: CompteDisponibilite): Observable<CompteDisponibilite> {
    return this.http.post<CompteDisponibilite>(this.url + "create", compteDisponibilite);
  }

  public update(compteDisponibilite: CompteDisponibilite): Observable<CompteDisponibilite> {
    return this.http.patch<CompteDisponibilite>(this.url + compteDisponibilite?.id, compteDisponibilite);
  }

  public delete(idCompteDisponibilite: number): Observable<void> {
    return this.http.delete<void>(this.url + idCompteDisponibilite);
  }
}

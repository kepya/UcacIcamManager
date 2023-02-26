import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Disponibility, Entretien } from '../models/entretient';
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class EntretienService {
  urlCompte = '';
  urlDisponibility = '';
  urlEntretien = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.urlDisponibility = `${this.baseUrlSvr.getOrigin()}${environment.interviewPath}`;
    this.urlDisponibility += '';

    this.urlEntretien = `${this.baseUrlSvr.getOrigin()}${environment.interviewPath}`;
    this.urlEntretien += 'comptes/';
  }

  /*
    Entretien
  **/
  public listeEntretien(): Observable<Entretien[]> {
    return this.http.get<Entretien[]>(this.urlEntretien + "" + "all");
  }

  public getOneEntretien(id: number): Observable<Entretien> {
    return this.http.get<Entretien>(this.urlEntretien + id);
  }

  public createEntretien(entretien: Entretien): Observable<Entretien> {
    return this.http.post<Entretien>(this.urlEntretien + "create", entretien);
  }

  public updateEntretien(entretien: Entretien): Observable<Entretien> {
    return this.http.patch<Entretien>(this.urlEntretien + entretien?.id, entretien);
  }

  public deleteEntretien(idEntretien: number): Observable<void> {
    return this.http.delete<void>(this.urlEntretien + idEntretien);
  }


  /*
    disponibilite
  **/
  public listeDisponibility(): Observable<Disponibility[]> {
    // return this.http.get<Disponibility[]>(this.urlDisponibility + "" + "all");
    return this.http.get<Disponibility[]>(this.urlDisponibility + "disponibilites");
  }

  public getOneDisponibility(id: number): Observable<Disponibility> {
    return this.http.get<Disponibility>(this.urlDisponibility + id);
  }

  public getOneDisponibilityByCompte(id: number): Observable<Disponibility> {
    return this.http.get<Disponibility>(this.urlDisponibility + 'disponibilite/' + id);
  }

  public createDisponibility(disponibility: Disponibility): Observable<Disponibility> {
    // return this.http.post<Disponibility>(this.urlDisponibility + "create", disponibility);
    let url = "" + this.urlDisponibility + "comptes/" + disponibility.compte.id + "/disponibilites";
    return this.http.post<Disponibility>(url, disponibility);
  }

  public updateDisponibility(disponibility: Disponibility): Observable<Disponibility> {
    // return this.http.patch<Disponibility>(this.urlDisponibility + disponibility?.id, disponibility);
    let url = "" + this.urlDisponibility + "comptes/" + disponibility.compte.id + "/disponibilites/" + disponibility.id;
    return this.http.patch<Disponibility>(url, disponibility);
  }

  public deleteDisponibility(idCompte: number, idDisponibility: number): Observable<void> {
    let url = "" + this.urlDisponibility + "comptes/" + idCompte + "/disponibilites/" + idDisponibility;
    // return this.http.delete<void>(this.urlDisponibility + idDisponibility);
    return this.http.delete<void>(url);
  }
}

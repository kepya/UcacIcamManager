import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compte } from '../models/compte';
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.candidaturePath}`;
    this.url += 'compte/';
  }

  public liste(): Observable<Compte[]> {
    return this.http.get<Compte[]>(this.url + "all");
  }

  public getOne(id: number): Observable<Compte> {
    return this.http.get<Compte>(this.url + id);
  }

  public create(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(this.url + "create", compte);
  }

  public update(compte: Compte): Observable<Compte> {
    return this.http.patch<Compte>(this.url + compte?.id, compte);
  }

  public delete(idCompte: number): Observable<void> {
    return this.http.delete<void>(this.url + idCompte);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compte } from '../models/compte';
import { BaseUrlService } from './base-url.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService, private storageService: StorageService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.accountPath}`;
    this.url += 'api/';
    // this.url += 'compte/';
  }

  public liste(): Observable<Compte[]> {
    // return this.http.get<Compte[]>(this.url + "all");
    return this.http.get<Compte[]>(this.url + "comptes");
  }

  public listeCandidat(): Observable<Compte[]> {
    // return this.http.get<Compte[]>(this.url + "all");
    return this.http.get<Compte[]>(this.url + "candidats");
  }

  public getOne(id: number): Observable<Compte> {
    // return this.http.get<Compte>(this.url + id);
    return this.http.get<Compte>(this.url + 'compte/' + id);
  }

  public getOneByEmail(email: string): Observable<Compte> {
    return this.http.get<Compte>(this.url + 'byemail/' + email);
  }

  public create(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(this.url + "compte", compte);
    // return this.http.post<Compte>(this.url + "create", compte);
  }

  public update(compte: Compte): Observable<Compte> {
    // return this.http.patch<Compte>(this.url + compte?.id, compte);
    return this.http.patch<Compte>(this.url + 'edit/' + compte?.id, compte);
  }

  public delete(idCompte: number): Observable<void> {
    return this.http.delete<void>(this.url + idCompte);
  }
}

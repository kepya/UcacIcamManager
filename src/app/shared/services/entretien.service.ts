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


}

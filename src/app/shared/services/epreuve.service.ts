import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseUrlService } from './base-url.service';
import { Epreuve } from '../models/epreuve';

@Injectable({
  providedIn: 'root'
})
export class EpreuveService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.candidaturePath}`;
    this.url += 'epreuve/';
  }

  public liste(): Observable<Epreuve[]> {
    return this.http.get<Epreuve[]>(this.url + "all");
  }

  public getOne(id: number): Observable<Epreuve> {
    return this.http.get<Epreuve>(this.url + id);
  }

  public create(epreuve: Epreuve, file: File): Observable<Epreuve> {
    let formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('matiereId', epreuve.matiereId + "");
    formData.append('sessionId', epreuve.sessionId + "");
    return this.http.post<Epreuve>(this.url + "create", formData);
  }

  public update(epreuve: Epreuve): Observable<Epreuve> {
    return this.http.patch<Epreuve>(this.url + epreuve?.id, epreuve);
  }

  public delete(idEpreuve: number): Observable<void> {
    return this.http.delete<void>(this.url + idEpreuve);
  }
}

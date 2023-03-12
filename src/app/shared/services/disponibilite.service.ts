import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Disponibility } from '../models/entretient';
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class DisponibiliteService {

  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.interviewPath}`;
    this.url += 'disponibilite/';
  }

  public liste(): Observable<Disponibility[]> {
    return this.http.get<Disponibility[]>(this.url + "all");
  }

  public getOne(id: number): Observable<Disponibility> {
    return this.http.get<Disponibility>(this.url + id);
  }

  public create(disponibilite: Disponibility): Observable<Disponibility> {
    return this.http.post<Disponibility>(this.url + "create", disponibilite);
  }

  public update(disponibilite: Disponibility): Observable<Disponibility> {
    return this.http.patch<Disponibility>(this.url + disponibilite?.id, disponibilite);
  }

  public delete(idDisponibility: number): Observable<void> {
    return this.http.delete<void>(this.url + idDisponibility);
  }
}

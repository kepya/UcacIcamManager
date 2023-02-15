import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Disponibility } from '../models/entretient';
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class EntretienService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.interviewPath}`;
    this.url += 'zone/';
  }

  public liste(): Observable<Disponibility[]> {
    return this.http.get<Disponibility[]>(this.url + "all");
  }

  public getOne(id: number): Observable<Disponibility> {
    return this.http.get<Disponibility>(this.url + id);
  }

  public create(zone: Disponibility): Observable<Disponibility> {
    return this.http.post<Disponibility>(this.url + "create", zone);
  }

  public update(zone: Disponibility): Observable<Disponibility> {
    return this.http.patch<Disponibility>(this.url + zone?.id, zone);
  }

  public delete(idDisponibility: number): Observable<void> {
    return this.http.delete<void>(this.url + idDisponibility);
  }


  /*
    disponibilite
  **/
  public createDisponibility(disponibility: Disponibility): Observable<Disponibility> {
    return this.http.post<Disponibility>(this.url + "create", disponibility);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseUrlService } from './base-url.service';
import { Zone } from "../models/zone";

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.administrationPath}`;
    this.url += 'zone/';
  }

  public liste(): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.url + "all");
  }

  public getOne(id: number): Observable<Zone> {
    return this.http.get<Zone>(this.url + id);
  }

  public create(zone: Zone): Observable<Zone> {
    return this.http.post<Zone>(this.url + "create", zone);
  }

  public update(zone: Zone): Observable<Zone> {
    return this.http.patch<Zone>(this.url + zone?.id, zone);
  }

  public delete(idZone: number): Observable<void> {
    return this.http.delete<void>(this.url + idZone);
  }
}

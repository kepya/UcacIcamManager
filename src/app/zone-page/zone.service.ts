import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Zone } from '../shared/models/zone';
import { BaseUrlService } from '../shared/services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.basePath}`;
    this.url += 'zones/';
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Centre } from '../shared/models/centre';
import { BaseUrlService } from '../shared/services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class CentreExamenService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.administrationPath}`;
    this.url += 'centre_examen/';
  }

  public liste(): Observable<Centre[]> {
    return this.http.get<Centre[]>(this.url + "all");
  }

  public allByZone(idZone: number): Observable<Centre[]> {
    return this.http.get<Centre[]>(this.url + "allbyzone/" + idZone);
  }

  public allBySite(idSite: number): Observable<Centre[]> {
    return this.http.get<Centre[]>(this.url + "allbysite/" + idSite);
  }

  public getOne(id: number): Observable<Centre> {
    return this.http.get<Centre>(this.url + id);
  }

  public create(centre: Centre): Observable<Centre> {
    return this.http.post<Centre>(this.url + "create", centre);
  }

  public update(centre: Centre): Observable<Centre> {
    return this.http.patch<Centre>(this.url + centre?.id, centre);
  }

  public delete(idCentre: number): Observable<void> {
    return this.http.delete<void>(this.url + idCentre);
  }
}

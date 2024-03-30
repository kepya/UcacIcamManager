import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseUrlService } from './base-url.service';
import { Matter, MatterCycleParcours } from '../models/matter';

@Injectable({
  providedIn: 'root'
})
export class MatterService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.candidaturePath}`;
    this.url += 'matiere/';
  }

  public liste(): Observable<Matter[]> {
    return this.http.get<Matter[]>(this.url + "all");
  }

  public listeByCyleParcours(): Observable<MatterCycleParcours[]> {
    return this.http.get<MatterCycleParcours[]>(this.url + "allByCycleParcours");
  }

  public getOne(id: number): Observable<Matter> {
    return this.http.get<Matter>(this.url + id);
  }

  public create(compteDisponibilite: Matter): Observable<Matter> {
    return this.http.post<Matter>(this.url + "create", compteDisponibilite);
  }

  public update(compteDisponibilite: Matter): Observable<Matter> {
    return this.http.patch<Matter>(this.url + compteDisponibilite?.id, compteDisponibilite);
  }

  public delete(idMatter: number): Observable<void> {
    return this.http.delete<void>(this.url + idMatter);
  }
}

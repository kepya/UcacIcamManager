import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidature } from '../shared/models/compte';
import { BaseUrlService } from '../shared/services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.candidaturePath}`;
    this.url += 'candidature/candidats/';
  }

  public liste(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.url + "");
  }

  public getOne(id: number): Observable<Candidature> {
    return this.http.get<Candidature>(this.url + id);
  }

  public delete(idCandidature: number): Observable<void> {
    return this.http.delete<void>(this.url + idCandidature);
  }
}


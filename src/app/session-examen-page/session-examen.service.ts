import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Session } from '../shared/models/session';
import { BaseUrlService } from '../shared/services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class SessionExamenService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.basePath}`;
    this.url += 'session/';
  }

  public liste(): Observable<Session[]> {
    return this.http.get<Session[]>(this.url + "all");
  }

  public getOne(id: number): Observable<Session> {
    return this.http.get<Session>(this.url + id);
  }

  public create(session: Session): Observable<Session> {
    return this.http.post<Session>(this.url + "create", session);
  }

  public update(session: Session): Observable<Session> {
    return this.http.patch<Session>(this.url + session?.id, session);
  }

  public delete(idSession: number): Observable<void> {
    return this.http.delete<void>(this.url + idSession);
  }
}

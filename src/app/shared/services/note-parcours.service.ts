import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseUrlService } from './base-url.service';
import { NoteParcours } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteParcoursService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.interviewPath}`;
    this.url += 'noteParcours/';
  }

  public liste(): Observable<NoteParcours[]> {
    return this.http.get<NoteParcours[]>(this.url + "all");
  }

  public getOne(id: number): Observable<NoteParcours> {
    return this.http.get<NoteParcours>(this.url + id);
  }

  public create(note: NoteParcours): Observable<NoteParcours> {
    return this.http.post<NoteParcours>(this.url + "create", note);
  }

  public update(note: NoteParcours): Observable<NoteParcours> {
    return this.http.patch<NoteParcours>(this.url + note?.id, note);
  }

  public delete(idNoteParcours: number): Observable<void> {
    return this.http.delete<void>(this.url + idNoteParcours);
  }
}

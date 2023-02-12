import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note';
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.basePath}`;
    this.url += 'note/';
  }

  public liste(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url + "all");
  }

  public getOne(id: number): Observable<Note> {
    return this.http.get<Note>(this.url + id);
  }

  public create(note: Note): Observable<Note> {
    return this.http.post<Note>(this.url + "create", note);
  }

  public update(note: Note): Observable<Note> {
    return this.http.patch<Note>(this.url + note?.id, note);
  }

  public delete(idNote: number): Observable<void> {
    return this.http.delete<void>(this.url + idNote);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note, NoteInterviewerResponse, NoteRequest, NoteResponse } from '../models/note';
import { BaseUrlService } from './base-url.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.interviewPath}`;
    this.url += 'note/';
  }

  public allNotesEntretien(): Observable<NoteInterviewerResponse[]> {
    return this.http.get<NoteInterviewerResponse[]>(this.url + "allNotesEntretien");
  }

  public liste(): Observable<NoteResponse[]> {
    return this.http.get<NoteResponse[]>(this.url + "all");
  }

  public getOne(id: number): Observable<NoteResponse> {
    return this.http.get<NoteResponse>(this.url + id);
  }

  public create(note: NoteRequest): Observable<NoteResponse> {
    return this.http.post<NoteResponse>(this.url + "create", note);
  }

  public update(note: Note): Observable<NoteResponse> {
    return this.http.patch<NoteResponse>(this.url + note?.id, note);
  }

  public delete(idNote: number): Observable<void> {
    return this.http.delete<void>(this.url + idNote);
  }
}

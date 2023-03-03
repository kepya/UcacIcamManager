import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseUrlService} from "./base-url.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {
  private url: string ="";

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.candidaturePath}`;
    this.url += 'candidature/candidatures/download';
  }

  public downloadCandidatureExcel(): Observable<any>{
    return  this.http.get(this.url, {
      responseType: 'arraybuffer'
    });
    }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Site } from '../shared/models/site';
import { BaseUrlService } from '../shared/services/base-url.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  url = '';

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.basePath}`;
    this.url += 'site/';
  }

  public liste(): Observable<Site[]> {
    return this.http.get<Site[]>(this.url + "all");
  }

  public getOne(id: number): Observable<Site> {
    return this.http.get<Site>(this.url + id);
  }

  public create(site: Site): Observable<Site> {
    return this.http.post<Site>(this.url + "create", site);
  }

  public update(site: Site): Observable<Site> {
    return this.http.patch<Site>(this.url + site?.id, site);
  }

  public delete(idSite: number): Observable<void> {
    return this.http.delete<void>(this.url + idSite);
  }
}

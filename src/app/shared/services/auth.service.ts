import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compte } from '../models/compte';
import { IToken } from '../models/token';
import { Credential } from '../models/credential';
import { BaseUrlService } from './base-url.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = '';
  isLogin = new BehaviorSubject(false);

  constructor(private http: HttpClient, private baseUrlSvr: BaseUrlService) {
    this.url = `${this.baseUrlSvr.getOrigin()}${environment.accountPath}`;
    // this.url += 'auth/';
    this.url += '';
  }

  public register(compte: Compte): Observable<Compte> {
    return this.http.post<Compte>(this.url + "register", compte);
  }

  public login(credential: Credential): Observable<IToken> {
    // return this.http.post<IToken>(this.url + "login", credential);
    return this.http.post<IToken>(this.url + "token", credential);
  }

}

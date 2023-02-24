import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import { Compte } from '../models/compte';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private router: Router, private authService: AuthService) { }

  async setString(key: string, value: string) {
    key = this.encryptUsingAES256(key);
    value = this.encryptUsingAES256(value);
    localStorage.setItem(key, value);
  }

  getString(key: string): any {
    key = this.encryptUsingAES256(key);
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(this.decryptUsingAES256(data));
    }
    return null;
  }

  setObject(key: string, value: any) {
    key = this.encryptUsingAES256(key);
    value = this.encryptUsingAES256(value);
    localStorage.setItem(key, value);
  }

  getObject(key: string): any {
    key = this.encryptUsingAES256(key);
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(this.decryptUsingAES256(data));
    }
    return null;
  }

  getUserConnected(): Compte {
    return JSON.parse(this.getString('USER_INFO'));
  }

  getUserTokenConnected(): string {
    return this.getString('USER_TOKEN');
  }

  storeUserConnected(user: Compte): void {
    this.setString('USER_INFO', JSON.stringify(user));
  }

  storeUserToken(token: string): void {
    this.setString('USER_TOKEN', token);
  }

  getSignDate(): number {
    return parseInt(this.getString('sign_date'), 10);
  }

  removeItem(key: string): void {
    key = key = this.encryptUsingAES256(key);
    localStorage.removeItem(key);
  }

  clear(): void {
    this.authService.isLogin.next(false);
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  private encryptUsingAES256(data: any): any {
    const KEY = CryptoJS.enc.Utf8.parse(environment.secretKey);
    const IV = CryptoJS.enc.Utf8.parse(environment.secretKey);
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), KEY, {
      keySize: 16,
      iv: IV,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });

    return encrypted.toString();
  }

  private decryptUsingAES256(encrypted: any): any {
    if (!encrypted) {
      return null;
    }
    const KEY = CryptoJS.enc.Utf8.parse(environment.secretKey);
    const IV = CryptoJS.enc.Utf8.parse(environment.secretKey);

    const decrypted = CryptoJS.AES.decrypt(encrypted, KEY, {
      keySize: 16,
      iv: IV,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);

    return decrypted;
  }
}

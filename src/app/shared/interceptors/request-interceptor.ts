import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TokenService } from '../services/token.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService, private storageService: StorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.storageService.getUserTokenConnected();
    if (token != null) {
      let cloneRequest = request.clone({
        headers: request.headers.set('Authorization', ' bearer ' + token)
      })
      return next.handle(cloneRequest).pipe(
        catchError(
          err => {
            console.log('Error:', err);

            if (err.stats === 401) {
              this.storageService.clear();
            }
            return throwError(() => new Error('Session Expired'));
          }
        )
      );
    }
    return next.handle(request);
  }
}

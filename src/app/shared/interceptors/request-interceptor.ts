import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, catchError, throwError, finalize } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TokenService } from '../services/token.service';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService, private storageService: StorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.storageService.getUserTokenConnected();
    this.loaderService.isLoading.next(true);
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
        ),
        finalize(() => {
          this.loaderService.isLoading.next(false);
        })
      );
    }
    return next.handle(request).pipe(
      finalize(() => {
        this.loaderService.isLoading.next(false);
      })
    );
  }
}

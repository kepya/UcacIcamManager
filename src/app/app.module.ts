import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { httpInterceptorProviders } from './shared/interceptors';
import { AuthGuard } from './shared/guards/auth.guard';
import { SharedModule } from './shared/shared.module';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ToastModule,
    ProgressSpinnerModule,
  ],
  providers: [MessageService, ConfirmationService, AuthGuard, { provide: LOCALE_ID, useValue: 'fr' }, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

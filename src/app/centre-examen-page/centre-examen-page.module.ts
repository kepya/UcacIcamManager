import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentreExamenPageRoutingModule } from './centre-examen-page-routing.module';
import { CentreExamenPageComponent } from './centre-examen-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    CentreExamenPageComponent
  ],
  imports: [
    CommonModule,
    CentreExamenPageRoutingModule,
    FormsModule,
    HttpClientModule,
    ConfirmPopupModule,
    ToastModule,
    ReactiveFormsModule
  ]
})
export class CentreExamenPageModule { }

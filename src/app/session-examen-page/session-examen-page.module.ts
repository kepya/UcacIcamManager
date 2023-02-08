import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionExamenPageRoutingModule } from './session-examen-page-routing.module';
import { SessionExamenPageComponent } from './session-examen-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SessionExamenPageComponent
  ],
  imports: [
    CommonModule,
    SessionExamenPageRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SessionExamenPageModule { }

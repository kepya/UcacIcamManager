import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonePageRoutingModule } from './zone-page-routing.module';
import { ZonePageComponent } from './zone-page.component';
import { SharedModule } from '../shared/shared.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    ZonePageComponent
  ],
  imports: [
    CommonModule,
    ZonePageRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    ConfirmPopupModule,
    ToastModule,
    ReactiveFormsModule
  ]
})
export class ZonePageModule { }

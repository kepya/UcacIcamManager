import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEntretienRoutingModule } from './gestion-entretien-routing.module';
import { GestionEntretienComponent } from './gestion-entretien.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    GestionEntretienComponent
  ],
  imports: [
    CommonModule,
    GestionEntretienRoutingModule,
    ToastModule,
    ConfirmPopupModule,
    ButtonModule,
    SharedModule,
    FormsModule
  ]
})
export class GestionEntretienModule { }

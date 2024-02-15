import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDisponibiliteRoutingModule } from './gestion-disponibilite-routing.module';
import { GestionDisponibiliteComponent } from './gestion-disponibilite.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    GestionDisponibiliteComponent
  ],
  imports: [
    CommonModule,
    GestionDisponibiliteRoutingModule,
    ToastModule,
    ConfirmPopupModule,
    ButtonModule,
    SharedModule,
    FormsModule
  ]
})
export class GestionDisponibiliteModule { }

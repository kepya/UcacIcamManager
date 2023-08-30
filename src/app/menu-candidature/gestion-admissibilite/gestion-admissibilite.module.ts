import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAdmissibiliteRoutingModule } from './gestion-admissibilite-routing.module';
import { GestionAdmissibiliteComponent } from './gestion-admissibilite.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    GestionAdmissibiliteComponent
  ],
  imports: [
    CommonModule,
    GestionAdmissibiliteRoutingModule,
    FormsModule,
    ToastModule,
    ConfirmPopupModule,
    ButtonModule
  ]
})
export class GestionAdmissibiliteModule { }

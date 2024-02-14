import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAdmisRoutingModule } from './gestion-admis-routing.module';
import { GestionAdmisComponent } from './gestion-admis.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    GestionAdmisComponent
  ],
  imports: [
    CommonModule,
    GestionAdmisRoutingModule,
    FormsModule,
    ToastModule,
    ConfirmPopupModule,
    ButtonModule,
    SharedModule
  ]
})
export class GestionAdmisModule { }

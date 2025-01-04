import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAdmissibiliteRoutingModule } from './gestion-admissibilite-routing.module';
import { GestionAdmissibiliteComponent } from './gestion-admissibilite.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';

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
    ButtonModule,
    SharedModule
  ]
})
export class GestionAdmissibiliteModule { }

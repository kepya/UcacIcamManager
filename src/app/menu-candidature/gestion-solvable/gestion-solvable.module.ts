import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionSolvableRoutingModule } from './gestion-solvable-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { GestionSolvableComponent } from './gestion-solvable.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [GestionSolvableComponent],
  imports: [
    CommonModule,
    GestionSolvableRoutingModule,
    FormsModule,
    ToastModule,
    ConfirmPopupModule,
    ButtonModule,
    SharedModule
  ]
})
export class GestionSolvableModule { }

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEntretienRoutingModule } from './gestion-entretien-routing.module';
import { GestionEntretienComponent } from './gestion-entretien.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

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
    FormsModule,

    TagModule,
    DropdownModule,
    TableModule,
    InputTextModule,
    DialogModule
  ]
})
export class GestionEntretienModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionSolvableRoutingModule } from './gestion-solvable-routing.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { GestionSolvableComponent } from './gestion-solvable.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [GestionSolvableComponent],
  imports: [
    CommonModule,
    GestionSolvableRoutingModule,
    FormsModule,
    ToastModule,
    ConfirmPopupModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    FormsModule,
    TagModule,
    InputTextModule,
    SharedModule
  ]
})
export class GestionSolvableModule { }

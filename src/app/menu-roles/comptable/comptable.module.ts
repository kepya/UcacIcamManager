import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';

import { ComptableRoutingModule } from './comptable-routing.module';
import { ComptableComponent } from './comptable.component';


@NgModule({
  declarations: [
    ComptableComponent
  ],
  imports: [
    CommonModule,
    ComptableRoutingModule,
    FormsModule,
    ConfirmPopupModule,
    ToastModule,
    ReactiveFormsModule
  ]
})
export class ComptableModule { }

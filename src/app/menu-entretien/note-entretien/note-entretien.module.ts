import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteEntretienRoutingModule } from './note-entretien-routing.module';
import { NoteEntretienComponent } from './note-entretien.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    NoteEntretienComponent
  ],
  imports: [
    CommonModule,
    NoteEntretienRoutingModule,
    FormsModule,
    ReactiveFormsModule,

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
export class NoteEntretienModule { }

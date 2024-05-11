import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DefineNoteInterviewRoutingModule } from './define-note-interview-routing.module';
import { DefineNoteInterviewComponent } from './define-note-interview.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    DefineNoteInterviewComponent
  ],
  imports: [
    CommonModule,
    DefineNoteInterviewRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ConfirmPopupModule,
    ButtonModule,
    TagModule,
    DropdownModule,
    TableModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule
  ]
})
export class DefineNoteInterviewModule { }

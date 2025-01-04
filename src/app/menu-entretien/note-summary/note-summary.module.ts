import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteSummaryRoutingModule } from './note-summary-routing.module';
import { NoteSummaryComponent } from './note-summary.component';

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
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NoteSummaryComponent
  ],
  imports: [
    CommonModule,
    NoteSummaryRoutingModule,
    SharedModule,
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
    InputTextareaModule,
    CheckboxModule
  ]
})
export class NoteSummaryModule { }

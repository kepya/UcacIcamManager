import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizeInterviewRoutingModule } from './visualize-interview-routing.module';
import { VisualizeInterviewComponent } from './visualize-interview.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VisualizeInterviewComponent
  ],
  imports: [
    CommonModule,
    VisualizeInterviewRoutingModule,
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
export class VisualizeInterviewModule { }

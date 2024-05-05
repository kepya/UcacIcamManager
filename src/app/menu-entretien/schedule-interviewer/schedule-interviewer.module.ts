import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleInterviewerRoutingModule } from './schedule-interviewer-routing.module';
import { ScheduleInterviewerComponent } from './schedule-interviewer.component';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    ScheduleInterviewerComponent
  ],
  imports: [
    CommonModule,
    ScheduleInterviewerRoutingModule,
    TagModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    DialogModule
  ]
})
export class ScheduleInterviewerModule { }

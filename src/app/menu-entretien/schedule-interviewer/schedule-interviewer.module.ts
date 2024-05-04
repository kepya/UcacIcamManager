import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleInterviewerRoutingModule } from './schedule-interviewer-routing.module';
import { ScheduleInterviewerComponent } from './schedule-interviewer.component';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

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
    InputTextModule
  ]
})
export class ScheduleInterviewerModule { }

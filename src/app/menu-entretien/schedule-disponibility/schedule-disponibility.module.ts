import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScheduleDisponibilityRoutingModule } from './schedule-disponibility-routing.module';
import { ScheduleDisponibilityComponent } from './schedule-disponibility.component';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarouselModule } from 'primeng/carousel';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    ScheduleDisponibilityComponent
  ],
  imports: [
    CommonModule,
    ScheduleDisponibilityRoutingModule,
    ToastModule,
    ConfirmPopupModule,
    ButtonModule,
    SharedModule,
    FormsModule,
    CarouselModule,
    RadioButtonModule
  ]
})
export class ScheduleDisponibilityModule { }

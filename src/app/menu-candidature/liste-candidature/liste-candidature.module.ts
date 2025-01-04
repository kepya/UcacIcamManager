import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeCandidatureRoutingModule } from './liste-candidature-routing.module';
import { ListeCandidatureComponent } from './liste-candidature.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ListeCandidatureComponent
  ],
  imports: [
    CommonModule,
    ListeCandidatureRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CalendarModule,
    SharedModule,
    ButtonModule,
  ]
})
export class ListeCandidatureModule { }

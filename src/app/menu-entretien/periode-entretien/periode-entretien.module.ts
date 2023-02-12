import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodeEntretienRoutingModule } from './periode-entretien-routing.module';
import { PeriodeEntretienComponent } from './periode-entretien.component';


@NgModule({
  declarations: [
    PeriodeEntretienComponent
  ],
  imports: [
    CommonModule,
    PeriodeEntretienRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PeriodeEntretienModule { }

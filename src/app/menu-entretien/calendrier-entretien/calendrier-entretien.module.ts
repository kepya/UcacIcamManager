import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendrierEntretienRoutingModule } from './calendrier-entretien-routing.module';
import { CalendrierEntretienComponent } from './calendrier-entretien.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    CalendrierEntretienComponent
  ],
  imports: [
    CommonModule,
    CalendrierEntretienRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ]
})
export class CalendrierEntretienModule { }

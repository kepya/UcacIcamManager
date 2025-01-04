import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntervenantEntretienRoutingModule } from './intervenant-entretien-routing.module';
import { IntervenantEntretienComponent } from './intervenant-entretien.component';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    IntervenantEntretienComponent
  ],
  imports: [
    CommonModule,
    IntervenantEntretienRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule
  ]
})
export class IntervenantEntretienModule { }

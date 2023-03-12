import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntervenantEntretienRoutingModule } from './intervenant-entretien-routing.module';
import { IntervenantEntretienComponent } from './intervenant-entretien.component';


@NgModule({
  declarations: [
    IntervenantEntretienComponent
  ],
  imports: [
    CommonModule,
    IntervenantEntretienRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IntervenantEntretienModule { }

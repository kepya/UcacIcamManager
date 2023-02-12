import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendrierDisponibiliteRoutingModule } from './calendrier-disponibilite-routing.module';
import { CalendrierDisponibiliteComponent } from './calendrier-disponibilite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalendrierDisponibiliteComponent
  ],
  imports: [
    CommonModule,
    CalendrierDisponibiliteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CalendrierDisponibiliteModule { }

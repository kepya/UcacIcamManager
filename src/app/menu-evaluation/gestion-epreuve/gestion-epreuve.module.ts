import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionEpreuveRoutingModule } from './gestion-epreuve-routing.module';
import { GestionEpreuveComponent } from './gestion-epreuve.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionEpreuveComponent
  ],
  imports: [
    CommonModule,
    GestionEpreuveRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GestionEpreuveModule { }

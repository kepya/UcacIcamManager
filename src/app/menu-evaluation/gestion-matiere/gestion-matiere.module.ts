import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionMatiereRoutingModule } from './gestion-matiere-routing.module';
import { GestionMatiereComponent } from './gestion-matiere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionMatiereComponent
  ],
  imports: [
    CommonModule,
    GestionMatiereRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GestionMatiereModule { }

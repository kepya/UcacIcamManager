import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionDisponibiliteRoutingModule } from './gestion-disponibilite-routing.module';
import { GestionDisponibiliteComponent } from './gestion-disponibilite.component';


@NgModule({
  declarations: [
    GestionDisponibiliteComponent
  ],
  imports: [
    CommonModule,
    GestionDisponibiliteRoutingModule
  ]
})
export class GestionDisponibiliteModule { }

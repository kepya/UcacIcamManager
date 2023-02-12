import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAdmissibiliteRoutingModule } from './gestion-admissibilite-routing.module';
import { GestionAdmissibiliteComponent } from './gestion-admissibilite.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GestionAdmissibiliteComponent
  ],
  imports: [
    CommonModule,
    GestionAdmissibiliteRoutingModule,
    FormsModule,
  ]
})
export class GestionAdmissibiliteModule { }

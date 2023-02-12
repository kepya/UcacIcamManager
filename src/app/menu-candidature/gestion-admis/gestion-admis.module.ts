import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAdmisRoutingModule } from './gestion-admis-routing.module';
import { GestionAdmisComponent } from './gestion-admis.component';


@NgModule({
  declarations: [
    GestionAdmisComponent
  ],
  imports: [
    CommonModule,
    GestionAdmisRoutingModule,
    FormsModule
  ]
})
export class GestionAdmisModule { }

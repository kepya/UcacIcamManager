import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeAdmisRoutingModule } from './liste-admis-routing.module';
import { ListeAdmisComponent } from './liste-admis.component';


@NgModule({
  declarations: [
    ListeAdmisComponent
  ],
  imports: [
    CommonModule,
    ListeAdmisRoutingModule,
    FormsModule
  ]
})
export class ListeAdmisModule { }

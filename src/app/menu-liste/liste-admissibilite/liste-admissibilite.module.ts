import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeAdmissibiliteRoutingModule } from './liste-admissibilite-routing.module';
import { ListeAdmissibiliteComponent } from './liste-admissibilite.component';


@NgModule({
  declarations: [
    ListeAdmissibiliteComponent
  ],
  imports: [
    CommonModule,
    ListeAdmissibiliteRoutingModule,
    FormsModule
  ]
})
export class ListeAdmissibiliteModule { }

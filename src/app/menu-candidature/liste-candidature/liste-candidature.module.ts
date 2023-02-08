import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeCandidatureRoutingModule } from './liste-candidature-routing.module';
import { ListeCandidatureComponent } from './liste-candidature.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeCandidatureComponent
  ],
  imports: [
    CommonModule,
    ListeCandidatureRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ListeCandidatureModule { }

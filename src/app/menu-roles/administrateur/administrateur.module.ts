import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrateurRoutingModule } from './administrateur-routing.module';
import { AdministrateurComponent } from './administrateur.component';


@NgModule({
  declarations: [
    AdministrateurComponent
  ],
  imports: [
    CommonModule,
    AdministrateurRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministrateurModule { }

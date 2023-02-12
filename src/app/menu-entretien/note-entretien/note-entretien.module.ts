import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteEntretienRoutingModule } from './note-entretien-routing.module';
import { NoteEntretienComponent } from './note-entretien.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NoteEntretienComponent
  ],
  imports: [
    CommonModule,
    NoteEntretienRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NoteEntretienModule { }

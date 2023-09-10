import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeSolvableRoutingModule } from './liste-solvable-routing.module';
import { ListeSolvableComponent } from './liste-solvable.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeSolvableComponent
  ],
  imports: [
    CommonModule,
    ListeSolvableRoutingModule,
    FormsModule
  ]
})
export class ListeSolvableModule { }

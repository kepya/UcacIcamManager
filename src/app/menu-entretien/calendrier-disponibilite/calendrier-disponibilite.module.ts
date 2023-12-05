import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendrierDisponibiliteRoutingModule } from './calendrier-disponibilite-routing.module';
import { CalendrierDisponibiliteComponent } from './calendrier-disponibilite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TreeSelectModule } from 'primeng/treeselect';

@NgModule({
  declarations: [
    CalendrierDisponibiliteComponent
  ],
  imports: [
    CommonModule,
    CalendrierDisponibiliteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TreeSelectModule
  ]
})
export class CalendrierDisponibiliteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    PlanningComponent
  ],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    TableModule,
    DropdownModule,
    FormsModule,
    TagModule,
    InputTextModule
  ]
})
export class PlanningModule { }

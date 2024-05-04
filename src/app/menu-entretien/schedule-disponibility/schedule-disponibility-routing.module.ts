import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleDisponibilityComponent } from './schedule-disponibility.component';

const routes: Routes = [
  {
    path: '', 
    component: ScheduleDisponibilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleDisponibilityRoutingModule { }

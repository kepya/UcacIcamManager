import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleInterviewerComponent } from './schedule-interviewer.component';

const routes: Routes = [
  {path: '',component: ScheduleInterviewerComponent,}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleInterviewerRoutingModule { }

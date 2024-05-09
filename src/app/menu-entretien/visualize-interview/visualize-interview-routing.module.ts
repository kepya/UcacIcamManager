import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizeInterviewComponent } from './visualize-interview.component';

const routes: Routes = [
  {
    path: '',
    component: VisualizeInterviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizeInterviewRoutingModule { }

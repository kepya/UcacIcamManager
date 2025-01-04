import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteSummaryComponent } from './note-summary.component';

const routes: Routes = [
  {
    path: '',
    component: NoteSummaryComponent
  },
  {
    path: ':idCandidature',
    component: NoteSummaryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteSummaryRoutingModule { }

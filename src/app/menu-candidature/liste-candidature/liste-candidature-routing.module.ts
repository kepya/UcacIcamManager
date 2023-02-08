import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCandidatureComponent } from './liste-candidature.component';

const routes: Routes = [
  {
    path: '',
    component: ListeCandidatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeCandidatureRoutingModule { }

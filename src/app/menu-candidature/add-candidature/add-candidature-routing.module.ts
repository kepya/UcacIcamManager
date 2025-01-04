import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCandidatureComponent } from './add-candidature.component';

const routes: Routes = [
  {
    path: '', 
    component: AddCandidatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCandidatureRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeSolvableComponent } from './liste-solvable.component';

const routes: Routes = [
  {
    path: '',
    component: ListeSolvableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeSolvableRoutingModule { }

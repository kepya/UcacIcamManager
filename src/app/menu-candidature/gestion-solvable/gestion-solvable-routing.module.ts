import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionSolvableComponent } from './gestion-solvable.component';

const routes: Routes = [
  {
    path: '',
    component: GestionSolvableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionSolvableRoutingModule { }

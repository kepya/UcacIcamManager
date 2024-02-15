import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionEntretienComponent } from './gestion-entretien.component';

const routes: Routes = [
  {
    path: '',
    component: GestionEntretienComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionEntretienRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDisponibiliteComponent } from './gestion-disponibilite.component';

const routes: Routes = [
  {
    path: '',
    component: GestionDisponibiliteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionDisponibiliteRoutingModule { }

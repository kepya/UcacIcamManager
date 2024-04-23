import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionMatiereComponent } from './gestion-matiere.component';

const routes: Routes = [
  {
    path: '',
    component: GestionMatiereComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMatiereRoutingModule { }

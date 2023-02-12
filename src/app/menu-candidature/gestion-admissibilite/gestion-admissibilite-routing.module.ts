import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionAdmissibiliteComponent } from './gestion-admissibilite.component';

const routes: Routes = [
  {
    path: '',
    component: GestionAdmissibiliteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAdmissibiliteRoutingModule { }

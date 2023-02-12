import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionAdmisComponent } from './gestion-admis.component';

const routes: Routes = [
  {
    path: '',
    component: GestionAdmisComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAdmisRoutingModule { }

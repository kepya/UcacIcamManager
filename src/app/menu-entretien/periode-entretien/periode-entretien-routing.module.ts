import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodeEntretienComponent } from './periode-entretien.component';

const routes: Routes = [
  {
    path: '',
    component: PeriodeEntretienComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodeEntretienRoutingModule { }

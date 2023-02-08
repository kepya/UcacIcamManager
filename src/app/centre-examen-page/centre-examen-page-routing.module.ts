import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentreExamenPageComponent } from './centre-examen-page.component';

const routes: Routes = [
  {
    path: '',
    component: CentreExamenPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentreExamenPageRoutingModule { }

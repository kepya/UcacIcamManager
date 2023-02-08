import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionExamenPageComponent } from './session-examen-page.component';

const routes: Routes = [
  {
    path: '',
    component: SessionExamenPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionExamenPageRoutingModule { }

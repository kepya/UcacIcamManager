import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { SessionExamenPageComponent } from './session-examen-page.component';

const routes: Routes = [
  {
    path: '',
    component: SessionExamenPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class SessionExamenPageRoutingModule { }

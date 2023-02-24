import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { CentreExamenPageComponent } from './centre-examen-page.component';

const routes: Routes = [
  {
    path: '',
    component: CentreExamenPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class CentreExamenPageRoutingModule { }

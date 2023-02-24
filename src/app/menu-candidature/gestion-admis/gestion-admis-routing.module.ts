import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { GestionAdmisComponent } from './gestion-admis.component';

const routes: Routes = [
  {
    path: '',
    component: GestionAdmisComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class GestionAdmisRoutingModule { }

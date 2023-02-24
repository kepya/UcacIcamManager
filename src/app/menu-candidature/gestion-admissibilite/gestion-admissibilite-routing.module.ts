import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { GestionAdmissibiliteComponent } from './gestion-admissibilite.component';

const routes: Routes = [
  {
    path: '',
    component: GestionAdmissibiliteComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class GestionAdmissibiliteRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { GestionAdmissibiliteComponent } from './gestion-admissibilite.component';
import { AdminGuard } from 'src/app/shared/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: GestionAdmissibiliteComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class GestionAdmissibiliteRoutingModule { }

import { ListeAdmissibiliteComponent } from './liste-admissibilite.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/shared/guards/admin.guard';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: ListeAdmissibiliteComponent,
  canActivate: [AdminGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AdminGuard]
})
export class ListeAdmissibiliteRoutingModule { }

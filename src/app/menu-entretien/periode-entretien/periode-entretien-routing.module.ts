import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { PeriodeEntretienComponent } from './periode-entretien.component';

const routes: Routes = [
  {
    path: '',
    component: PeriodeEntretienComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class PeriodeEntretienRoutingModule { }

import { CalendrierEntretienComponent } from './calendrier-entretien.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CalendrierEntretienComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: CalendrierEntretienComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class CalendrierEntretienRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { ListeCandidatureComponent } from './liste-candidature.component';

const routes: Routes = [
  {
    path: '',
    component: ListeCandidatureComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class ListeCandidatureRoutingModule { }

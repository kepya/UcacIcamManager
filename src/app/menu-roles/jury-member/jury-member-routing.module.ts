import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { JuryMemberComponent } from './jury-member.component';

const routes: Routes = [{
  path: '',
  component: JuryMemberComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class JuryMemberRoutingModule { }

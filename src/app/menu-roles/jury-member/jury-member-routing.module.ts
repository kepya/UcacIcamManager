import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuryMemberComponent } from './jury-member.component';

const routes: Routes = [{
  path: '',
  component: JuryMemberComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuryMemberRoutingModule { }

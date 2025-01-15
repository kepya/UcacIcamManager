import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordresetComponent } from './passwordreset.component';
import { ValidatetokenComponent } from './validatetoken/validatetoken.component';

const routes: Routes = [
  { path: '', component: PasswordresetComponent }, // Route par défaut pour ce module
  { path: 'validate-token/:email/:token', component: ValidatetokenComponent },
  { path: 'reset-password/:email/:token', component: PasswordresetComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordresetRoutingModule {}
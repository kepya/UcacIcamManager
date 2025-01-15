import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  /*{
    path: '**',
    component: LoginComponent
  },*/
  { 
    path: 'passwordreset', 
    loadChildren: () => import('./passwordreset/passwordreset.module').then(m => m.PasswordresetModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

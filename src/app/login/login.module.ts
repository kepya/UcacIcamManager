import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class LoginModule { }

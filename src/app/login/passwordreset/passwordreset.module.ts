import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordresetComponent } from './passwordreset.component';
import { PasswordresetRoutingModule } from './passwordreset-routing.module';
import { ValidatetokenComponent } from './validatetoken/validatetoken.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PasswordresetComponent,
    ValidatetokenComponent
  ],
  imports: [
    CommonModule,
    PasswordresetRoutingModule,
    DialogModule,
    FormsModule
  ]
})
export class PasswordresetModule { }

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuryMemberRoutingModule } from './jury-member-routing.module';
import { JuryMemberComponent } from './jury-member.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    JuryMemberComponent
  ],
  imports: [
    CommonModule,
    JuryMemberRoutingModule,
    FormsModule,
    ConfirmPopupModule,
    ToastModule,
    ReactiveFormsModule
  ]
})
export class JuryMemberModule { }

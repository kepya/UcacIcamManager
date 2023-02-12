import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuryMemberRoutingModule } from './jury-member-routing.module';
import { JuryMemberComponent } from './jury-member.component';


@NgModule({
  declarations: [
    JuryMemberComponent
  ],
  imports: [
    CommonModule,
    JuryMemberRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JuryMemberModule { }

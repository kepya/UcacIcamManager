import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { JuryHomeComponent } from './jury-home/jury-home.component';
import { SuperAdminHomeComponent } from './super-admin-home/super-admin-home.component';
import { SharedModule } from '../shared/shared.module';
import { ComptableHomeComponent } from './comptable-home/comptable-home.component';

@NgModule({
  declarations: [
    HomeComponent,
    AdminHomeComponent,
    JuryHomeComponent,
    SuperAdminHomeComponent,
    ComptableHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AccordionModule,
    ButtonModule,
    SharedModule
  ]
})
export class HomeModule { }

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitePageRoutingModule } from './site-page-routing.module';
import { SitePageComponent } from './site-page.component';


@NgModule({
  declarations: [
    SitePageComponent
  ],
  imports: [
    CommonModule,
    SitePageRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class SitePageModule { }

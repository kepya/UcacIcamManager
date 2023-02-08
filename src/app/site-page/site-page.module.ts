import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitePageRoutingModule } from './site-page-routing.module';
import { SitePageComponent } from './site-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
    SitePageComponent
  ],
  imports: [
    CommonModule,
    SitePageRoutingModule,
    TableModule,
    ButtonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SitePageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZonePageRoutingModule } from './zone-page-routing.module';
import { ZonePageComponent } from './zone-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ZonePageComponent
  ],
  imports: [
    CommonModule,
    ZonePageRoutingModule,
    SharedModule,
  ]
})
export class ZonePageModule { }

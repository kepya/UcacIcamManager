import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZonePageComponent } from './zone-page.component';

const routes: Routes = [
  {
    path: '',
    component: ZonePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonePageRoutingModule { }

import { CalendrierEntretienComponent } from './calendrier-entretien.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CalendrierEntretienComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: CalendrierEntretienComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendrierEntretienRoutingModule { }

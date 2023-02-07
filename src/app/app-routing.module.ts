import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'zones'
  },
  {
    path: 'zones',
    data: { title: 'Zones' },
    loadChildren: () => import('./zone-page/zone-page.module').then(z => z.ZonePageModule)
  },
  {
    path: 'sites',
    data: { title: 'Sites' },
    loadChildren: () => import('./site-page/site-page.module').then(s => s.SitePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

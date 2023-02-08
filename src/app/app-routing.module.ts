import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'zones'
  },
  {
    path: 'home',
    data: { title: 'Home' },
    loadChildren: () => import('./home/home.module').then(z => z.HomeModule)
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
  },
  {
    path: 'centre_examen',
    data: { title: `Centre d'examen` },
    loadChildren: () => import('./centre-examen-page/centre-examen-page.module').then(s => s.CentreExamenPageModule)
  },
  {
    path: 'session_examen',
    data: { title: `Session d'examen` },
    loadChildren: () => import('./session-examen-page/session-examen-page.module').then(s => s.SessionExamenPageModule)
  },
  {
    path: 'liste_candidature',
    data: { title: `Liste candidature` },
    loadChildren: () => import('./menu-candidature/liste-candidature/liste-candidature.module').then(s => s.ListeCandidatureModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

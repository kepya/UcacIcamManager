import { CalendrierDisponibiliteModule } from './menu-entretien/calendrier-disponibilite/calendrier-disponibilite.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    data: { title: 'Login' },
    loadChildren: () => import('./login/login.module').then(z => z.LoginModule),
  },
  {
    path: 'home',
    data: { title: 'Home' },
    loadChildren: () => import('./home/home.module').then(z => z.HomeModule),
  },
  {
    path: 'zones',
    data: { title: 'Zones' },
    loadChildren: () => import('./zone-page/zone-page.module').then(z => z.ZonePageModule),
  },
  {
    path: 'sites',
    data: { title: 'Sites' },
    loadChildren: () => import('./site-page/site-page.module').then(s => s.SitePageModule),
  },
  {
    path: 'centre_examen',
    data: { title: `Centre d'examen` },
    loadChildren: () => import('./centre-examen-page/centre-examen-page.module').then(s => s.CentreExamenPageModule),
  },
  {
    path: 'session_examen',
    data: { title: `Session d'examen` },
    loadChildren: () => import('./session-examen-page/session-examen-page.module').then(s => s.SessionExamenPageModule),
  },
  {
    path: 'liste_candidature',
    data: { title: `Liste candidature` },
    loadChildren: () => import('./menu-candidature/liste-candidature/liste-candidature.module').then(s => s.ListeCandidatureModule),
  },
  {
    path: 'gestion_admissibilite',
    data: { title: `Candidature` },
    loadChildren: () => import('./menu-candidature/gestion-admissibilite/gestion-admissibilite.module').then(s => s.GestionAdmissibiliteModule),
  },
  {
    path: 'gestion_solvabilite',
    data: { title: `Candidature` },
    loadChildren: () => import('./menu-candidature/gestion-solvable/gestion-solvable.module').then(s => s.GestionSolvableModule),
  },
  {
    path: 'add_candidature',
    data: { title: `Candidature` },
    loadChildren: () => import('./menu-candidature/add-candidature/add-candidature.module').then(s => s.AddCandidatureModule),
  },
  {
    path: 'gestion_admis',
    data: { title: `Candidature` },
    loadChildren: () => import('./menu-candidature/gestion-admis/gestion-admis.module').then(s => s.GestionAdmisModule),
  },
  {
    path: 'liste_admissibilite',
    data: { title: `Liste admissibilite` },
    loadChildren: () => import('./menu-liste/liste-admissibilite/liste-admissibilite.module').then(s => s.ListeAdmissibiliteModule),
  },
  {
    path: 'liste_solvable',
    data: { title: `Liste solvable` },
    loadChildren: () => import('./menu-liste/liste-solvable/liste-solvable.module').then(s => s.ListeSolvableModule),
  },
  {
    path: 'liste_admis',
    data: { title: `Liste admis` },
    loadChildren: () => import('./menu-liste/liste-admis/liste-admis.module').then(s => s.ListeAdmisModule),
  },
  {
    path: 'role_admin',
    data: { title: `Role admin` },
    loadChildren: () => import('./menu-roles/administrateur/administrateur.module').then(s => s.AdministrateurModule),
  },
  {
    path: 'role_jury',
    data: { title: `Role jury` },
    loadChildren: () => import('./menu-roles/jury-member/jury-member.module').then(s => s.JuryMemberModule),
  },
  {
    path: 'role_comptable',
    data: { title: `Role Comptable` },
    loadChildren: () => import('./menu-roles/comptable/comptable.module').then(s => s.ComptableModule),
  },
  {
    path: 'calendrier_entretiens',
    data: { title: `Entretien` },
    loadChildren: () => import('./menu-entretien/calendrier-entretien/calendrier-entretien.module').then(s => s.CalendrierEntretienModule),
  },
  {
    path: 'gestion_entretiens',
    data: { title: `Entretien` },
    // loadChildren: () => import('./menu-entretien/gestion-entretien/gestion-entretien.module').then(s => s.GestionEntretienModule),
    loadChildren: () => import('./menu-entretien/visualize-interview/visualize-interview.module').then(s => s.VisualizeInterviewModule),
  },
  {
    path: 'gestion_disponibilites',
    data: { title: `Entretien` },
    loadChildren: () => import('./menu-entretien/gestion-disponibilite/gestion-disponibilite.module').then(s => s.GestionDisponibiliteModule),
  },
  {
    path: 'calendrier_disponibilites',
    data: { title: `Entretien` },
    // loadChildren: () => import('./menu-entretien/calendrier-disponibilite/calendrier-disponibilite.module').then(s => s.CalendrierDisponibiliteModule),
    loadChildren: () => import('./menu-entretien/schedule-interviewer/schedule-interviewer.module').then(s => s.ScheduleInterviewerModule),
  },
  {
    path: 'note_entretiens',
    data: { title: `Entretien` },
    loadChildren: () => import('./menu-entretien/note-entretien/note-entretien.module').then(s => s.NoteEntretienModule),
  },
  {
    path: 'periode_entretiens',
    data: { title: `Entretien` },
    loadChildren: () => import('./menu-entretien/periode-entretien/periode-entretien.module').then(s => s.PeriodeEntretienModule),
  },
  {
    path: 'intervenant_entretiens',
    data: { title: `Entretien` },
    // loadChildren: () => import('./menu-entretien/intervenant-entretien/intervenant-entretien.module').then(s => s.IntervenantEntretienModule),
    loadChildren: () => import('./menu-entretien/schedule-disponibility/schedule-disponibility.module').then(s => s.ScheduleDisponibilityModule),
  },
  {
    path: 'calendrier_entretiens',
    data: { title: `Entretien` },
    loadChildren: () => import('./menu-entretien/calendrier-entretien/calendrier-entretien.module').then(s => s.CalendrierEntretienModule),
  },
  {
    path: 'gestion_matieres',
    data: { title: `Evaluations` },
    loadChildren: () => import('./menu-evaluation/gestion-matiere/gestion-matiere.module').then(s => s.GestionMatiereModule),
  },
  {
    path: 'gestion_epreuves',
    data: { title: `Evaluations` },
    loadChildren: () => import('./menu-evaluation/gestion-epreuve/gestion-epreuve.module').then(s => s.GestionEpreuveModule),
  },
  {
    path: 'note_summary',
    data: { title: `Note Entretien` },
    loadChildren: () => import('./menu-entretien/note-summary/note-summary.module').then(s => s.NoteSummaryModule),
  },
  {
    path: 'define_note_planning',
    data: { title: `Note entretien` },
    loadChildren: () => import('./menu-entretien/define-note-interview/define-note-interview.module').then(s => s.DefineNoteInterviewModule),
  },
  {
    path: '**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

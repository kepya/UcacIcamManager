import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteEntretienComponent } from './note-entretien.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: NoteEntretienComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class NoteEntretienRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefineNoteInterviewComponent } from './define-note-interview.component';

const routes: Routes = [
  {
    path: '',
    component: DefineNoteInterviewComponent,
  },
  {
    path: ':idEntretien',
    component: DefineNoteInterviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefineNoteInterviewRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PersonnalInformationFormComponent } from './personnal-information-form/personnal-information-form.component';
import { ComplementaryInformationFormComponent } from './complementary-information-form/complementary-information-form.component';
import { CompetitionInformationFormComponent } from './competition-information-form/competition-information-form.component';
import { FillingProgressionComponent } from './filling-progression/filling-progression.component';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { PaiementInformationFormComponent } from './paiement-information-form/paiement-information-form.component';
import { FileUploadModule } from 'primeng/fileupload';
import { InscriptionSummaryComponent } from './inscription-summary/inscription-summary.component';
import { BadgeModule } from 'primeng/badge';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SessionNameFormatPipe } from './session-name-format.pipe';
import { AddCandidatureRoutingModule } from './add-candidature-routing.module';
import { AddCandidatureComponent } from './add-candidature.component';

@NgModule({
  declarations: [
    AddCandidatureComponent,
    PersonnalInformationFormComponent,
    ComplementaryInformationFormComponent,
    CompetitionInformationFormComponent,
    FillingProgressionComponent,
    PaiementInformationFormComponent,
    InscriptionSummaryComponent,
    SessionNameFormatPipe
  ],
  imports: [
    CommonModule,
    AddCandidatureRoutingModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    ToastModule,
    DropdownModule,
    InputTextModule,
    FileUploadModule,
    ProgressSpinnerModule,
    BadgeModule
  ]
})
export class AddCandidatureModule { }

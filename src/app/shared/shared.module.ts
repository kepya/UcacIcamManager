import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuModule } from 'primeng/menu';
import { MainTemplateContentComponent } from './components/main-template-content/main-template-content.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { ParcoursDialogComponent } from './components/parcours-dialog/parcours-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import { UpdateCandidatNoteDialogComponent } from './components/update-candidat-note-dialog/update-candidat-note-dialog.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent, MainTemplateContentComponent, BarChartComponent, PieChartComponent, ParcoursDialogComponent, PhoneInputComponent, UpdateCandidatNoteDialogComponent],
  imports: [
    CommonModule,
    MenuModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ToastModule,
  ],
  exports: [SidebarComponent, HeaderComponent, FooterComponent, MainTemplateContentComponent, BarChartComponent, PieChartComponent, ParcoursDialogComponent],
})
export class SharedModule { }

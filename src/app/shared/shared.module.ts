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

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent, MainTemplateContentComponent, BarChartComponent, PieChartComponent, ParcoursDialogComponent, PhoneInputComponent],
  imports: [
    CommonModule,
    MenuModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    ButtonModule
  ],
  exports: [SidebarComponent, HeaderComponent, FooterComponent, MainTemplateContentComponent, BarChartComponent, PieChartComponent, ParcoursDialogComponent],
})
export class SharedModule { }

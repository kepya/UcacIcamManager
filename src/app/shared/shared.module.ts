import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuModule } from 'primeng/menu';
import { MainTemplateContentComponent } from './components/main-template-content/main-template-content.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent, MainTemplateContentComponent, BarChartComponent, PieChartComponent],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [SidebarComponent, HeaderComponent, FooterComponent, MainTemplateContentComponent, BarChartComponent, PieChartComponent],
})
export class SharedModule { }

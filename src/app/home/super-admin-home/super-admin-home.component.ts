import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Session } from 'src/app/shared/models/session';
import { StatCandidatures } from 'src/app/shared/models/stat-candidature';

@Component({
  selector: 'app-super-admin-home',
  templateUrl: './super-admin-home.component.html',
  styles: [
  ]
})
export class SuperAdminHomeComponent implements OnInit, AfterViewInit {
  public chart: any;
  @Input() statCandidatures!: StatCandidatures;
  @Input() session!: Session;
  @Input() nextSession!: Session;
  @Input() compteARebour!: number;

  @Input() datasetsZone!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsZone!: string[];

  @Input() datasetsSite!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsSite!: string[];

  @Input() datasetsConcour!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsConcour!: string[];

  constructor() { }
  ngAfterViewInit(): void {
    this.createChartCandidatByConcour();
  }

  ngOnInit(): void {
  }

  createChartCandidatByConcour() {
    this.chart = new Chart("MyConcourChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labelsConcour,
        datasets: this.datasetsConcour
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
}

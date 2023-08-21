import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Session } from 'src/app/shared/models/session';
import { StatCandidatures } from 'src/app/shared/models/stat-candidature';

@Component({
  selector: 'app-jury-home',
  templateUrl: './jury-home.component.html',
  styles: [
  ]
})
export class JuryHomeComponent implements OnInit {

  public chart: any;
  @Input() statCandidatures!: StatCandidatures;
  @Input() session!: Session;

  @Input() datasetsCandidatEntretenuParZone!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsCandidatEntretenuParZone!: string[];

  @Input() datasetsCandidatEntretenuParSite!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsCandidatEntretenuParSite!: string[];

  @Input() datasetsCandidatEntretenuParConcour!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labelsCandidatEntretenuParConcour!: string[];

  constructor() { }

  ngOnInit(): void {
    this.createChartCandidatByConcour();
  }

  createChartCandidatByConcour() {
    this.chart = new Chart("MyConcourChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labelsCandidatEntretenuParConcour,
        datasets: this.datasetsCandidatEntretenuParConcour
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
}

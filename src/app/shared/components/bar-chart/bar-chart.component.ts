import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: [
  ]
})
export class BarChartComponent implements OnInit {
  public chart: any;
  @Input() datasets!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  @Input() labels!: string[];

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labels,
        datasets: this.datasets
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
}

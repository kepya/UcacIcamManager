import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styles: [
  ]
})
export class PieChartComponent implements OnInit {

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
    this.chart = new Chart("MyPieChart", {
      type: 'doughnut', //this denotes tha type of chart

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

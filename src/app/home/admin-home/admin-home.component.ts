import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styles: [
  ]
})
export class AdminHomeComponent implements OnInit {
  public chart: any;

  datasets!: {
    label?: string;
    data: string[];
    backgroundColor?: string;
  }[];
  labels!: string[];

  datasetsSite!: {
    label?: string;
    data: number[];
    backgroundColor?: string;
  }[];
  labelsSite!: string[];

  datasetsConcour!: {
    label?: string;
    data: string[];
    backgroundColor?: string;
  }[];
  labelsConcour!: string[];

  constructor() { }

  ngOnInit(): void {
    this.datasetsSite = [{
      data: [10, 20, 30]
    }];
    this.labelsSite = [
      'Site 1',
      'Site 2',
      'Site 3'
    ];

    this.labels = ['Candidats'];
    this.datasets = [
      {
        label: 'Zone 1',
        data: ['467'],
      },
      {
        label: 'Zone 2',
        data: ['576'],
      },
      {
        label: 'Zone 3',
        data: ['572'],
      },
    ];

    this.labelsConcour = ['Candidats'];
    this.datasetsConcour = [
      {
        label: 'Concour 1: OP',
        data: ['467'],
      },
      {
        label: 'Concour 2: X',
        data: ['576'],
      },
      {
        label: 'Concour 3: IP',
        data: ['572'],
      },
    ];

    this.createChartCandidatByConcour();
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

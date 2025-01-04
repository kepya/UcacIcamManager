import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Session } from 'src/app/shared/models/session';
import { StatCandidatures } from 'src/app/shared/models/stat-candidature';

@Component({
  selector: 'app-comptable-home',
  templateUrl: './comptable-home.component.html',
  styles: [
  ]
})
export class ComptableHomeComponent implements OnInit {

  public chart: any;
  @Input() statCandidatures!: StatCandidatures;
  @Input() session!: Session;
  @Input() nextSession!: Session;
  @Input() compteARebour!: number;

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
  }

  ngOnInit(): void {
  }

}

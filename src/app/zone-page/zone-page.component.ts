import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zone-page',
  templateUrl: './zone-page.component.html',
  styles: [
  ]
})
export class ZonePageComponent implements OnInit {

  zones: any[] = [];
  selectedZones: any[] = [];
  loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

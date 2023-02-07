import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-page',
  templateUrl: './site-page.component.html',
  styles: [
  ]
})
export class SitePageComponent implements OnInit {

  sites: Zone[] = [];
  searchSites: Zone[] = [];
  loading: boolean = false;
  sortIcon!: string;
  sortProperty!: string;
  isAsc!: boolean;
  downUpIcon!: string;
  searchValue!: string;

  // zones: any[] = [
  //   {
  //     zone: "Zone Cameroun",
  //     name: "Cameroun",
  //     description: "Cameroun",
  //     pays: "Cameroun",
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}

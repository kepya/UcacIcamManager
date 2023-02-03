import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  url!: string;
  @Input() isExtended!: boolean;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = this.router.url;
  }

  showMenuChild(content: any) {
    content.classList.toggle("active-link");
  }

}

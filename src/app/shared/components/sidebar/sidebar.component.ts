import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  @Input() url!: string;
  @Input() isExtended!: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  showMenuChild(content: any) {
    content.classList.toggle("active-link");
  }

  goToUrl(url: string) {
    this.router.navigate(['/' + url]);
  }

}

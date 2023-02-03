import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  title = 'admin-ucac-dashboard';
  isExtend: boolean = true;

  constructor(private router: Router, private titleService: Title) {

  }

  checkSidebarMode(isExtend: boolean) {
    this.isExtend = isExtend;
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route: ActivatedRoute = this.router.routerState.root;
        let routeTitle = '';

        while (route!.firstChild) {
          route = route.firstChild;
        }

        if (route.snapshot.data['title']) {
          routeTitle = route!.snapshot.data['title'];
        }

        return routeTitle;
      })
    ).subscribe((title: string) => {
      if (title) {
        this.titleService.setTitle(`My App - ${title}`);
      }
    });
  }
}

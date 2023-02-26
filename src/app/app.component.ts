import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { filter, map } from "rxjs";
import { AuthService } from './shared/services/auth.service';
import { BaseUrlService } from './shared/services/base-url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  isExtend: boolean = true;
  isLogin: boolean = true;
  url: string = '';
  title = 'admin-ucac-dashboard';

  constructor(private router: Router, private titleService: Title, private primengConfig: PrimeNGConfig) {
  }

  checkSidebarMode(isExtend: boolean) {
    this.isExtend = isExtend;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
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
        this.url = title;
        this.isLogin = title.indexOf('Login') > -1 ? false : true;
      }
    });

  }
}

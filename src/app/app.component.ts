import { LoaderService } from './shared/services/loader.service';
import { LoginComponent } from './login/login.component';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { filter, map } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { BaseUrlService } from './shared/services/base-url.service';
import { PasswordresetComponent } from './login/passwordreset/passwordreset.component';
import { ValidatetokenComponent } from './login/passwordreset/validatetoken/validatetoken.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  isExtend: boolean = true;
  isLoading: boolean = true;
  isLoginPage: boolean = true;
  url: string = '';
  title = 'admin-ucac-dashboard';

  constructor(
    private router: Router,
    private titleService: Title,
    private primengConfig: PrimeNGConfig,
    private loaderService: LoaderService
  ) {}

  checkSidebarMode(isExtend: boolean) {
    this.isExtend = isExtend;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.router.events
      .pipe(
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
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(`GIC - ${title}`);
          this.url = title;
        }
      });
    this.loaderService.isLoading.subscribe({
      next: (loading: boolean) => {
        this.isLoading = loading;
      },
    });
  }

  onLoadPage(component: any) {
    if (
        component instanceof LoginComponent ||
        component instanceof PasswordresetComponent || 
        component instanceof ValidatetokenComponent
      ) {
      this.isLoginPage = true;
    } else {
      this.isLoginPage = false;
    }
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';
import { TokenService } from '../services/token.service';
import { Role } from '../enums/role.enum';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class JuryGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    private storageService: StorageService,
    private messageService: MessageService
  ) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token: string | null = this.storageService.getUserTokenConnected();
    if (token != null) {
      let role: string = this.tokenService.decodeToken(token).scope;
      if (this.tokenService.isLogged() && (role == Role.JURY)) {
        this.authService.isLogin.next(true);
        return true;
      }
    }
    this.messageService.add({ severity: 'error', summary: `Erreur de connexion`, detail: `Veuillez les identifiants d'un jury pour y avoir accèss à la plateforme` });
    this.authService.isLogin.next(false);
    this.router.navigate(['login']);
    return false;
  }

}

import { StorageService } from './../shared/services/storage.service';
import { IToken } from './../shared/models/token';
import { AbstractControl, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { TokenService } from '../shared/services/token.service';
import { UserService } from '../shared/services/user.service';
import { Compte } from '../shared/models/compte';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  showMsgError: boolean = false;
  isLoading: boolean = false;
  msgError: string = "";

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  get loginControls(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private storageService: StorageService,
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    var oldToken = this.storageService.getUserTokenConnected();
    if (this.tokenService.isLogged()) {
      this.router.navigate(['/zones']);
    } else if (!!oldToken) {
      this.storageService.clear();
    }
  }

  login() {
    this.isLoading = true;
    this.authService.login({ ...this.loginForm.value }).subscribe({
      next: (value: IToken) => {
        let role: string = this.tokenService.decodeToken(value.accessToken).scope;
        this.isLoading = false;

        if (role == "ADMIN") {
          this.userService.getOneByEmail(this.tokenService.decodeToken(value.accessToken).sub).subscribe({
            next: (compte: Compte) => {
              this.storageService.storeUserConnected(compte);
              this.storageService.storeUserToken(value.accessToken);
              this.messageService.add({ severity: 'success', summary: 'Authentification', detail: 'Authentification effectuée avec success' });
              this.router.navigate(['/zones']);
            },
            error: (err) => {
              console.log("User Find Error: ", err);
            }
          });
        } else {
          this.msgError = "Seul les administrateurs sont autorisés à accedér à ce site web.";
          this.messageService.add({ severity: 'warn', summary: 'Non Authorisé', detail: this.msgError });
          this.showMsgError = true;
        }
      },
      error: (err) => {
        console.log("Error: ", err);
        this.isLoading = false;
        if (err.status != 200) {
          this.msgError = "Une erreur s'est produite ! \n Le mot de passe ou l'adresse mail est incorrect. \ Veillez vérifier vos informatons, votre connexion internet et réessayez!!!";
          this.messageService.add({ severity: 'error', summary: `Erreur d'authentification`, detail: this.msgError });
          this.showMsgError = true;
        }
      }
    })
  }

}

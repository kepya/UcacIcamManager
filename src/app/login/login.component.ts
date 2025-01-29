import { CompteService } from './../shared/services/compte.service';
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
import { Subscription, interval } from 'rxjs';
import { Role } from '../shared/enums/role.enum';

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
  date = new Date();
  counterSubscription!: Subscription;

  displayModal: boolean = false; // Contrôle du modal
  email: string = ''; // Champ email
  emailInvalid: boolean = true; // État de la validation de l'email
  emailTouched: boolean = false; // Indique si l'email a été touché
  emailSent: boolean = false; // Indique si le mail a été envoyé avec succès

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
    private compteService: CompteService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    var oldToken = this.storageService.getUserTokenConnected();
    this.notification();

    if (this.tokenService.isLogged()) {
      this.router.navigate(['/home']);
    } else if (oldToken == undefined || oldToken == null) {
      this.storageService.clear();
    }
  }

  login() {
    this.isLoading = true;
    // alert('ok');
    this.authService.login({ ...this.loginForm.value }).subscribe({
      next: (value: IToken) => {
        let role: string = this.tokenService.decodeToken(value.accessToken).scope;
        this.isLoading = false;
        this.storageService.storeUserToken(value.accessToken);

        if (role == "ADMIN" || role == "SUPER_ADMIN" || role == "JURY" || role == Role.COMPTABLE) {
          this.compteService.getOneByEmail(this.tokenService.decodeToken(value.accessToken).sub).subscribe({
            next: (compte: Compte) => {
              this.authService.isLogin.next(true);
              this.storageService.storeUserConnected(compte);
              this.router.navigate(['/home']);
              this.messageService.add({ severity: 'success', summary: 'Authentification', detail: 'Authentification effectuée avec succès' });
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

  showModal() {
    this.displayModal = true;
    this.resetForm();
  }

  closeModal() {
    this.displayModal = false;
    this.resetForm();
  }

  validateEmail() {
    this.emailTouched = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validation regex email
    this.emailInvalid = !emailRegex.test(this.email);
  }

  sendEmail() {
    if (!this.emailInvalid) {
      this.compteService.sendPasswordResetEmail(this.email).subscribe({
        next: () => {
          this.emailSent = true; // Afficher le message de succès
        },
        error: (error) => {
          console.log(error);
          if (error.status === 404) {
            alert("L'adresse e-mail fournie est invalide ou n'existe pas.");
          } else {
            alert("Une erreur s'est produite lors de l'envoi de l'email.");
          }
        }
      });
    }
  }

  resetForm() {
    this.email = '';
    this.emailInvalid = true;
    this.emailTouched = false;
    this.emailSent = false;
  }


  notification() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      {
        next: (cal) => {
          this.date = new Date();
        },
        error: (error: any) => { },
        complete: () => {
        },
      }
    );
  }

}

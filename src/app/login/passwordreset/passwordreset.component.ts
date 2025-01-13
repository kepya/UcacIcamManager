import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteService } from 'src/app/shared/services/compte.service';

@Component({
  selector: 'uci-passwordreset',
  templateUrl: './passwordreset.component.html',
  styles: [
  ]
})
export class PasswordresetComponent {

  password = '';
  confirmPassword = '';

  email!: string;
  token!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private compteService: CompteService
  ) {

    }

  ngOnInit(): void {
    // Récupérer les paramètres de requête
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.token = params['token'];
    });

    // Vérifiez si la navigation provient de `validatetoken`
    //const navigationState = this.router.getCurrentNavigation()?.extras.state;
    //if (!navigationState || !navigationState['fromValidateToken']) {
      // Si l'utilisateur tente d'accéder directement, redirigez-le
      //this.router.navigate(['/auth/login']);
    //}
  }

  resetPassword() {
    if (this.password !== this.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    this.compteService.resetPassword(this.email, this.password, this.token).subscribe({
      next: (response) => {
        alert('Mot de passe réinitialisé avec succès.');
        console.log(response);
        this.router.navigate(['/login']);
        // Ajouter une redirection si nécessaire
      },
      error: (error) => {
        alert('Erreur lors de la réinitialisation du mot de passe.');
        console.error(error);
      },
    });
  }

}

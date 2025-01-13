import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteService } from 'src/app/shared/services/compte.service';

@Component({
  selector: 'uci-validatetoken',
  templateUrl: './validatetoken.component.html',
  styles: [
  ]
})
export class ValidatetokenComponent {

  loading = true;
  error = false;
  emailInvalid: boolean = true;
  email = this.route.snapshot.paramMap.get('email')!;
  displayModal: boolean = false; // Contrôle du modal
  displayContent: boolean = true; // Contenu de la page
  emailTouched: boolean = false; // Indique si l'email a été touché
  emailSent: boolean = false; // Indique si le mail a été envoyé avec succès

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private compteService: CompteService
  ) {}

  ngOnInit(): void {
    // Récupérer les paramètres de la route
    const email = this.route.snapshot.paramMap.get('email')!;
    const token = this.route.snapshot.paramMap.get('token')!;

    // Appeler l'API pour valider le token
    this.compteService.validateToken(email, token).subscribe({
      next: () => {
        // Succès : rediriger vers la page de réinitialisation
        this.router.navigate(['/login/passwordreset/reset-password', email, token], {
          queryParams: { email, token },
          //state: { fromValidateToken: true }
        });
      },
      error: () => {
        // Erreur : afficher un message
        this.error = true;
        this.loading = false;
      }
    });
  }

  retry() {
    
      this.compteService.sendPasswordResetEmail(this.email).subscribe({
        next: () => {
          this.displayModal = true;
          this.displayContent = false;
          this.emailSent = true; // Afficher le message de succès
        },
        error: () => {
          alert("Une erreur s'est produite lors de l'envoi de l'email.");
        }
      });
  }

  closeModal() {
    this.displayModal = false;
  }

}

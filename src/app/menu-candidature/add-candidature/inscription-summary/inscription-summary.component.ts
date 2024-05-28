import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ICandidature } from 'src/app/shared/interfaces/candidature';
import { ICandidatureResponse } from 'src/app/shared/interfaces/candidature-response';
import { IUtilisateur } from 'src/app/shared/interfaces/utilisateur';
import { IUtilisateurResponseModel } from 'src/app/shared/interfaces/utilisateur-response-model';
import { Compte } from 'src/app/shared/models/compte';

@Component({
  selector: 'uci-inscription-summary',
  templateUrl: './inscription-summary.component.html',
  styles: [
  ]
})
export class InscriptionSummaryComponent {
  step: number = 5;
  @Input() candidat!: ICandidature;
  @Input() compte!: Compte;

constructor(
  private router: Router) {
}

print() {
  window.print();
}


  getCycle(cycle: string) {
    if (cycle == 'premier') {
      return '1er';
    } else {
      return '2ème';
    }
  }

  wantExchange(hasExchange: string) {
    if (hasExchange == 'true' || hasExchange == 'Oui') {
      return 'Oui';
    } else {
      return 'Non';
    }
  }
}

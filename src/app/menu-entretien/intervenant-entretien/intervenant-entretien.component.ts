import { DisponibiliteService } from './../../shared/services/disponibilite.service';
import { CompteDisponibiliteService } from './../../shared/services/compte-disponibilite.service';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Compte } from 'src/app/shared/models/compte';
import { CompteDisponibilite, Disponibility } from 'src/app/shared/models/entretient';
import { CompteService } from 'src/app/shared/services/compte.service';
import { EntretienService } from 'src/app/shared/services/entretien.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { MessageService } from 'primeng/api';
import { Role } from 'src/app/shared/enums/role.enum';

@Component({
  selector: 'app-intervenant-entretien',
  templateUrl: './intervenant-entretien.component.html',
  styles: [
  ]
})
export class IntervenantEntretienComponent implements OnInit {

  comptes: Compte[] = [];
  compteDisponibilite!: CompteDisponibilite;
  disponibilities: Disponibility[] = [];
  loading: boolean = true;

  formCompteDisponibility: FormGroup = new FormGroup({
    compte_id: new FormControl(null, [Validators.required]),
    disponibilite_id: new FormControl(null, [Validators.required]),
  });

  constructor(private disponibiliteService: DisponibiliteService, private compteService: CompteService,
    private messageService: MessageService, private compteDisponibiliteService: CompteDisponibiliteService) { }

  ngOnInit(): void {
    this.getJuryCompte();
    this.getDisponibilities();
  }

  get formCompteDisponibilityControl(): { [key: string]: AbstractControl } {
    return this.formCompteDisponibility.controls;
  }

  getJuryCompte() {
    this.compteService.liste().subscribe({
      next: (comptes) => {
        this.comptes = comptes.filter(c => c.role == Role.JURY);
      }
    })
  }

  getDisponibilities() {
    this.disponibiliteService.liste().subscribe({
      next: (disponibilities) => {
        this.disponibilities = disponibilities;
      }
    })
  }

  createCompteDisponibility() {
    this.compteDisponibilite.compte_id = this.formCompteDisponibility.value.compte_id;
    this.compteDisponibilite.disponibilite_id = this.formCompteDisponibility.value.disponibilite_id;

    this.compteDisponibiliteService.create(this.compteDisponibilite).subscribe({
      next: (value) => {
        this.messageService.add({ severity: 'success', summary: `Définition plage d'entretien`, detail: `Plage d'entretien définie  avec success` });
        this.formCompteDisponibility.reset();
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: `Erreur de définition`, detail: err.message });
        console.log("Error: ", err);
      }
    })
  }
}

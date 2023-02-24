import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Compte } from 'src/app/shared/models/compte';
import { Disponibility } from 'src/app/shared/models/entretient';
import { CompteService } from 'src/app/shared/services/compte.service';
import { EntretienService } from 'src/app/shared/services/entretien.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-periode-entretien',
  templateUrl: './periode-entretien.component.html',
  styles: [
  ]
})
export class PeriodeEntretienComponent implements OnInit {

  comptes: Compte[] = [];
  disponibility!: Disponibility;
  loading: boolean = true;
  date_disponibilite!: Date;
  formDisponibility: FormGroup = new FormGroup({
    debut_disponibilite: new FormControl(null, [Validators.required]),
    date_disponibilite: new FormControl(null, [Validators.required]),
    fin_disponibilite: new FormControl(null, [Validators.required]),
    compte: new FormControl(null, [Validators.required]),
  });

  constructor(private entretienSrv: EntretienService, private compteService: CompteService, private messageService: MessageService) { }

  ngOnInit(): void {

  }

  get formDisponibilityControl(): { [key: string]: AbstractControl } {
    return this.formDisponibility.controls;
  }

  createDisponibility() {
    let data = { ...this.formDisponibility.value };
    let compte = this.comptes.find(c => c.id == data.compte);
    delete data.compte;

    this.entretienSrv.createDisponibility({ ...this.formDisponibility.value, compte }).subscribe({
      next: (value) => {
        this.messageService.add({ severity: 'success', summary: 'Création de disponibilité ', detail: 'Création effectuée avec success' });
        this.disponibility = new Disponibility();
        this.formDisponibility.reset();
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: `Erreur de suppression`, detail: err.message });
        console.log("Error: ", err);
      }
    })
  }
}


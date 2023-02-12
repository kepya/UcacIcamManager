import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Disponibility } from 'src/app/shared/models/entretient';
import { EntretienService } from 'src/app/shared/services/entretien.service';
import { ZoneService } from 'src/app/shared/services/zone.service';

@Component({
  selector: 'app-periode-entretien',
  templateUrl: './periode-entretien.component.html',
  styles: [
  ]
})
export class PeriodeEntretienComponent implements OnInit {

  disponibility!: Disponibility;
  loading: boolean = true;

  formDisponibility: FormGroup = new FormGroup({
    debut_disponibilite: new FormControl(null, [Validators.required]),
    fin_disponibilite: new FormControl(null, [Validators.required]),
  });

  constructor(private entretienSrv: EntretienService) { }

  ngOnInit(): void {

  }

  get formDisponibilityControl(): { [key: string]: AbstractControl } {
    return this.formDisponibility.controls;
  }

  createDisponibility() {
    this.entretienSrv.create({ ...this.formDisponibility.value }).subscribe({
      next: (value) => {
        this.disponibility = new Disponibility();
        this.formDisponibility.reset();
      },
      error: (err) => {
        console.log("Error: ", err);
      }
    })
  }
}


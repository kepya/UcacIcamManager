import { DisponibiliteService } from './../../shared/services/disponibilite.service';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Compte } from 'src/app/shared/models/compte';
import { Disponibility } from 'src/app/shared/models/entretient';
import { CompteService } from 'src/app/shared/services/compte.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { MessageService } from 'primeng/api';
import { SessionExamenService } from 'src/app/session-examen-page/session-examen.service';
import { Session } from 'src/app/shared/models/session';

@Component({
  selector: 'app-periode-entretien',
  templateUrl: './periode-entretien.component.html',
  styles: [
  ]
})
export class PeriodeEntretienComponent implements OnInit {

  disponibility!: Disponibility;
  loading: boolean = true;
  sessions: Session[] = []; session_id!: number;
  date_disponibilite!: Date;
  formDisponibility: FormGroup = new FormGroup({
    session_id: new FormControl('', [Validators.required]),
    debut_disponibilite: new FormControl(null, [Validators.required]),
    fin_disponibilite: new FormControl(null, [Validators.required]),
  });

  constructor(private sessionSrv: SessionExamenService, private disponibiliteService: DisponibiliteService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getSessions();
  }

  get formDisponibilityControl(): { [key: string]: AbstractControl } {
    return this.formDisponibility.controls;
  }

  getSessions() {
    this.sessionSrv.liste().subscribe({
      next: (value: Session[]) => {
        this.sessions = value;
      },
      error: (err) => {
        console.log('error: ', err);
      }
    });
  }

  createDisponibility() {
    let d = { ...this.formDisponibility.value };
    delete d.session_id;
    d = { ...d, session_id: parseInt(this.formDisponibility.value.session_id, 10) };

    let session = this.sessions.find(x => x.id == d.session_id)
    if (session) {
      session.date_debut_entretien = this.formDisponibility.value.debut_disponibilite;
      session.date_fin_entretien = this.formDisponibility.value.fin_disponibilite;

      this.sessionSrv.updateForEntretien({ ...session }).subscribe({
        next: (value) => {
          this.messageService.add({ severity: 'success', summary: 'Modification de session', detail: 'Modification de la période des entretiens effectuée avec success' });
          this.disponibility = new Disponibility();
          this.formDisponibility.reset();
        },
        error: (err) => {
          console.log("Error: ", err);
          this.messageService.add({ severity: 'error', summary: `Erreur de modification`, detail: err.message });
        }
      })
    }
  }
}


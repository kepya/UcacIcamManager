import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { dateValidator, createStringValidatior, emailValidatior } from 'src/app/shared/validators/number_validator';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'uci-complementary-information-form',
  templateUrl: './complementary-information-form.component.html',
  styles: [
  ]
})
export class ComplementaryInformationFormComponent {
  @Output() newSubmitEvent = new EventEmitter<{
    nom_parent1: string;
    email_pere: string;
    telephone_pere: string;
    nom_parent2: string;
    email_mere: string;
    telephone_mere: string;
    email_tuteur: string;
    telephone_tuteur: string;
  }>();

  
  @Output() previousStepEvent = new EventEmitter<number>();

  step: number = 2;

  form: FormGroup = new FormGroup({
    hasTutor: new FormControl('', [Validators.required]),
    telephone_tuteur: new FormControl('', []),
    telephone_mere: new FormControl('', [Validators.required, Validators.minLength(8)]),
    telephone_pere: new FormControl('', [Validators.required, Validators.minLength(8)]),

    nom_pere: new FormControl('', [Validators.required, Validators.minLength(3), createStringValidatior()]),
    email_pere: new FormControl('', [ Validators.email, emailValidatior()]),
    nom_mere: new FormControl('', [Validators.required, Validators.minLength(3), createStringValidatior()]),
    email_mere: new FormControl('', [ Validators.email, emailValidatior()]),
    email_tuteur: new FormControl('', []),
  });

  constructor() {

  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  checkTutorPresence(event: any) {
    if (event.target.value == 'Oui') {
      this.form.get('email_tuteur')?.addValidators([Validators.required, Validators.email, emailValidatior()]);
      this.form.get('email_tuteur')?.updateValueAndValidity();
      this.form.updateValueAndValidity();
      this.form.get('telephone_tuteur')?.addValidators([Validators.required, Validators.minLength(8)]);
      this.form.get('telephone_tuteur')?.updateValueAndValidity();
      this.form.updateValueAndValidity();
    } else {
      this.form.get('telephone_tuteur')?.removeValidators([Validators.required, Validators.minLength(8)]);
      this.form.get('telephone_tuteur')?.updateValueAndValidity();
      this.form.updateValueAndValidity();

      this.form.get('email_tuteur')?.removeValidators([Validators.required, Validators.email, emailValidatior()]);
      this.form.get('email_tuteur')?.updateValueAndValidity();
      this.form.updateValueAndValidity();
    }
  }

  submit() {
    this.newSubmitEvent.emit(
      {
        nom_parent1: this.form.get('nom_pere')?.value,
        email_pere: this.form.get('email_pere')?.value,
        telephone_pere:this.form.get('telephone_pere')?.value,
        nom_parent2: this.form.get('nom_mere')?.value,
        email_mere: this.form.get('email_mere')?.value,
        telephone_mere: this.form.get('telephone_mere')?.value,
        email_tuteur: this.form.get('email_tuteur')?.value,
        telephone_tuteur:this.form.get('telephone_tuteur')?.value,
      }
    );
  }

  previous() {
    this.previousStepEvent.emit((this.step - 1));
  }
}

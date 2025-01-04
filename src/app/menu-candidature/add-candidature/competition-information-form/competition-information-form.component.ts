import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { IDropdownChangeEvent } from 'src/app/shared/interfaces/dropdown-change-event';
import {
  createStringValidatior,
  emailValidatior,
} from 'src/app/shared/validators/number_validator';

@Component({
  selector: 'uci-competition-information-form',
  templateUrl: './competition-information-form.component.html',
  styles: [],
})
export class CompetitionInformationFormComponent {
  @Output() newSubmitEvent = new EventEmitter<{
    langue: string;
    has_exchange: string;
    dernier_Etablissement: string;
    serie_bac: string;
    cycle: string;
    paiement: string;
    image: string;
    nombre_choix: number;
    diplome_universitaire: string;
    formation1: string;
    formation2: string;
    formation3: string;
    selectedFile: File;
  }>();

  @Output() previousStepEvent = new EventEmitter<number>();

  step: number = 3;

  uploadedFile!: string;
  selectedFile!: File;

  form: FormGroup = new FormGroup({
    langue: new FormControl('', [Validators.required]),
    dernier_etablissement: new FormControl('', [Validators.required]),
    serie_bac: new FormControl('', [Validators.required]),
    cycle: new FormControl('', [Validators.required]),
    diplome_universitaire: new FormControl('', []),
    nombre_formation: new FormControl('', [Validators.required]),
    paiement: new FormControl({ value: '', disabled: true }, [
      Validators.required,
    ]),
    has_exchange: new FormControl('', [Validators.required]),
    image: new FormControl('', []),
    formation1: new FormControl('', []),
    formation2: new FormControl('', []),
    formation3: new FormControl('', []),
    serie_bac_input: new FormControl('', []),
  });

  nbrFormations = ['01', '02', '03'];

  formationOneHasError: boolean = false;
  formationTwoHasError: boolean = false;
  formationThreeHasError: boolean = false;

  formationsForFirstCycle = [
    {
      name: 'Ingénieur généraliste par apprentissage ou génie des procédés',
      code: 'L',
    },
    { name: 'Ingénieur généraliste parcours international', code: 'OP' },
    { name: 'Ingénieur génie Informatique', code: 'X' },
  ];

  formationsForSecondCycle = [
    { name: 'Ingénieur genie des procédés', code: 'IP' },
    {
      name: 'Ingénieur géneraliste parcours international et innovation',
      code: 'I',
    },
    { name: 'Ingénieur génie Informatique', code: 'X' },
  ];

  dropdownNbreFormationValueChange(event: IDropdownChangeEvent) {
    if (event.value == '01') {
      this.form.get('formation2')?.clearValidators();
      this.form.get('formation2')?.updateValueAndValidity();
      this.form.get('formation3')?.clearValidators();
      this.form.get('formation3')?.updateValueAndValidity();
      this.form.get('formation1')?.addValidators([Validators.required]);
      this.form.get('formation1')?.updateValueAndValidity();
      // this.form.updateValueAndValidity();
    }

    if (event.value == '02') {
      this.form.get('formation2')?.addValidators([Validators.required]);
      this.form.get('formation2')?.updateValueAndValidity();
      this.form.get('formation1')?.addValidators([Validators.required]);
      this.form.get('formation1')?.updateValueAndValidity();
      this.form.get('formation3')?.clearValidators();
      this.form.get('formation3')?.updateValueAndValidity();
      // this.form.updateValueAndValidity();
    }

    if (event.value == '03') {
      this.form.get('formation2')?.addValidators([Validators.required]);
      this.form.get('formation2')?.updateValueAndValidity();
      this.form.get('formation3')?.addValidators([Validators.required]);
      this.form.get('formation3')?.updateValueAndValidity();
      this.form.get('formation1')?.addValidators([Validators.required]);
      this.form.get('formation1')?.updateValueAndValidity();
      // this.form.updateValueAndValidity();
    }
  }

  dropdownFormationValueChange(event: IDropdownChangeEvent, rang: number) {
    if (rang == 1) {
      if (
        event.value == this.form.get('formation2')?.value ||
        event.value == this.form.get('formation3')?.value
      ) {
        this.formationOneHasError = true;
      } else {
        this.formationOneHasError = false;
      }
    }

    if (rang == 2) {
      if (
        event.value == this.form.get('formation1')?.value ||
        event.value == this.form.get('formation3')?.value
      ) {
        this.formationTwoHasError = true;
      } else {
        this.formationTwoHasError = false;
      }
    }

    if (rang == 3) {
      if (
        event.value == this.form.get('formation1')?.value ||
        event.value == this.form.get('formation2')?.value
      ) {
        this.formationThreeHasError = true;
      } else {
        this.formationThreeHasError = false;
      }
    }
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onFileChanged(event: any) {
    this.uploadedFile = (await this.convertBlobToBase64(
      event.target.files[0]
    )) as string;
    this.selectedFile = event!.target!.files[0] as File;
  }

  checkCycle(event: any) {
    if (event.target.value == 'premier') {
      this.form
        .get('diplome_universitaire')
        ?.removeValidators([Validators.required]);
      this.form.get('diplome_universitaire')?.updateValueAndValidity();
      this.form.updateValueAndValidity();
    } else {
      this.form
        .get('diplome_universitaire')
        ?.addValidators([Validators.required]);
      this.form.get('diplome_universitaire')?.updateValueAndValidity();
      this.form.updateValueAndValidity();
    }
  }

  checkSerieBacc(event: any) {
    if (event.target.value == 'Autre') {
      this.form.get('serie_bac_input')?.addValidators([Validators.required]);
      this.form.get('serie_bac_input')?.updateValueAndValidity();
      this.form.updateValueAndValidity();
    } else {
      this.form.get('serie_bac_input')?.removeValidators([Validators.required]);
      this.form.get('serie_bac_input')?.updateValueAndValidity();
      this.form.updateValueAndValidity();
    }
  }

  convertBlobToBase64 = (blob: Blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

  submit() {
    this.newSubmitEvent.emit({
      nombre_choix: this.getNombreDeChoix(
        this.form.get('nombre_formation')?.value
      ),
      langue: this.form.get('langue')?.value,
      diplome_universitaire: this.form.get('diplome_universitaire')?.value,
      has_exchange: this.form.get('has_exchange')?.value,
      dernier_Etablissement: this.form.get('dernier_etablissement')?.value,
      serie_bac:
        this.form.get('serie_bac')?.value != 'Autre'
          ? this.form.get('serie_bac')?.value
          : this.form.get('serie_bac_input')?.value,
      cycle: this.form.get('cycle')?.value,
      paiement: this.form.get('paiement')?.value,
      image: this.uploadedFile,
      formation1: this.form.get('formation1')?.value,
      formation2: this.form.get('formation2')?.value,
      formation3: this.form.get('formation3')?.value,
      selectedFile: this.selectedFile,
    });
  }

  getNombreDeChoix(nbre: string): number {
    if (nbre == '01') {
      return 1;
    }
    if (nbre == '02') {
      return 2;
    }
    if (nbre == '03') {
      return 3;
    }
    return 0;
  }

  previous() {
    this.previousStepEvent.emit(this.step - 1);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

import { MessageService } from 'primeng/api';
import { CandidatureService } from 'src/app/menu-candidature/candidature.service';
import {
  dateTransactionValidator,
  reference_paiement_cameroun,
  reference_paiement_tchad,
  reference_paiement_gabon,
} from 'src/app/shared/validators/number_validator';
import { Centre } from 'src/app/shared/models/centre';
import { Site } from 'src/app/shared/models/site';

@Component({
  selector: 'uci-paiement-information-form',
  templateUrl: './paiement-information-form.component.html',
  styles: [],
  providers: [MessageService],
})
export class PaiementInformationFormComponent implements OnInit {
  @Output() newSubmitEvent = new EventEmitter<{
    reference_paiement: string;
    date_paiement: any;
    telephone_paiement: string;
  }>();

  @Output() previousStepEvent = new EventEmitter<number>();

  @Input() centre!: Centre;
  @Input() site!: Site;
  public CountryISO: any;
  public PhoneNumberFormat: any;
  public SearchCountryField: any;

  allCodes: any[] = [];
  exitsCode: any[] = [];

  step: number = 4;

  telephone: string = '';

  public numberIsValid: boolean = false;
  public dateIsValid: boolean = true;
  public codeIsValid: boolean = false;
  public codeCorrespondedWithDate: boolean = false;
  placeholderReferencePaiement: string = '';

  todayDate: Date = new Date();

  form: FormGroup = new FormGroup({
    telephone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    reference_paiement: new FormControl('', [
      Validators.required,
      this.getReferencePaiementValidator(),
    ]),
    date_paiement: new FormControl('', []),
  });

  constructor(
    private messageService: MessageService,
    private candidatureService: CandidatureService
  ) {
    this.setPlaceholderReferencePaiement();
  }

  ngOnInit(): void {
    this.dateIsValid = true;
    if (
      this.site?.nom === 'Cameroun' ||
      this.site?.indicatif === '+237' ||
      this.site?.nom === 'République du Congo' ||
      this.site?.indicatif === '+242' ||
      this.site?.nom === 'Gabon' ||
      this.site?.indicatif === '+241' ||
      this.site?.nom === 'Tchad' ||
      this.site?.indicatif === '+235'
    ) {
    
      this.form
        .get('date_paiement')
        ?.addValidators([Validators.required, dateTransactionValidator()]);
      this.setPlaceholderReferencePaiement();
      this.form.get('date_paiement')?.updateValueAndValidity();
      this.form
        .get('reference_paiement')
        ?.setValidators([
          Validators.required,
          this.getReferencePaiementValidator(),
        ]);
      this.form.get('reference_paiement')?.updateValueAndValidity();
    } else {
      this.form.get('date_paiement')?.clearValidators();
      this.form.get('date_paiement')?.updateValueAndValidity();
    }
    this.getAllCodes();
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  public onInputChange(event: any) {
    this.telephone = event;

    if (this.site?.nom === 'Cameroun' || this.site?.indicatif === '+237') {
      this.numberIsValid = this.checkNumber(event.phoneNumber);
    } else {
      this.numberIsValid = true;
    }
  }

  getPrerequisIndex(centre: Centre) {
    if (centre?.zone?.nom == 'Cameroun') {
      return 1;
    }
    if (centre?.zone?.nom == 'Gabon') {
      return 3;
    }
    if (centre?.zone?.nom == 'RCA') {
      return 0;
    }
    if (centre?.zone?.nom == 'République du Congo') {
      return 2;
    }
    if (centre?.zone?.nom == 'Tchad') {
      return 4;
    }
    return 1;
  }

  checkNumber(telephone: string) {
    telephone = telephone.replace('+237', '');
    telephone = telephone.replace('+242', '');
    let phone = telephone.replace(/\s/g, '');
    const regExp = new RegExp(/^(69\d{7}|65[5-9]\d{6})$/);
    // const regExp = new RegExp(/^(69\d{7}|65[5-9]\d{6}|68[6-9]\d{6})$/);
    return regExp.test(phone);
  }

  getAllCodes() {
    this.candidatureService.allCodes().subscribe((response) => {
      this.allCodes = response.allCode;
      this.exitsCode = response.existCode;
    });
  }

  checkCode() {
    if (
      this.site?.nom === 'Cameroun' ||
      this.site?.indicatif === '+237' ||
      this.site?.nom === 'République du Congo' ||
      this.site?.indicatif === '+242' ||
      this.site?.nom === 'Gabon' ||
      this.site?.indicatif === '+241' ||
      this.site?.nom === 'Tchad' ||
      this.site?.indicatif === '+235'
    ) {
      this.codeCorrespondedWithDate = this.getDateAboutReferenceCode();
      if (this.form.get('date_paiement')?.value) {
        this.dateIsValid = this.codeCorrespondedWithDate;
      }
      this.codeIsValid = this.codeCorrespondedWithDate;
    } else {
      if (
        this.allCodes.includes(this.form.get('reference_paiement')?.value) ===
        true
      ) {
        if (
          this.exitsCode.includes(
            this.form.get('reference_paiement')?.value
          ) === true
        ) {
          this.codeIsValid = false;
        } else {
          this.codeIsValid = true;
        }
      } else {
        this.codeIsValid = false;
      }
    }
  }

  getDateAboutReferenceCode() {
    let reference = this.form.get('reference_paiement')?.value;
    // Extraction de la date de la chaîne de caractères
    const dateStringMP = reference.substring(2, 8); // Récupère les 6 chiffres représentant la date
    const yearMP = parseInt(dateStringMP.substring(0, 2), 10); // Année à partir des deux premiers chiffres (ajoute 2000 car les deux chiffres représentent l'année sur 2 chiffres)
    const monthMP = parseInt(dateStringMP.substring(2, 4), 10); // Mois (0-indexé)
    const dayMP = parseInt(dateStringMP.substring(4, 6), 10); // Jour

    // Formattez le mois et le jour pour qu'ils aient toujours deux chiffres (ajoutez un zéro devant si nécessaire)
    const formattedMonthMP = monthMP < 10 ? '0' + monthMP : monthMP;
    const formattedDayMP = dayMP < 10 ? '0' + dayMP : dayMP;

    let anneeEnCours = new Date().getFullYear();
    let deuxPremiersChiffres = anneeEnCours.toString().substring(0, 2);

    const dateMP =
      deuxPremiersChiffres +
      '' +
      yearMP +
      '-' +
      formattedMonthMP +
      '-' +
      formattedDayMP;

    console.log('value date:', this.form.get('date_paiement')?.value);
    console.log('value code:', dateMP);

    return dateMP === this.form.get('date_paiement')?.value;
  }

  submit() {
    if (
      this.site?.nom === 'Cameroun' ||
      this.site?.indicatif === '+237' ||
      this.site?.nom === 'République du Congo' ||
      this.site?.indicatif === '+242' ||
      this.site?.nom === 'Gabon' ||
      this.site?.indicatif === '+241' ||
      this.site?.nom === 'Tchad' ||
      this.site?.indicatif === '+235'
    ) {
      this.newSubmitEvent.emit({
        reference_paiement: this.form.get('reference_paiement')?.value,
        date_paiement: this.form.get('date_paiement')?.value,
        telephone_paiement: this.telephone,
      });
    } else {
      this.newSubmitEvent.emit({
        reference_paiement: this.form.get('reference_paiement')?.value,
        date_paiement: this.form.get('date_paiement')?.value,
        telephone_paiement: this.telephone,
      });
    }
  }

  previous() {
    this.previousStepEvent.emit(this.step - 1);
  }

  getReferencePaiementValidator(): ValidatorFn {
    let validator: ValidatorFn;

    // Choisissez le validateur de référence de paiement en fonction du pays
    if (this.site?.nom === 'Cameroun') {
      validator = reference_paiement_cameroun('date_paiement');
    } else if (this.site?.nom === 'Gabon') {
      validator = reference_paiement_gabon('date_paiement');
    } else if (this.site?.nom === 'Tchad') {
      validator = reference_paiement_tchad('date_paiement');
    } else {
      // Utilisez un validateur générique par défaut pour les autres pays
      validator = reference_paiement_cameroun('date_paiement');
    }

    return validator;
  }

  setPlaceholderReferencePaiement() {
    // Déterminez le placeholder en fonction du pays
    console.log(this.site?.nom);
    if (this.site?.nom === 'Cameroun' || this.site?.indicatif === '+237') {
      this.placeholderReferencePaiement = 'Ex: MP220315.1349.A18995';
    } else if (this.site?.nom === 'Gabon' || this.site?.indicatif === '+241') {
      this.placeholderReferencePaiement = 'Ex: PP220315.1349.A18995';
    } else if (this.site?.nom === 'Tchad' || this.site?.indicatif === '+235') {
      this.placeholderReferencePaiement = 'Ex: CI220315.1349.A18995';
    } else {
      this.placeholderReferencePaiement = 'Ex: MP220315.1349.A18995';
    }
  }
}

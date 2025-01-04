import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { dateValidator, createStringValidatior, createCamerounianNumberValidator, emailValidatior } from 'src/app/shared/validators/number_validator';
import { IAutoCompleteCompleteEvent } from 'src/app/shared/interfaces/auto-complete-complete-event';
import { MessageService } from 'primeng/api';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'uci-personnal-information-form',
  templateUrl: './personnal-information-form.component.html',
  styles: [
  ]
})
export class PersonnalInformationFormComponent implements OnInit {

  @Output() newSubmitEvent = new EventEmitter<{
    genre: string;
    date_naissance: string;
    lieu_de_naissance: string;
    nom: string;
    telephone: string;
    prenom: string;
    nationalite: string;
    email: string;
    ville: string;
  }>();

  @Output() newSubmitLoadingEvent = new EventEmitter<boolean>();

  form: FormGroup = new FormGroup({
    date_naissance: new FormControl('', [Validators.required, dateValidator()]),
    genre: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required, Validators.minLength(8)]),
    nom: new FormControl('', [Validators.required, Validators.minLength(3), createStringValidatior()]),
    prenom: new FormControl('', [Validators.required, createStringValidatior()]),
    email: new FormControl('', [Validators.required, Validators.email, emailValidatior()]),
  });

  public dateBefore15Date: Date = new Date();
  public currentDate: Date = new Date();

  public countries: {
    "id": number;
    "name": string;
    "iso2": string;
  }[] = [];

  public country!: {
    "id": number;
    "name": string;
    "iso2": string;
  };

  public filteredCountries: {
    "id": number;
    "name": string;
    "iso2": string;
  }[] = [];

  public cities: {
    "id": number;
    "name": string;
    "iso2": string;
  }[] = [];

  public filteredCities: {
    "id": number;
    "name": string;
  }[] = [];

  public city!: {
    "id": number;
    "name": string;
  };

  public birthCity!: {
    "id": number;
    "name": string;
  };

  public KEYS: string = "eG5JMDVHY29ObjVKZjR4YUMwVm41eEd0RnRJaTBrOU5kVmNuV2xyeQ==";


  constructor() {
  }

  ngOnInit(): void {
    this.dateBefore15Date = new Date(new Date().getFullYear(), 11, 31);
    this.dateBefore15Date.setFullYear(this.dateBefore15Date.getFullYear() - 15);
    this.getAllCountries();
  }

  get formControls(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  getAllCountries() {
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", this.KEYS);

    fetch("https://api.countrystatecity.in/v1/countries", {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => { this.countries = result; this.getAllCities() })
      .catch(error => console.log('error', error));
  }

  getAllCities() {
    for (let index = 0; index < this.countries.length; index++) {
      this.getCitiesByCountry(this.countries[index]);
    }

    const objetsUniques = this.cities.filter(
      (objet, index, self) =>
        index === self.findIndex((o) => o.id === objet.id)
    );

    this.cities = objetsUniques;
    this.newSubmitLoadingEvent.emit(false);
  }

  getCitiesByCountry(country: any) {
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", this.KEYS);

    fetch("https://api.countrystatecity.in/v1/countries/" + country.iso2 + "/cities", {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => this.cities.push(...result))
      .catch(error => console.log('error', error));
  }

  filterCity(event: IAutoCompleteCompleteEvent) {
    this.filteredCities = this.cities.filter(city => city.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0);
  }

  filterCounty(event: IAutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  submit() {
    this.newSubmitEvent.emit(
      {
        genre: this.form.get('genre')?.value,
        date_naissance: this.form.get('date_naissance')?.value,
        lieu_de_naissance: this.birthCity.name,
        nom: this.form.get('nom')?.value,
        telephone: this.form.get('telephone')?.value,
        prenom: this.form.get('prenom')?.value,
        nationalite: this.country.name,
        email: this.form.get('email')?.value,
        ville: this.city.name,
      }
    );
  }

}

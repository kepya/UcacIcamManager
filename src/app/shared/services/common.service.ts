import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { Table } from 'primeng/table';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  calculerJours(dateDebut: number, dateFin: number) {
    // Calculer la différence en millisecondes
    var differenceMs = Math.abs(dateFin - dateDebut);

    // Convertir en jours
    var jours = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return jours;
  }

  clear(table: Table) {
    table.clear();
  }

  getStatuses(): {
    label: boolean;
    value: string;
  }[] {
    return [
      { label: false, value: 'A faire' },
      { label: true, value: 'Réalisé' },
    ];
  }

  getSeverity(status: boolean) {
    switch (status) {
      case false:
        return 'danger';
      case true:
        return 'success';
      default:
        return 'warning';
    }
  }

  getStatusLabel(status: boolean) {
    switch (status) {
      case false:
        return 'A faire';
      case true:
        return 'Réalisé';
      default:
        return '';
    }
  }

  getFormationLabel(value: string) {
    if (value == "Ingénieur généraliste parcours international") {
      return "OP";
    }

    if (value == "Ingénieur généraliste par apprentissage ou génie des procédés") {
      return "L";
    }

    if (value == "Ingénieur genie des procédés") {
      return "IP";
    }

    if (value == "Ingénieur géneraliste parcours international et innovation") {
      return "I";
    }

    if (value == "Ingénieur génie Informtique") {
      return "X";
    }
    return "";
  }

  genererDates(dateDebut: number, dateFin: number): Date[] {
    let nbreJr = this.calculerJours(dateDebut, dateFin);
    console.log("nombre jour:", nbreJr);

    let dates: Date[] = [];
    let date = new Date(dateDebut);
    dates.push(new Date(dateDebut));

    for (let index = 0; index < nbreJr; index++) {
      date.setDate(date.getDate() + 1);
      dates.push(new Date(date));
    }

    return dates;
  }

  formatDate(date: Date): string {
    let time = formatDate(date, 'shortTime', 'fr-FR');
    let times = time.split(':');
    return (parseInt(times[0], 10) - 1) + 'h' + times[1];
  }

  formatDate1(date: Date): Date {
    const dateString = "2024-06-10T08:20:00.000+00:00";
    const myDate = new Date(dateString);

    // Obtenez les composants de la date et de l'heure dans votre fuseau horaire local
    const year = myDate.getFullYear();
    const month = myDate.getMonth() + 1; // Les mois sont indexés à partir de 0
    const day = myDate.getDate();
    const hours = myDate.getHours();
    const minutes = myDate.getMinutes();

    myDate.setHours(hours)
    myDate.setMinutes(minutes)

    return myDate;
  }

  buildDateWithTime(time: string) {
    const current = new Date()
    const dateTimeTwo = new Date(`${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()} ${time}`)
    return dateTimeTwo;
  }

  buildDate(date: Date, time: string) {
    let dates = time.split('-');
    let startDate: number;
    let endDate: number;

    let date1 = dates[0];
    let timeDate1 = date1.split('h');
    date.setHours(parseInt(timeDate1[0], 10) + 1)
    date.setMinutes(parseInt(timeDate1[1], 10))
    startDate = date.getTime();

    let date2 = dates[1];
    let timeDate2 = date2.split('h');
    date.setHours(parseInt(timeDate2[0], 10) + 1)
    date.setMinutes(parseInt(timeDate2[1], 10))
    endDate = date.getTime();

    return {
      startDate, endDate
    };
  }
}

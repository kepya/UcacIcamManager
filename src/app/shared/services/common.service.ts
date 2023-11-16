import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

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

  genererDates(dateDebut: number, dateFin: number): Date[] {
    let nbreJr = this.calculerJours(dateDebut, dateFin);
    console.log("Nombre de jours : " + nbreJr);
    var dates = [];
    let date = new Date(dateDebut);

    for (let index = 0; index < nbreJr; index++) {
      date.setDate(date.getDate() + index);
      dates.push(new Date(date));
    }

    return dates;
  }

  formatDate(date: Date): string {
    let time = formatDate(date, 'shortTime', 'fr-FR');
    let times = time.split(':');
    return times[0] + 'h' + times[1];
  }

  buildDateWithTime(time: string) {
    const current = new Date()
    const dateTimeTwo = new Date(`${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()} ${time}`)
    console.log('time', dateTimeTwo);
    return dateTimeTwo;
  }

  buildDate(date: Date, time: string) {
    let dates = time.split('-');
    let startDate: number;
    let endDate: number;

    let date1 = dates[0];
    let timeDate1 = date1.split('h');
    date.setHours(parseInt(timeDate1[0], 10))
    date.setMinutes(parseInt(timeDate1[1], 10))
    startDate = date.getTime();

    let date2 = dates[1];
    let timeDate2 = date2.split('h');
    date.setHours(parseInt(timeDate2[0], 10))
    date.setMinutes(parseInt(timeDate2[1], 10))
    endDate = date.getTime();

    return {
      startDate, endDate
    };
  }
}

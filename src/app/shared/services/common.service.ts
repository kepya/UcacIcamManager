import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  formatDate(date: Date): string {
    let time = formatDate(date, 'shortTime', 'fr-FR');
    let times = time.split(':');
    return times[0] + 'h' + times[1];
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
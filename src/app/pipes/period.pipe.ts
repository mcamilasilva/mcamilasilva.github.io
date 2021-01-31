import { Pipe, PipeTransform } from '@angular/core';
import { MonthYear } from '../models/month-year';
import { Period } from '../models/period';

@Pipe({
  name: 'period'
})
export class PeriodPipe implements PipeTransform {

  constructor() {}

  transform(value: Period, format: string): any {

    if (!value || !format) {
      return value;
    }

    if (value.end != null) {
      return this.formatMonthYear(value.start, format) + " - " + this.formatMonthYear(value.end, format);
    }

    //TODO: Ajustar o current
    return this.formatMonthYear(value.start, format) + " - Current";
  }


  /**
   * Transform a MonthYear object into a string using the format '<short month> <year>'
   * 
   * @param date 
   */
  private formatMonthYear(date: MonthYear, format: string): string {

    let formatter = new Intl.DateTimeFormat(format, {
      year: 'numeric',
      month: "short"
    });
    
    return formatter.format(new Date(date.year, date.month));
  }

}

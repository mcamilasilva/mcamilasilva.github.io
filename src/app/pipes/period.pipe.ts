import { Pipe, PipeTransform } from '@angular/core';
import { MonthYear } from '../models/month-year';
import { Period } from '../models/period';
import { SystemLanguageService } from '../service/language.service';

@Pipe({
  name: 'period'
})
export class PeriodPipe implements PipeTransform {

  constructor(private languageService: SystemLanguageService) {}

  transform(value: Period, ...args: unknown[]): any {

    if (!value) {
      return value;
    }

    if (value.end != null) {
      return this.formatMonthYear(value.start) + " - " + this.formatMonthYear(value.end);
    }

    //TODO: Ajustar o current
    return this.formatMonthYear(value.start) + " - Current";
  }


  /**
   * Transform a MonthYear object into a string using the format '<short month> <year>'
   * 
   * @param date 
   */
  private formatMonthYear(date: MonthYear): string {

    let formatter = new Intl.DateTimeFormat(this.languageService.language, {
      year: 'numeric',
      month: "short"
    });
    
    return formatter.format(new Date(date.year, date.month));
  }

}

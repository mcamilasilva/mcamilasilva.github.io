import { Pipe, PipeTransform } from '@angular/core';
import { MonthYear } from '../models/month-year';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  constructor() {}

  transform(date: MonthYear, format: string): any {
    
    if (!date || !format) {
      return date;
    }

    let formatter = new Intl.DateTimeFormat(format, {
      year: 'numeric',
      month: "short"
    });
    
    // The replace it's necessary due to the default pt-BR format
    return formatter.format(new Date(date.year, date.month)).replace('. de', '');

  }

}

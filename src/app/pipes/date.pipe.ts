import { Pipe, PipeTransform } from '@angular/core';
import { MonthYear } from '../models/month-year';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  constructor() {}

  transform(value: MonthYear, format: string): any {
    
    if (!value || !format) {
      return value;
    }

    let formatter = new Intl.DateTimeFormat(format, {
      year: 'numeric',
      month: "short"
    });
    
    return formatter.format(new Date(value.year, value.month));

  }

}

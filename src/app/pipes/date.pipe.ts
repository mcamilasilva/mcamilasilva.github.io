import { Pipe, PipeTransform } from '@angular/core';
import { MonthYear } from '../models/month-year';
import { SystemLanguageService } from '../service/system-language.service';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  constructor(private systemLanguageService: SystemLanguageService) {}

  transform(value: MonthYear, ...args: unknown[]): any {
    
    if (!value) {
      return value;
    }

    let formatter = new Intl.DateTimeFormat(this.systemLanguageService.language, {
      year: 'numeric',
      month: "short"
    });
    
    return formatter.format(new Date(value.year, value.month));

  }

}

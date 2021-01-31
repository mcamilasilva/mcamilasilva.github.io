import { Pipe, PipeTransform } from '@angular/core';
import { FixedLabelsAndTooltipsEnum } from '../models/enums/fixed-labels-and-tooltips.enum';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { TranslationTypeEnum } from '../models/enums/translation-type.enum';
import { MonthYear } from '../models/month-year';
import { Period } from '../models/period';
import { TranslationService } from '../service/translation.service';

@Pipe({
  name: 'period'
})
export class PeriodPipe implements PipeTransform {

  constructor(private translationService: TranslationService) { }

  transform(value: Period, format: string, language: SystemLanguageEnum): any {

    if (!value || !format) {
      return value;
    }

    if (value.end != null) {
      return this.formatMonthYear(value.start, format) + " - " + this.formatMonthYear(value.end, format);
    }

    return `${this.formatMonthYear(value.start, format)} - 
      ${this.translationService.translate(language, TranslationTypeEnum.FIXED_LABELS_AND_TOOLTIPS, FixedLabelsAndTooltipsEnum.CURRENT_LABEL)}`;
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

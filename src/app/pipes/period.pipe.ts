import { Pipe, PipeTransform } from '@angular/core';
import { FixedLabelsAndTooltipsEnum } from '../models/enums/fixed-labels-and-tooltips.enum';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { TranslationTypeEnum } from '../models/enums/translation-type.enum';
import { Period } from '../models/period';
import { TranslationService } from '../service/translation.service';
import { DatePipe } from './date.pipe';

@Pipe({
  name: 'period'
})
export class PeriodPipe implements PipeTransform {

  constructor(private translationService: TranslationService,
    private datePipe: DatePipe) { }

  transform(value: Period, format: string, language: SystemLanguageEnum): any {

    if (!value || !format) {
      return value;
    }

    if (value.end != null) {
      return `${this.datePipe.transform(value.start, format)} - ${this.datePipe.transform(value.end, format)}`;
    }

    return `${this.datePipe.transform(value.start, format)} - 
      ${this.translationService.translate(language, TranslationTypeEnum.FIXED_LABELS_AND_TOOLTIPS, FixedLabelsAndTooltipsEnum.CURRENT_LABEL)}`;
  }

}

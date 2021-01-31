import { Pipe, PipeTransform } from '@angular/core';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { TranslationTypeEnum } from '../models/enums/translation-type.enum';
import { TranslationService } from '../service/translation.service';

@Pipe({
  name: 'positions'
})
export class PositionsPipe implements PipeTransform {

  constructor(private translationService: TranslationService) {}

  transform(value: any[], language: SystemLanguageEnum): string | null {

    if (!value || value.length <= 0) {
      return null;
    }

    if (language !== undefined) {
      value = value.map(position => this.translationService.translate(language, TranslationTypeEnum.POSITION, position));
      
    }

    return value.join(" / ");
  }

}

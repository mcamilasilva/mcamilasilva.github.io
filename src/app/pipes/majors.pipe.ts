import { Pipe, PipeTransform } from '@angular/core';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { TranslationTypeEnum } from '../models/enums/translation-type.enum';
import { TranslationService } from '../service/translation.service';

@Pipe({
  name: 'majors'
})
export class MajorsPipe implements PipeTransform {

  constructor(private translationService: TranslationService) {}

  transform(majors: any[], language: SystemLanguageEnum): unknown {
    
    if (!majors || majors.length <= 0) {
      return null;
    }

    if (language !== undefined) {
      majors = majors.map(major => this.translationService.translate(language, TranslationTypeEnum.MAJOR, major));
      
    }

    return majors.join(" / ");
  }

}

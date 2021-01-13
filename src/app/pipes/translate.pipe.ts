import { Pipe, PipeTransform } from '@angular/core';
import { LanguageDictionary } from '../dictionaries/language.dictionary';
import { LocaleDictionary } from '../dictionaries/locale.dictionary';
import { MajorDegreeDictionary } from '../dictionaries/major-degree.dictionary';
import { MajorDictionary } from '../dictionaries/major.dictionary';
import { SchoolDictionary } from '../dictionaries/school.dictionary';
import { SectionTitleDictionary } from '../dictionaries/section-title.dictionary';
import { Major } from '../models/enums/major.enum';
import { SystemLanguageService } from '../service/language.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private languageService: SystemLanguageService) {}

  transform(value: any, type: string): unknown {

    if (value == null || value == undefined) {
      return value;
    }

    switch(type) {
      case 'majorDegree': return MajorDegreeDictionary[this.languageService.language][value];

      case 'major': return this.transformMajor(value);

      case 'locale': return LocaleDictionary[this.languageService.language][value];

      case 'school': return SchoolDictionary[this.languageService.language][value];

      case 'language': return LanguageDictionary[this.languageService.language][value];

      case 'sectionTitle': return SectionTitleDictionary[this.languageService.language][value];
    }

    return null;
  }

  private transformMajor(value: Major[]): any {
    let majors = new Array<string>(value.length);
    for (let i = 0; i < value.length; i++) {
      majors[i] = MajorDictionary[this.languageService.language][value[i]];
    }
    
    return majors.join(" / ");
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { MajorDictionary } from '../dictionaries/major.dictionary';
import { PositionDictionary } from '../dictionaries/position.dictionary';
import { MajorEnum } from '../models/enums/major.enum';
import { PositionEnum } from '../models/enums/position.enum';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { TranslationTypeEnum } from '../models/enums/translation-type.enum';
import { SystemLanguageService } from '../service/system-language.service';
import { TranslationService } from '../service/translation.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private languageService: SystemLanguageService,
    private translationService: TranslationService) { }

  transform(value: any, ...args: any[]): unknown {

    if (value == null || value == undefined) {
      return value;
    }

    let type: TranslationTypeEnum = args[0];
    let language: SystemLanguageEnum = args[1];

    return this.translationService.translate(language, type, value);
  }

  /**
   * Join the Majors by using '/' as delimiter
   * 
   * @param value 
   */
  private transformMajors(value: MajorEnum[]): string {
    let majors = new Array<string>(value.length);
    for (let i = 0; i < value.length; i++) {
      if (MajorDictionary[this.languageService.language][value[i]] != null) {
        majors[i] = MajorDictionary[this.languageService.language][value[i]];
      }
    }
    return this.filterAndJoin(majors);
  }

  /**
   * Join the Positions by using '/' as delimiter
   * 
   * @param value 
   */
  private transformPositions(value: PositionEnum[]): string {

    let positions = new Array<string>(value.length);
    for (let i = 0; i < value.length; i++) {
      if (PositionDictionary[this.languageService.language][value[i]] != null) {
        positions[i] = PositionDictionary[this.languageService.language][value[i]];
      }
    }
    return this.filterAndJoin(positions);
  }

  /**
   * Filters the items by removing the ones that have no value and then join them
   * 
   * @param items 
   */
  private filterAndJoin(items: string[]): string {
    // Join only the ones that are not null
    return items.filter(function (item) { return item }).join(" / ");
  }

}

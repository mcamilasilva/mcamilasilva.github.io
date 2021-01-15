import { Pipe, PipeTransform } from '@angular/core';
import { HardSkillsDictionary } from '../dictionaries/hard-skills.dictionary';
import { LanguageDictionary } from '../dictionaries/language.dictionary';
import { LocaleDictionary } from '../dictionaries/locale.dictionary';
import { MajorDegreeDictionary } from '../dictionaries/major-degree.dictionary';
import { MajorDictionary } from '../dictionaries/major.dictionary';
import { MenuItemDictionary } from '../dictionaries/menu-item.dictionary';
import { PositionDictionary } from '../dictionaries/position.dictionary';
import { SchoolDictionary } from '../dictionaries/school.dictionary';
import { SoftSkillsDictionary } from '../dictionaries/soft-skill.dictionary';
import { TitleDictionary } from '../dictionaries/title.dictionary';
import { MajorEnum } from '../models/enums/major.enum';
import { PositionEnum } from '../models/enums/position.enum';
import { SystemLanguageService } from '../service/system-language.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private languageService: SystemLanguageService) {}

  transform(value: any, type: string): unknown {

    if (value == null || value == undefined) {
      return value;
    }

    let translatedValue: any;
    switch(type) {
      case 'majorDegree': 
        translatedValue = MajorDegreeDictionary[this.languageService.language][value];
        break;
      case 'major': 
        translatedValue = this.transformMajors(value);
        break;
      case 'locale': 
        translatedValue = LocaleDictionary[this.languageService.language][value];
        break;
      case 'school': 
        translatedValue = SchoolDictionary[this.languageService.language][value];
        break;
      case 'language': 
        translatedValue = LanguageDictionary[this.languageService.language][value];
        break;
      case 'title': 
        translatedValue = TitleDictionary[this.languageService.language][value];
        break;
      case 'menuItem': 
        translatedValue = MenuItemDictionary[this.languageService.language][value];
        break;
      case 'softSkill':
        translatedValue = SoftSkillsDictionary[this.languageService.language][value];
        break;
      case 'hardSkill':
          translatedValue = HardSkillsDictionary[this.languageService.language][value];
          break;
      case 'position':
          translatedValue = this.transformPositions(value);
          break;
      default:
          return value;
    }

    if (translatedValue == null) {
      return value;
    }

    return translatedValue;
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
    return items.filter(function(item) { return item }).join(" / ");
  }

}

import { Injectable } from '@angular/core';
import { AboutMeInfoDictionary } from '../dictionaries/about-me-info.dictionary';
import { LanguageDictionary } from '../dictionaries/language.dictionary';
import { LocaleDictionary } from '../dictionaries/locale.dictionary';
import { MajorDegreeDictionary } from '../dictionaries/major-degree.dictionary';
import { MajorDictionary } from '../dictionaries/major.dictionary';
import { MenuItemDictionary } from '../dictionaries/menu-item.dictionary';
import { PositionDictionary } from '../dictionaries/position.dictionary';
import { SchoolDictionary } from '../dictionaries/school.dictionary';
import { SoftSkillsDictionary } from '../dictionaries/soft-skill.dictionary';
import { SystemLanguageDictionary } from '../dictionaries/system-language.dictionary';
import { TitleDictionary } from '../dictionaries/title.dictionary';
import { SystemLanguageEnum } from '../models/enums/system-language.enum';
import { TranslationTypeEnum } from '../models/enums/translation-type.enum';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

  translate(language: SystemLanguageEnum, type: TranslationTypeEnum, value: any): any {

    if (value == null || value == undefined) {
      return value;
    }

    let translatedValue: any;
    switch (type) {
      case TranslationTypeEnum.MAJOR_DEGREE:
        translatedValue = MajorDegreeDictionary[language][value];
        break;
      case TranslationTypeEnum.MAJOR:
        translatedValue = MajorDictionary[language][value];
        break;
      case TranslationTypeEnum.LOCALE:
        translatedValue = LocaleDictionary[language][value];
        break;
      case TranslationTypeEnum.SCHOOL:
        translatedValue = SchoolDictionary[language][value];
        break;
      case TranslationTypeEnum.LANGUAGE:
        translatedValue = LanguageDictionary[language][value];
        break;
      case TranslationTypeEnum.TITLE:
        translatedValue = TitleDictionary[language][value];
        break;
      case TranslationTypeEnum.MENU_ITEM:
        translatedValue = MenuItemDictionary[language][value];
        break;
      case TranslationTypeEnum.SOFT_SKILL:
        translatedValue = SoftSkillsDictionary[language][value];
        break;
      case TranslationTypeEnum.HARD_SKILL:
        translatedValue = SoftSkillsDictionary[language][value];
        break;
      case TranslationTypeEnum.POSITION:
        translatedValue = PositionDictionary[language][value];
        break;
      case TranslationTypeEnum.SYSTEM_LANGUAGE:
        translatedValue = SystemLanguageDictionary[language][value];
        break;
      case TranslationTypeEnum.ABOUT_ME_INFO:
        translatedValue = AboutMeInfoDictionary[language][value];
        break;
      default:
        return value;
    }

    if (translatedValue == null || translatedValue == undefined) {
      return value;
    }

    return translatedValue;
  }
}
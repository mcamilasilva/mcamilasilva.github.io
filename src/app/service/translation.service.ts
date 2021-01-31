import { Injectable } from '@angular/core';
import { AboutMeInfoDictionary } from '../dictionaries/about-me-info.dictionary';
import { FixedLabelsAndTooltipsDictionary } from '../dictionaries/fixed-labels-and-tooltips.dictionary';
import { HardSkillsDictionary } from '../dictionaries/hard-skills.dictionary';
import { LanguageDictionary } from '../dictionaries/language.dictionary';
import { LinkedinInfoDictionary } from '../dictionaries/linkedin-info.dictionary';
import { LocaleDictionary } from '../dictionaries/locale.dictionary';
import { MajorDegreeDictionary } from '../dictionaries/major-degree.dictionary';
import { MajorDictionary } from '../dictionaries/major.dictionary';
import { MenuItemDictionary } from '../dictionaries/menu-item.dictionary';
import { PositionDictionary } from '../dictionaries/position.dictionary';
import { ResumeInfoDictionary } from '../dictionaries/resume-info.dictionary';
import { SchoolDictionary } from '../dictionaries/school.dictionary';
import { SoftSkillsDictionary } from '../dictionaries/soft-skill.dictionary';
import { SystemLanguageDictionary } from '../dictionaries/system-language.dictionary';
import { ThesisInfoDictionary } from '../dictionaries/thesis-info.dictionary';
import { TitleDictionary } from '../dictionaries/title.dictionary';
import { WorkExperienceActivitiesDictionary } from '../dictionaries/work-experience-activities.dictionary';
import { WorkExperienceDescriptionDictionary } from '../dictionaries/work-experience-description.dictionary';
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
        translatedValue = HardSkillsDictionary[language][value];
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
      case TranslationTypeEnum.WORK_EXPERIENCE_DESCRIPTION:
        translatedValue = WorkExperienceDescriptionDictionary[language][value];
        break;
      case TranslationTypeEnum.WORK_EXPERIENCE_ACTIVITY:
        translatedValue = WorkExperienceActivitiesDictionary[language][value];
        break;
      case TranslationTypeEnum.THESIS_INFO:
        translatedValue = ThesisInfoDictionary[language][value];
        break;
      case TranslationTypeEnum.LINKEDIN_INFO:
        translatedValue = LinkedinInfoDictionary[language][value];
        break;
      case TranslationTypeEnum.FIXED_LABELS_AND_TOOLTIPS:
        translatedValue = FixedLabelsAndTooltipsDictionary[language][value];
        break;
      case TranslationTypeEnum.RESUME_INFO:
        translatedValue = ResumeInfoDictionary[language][value];
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

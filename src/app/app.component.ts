import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { LocaleDictionary } from './dictionaries/locale.dictionary';
import { ThesisInfoDictionary } from './dictionaries/thesis-info.dictionary';
import { WorkExperiencesDictionary } from './dictionaries/work-experiences.dictionary';
import { AboutMe } from './models/about-me';
import { Certification } from './models/certification';
import { DetailItem } from './models/detail-item';
import { EducationAdditionalInfo } from './models/education-additional-info';
import { EducationItem } from './models/education-item';
import { LanguageEnum } from './models/enums/language.enum';
import { LocaleEnum } from './models/enums/locale.enum';
import { MajorDegreeEnum } from './models/enums/major-degree.enum';
import { MajorEnum } from './models/enums/major.enum';
import { MenuItemEnum } from './models/enums/menu-item.enum';
import { MonthEnum } from './models/enums/month.enum';
import { SchoolEnum } from './models/enums/school.enum';
import { SoftSkillEnum } from './models/enums/soft-skill.enum';
import { ThesisInfoEnum } from './models/enums/thesis-info.enum';
import { TitleEnum } from './models/enums/title.enum';
import { ExternalLink } from './models/external-link';
import { HeaderInfo } from './models/header-info';
import { LanguageLevel } from './models/language-level';
import { MenuItem } from './models/menu-item';
import { MonthYear } from './models/month-year';
import { Period } from './models/period';
import { Skills } from './models/skills';
import { WorkExperience } from './models/work-experience';
import { SystemLanguageService } from './service/system-language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentYear = new Date().getFullYear();

  public menuItems: MenuItem[];
  public headerInfo: HeaderInfo;
  public aboutMeInfo: AboutMe;
  public workExperiences: WorkExperience[];
  public education: EducationItem[];
  public certifications: Certification[];
  public skills: Skills;

  constructor(private systemLanguageService: SystemLanguageService) {

    this.menuItems = [
      new MenuItem(MenuItemEnum.ABOUT_ME, '#about'),
      new MenuItem(MenuItemEnum.WORK_EXPERIENCE, '#experience'),
      new MenuItem(MenuItemEnum.EDUCATION, '#education'),
      new MenuItem(MenuItemEnum.SKILLS, '#mySkills'),
      new MenuItem(MenuItemEnum.CERTIFICATION, '#certifications')
    ];

    this.headerInfo = new HeaderInfo('Manoela Silva', 'Software Developer, Tech Lead',
      'assets/images/me.jpeg', 'https://www.linkedin.com/in/mcbsilva/?locale=en_US',
      'https://drive.google.com/uc?export=download&id=15Jvl7DESK0ieoPxH-vCqz-NcAHK-eU9J');

    let aboutMeParagraphs: string[] = [
      `I am a Senior Software Developer who is passionate about technology. Seeing an idea getting off the ground and becoming something that improves people's lives brings me real joy.`,
      `Although I have a proper knowledge of front-end techniques, my inclination is towards back-end. I am also really fond of good development techniques, such as clean code, design patterns, and so on, and I try to apply them as much as possible.`,
      `Additionally, I have a strong can-do, hands-on attitude, and I am a true believer of teamwork. I am from the opinion that "two heads are better than one" and knowledge can always be improved. I just love learning new things and acquiring new skills.`
    ];
    let languages: LanguageLevel[] = [new LanguageLevel(LanguageEnum.ENGLISH, 90), new LanguageLevel(LanguageEnum.PORTUGUESE, 100), new LanguageLevel(LanguageEnum.ITALIAN, 60)];
    let details: DetailItem[] = [
      new DetailItem(TitleEnum.AGE, '28'),
      new DetailItem(TitleEnum.EMAIL, 'manoelacamila.silva@gmail.com'),
      new DetailItem(TitleEnum.PHONE, '+55 11 94989-8386'),
      new DetailItem(TitleEnum.LOCATION, LocaleDictionary[this.systemLanguageService.language][LocaleEnum.SAO_PAULO])
    ]
    this.aboutMeInfo = new AboutMe(aboutMeParagraphs, details, languages)

    this.workExperiences = WorkExperiencesDictionary[this.systemLanguageService.language];

    this.education = [
      new EducationItem(SchoolEnum.UFSCAR, MajorDegreeEnum.MASTER, [MajorEnum.COMPUTER_SCIENCE, MajorEnum.BUSINESS_INTELLIGENCE],
        new Period(new MonthYear(MonthEnum.AUG, 2015), new MonthYear(MonthEnum.AUG, 2017)), LocaleEnum.SOROCABA,
        new ExternalLink('https://repositorio.ufscar.br/handle/ufscar/9154', ThesisInfoDictionary[this.systemLanguageService.language][ThesisInfoEnum.LINK_LABEL]),
        new EducationAdditionalInfo(ThesisInfoDictionary[this.systemLanguageService.language][ThesisInfoEnum.TITLE_LABEL], ThesisInfoDictionary[this.systemLanguageService.language][ThesisInfoEnum.THESIS_TITLE])),
      new EducationItem(SchoolEnum.UFSCAR, MajorDegreeEnum.BACHELOR, [MajorEnum.COMPUTER_SCIENCE],
        new Period(new MonthYear(MonthEnum.FEB, 2011), new MonthYear(MonthEnum.JUL, 2015)), LocaleEnum.SOROCABA),
      new EducationItem(SchoolEnum.SAPIENZA, MajorDegreeEnum.ACADEMIC_EXCHANGE, [MajorEnum.COMPUTER_SCIENCE],
        new Period(new MonthYear(MonthEnum.AUG, 2013), new MonthYear(MonthEnum.AUG, 2014)), LocaleEnum.ROME)
    ];

    this.certifications = [
      new Certification('IELTS General Training Overall Band Scores 8', 'IELTS', new MonthYear(MonthEnum.MAR, 2020)),
      new Certification('MCSA: SQL 2016 Database Development', 'MCSA', new MonthYear(MonthEnum.OCT, 2018))
    ];

    let softSkills = [SoftSkillEnum.TEAM_WORK, SoftSkillEnum.COLLABORATION, SoftSkillEnum.COMMITMENT,
      SoftSkillEnum.CRITICAL_THINKING, SoftSkillEnum.SELF_LEARNING, SoftSkillEnum.ADAPTABILITY,
      SoftSkillEnum.COMMUNICATION, SoftSkillEnum.TIME_MANAGEMENT, SoftSkillEnum.RESILIENCE,
      SoftSkillEnum.PROBLEM_SOLVING, SoftSkillEnum.LEADERSHIP, SoftSkillEnum.ATTENTION_TO_DETAIL
    ];

    this.skills = new Skills([], softSkills);
  }

  ngOnInit() {
    AOS.init({
      disable: 'mobile'
    }); // initialize animate on scroll library
  }
}

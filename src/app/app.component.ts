import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { WorkExperiencesDictionary } from './dictionaries/work-experiences.dictionary';
import { AboutMe } from './models/about-me';
import { EducationAdditionalInfo } from './models/education-additional-info';
import { EducationItem } from './models/education-item';
import { Language } from './models/enums/language.enum';
import { Locale } from './models/enums/locale.enum';
import { MajorDegree } from './models/enums/major-degree.enum';
import { Major } from './models/enums/major.enum';
import { Month } from './models/enums/month.enum';
import { School } from './models/enums/school.enum';
import { ExternalLink } from './models/external-link';
import { HeaderInfo } from './models/header-info';
import { LanguageLevel } from './models/language-level';
import { MenuItem } from './models/menu-item';
import { MonthYear } from './models/month-year';
import { Period } from './models/period';
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

  constructor(private systemLanguageService: SystemLanguageService) {
    this.menuItems = [
      new MenuItem('About', '#about'), 
      new MenuItem('Experience', '#experience'), 
      new MenuItem('Education', '#education'), 
      new MenuItem('Skills', '#mySkills'), 
      new MenuItem('Certifications', '#certifications')
    ];

    this.headerInfo = new HeaderInfo('Manoela Silva', 'Software Developer, Tech Lead', 
      'assets/images/me.jpeg', 'https://www.linkedin.com/in/mcbsilva/?locale=en_US', 
      'https://drive.google.com/uc?export=download&id=15Jvl7DESK0ieoPxH-vCqz-NcAHK-eU9J');

      let aboutMeParagraphs: string[] = [
        `I am a Senior Software Developer who is passionate about technology. Seeing an idea getting off the ground and becoming something that improves people's lives brings me real joy.`,
        `Although I have a proper knowledge of front-end techniques, my inclination is towards back-end. I am also really fond of good development techniques, such as clean code, design patterns, and so on, and I try to apply them as much as possible.`,
        `Additionally, I have a strong can-do, hands-on attitude, and I am a true believer of teamwork. I am from the opinion that "two heads are better than one" and knowledge can always be improved. I just love learning new things and acquiring new skills.`
      ];
      let languages: LanguageLevel[] = [new LanguageLevel(Language.ENGLISH, 90), new LanguageLevel(Language.PORTUGUESE, 100), new LanguageLevel(Language.ITALIAN, 60)];
      this.aboutMeInfo = new AboutMe(aboutMeParagraphs, 28, 'manoelacamila.silva@gmail.com', '+55 11 94989-8386', 'São Paulo - SP, Brazil', languages)

      this.workExperiences = WorkExperiencesDictionary[this.systemLanguageService.language];

      this.education = [
        new EducationItem(School.UFSCAR, MajorDegree.MASTER, [Major.COMPUTER_SCIENCE, Major.BUSINESS_INTELLIGENCE], 
          new Period(new MonthYear(Month.AUG, 2015), new MonthYear(Month.AUG, 2017)), Locale.SOROCABA, 
          new ExternalLink('https://repositorio.ufscar.br/handle/ufscar/9154', 'Thesis (pt-br)'), 
          new EducationAdditionalInfo('Thesis title', 'Take your time but do not wait too long: Decision-making by user demand using web data')),
        new EducationItem(School.UFSCAR, MajorDegree.BACHELOR, [Major.COMPUTER_SCIENCE], 
          new Period(new MonthYear(Month.FEB, 2011), new MonthYear(Month.JUL, 2015)), Locale.SOROCABA),
        new EducationItem(School.SAPIENZA, MajorDegree.ACADEMIC_EXCHANGE, [Major.COMPUTER_SCIENCE], 
          new Period(new MonthYear(Month.AUG, 2013), new MonthYear(Month.AUG, 2014)), Locale.ROME)
      ];


      
  }

  ngOnInit() {
    AOS.init({
      disable: 'mobile'
    }); // initialize animate on scroll library
  }
}

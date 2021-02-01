import { Component, OnInit, OnDestroy } from '@angular/core';

import * as AOS from 'aos';

import { MenuItemEnum } from './models/enums/menu-item.enum';
import { PositionEnum } from './models/enums/position.enum';
import { HeaderInfo } from './models/header-info';
import { MenuItem } from './models/menu-item';
import { SystemLanguageService } from './service/system-language.service';
import { SystemLanguageEnum } from './models/enums/system-language.enum';
import { Resume } from './models/resume';
import { ResumeService } from './service/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  public systemLanguage: SystemLanguageEnum;

  public menuItems: MenuItem[];
  public headerInfo: HeaderInfo;
  public resume: Resume;

  constructor(private systemLanguageService: SystemLanguageService,
    private resumeService: ResumeService) {

    this.systemLanguage = this.systemLanguageService.language;

    this.menuItems = [
      new MenuItem(MenuItemEnum.ABOUT_ME, '#about'),
      new MenuItem(MenuItemEnum.WORK_EXPERIENCE, '#experience'),
      new MenuItem(MenuItemEnum.EDUCATION, '#education'),
      new MenuItem(MenuItemEnum.SKILLS, '#mySkills'),
      new MenuItem(MenuItemEnum.CERTIFICATION, '#certifications')
    ];

    this.headerInfo = new HeaderInfo('Manoela Silva', [PositionEnum.SENIOR_SOFTWARE_DEVELOPER, PositionEnum.TECH_LEAD], 'assets/images/me.jpeg');

    this.resume = this.resumeService.get();

  }

  ngOnInit() {
    AOS.init({
      disable: 'mobile'
    }); // initialize animate on scroll library

    this.systemLanguageService.languageObservable.subscribe((language) => {
      this.systemLanguage = language;
      this.resume = this.resumeService.get();
    });
  }

  ngOnDestroy(): void {
    this.systemLanguageService.languageObservable.unsubscribe();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { AboutMeInfoDictionary } from 'src/app/dictionaries/about-me-info.dictionary';
import { AboutMe } from 'src/app/models/about-me';
import { AboutMeInfoEnum } from 'src/app/models/enums/about-me-info.enum';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TitleEnum } from 'src/app/models/enums/title.enum';


@Component({
  selector: 'ms-about-me',
  templateUrl: './ms-about-me.component.html',
  styleUrls: ['./ms-about-me.component.css']
})
export class MsAboutMeComponent implements OnInit {

  @Input() info: AboutMe = new AboutMe();
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  public title: TitleEnum = TitleEnum.ABOUT_ME;
  public detailsSectionTitle: TitleEnum = TitleEnum.DETAILS;
  public languagesSectionTitle: TitleEnum = TitleEnum.LANGUAGES;

  constructor() { }

  ngOnInit(): void { }

  get bioParagraphs(): string[] {
    return this.info.bioParagraphs || AboutMeInfoDictionary[this.language][AboutMeInfoEnum.BIO]
  }

}

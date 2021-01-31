import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AboutMeInfoDictionary } from 'src/app/dictionaries/about-me-info.dictionary';
import { AboutMe } from 'src/app/models/about-me';
import { AboutMeInfoEnum } from 'src/app/models/enums/about-me-info.enum';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TitleEnum } from 'src/app/models/enums/title.enum';
import { TranslationTypeEnum } from 'src/app/models/enums/translation-type.enum';
import { SystemLanguageService } from 'src/app/service/system-language.service';
import { TranslationService } from 'src/app/service/translation.service';


@Component({
  selector: 'ms-about-me',
  templateUrl: './ms-about-me.component.html',
  styleUrls: ['./ms-about-me.component.css']
})
export class MsAboutMeComponent implements OnInit, OnDestroy {

  @Input() info: AboutMe = new AboutMe();

  public title!: string;
  public detailsSectionTitle!: string;
  public languagesSectionTitle!: string;

  constructor(private systemLanguageService: SystemLanguageService,
    private translationService: TranslationService) { 
      this.translateTitles(this.systemLanguageService.language);
    }

  ngOnInit(): void {
    this.systemLanguageService.languageObservable.subscribe((language) => {
      this.translateTitles(language);
    });
  }

  private translateTitles(language: SystemLanguageEnum): void {
    this.title = this.translationService.translate(language, TranslationTypeEnum.TITLE, TitleEnum.ABOUT_ME);
    this.detailsSectionTitle = this.translationService.translate(language, TranslationTypeEnum.TITLE, TitleEnum.DETAILS);
    this.languagesSectionTitle = this.translationService.translate(language, TranslationTypeEnum.TITLE, TitleEnum.LANGUAGES);
  }

  get bioParagraphs(): string[] {
    return this.info.bioParagraphs || AboutMeInfoDictionary[this.systemLanguageService.language][AboutMeInfoEnum.BIO]
  }


  ngOnDestroy(): void {
    this.systemLanguageService.languageObservable.unsubscribe();
  }

}

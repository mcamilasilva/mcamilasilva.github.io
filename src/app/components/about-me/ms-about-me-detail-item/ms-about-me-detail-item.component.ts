import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AboutMeDetailItem } from 'src/app/models/about-me-detail-item';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TranslationTypeEnum } from 'src/app/models/enums/translation-type.enum';
import { SystemLanguageService } from 'src/app/service/system-language.service';
import { TranslationService } from 'src/app/service/translation.service';

@Component({
  selector: 'ms-about-me-detail-item',
  templateUrl: './ms-about-me-detail-item.component.html',
  styleUrls: ['./ms-about-me-detail-item.component.css']
})
export class MsAboutMeDetailItemComponent implements OnInit, OnDestroy {

  public title!: string;
  public information!: string;

  private _info: AboutMeDetailItem | undefined;

  @Input()
  public set info(info: AboutMeDetailItem) {
    this._info = info;
    this.translateInfo(this.systemLanguageService.language);
  }

  constructor(private systemLanguageService: SystemLanguageService,
    private translationService: TranslationService) { }

  ngOnInit(): void {
    this.systemLanguageService.languageObservable.subscribe((language) => {
      this.translateInfo(language);
    });
  }

  private translateInfo(language: SystemLanguageEnum): void {
    if (this._info) {
      this.title = this.translationService.translate(language, TranslationTypeEnum.TITLE, this._info.title);
      this.information = this.translationService.translate(language, TranslationTypeEnum.ABOUT_ME_INFO, this._info.info);
    }
  }

  ngOnDestroy(): void {
    this.systemLanguageService.languageObservable.unsubscribe();
  }

}

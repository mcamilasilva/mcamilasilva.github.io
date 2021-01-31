import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TranslationTypeEnum } from 'src/app/models/enums/translation-type.enum';
import { LanguageLevel } from 'src/app/models/language-level';
import { SystemLanguageService } from 'src/app/service/system-language.service';
import { TranslationService } from 'src/app/service/translation.service';

@Component({
  selector: 'ms-language-level',
  templateUrl: './ms-language-level.component.html',
  styleUrls: ['./ms-language-level.component.css']
})
export class MsLanguageLevelComponent implements OnInit, OnDestroy {

  private _info: LanguageLevel | undefined;

  public language!: string;
  public level!: number;

  public progressClass: any;
  public progressValueClass: any;

  @Input()
  public set info(info: LanguageLevel) {
    this._info = info;
    this.translateLanguage(this.systemLanguageService.language);
  }

  constructor(private systemLanguageService: SystemLanguageService,
    private translationService: TranslationService) { }

  ngOnInit(): void {

    this.systemLanguageService.languageObservable.subscribe((language) => {
      this.translateLanguage(language);
    });

    if (this._info) {
      this.progressClass = { [`progress-${this._info.level}`]: true };
      this.level = this._info.level;
    }
  }

  private translateLanguage(language: SystemLanguageEnum): void {
    this.language = this.translationService.translate(language, TranslationTypeEnum.LANGUAGE, this._info?.language);
  }

  ngOnDestroy(): void {
    this.systemLanguageService.languageObservable.unsubscribe();
  }
}

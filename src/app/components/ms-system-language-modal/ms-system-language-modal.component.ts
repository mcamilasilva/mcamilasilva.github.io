import { Component, Input, OnInit } from '@angular/core';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TranslationTypeEnum } from 'src/app/models/enums/translation-type.enum';
import { SystemLanguageService } from 'src/app/service/system-language.service';
import { TranslationService } from 'src/app/service/translation.service';

@Component({
  selector: 'ms-system-language-modal',
  templateUrl: './ms-system-language-modal.component.html',
  styleUrls: ['./ms-system-language-modal.component.css']
})
export class MsSystemLanguageModalComponent implements OnInit {

  @Input() id: string = '';

  public options: any;

  constructor(private systemLanguageService: SystemLanguageService,
    private translationService: TranslationService) {
    this.options = Object.keys(SystemLanguageEnum).filter(k => typeof SystemLanguageEnum[k as any] !== "number")
      .map(option => {
        return { value: option, name: this.translationService.translate(this.systemLanguageService.language, TranslationTypeEnum.SYSTEM_LANGUAGE, option) }
      });
  }

  ngOnInit(): void { }

  public changeSystemLanguage(language: SystemLanguageEnum): void {
    this.systemLanguageService.language = language;
  }

}

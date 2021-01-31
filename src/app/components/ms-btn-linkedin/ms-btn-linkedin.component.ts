import { Component, Input, OnInit } from '@angular/core';
import { LinkedinInfoEnum } from 'src/app/models/enums/linkedin-info.enum';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TranslationTypeEnum } from 'src/app/models/enums/translation-type.enum';
import { TranslationService } from 'src/app/service/translation.service';

@Component({
  selector: 'ms-btn-linkedin',
  templateUrl: './ms-btn-linkedin.component.html',
  styleUrls: ['./ms-btn-linkedin.component.css']
})
export class MsBtnLinkedinComponent implements OnInit {

  @Input() position: string = 'right'; // Default
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {
  }

  get tooltip(): string {
    return this.translationService.translate(this.language, TranslationTypeEnum.LINKEDIN_INFO, LinkedinInfoEnum.TOOLTIP);
  }

  get uri(): string {
    return this.translationService.translate(this.language, TranslationTypeEnum.LINKEDIN_INFO, LinkedinInfoEnum.LINK);
  }
}

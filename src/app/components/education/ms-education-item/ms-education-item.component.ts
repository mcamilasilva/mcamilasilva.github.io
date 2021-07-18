import { Component, Input, OnInit } from '@angular/core';
import { EducationItem } from 'src/app/models/education-item';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TranslationTypeEnum } from 'src/app/models/enums/translation-type.enum';
import { TranslationService } from 'src/app/service/translation.service';

@Component({
  selector: 'ms-education-item',
  templateUrl: './ms-education-item.component.html',
  styleUrls: ['./ms-education-item.component.css']
})
export class MsEducationItemComponent implements OnInit {

  @Input() info: EducationItem = new EducationItem();
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void { }

  get schoolWebsite(): String {
    return this.translationService.translate(this.language, TranslationTypeEnum.SCHOOL_WEBSITE, this.info.school);
  }
}

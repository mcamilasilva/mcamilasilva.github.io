import { Component, Input, OnInit } from '@angular/core';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { LanguageLevel } from 'src/app/models/language-level';

@Component({
  selector: 'ms-language-level',
  templateUrl: './ms-language-level.component.html',
  styleUrls: ['./ms-language-level.component.css']
})
export class MsLanguageLevelComponent implements OnInit {

  @Input() info: LanguageLevel = new LanguageLevel();
  @Input('system-language') systemLanguage: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  public progressClass: any;

  constructor() { }

  ngOnInit(): void {
    this.progressClass = { [`progress-${this.info.level}`]: true };
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { LanguageLevel } from 'src/app/models/language-level';

@Component({
  selector: 'ms-language-level',
  templateUrl: './ms-language-level.component.html',
  styleUrls: ['./ms-language-level.component.css']
})
export class MsLanguageLevelComponent implements OnInit {

  @Input() info: LanguageLevel = new LanguageLevel();

  public progressClass: any;
  public progressValueClass: any;

  constructor() { }

  ngOnInit(): void {

    if (this.info) {
      this.progressClass = { [`progress-${this.info.level}`]: true };
      this.progressValueClass = { [`progress-value-${this.info.level}`]: true };
    }
  }
}

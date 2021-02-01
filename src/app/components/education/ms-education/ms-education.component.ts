import { Component, Input, OnInit } from '@angular/core';
import { EducationItem } from 'src/app/models/education-item';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TitleEnum } from 'src/app/models/enums/title.enum';
import { SystemLanguageService } from 'src/app/service/system-language.service';

@Component({
  selector: 'ms-education',
  templateUrl: './ms-education.component.html',
  styleUrls: ['./ms-education.component.css']
})
export class MsEducationComponent implements OnInit {

  @Input() items: EducationItem[] = []
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  public title: TitleEnum = TitleEnum.EDUCATION;

  constructor() { }

  ngOnInit(): void {}

  /**
   * Indicates if should be an inverted card or not
   * 
   * @param index 
   */
  public isInvertedCard(index: number): boolean {
    return (index % 2) > 0;
  }

}

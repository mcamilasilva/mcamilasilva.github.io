import { Component, Input, OnInit } from '@angular/core';
import { AboutMeDetailItem } from 'src/app/models/about-me-detail-item';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';

@Component({
  selector: 'ms-about-me-detail-item',
  templateUrl: './ms-about-me-detail-item.component.html',
  styleUrls: ['./ms-about-me-detail-item.component.css']
})
export class MsAboutMeDetailItemComponent implements OnInit {

  @Input() info: AboutMeDetailItem = new AboutMeDetailItem();
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  constructor() { }

  ngOnInit(): void {
  }
}

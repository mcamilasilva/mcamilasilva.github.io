import { Component, Input, OnInit } from '@angular/core';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';

@Component({
  selector: 'ms-footer',
  templateUrl: './ms-footer.component.html',
  styleUrls: ['./ms-footer.component.css']
})
export class MsFooterComponent implements OnInit {

  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  public currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}

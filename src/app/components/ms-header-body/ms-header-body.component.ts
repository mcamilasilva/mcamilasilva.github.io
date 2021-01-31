import { Component, Input, OnInit } from '@angular/core';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { HeaderInfo } from 'src/app/models/header-info';

@Component({
  selector: 'ms-header-body',
  templateUrl: './ms-header-body.component.html',
  styleUrls: ['./ms-header-body.component.css']
})
export class MsHeaderBodyComponent implements OnInit {

  @Input() info: HeaderInfo = new HeaderInfo();
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  constructor() { }

  ngOnInit(): void { }

}

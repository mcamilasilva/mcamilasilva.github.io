import { Component, Input, OnInit } from '@angular/core';
import { ResumeInfoEnum } from 'src/app/models/enums/resume-info.enum';
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

  public resumeDownloadInfo: ResumeInfoEnum = ResumeInfoEnum.FILE_NAME_SUFFIX;
  public resumeURI: ResumeInfoEnum = ResumeInfoEnum.URI;

  constructor() { }

  ngOnInit(): void { }

}

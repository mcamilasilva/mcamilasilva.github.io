import { Component, Input, OnInit } from '@angular/core';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { SystemLanguageService } from 'src/app/service/system-language.service';
@Component({
  selector: 'ms-system-language-modal',
  templateUrl: './ms-system-language-modal.component.html',
  styleUrls: ['./ms-system-language-modal.component.css']
})
export class MsSystemLanguageModalComponent implements OnInit {

  @Input() id: string = '';
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  public options: any;

  constructor(private systemLanguageService: SystemLanguageService) {
    this.options = Object.keys(SystemLanguageEnum);
  }

  ngOnInit(): void { }

  public changeSystemLanguage(language: SystemLanguageEnum): void {
    this.systemLanguageService.language = language;
  }

}

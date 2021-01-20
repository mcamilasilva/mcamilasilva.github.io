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

  public options = Object.keys(SystemLanguageEnum).filter(k => typeof SystemLanguageEnum[k as any] !== "number");

  constructor(private systemLanguageService: SystemLanguageService) { }

  ngOnInit(): void {}

  public changeSystemLanguage(language: SystemLanguageEnum): void {
    this.systemLanguageService.language = language;
  }

}

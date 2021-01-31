import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { LinkedinInfoDictionary } from 'src/app/dictionaries/linkedin-info.dictionary';
import { LinkedinInfoEnum } from 'src/app/models/enums/linkedin-info.enum';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { SystemLanguageService } from 'src/app/service/system-language.service';

@Component({
  selector: 'ms-btn-linkedin',
  templateUrl: './ms-btn-linkedin.component.html',
  styleUrls: ['./ms-btn-linkedin.component.css']
})
export class MsBtnLinkedinComponent implements OnInit, OnDestroy {

  @Input() position: string = 'right'; // Default

  public uri!: string;
  public tooltip!: string;

  constructor(private systemLanguageService: SystemLanguageService) { 
    this.translateInfo(this.systemLanguageService.language);
  }

  ngOnInit(): void {
    this.systemLanguageService.languageObservable.subscribe((language) => {
      this.translateInfo(language);
    })
  }

  private translateInfo(language: SystemLanguageEnum): void {
    this.uri = LinkedinInfoDictionary[language][LinkedinInfoEnum.LINK];
    this.tooltip = LinkedinInfoDictionary[language][LinkedinInfoEnum.TOOLTIP];
  }

  ngOnDestroy(): void {
    this.systemLanguageService.languageObservable.unsubscribe();
  }

}

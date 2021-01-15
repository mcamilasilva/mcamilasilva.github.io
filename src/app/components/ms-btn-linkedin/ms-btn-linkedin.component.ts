import { Component, Input, OnInit } from '@angular/core';
import { LinkedinInfoDictionary } from 'src/app/dictionaries/linkedin-info.dictionary';
import { LinkedinInfoEnum } from 'src/app/models/enums/linkedin-info.enum';
import { SystemLanguageService } from 'src/app/service/system-language.service';

@Component({
  selector: 'ms-btn-linkedin',
  templateUrl: './ms-btn-linkedin.component.html',
  styleUrls: ['./ms-btn-linkedin.component.css']
})
export class MsBtnLinkedinComponent implements OnInit {

  @Input() position: string = 'right'; // Default

  public uri: string;
  public tooltip: string;

  constructor(private systemLanguageService: SystemLanguageService) { 
    this.uri = LinkedinInfoDictionary[this.systemLanguageService.language][LinkedinInfoEnum.LINK];
    this.tooltip = LinkedinInfoDictionary[this.systemLanguageService.language][LinkedinInfoEnum.TOOLTIP];
  }

  ngOnInit(): void {
  }

}

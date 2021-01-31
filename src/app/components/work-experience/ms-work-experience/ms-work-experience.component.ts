import { Component, Input, OnInit } from '@angular/core';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TitleEnum } from 'src/app/models/enums/title.enum';
import { WorkExperience } from 'src/app/models/work-experience';
import { SystemLanguageService } from 'src/app/service/system-language.service';

@Component({
  selector: 'ms-work-experience',
  templateUrl: './ms-work-experience.component.html',
  styleUrls: ['./ms-work-experience.component.css']
})
export class MsWorkExperienceComponent implements OnInit {

  @Input() experiences: WorkExperience[] = [];

  public title: TitleEnum = TitleEnum.WORK_EXPERIENCE;

  constructor(private systemLanguageService: SystemLanguageService) { }

  ngOnInit(): void {
  }

  /**
   * Indicates if should be an inverted card or not
   * 
   * @param index 
   */
  public isInvertedCard(index: number): boolean {
    return (index % 2) > 0;
  }
  
  get language(): SystemLanguageEnum {
    return this.systemLanguageService.language;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ActivityItem } from 'src/app/models/activity-item';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TranslationTypeEnum } from 'src/app/models/enums/translation-type.enum';
import { WorkExperience } from 'src/app/models/work-experience';
import { TranslationService } from 'src/app/service/translation.service';

@Component({
  selector: 'ms-work-experience-item',
  templateUrl: './ms-work-experience-item.component.html',
  styleUrls: ['./ms-work-experience-item.component.css']
})
export class MsWorkExperienceItemComponent implements OnInit {

  private readonly TECHNOLOGIES_THRESHOLD: number = 9;

  @Input() info: WorkExperience = new WorkExperience();
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  constructor(private translationService: TranslationService) { }

  ngOnInit(): void {}

  get technologies(): string {
    if (this.info && this.info.technologies && this.info.technologies.length > 0) {
      if (this.info.technologies.length > this.TECHNOLOGIES_THRESHOLD) {
        return this.info.technologies.slice(0, this.TECHNOLOGIES_THRESHOLD).join(', ');
      }
      return this.info.technologies.join(', ');
    }
    return '';
  }

  get showMoreTechnologiesIcon(): boolean {

    if (!this.info) {
      return false;
    }

    return this.info.technologies && this.info.technologies.length > this.TECHNOLOGIES_THRESHOLD;
  }

  get description(): string {
    return this.translationService.translate(this.language, TranslationTypeEnum.WORK_EXPERIENCE_DESCRIPTION, this.info.identifier);
  }

  get activities(): ActivityItem[] {
    return this.translationService.translate(this.language, TranslationTypeEnum.WORK_EXPERIENCE_ACTIVITY, this.info.identifier);
  }

}

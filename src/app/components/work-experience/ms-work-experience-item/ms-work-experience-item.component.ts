import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivityItem } from 'src/app/models/activity-item';
import { CompanyEnum } from 'src/app/models/enums/company.enum';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TranslationTypeEnum } from 'src/app/models/enums/translation-type.enum';
import { Period } from 'src/app/models/period';
import { WorkExperience } from 'src/app/models/work-experience';
import { SystemLanguageService } from 'src/app/service/system-language.service';
import { TranslationService } from 'src/app/service/translation.service';

@Component({
  selector: 'ms-work-experience-item',
  templateUrl: './ms-work-experience-item.component.html',
  styleUrls: ['./ms-work-experience-item.component.css']
})
export class MsWorkExperienceItemComponent implements OnInit, OnDestroy {

  private readonly TECHNOLOGIES_THRESHOLD: number = 9;

  private _info: WorkExperience | undefined;

  public positions!: string[];
  public company!: CompanyEnum;
  public description!: string;
  public activities!: ActivityItem[];
  public period!: Period;

  @Input()
  public set info(info: WorkExperience) {
    this._info = info;
    this.company = info.company;
    this.period = info.period;
    this.translateInfo(this.systemLanguageService.language);
  }

  constructor(private systemLanguageService: SystemLanguageService,
    private translationService: TranslationService) { }

  ngOnInit(): void {
    this.systemLanguageService.languageObservable.subscribe((language) => {
      this.translateInfo(language);
    });
  }

  private translateInfo(language: SystemLanguageEnum): void {
    if (this._info) {
      if (this._info.positions) {
        this.positions = this._info.positions.map(position => this.translationService.translate(language, TranslationTypeEnum.POSITION, position)) || [];
      }

      this.description = this.translationService.translate(language, TranslationTypeEnum.WORK_EXPERIENCE_DESCRIPTION, this._info.identifier);
      this.activities = this.translationService.translate(language, TranslationTypeEnum.WORK_EXPERIENCE_ACTIVITY, this._info.identifier);
    }
  }

  get technologies(): string {
    if (this._info && this._info.technologies && this._info.technologies.length > 0) {
      if (this._info.technologies.length > this.TECHNOLOGIES_THRESHOLD) {
        return this._info.technologies.slice(0, this.TECHNOLOGIES_THRESHOLD).join(', ');
      }
      return this._info.technologies.join(', ');
    }
    return '';
  }

  get showMoreTechnologiesIcon(): boolean {

    if (!this._info) {
      return false;
    }

    return this._info.technologies && this._info.technologies.length > this.TECHNOLOGIES_THRESHOLD;
  }

  ngOnDestroy(): void {
    this.systemLanguageService.languageObservable.unsubscribe();
  }

}

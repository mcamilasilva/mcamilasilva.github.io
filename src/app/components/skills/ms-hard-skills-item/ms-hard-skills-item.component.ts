import { Component, Input, OnInit } from '@angular/core';
import { SkillLevelEnum } from 'src/app/models/enums/skill-level.enum';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { HardSkill } from 'src/app/models/hard-skill';

@Component({
  selector: 'ms-hard-skills-item',
  templateUrl: './ms-hard-skills-item.component.html',
  styleUrls: ['./ms-hard-skills-item.component.css']
})
export class MsHardSkillsItemComponent implements OnInit {

  @Input() skill: HardSkill = new HardSkill();
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  public levelClasses: string[] = new Array<string>(SkillLevelEnum.MAX);

  constructor() { }

  ngOnInit(): void {
    this.populateLevelClasses();    
  }

  /**
   * Populate the classes to be used for the given level
   * 
   */
  private populateLevelClasses(): void {
    
    let FULL_STAR_CLASS = 'fa-star';
    let EMPTY_STAR_CLASS = 'fa-star-o';
    let HALF_STAR_CLASS = 'fa-star-half-o';

    for (let i = 1; i <= SkillLevelEnum.MAX; i++) {
      if (this.skill.level >= i) {
        this.levelClasses[i - 1] = FULL_STAR_CLASS;
      } else if (this.skill.level < i && this.skill.level > i - 1) {
        this.levelClasses[i - 1] = HALF_STAR_CLASS;
      } else {
        this.levelClasses[i - 1] = EMPTY_STAR_CLASS;
      }
    }
  }

}

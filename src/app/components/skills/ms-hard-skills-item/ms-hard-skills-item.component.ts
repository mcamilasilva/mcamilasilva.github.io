import { Component, Input, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/models/hard-skill';

@Component({
  selector: 'ms-hard-skills-item',
  templateUrl: './ms-hard-skills-item.component.html',
  styleUrls: ['./ms-hard-skills-item.component.css']
})
export class MsHardSkillsItemComponent implements OnInit {

  @Input() skill: HardSkill = new HardSkill();

  private MAX_LEVEL = 5;

  public levelClasses: string[] = new Array<string>(this.MAX_LEVEL);


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

    for (let i = 1; i <= this.MAX_LEVEL; i++) {
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

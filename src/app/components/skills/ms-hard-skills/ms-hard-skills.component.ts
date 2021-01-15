import { Component, Input, OnInit } from '@angular/core';
import { HardSkillEnum } from 'src/app/models/enums/hard-skill.enum';
import { SkillLevelEnum } from 'src/app/models/enums/skill-level.enum';
import { HardSkill } from 'src/app/models/hard-skill';

@Component({
  selector: 'ms-hard-skills',
  templateUrl: './ms-hard-skills.component.html',
  styleUrls: ['./ms-hard-skills.component.css']
})
export class MsHardSkillsComponent implements OnInit {

  @Input() skills: HardSkill[] = [];

  public skillGroups: HardSkill[][] = new Array<Array<HardSkill>>(2);

  constructor() { }

  ngOnInit(): void {
    if (this.skills.length > 0) {
      if (this.skills.length % 2 == 0) {
        this.splitIntoTwoGroups(this.skills.length / 2);
      } else {
        this.splitIntoTwoGroups(this.skills.length / 2 + 1);
      }
    }
  }

  /**
   * Split the skills into two groups due to the layout
   * 
   * @param dividerIdx 
   */
  private splitIntoTwoGroups(dividerIdx: number) {
    this.skillGroups[0] = this.skills.slice(0, dividerIdx);
    this.skillGroups[1] = this.skills.slice(dividerIdx);
  }

}

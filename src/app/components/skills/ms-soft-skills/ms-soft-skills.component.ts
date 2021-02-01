import { Component, Input, OnInit } from '@angular/core';
import { SoftSkillEnum } from 'src/app/models/enums/soft-skill.enum';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';

@Component({
  selector: 'ms-soft-skills',
  templateUrl: './ms-soft-skills.component.html',
  styleUrls: ['./ms-soft-skills.component.css']
})
export class MsSoftSkillsComponent implements OnInit {

  @Input() skills: SoftSkillEnum[] = [];
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  public skillPairs: SoftSkillEnum[][] = [];

  constructor() { }

  ngOnInit(): void {
    // Splits the skills into pairs for the responsive layout
    this.skillPairs = this.splitIntoPairs(this.skills)
  }

  /**
   * Splits a set of skills into pairs
   * 
   * @param skills 
   */
  private splitIntoPairs(skills: SoftSkillEnum[]): SoftSkillEnum[][] {

    let pairs: SoftSkillEnum[][] = [];
    let pairIdx = -1;
    
    for (let i = 0; i < skills.length; i++) {
      if (i % 2 == 0) {
        pairIdx++;
        pairs[pairIdx] = [];
      }
      pairs[pairIdx][i % 2] = skills[i];
    }

    return pairs;
  }
}

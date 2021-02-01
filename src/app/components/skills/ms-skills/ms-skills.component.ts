import { Component, Input, OnInit } from '@angular/core';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TitleEnum } from 'src/app/models/enums/title.enum';
import { Skills } from 'src/app/models/skills';

@Component({
  selector: 'ms-skills',
  templateUrl: './ms-skills.component.html',
  styleUrls: ['./ms-skills.component.css']
})
export class MsSkillsComponent implements OnInit {

  @Input() skills: Skills = new Skills();
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  public title: TitleEnum = TitleEnum.SKILLS;

  constructor() { }

  ngOnInit(): void {
  }

}

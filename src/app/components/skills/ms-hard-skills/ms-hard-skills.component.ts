import { Component, Input, OnInit } from '@angular/core';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { HardSkill } from 'src/app/models/hard-skill';

@Component({
  selector: 'ms-hard-skills',
  templateUrl: './ms-hard-skills.component.html',
  styleUrls: ['./ms-hard-skills.component.css']
})
export class MsHardSkillsComponent implements OnInit {

  @Input() skills: HardSkill[] = [];
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  public skillGroups: HardSkill[][] = new Array<Array<HardSkill>>(2);

  constructor() { }

  ngOnInit(): void { }
}

import { Component, Input, OnInit } from '@angular/core';
import { TitleEnum } from 'src/app/models/enums/title.enum';
import { Skills } from 'src/app/models/skills';

@Component({
  selector: 'ms-skills',
  templateUrl: './ms-skills.component.html',
  styleUrls: ['./ms-skills.component.css']
})
export class MsSkillsComponent implements OnInit {

  @Input() skills: Skills = new Skills();

  public title: TitleEnum = TitleEnum.SKILLS;

  constructor() { }

  ngOnInit(): void {
  }

}

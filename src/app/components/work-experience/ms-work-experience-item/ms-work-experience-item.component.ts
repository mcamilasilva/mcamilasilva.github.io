import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/work-experience';

@Component({
  selector: 'ms-work-experience-item',
  templateUrl: './ms-work-experience-item.component.html',
  styleUrls: ['./ms-work-experience-item.component.css']
})
export class MsWorkExperienceItemComponent implements OnInit {

  @Input() info: WorkExperience = new WorkExperience();

  constructor() { }

  ngOnInit(): void { 
   }

}

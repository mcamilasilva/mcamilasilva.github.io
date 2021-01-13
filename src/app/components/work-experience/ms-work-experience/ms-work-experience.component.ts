import { Component, Input, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/work-experience';

@Component({
  selector: 'ms-work-experience',
  templateUrl: './ms-work-experience.component.html',
  styleUrls: ['./ms-work-experience.component.css']
})
export class MsWorkExperienceComponent implements OnInit {

  @Input() experiences: WorkExperience[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Indicates if should be an inverted card or not
   * 
   * @param index 
   */
  public isInvertedCard(index: number): boolean {
    return (index % 2) > 0;
  }

}

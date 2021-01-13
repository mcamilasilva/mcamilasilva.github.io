import { Component, Input, OnInit } from '@angular/core';
import { EducationItem } from 'src/app/models/education-item';

@Component({
  selector: 'ms-education-item',
  templateUrl: './ms-education-item.component.html',
  styleUrls: ['./ms-education-item.component.css']
})
export class MsEducationItemComponent implements OnInit {

  @Input() info: EducationItem = new EducationItem();

  constructor() { }

  ngOnInit(): void {
  }

}

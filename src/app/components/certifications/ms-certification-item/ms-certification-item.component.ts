import { Component, Input, OnInit } from '@angular/core';
import { Certification } from 'src/app/models/certification';

@Component({
  selector: 'ms-certification-item',
  templateUrl: './ms-certification-item.component.html',
  styleUrls: ['./ms-certification-item.component.css']
})
export class MsCertificationItemComponent implements OnInit {

  @Input() info: Certification = new Certification();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Certification } from 'src/app/models/certification';
import { TitleEnum } from 'src/app/models/enums/title.enum';

@Component({
  selector: 'ms-certifications',
  templateUrl: './ms-certifications.component.html',
  styleUrls: ['./ms-certifications.component.css']
})
export class MsCertificationsComponent implements OnInit {

  @Input() items: Certification[] = [];

  public title: TitleEnum = TitleEnum.CERTIFICATIONS;

  constructor() { }

  ngOnInit(): void {
  }

}

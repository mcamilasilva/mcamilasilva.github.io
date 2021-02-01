import { Component, Input, OnInit } from '@angular/core';
import { Certification } from 'src/app/models/certification';
import { SystemLanguageService } from 'src/app/service/system-language.service';

@Component({
  selector: 'ms-certification-item',
  templateUrl: './ms-certification-item.component.html',
  styleUrls: ['./ms-certification-item.component.css']
})
export class MsCertificationItemComponent implements OnInit {

  @Input() info: Certification = new Certification();

  constructor(private systemLanguageService: SystemLanguageService) { }

  ngOnInit(): void {
  }

  get format(): string {
    return this.systemLanguageService.format;
  }

}

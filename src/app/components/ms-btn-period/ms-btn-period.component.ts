import { Component, Input, OnInit } from '@angular/core';
import { Period } from 'src/app/models/period';
import { SystemLanguageService } from 'src/app/service/system-language.service';

@Component({
  selector: 'ms-btn-period',
  templateUrl: './ms-btn-period.component.html',
  styleUrls: ['./ms-btn-period.component.css']
})
export class MsBtnPeriodComponent implements OnInit {

  @Input() period: Period = new Period();

  constructor(private SystemLanguageService: SystemLanguageService) { }

  ngOnInit(): void {
  }

  get format(): string {
    return this.SystemLanguageService.format;
  }

}

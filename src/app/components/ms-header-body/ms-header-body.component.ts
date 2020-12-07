import { Component, Input, OnInit } from '@angular/core';
import { HeaderInfo } from 'src/app/models/header-info';

@Component({
  selector: 'ms-header-body',
  templateUrl: './ms-header-body.component.html',
  styleUrls: ['./ms-header-body.component.css']
})
export class MsHeaderBodyComponent implements OnInit {

  @Input() info: HeaderInfo = new HeaderInfo();

  constructor() { }

  ngOnInit(): void {
  }

}

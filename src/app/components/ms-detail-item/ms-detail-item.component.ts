import { Component, Input, OnInit } from '@angular/core';
import { DetailItem } from 'src/app/models/detail-item';

@Component({
  selector: 'ms-detail-item',
  templateUrl: './ms-detail-item.component.html',
  styleUrls: ['./ms-detail-item.component.css']
})
export class MsDetailItemComponent implements OnInit {

  @Input() info: DetailItem = new DetailItem();

  constructor() { }

  ngOnInit(): void {
  }

}

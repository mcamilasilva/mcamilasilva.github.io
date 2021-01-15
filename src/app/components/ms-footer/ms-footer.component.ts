import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-footer',
  templateUrl: './ms-footer.component.html',
  styleUrls: ['./ms-footer.component.css']
})
export class MsFooterComponent implements OnInit {

  public currentYear = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}

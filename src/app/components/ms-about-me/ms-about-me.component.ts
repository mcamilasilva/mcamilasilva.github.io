import { Component, Input, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/models/about-me';

@Component({
  selector: 'ms-about-me',
  templateUrl: './ms-about-me.component.html',
  styleUrls: ['./ms-about-me.component.css']
})
export class MsAboutMeComponent implements OnInit {

  @Input() info: AboutMe = new AboutMe();

  constructor() { }

  ngOnInit(): void { }

}

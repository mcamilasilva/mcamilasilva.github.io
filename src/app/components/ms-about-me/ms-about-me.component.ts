import { Component, Input, OnInit } from '@angular/core';
import { AboutMe } from 'src/app/models/about-me';
import { TitleEnum } from 'src/app/models/enums/title.enum';

@Component({
  selector: 'ms-about-me',
  templateUrl: './ms-about-me.component.html',
  styleUrls: ['./ms-about-me.component.css']
})
export class MsAboutMeComponent implements OnInit {

  @Input() info: AboutMe = new AboutMe();

  public title: TitleEnum = TitleEnum.ABOUT_ME;
  public detailsSectionTitle: TitleEnum = TitleEnum.DETAILS;
  public languagesSectionTitle: TitleEnum = TitleEnum.LANGUAGES;

  constructor() { }

  ngOnInit(): void { }

}

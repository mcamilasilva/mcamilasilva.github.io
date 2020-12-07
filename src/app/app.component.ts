import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { AboutMe } from './models/about-me';
import { HeaderInfo } from './models/header-info';
import { LanguageLevel } from './models/language-level';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentYear = new Date().getFullYear();

  public menuItems: MenuItem[];
  public headerInfo: HeaderInfo;
  public aboutMeInfo: AboutMe;

  constructor() {
    this.menuItems = [
      new MenuItem('About', '#about'), 
      new MenuItem('Experience', '#experience'), 
      new MenuItem('Education', '#education'), 
      new MenuItem('Skills', '#mySkills'), 
      new MenuItem('Certifications', '#certifications')
    ];

    this.headerInfo = new HeaderInfo('Manoela Silva', 'Software Developer, Tech Lead', 
      'assets/images/me.jpeg', 'https://www.linkedin.com/in/mcbsilva/?locale=en_US', 
      'https://drive.google.com/uc?export=download&id=15Jvl7DESK0ieoPxH-vCqz-NcAHK-eU9J');

      let aboutMeParagraphs: string[] = [
        `I am a Senior Software Developer who is passionate about technology. Seeing an idea getting off the ground and becoming something that improves people's lives brings me real joy.`,
        `Although I have a proper knowledge of front-end techniques, my inclination is towards back-end. I am also really fond of good development techniques, such as clean code, design patterns, and so on, and I try to apply them as much as possible.`,
        `Additionally, I have a strong can-do, hands-on attitude, and I am a true believer of teamwork. I am from the opinion that "two heads are better than one" and knowledge can always be improved. I just love learning new things and acquiring new skills.`
      ];
      let languages: LanguageLevel[] = [new LanguageLevel('English', 90), new LanguageLevel('Portuguese', 100), new LanguageLevel('Italian', 60)];
      this.aboutMeInfo = new AboutMe(aboutMeParagraphs, 28, 'manoelacamila.silva@gmail.com', '+55 11 94989-8386', 'São Paulo - SP, Brazil', languages)
  }

  ngOnInit() {
    AOS.init({
      disable: 'mobile'
    }); // initialize animate on scroll library
  }
}

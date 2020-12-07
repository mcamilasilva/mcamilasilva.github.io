import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { HeaderInfo } from './models/header-info';
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
  }

  ngOnInit() {
    AOS.init({
      disable: 'mobile'
    }); // initialize animate on scroll library
  }
}

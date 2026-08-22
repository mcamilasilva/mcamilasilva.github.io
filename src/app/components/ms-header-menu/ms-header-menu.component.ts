import { Component, Input, OnInit } from '@angular/core';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'ms-header-menu',
  templateUrl: './ms-header-menu.component.html',
  styleUrls: ['./ms-header-menu.component.css']
})
export class MsHeaderMenuComponent implements OnInit {

  @Input() items: MenuItem[] = [];
  @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

  constructor() { }

  ngOnInit(): void {
  }

  /*
   * Scrolls the screen to the target element
   */
  public scrollTo(target: string) {
    if (!target) return;

    const elementId = target.startsWith('#') ? target.substring(1) : target;
    const element = document.getElementById(elementId);
  
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

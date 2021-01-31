import { Component, Input, OnInit } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
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

  constructor(private scrollToService: ScrollToService) { }

  ngOnInit(): void {
  }

  /*
   * Scrolls the screen to the target element
   */
  public scrollTo(target: string) {

    const config: ScrollToConfigOptions = {
      target: target
    };

    this.scrollToService.scrollTo(config);
  }
}

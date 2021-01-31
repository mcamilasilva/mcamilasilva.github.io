import { Component, Input, OnInit } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { MenuItem } from 'src/app/models/menu-item';
import { SystemLanguageService } from 'src/app/service/system-language.service';

@Component({
  selector: 'ms-header-menu',
  templateUrl: './ms-header-menu.component.html',
  styleUrls: ['./ms-header-menu.component.css']
})
export class MsHeaderMenuComponent implements OnInit {

  private _items: MenuItem[];

  @Input("items")
  set items(items: MenuItem[]) {
    this._items = items;
  }

  get items(): MenuItem[] {
    return this._items;
  }

  constructor(private scrollToService: ScrollToService,
    private systemLanguageService: SystemLanguageService) {
    this._items = [];
  }

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

  get language(): SystemLanguageEnum {
    return this.systemLanguageService.language;
  }





}

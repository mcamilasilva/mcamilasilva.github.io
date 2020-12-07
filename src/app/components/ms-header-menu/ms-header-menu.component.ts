import { Component, Input, OnInit } from '@angular/core';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { MenuItem } from 'src/app/models/menu-item';

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

  constructor(private scrollToService: ScrollToService) { 
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

  

  

}

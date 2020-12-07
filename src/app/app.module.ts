import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MsBackToTopButtonComponent } from './components/ms-back-to-top-button/ms-back-to-top-button.component';
import { MsHeaderMenuComponent } from './components/ms-header-menu/ms-header-menu.component';
import { MsHeaderBodyComponent } from './components/ms-header-body/ms-header-body.component';

@NgModule({
  declarations: [
    AppComponent,
    MsBackToTopButtonComponent,
    MsHeaderMenuComponent,
    MsHeaderBodyComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

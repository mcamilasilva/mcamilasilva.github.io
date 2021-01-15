import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MsBackToTopButtonComponent } from './components/ms-back-to-top-button/ms-back-to-top-button.component';
import { MsHeaderMenuComponent } from './components/ms-header-menu/ms-header-menu.component';
import { MsHeaderBodyComponent } from './components/ms-header-body/ms-header-body.component';
import { MsAboutMeComponent } from './components/ms-about-me/ms-about-me.component';
import { MsLanguageLevelComponent } from './components/ms-language-level/ms-language-level.component';
import { MsWorkExperienceComponent } from './components/work-experience/ms-work-experience/ms-work-experience.component';
import { MsWorkExperienceItemComponent } from './components/work-experience/ms-work-experience-item/ms-work-experience-item.component';
import { PeriodPipe } from './pipes/period.pipe';
import { MsEducationComponent } from './components/education/ms-education/ms-education.component';
import { MsEducationItemComponent } from './components/education/ms-education-item/ms-education-item.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { MsBtnPeriodComponent } from './components/ms-btn-period/ms-btn-period.component';
import { MsDetailItemComponent } from './components/ms-detail-item/ms-detail-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MsBackToTopButtonComponent,
    MsHeaderMenuComponent,
    MsHeaderBodyComponent,
    MsAboutMeComponent,
    MsLanguageLevelComponent,
    MsWorkExperienceComponent,
    MsWorkExperienceItemComponent,
    MsEducationComponent,
    MsEducationItemComponent,
    PeriodPipe,
    TranslatePipe,
    MsBtnPeriodComponent,
    MsDetailItemComponent
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
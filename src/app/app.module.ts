import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { MsBackToTopButtonComponent } from './components/ms-back-to-top-button/ms-back-to-top-button.component';
import { MsHeaderMenuComponent } from './components/ms-header-menu/ms-header-menu.component';
import { MsHeaderBodyComponent } from './components/ms-header-body/ms-header-body.component';
import { MsAboutMeComponent } from './components/about-me/ms-about-me/ms-about-me.component';
import { MsLanguageLevelComponent } from './components/ms-language-level/ms-language-level.component';
import { MsWorkExperienceComponent } from './components/work-experience/ms-work-experience/ms-work-experience.component';
import { MsWorkExperienceItemComponent } from './components/work-experience/ms-work-experience-item/ms-work-experience-item.component';
import { PeriodPipe } from './pipes/period.pipe';
import { MsEducationComponent } from './components/education/ms-education/ms-education.component';
import { MsEducationItemComponent } from './components/education/ms-education-item/ms-education-item.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { MsBtnPeriodComponent } from './components/ms-btn-period/ms-btn-period.component';
import { MsAboutMeDetailItemComponent } from './components/about-me/ms-about-me-detail-item/ms-about-me-detail-item.component';
import { MsCertificationsComponent } from './components/certifications/ms-certifications/ms-certifications.component';
import { MsCertificationItemComponent } from './components/certifications/ms-certification-item/ms-certification-item.component';
import { DatePipe } from './pipes/date.pipe';
import { MsSkillsComponent } from './components/skills/ms-skills/ms-skills.component';
import { MsSoftSkillsComponent } from './components/skills/ms-soft-skills/ms-soft-skills.component';
import { MsHardSkillsComponent } from './components/skills/ms-hard-skills/ms-hard-skills.component';
import { MsHardSkillsItemComponent } from './components/skills/ms-hard-skills-item/ms-hard-skills-item.component';
import { MsFooterComponent } from './components/ms-footer/ms-footer.component';
import { MsBtnLinkedinComponent } from './components/ms-btn-linkedin/ms-btn-linkedin.component';
import { MsSystemLanguageModalComponent } from './components/ms-system-language-modal/ms-system-language-modal.component';
import { PositionsPipe } from './pipes/positions.pipe';
import { MajorsPipe } from './pipes/majors.pipe';

@NgModule({
  declarations: [
    // Components
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
    MsBtnPeriodComponent,
    MsAboutMeDetailItemComponent,
    MsCertificationsComponent,
    MsCertificationItemComponent,
    MsSkillsComponent,
    MsSoftSkillsComponent,
    MsHardSkillsComponent,
    MsHardSkillsItemComponent,
    MsFooterComponent,
    MsBtnLinkedinComponent,
    MsSystemLanguageModalComponent,

    // Pipes
    PeriodPipe,
    TranslatePipe,
    DatePipe,
    PositionsPipe,
    MajorsPipe
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

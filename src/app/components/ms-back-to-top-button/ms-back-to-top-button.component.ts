import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { FixedLabelsAndTooltipsEnum } from 'src/app/models/enums/fixed-labels-and-tooltips.enum';
import { SystemLanguageEnum } from 'src/app/models/enums/system-language.enum';
import { TranslationTypeEnum } from 'src/app/models/enums/translation-type.enum';
import { TranslationService } from 'src/app/service/translation.service';

@Component({
    selector: 'ms-back-to-top-button',
    templateUrl: './ms-back-to-top-button.component.html',
    styleUrls: ['./ms-back-to-top-button.component.css']
})
export class MsBackToTopButtonComponent implements OnInit {

    @Input() language: SystemLanguageEnum = SystemLanguageEnum.EN_US;

    public showButton: boolean = false;

    constructor(@Inject(DOCUMENT) private document: Document,
        private translationService: TranslationService) { }

    ngOnInit(): void {
    }

    get tooltip(): string {
        return this.translationService.translate(this.language, TranslationTypeEnum.FIXED_LABELS_AND_TOOLTIPS, FixedLabelsAndTooltipsEnum.BACK_TO_TOP_BTN_TOOLTIP)
    }

    @HostListener("window:scroll", [])
    public onWindowScroll() {
        if (window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100) {
            this.showButton = true;
        }
        else if (this.showButton && window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10) {
            this.showButton = false;
        }
    }
    
    public scrollToTop(durationMs: number = 200): void {
        const startPosition = window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop;
        if (startPosition === 0) return;
      
        const startTime = performance.now();
      
        const animateScroll = (currentTime: number) => {
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / durationMs, 1);
          
          // Fast ease-out curve
          const easeOut = 1 - (1 - progress) * (1 - progress); 
          const nextPosition = startPosition * (1 - easeOut);
      
          window.scrollTo(0, nextPosition);
      
          if (timeElapsed < durationMs) {
            window.requestAnimationFrame(animateScroll);
          }
        };
      
        window.requestAnimationFrame(animateScroll);
      }

}

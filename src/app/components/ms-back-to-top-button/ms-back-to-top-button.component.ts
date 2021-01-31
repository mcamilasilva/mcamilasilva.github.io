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

    /**
     * Credits about the logic to https://www.techtrek.io/Adding-a-Scroll-to-Top-button-in-Angular
     */
    @HostListener("window:scroll", [])
    public onWindowScroll() {
        if (window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100) {
            this.showButton = true;
        }
        else if (this.showButton && window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10) {
            this.showButton = false;
        }
    }
    public scrollToTop() {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }

}

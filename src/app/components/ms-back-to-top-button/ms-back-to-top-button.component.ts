import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'ms-back-to-top-button',
  templateUrl: './ms-back-to-top-button.component.html',
  styleUrls: ['./ms-back-to-top-button.component.css']
})
export class MsBackToTopButtonComponent implements OnInit {

  public showButton: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
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

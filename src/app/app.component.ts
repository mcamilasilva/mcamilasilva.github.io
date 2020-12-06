import { Component, OnInit  } from '@angular/core';

import * as AOS from 'aos';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentYear = new Date().getFullYear();

  ngOnInit() {
    AOS.init({
      disable: 'mobile'
    }); // initialize animate on scroll library


    /*$(".has-tooltip").tooltip();
  
    $('#back-to-top').fadeOut();
  
    // back to top button
    $(window).scroll(function () {
      // oonly appears when the scroll is > 100px
      if ($(this).scrollTop() > 100) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });*/
  }
}

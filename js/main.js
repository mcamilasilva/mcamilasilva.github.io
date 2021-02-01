$(document).ready(function () {

  AOS.init({
    disable: 'mobile'
  }); // initialize animate on scroll library


  $(".has-tooltip").tooltip();

  // cross-browser soluction for smooth scroll >> https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
  $("a.scroll-behavior-smooth").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
      });
    } // End if
  });

  $('#back-to-top').fadeOut();

  // back to top button
  $(window).scroll(function () {
    // oonly appears when the scroll is > 100px
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });

  $('#back-to-top').click(function () {
    $('#body,html').animate({
      scrollTop: 0
    }, 700);
    return false;
  });
});

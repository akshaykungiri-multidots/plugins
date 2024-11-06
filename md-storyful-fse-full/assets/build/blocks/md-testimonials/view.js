/******/ (() => { // webpackBootstrap
/*!********************************************!*\
  !*** ./src/blocks/md-testimonials/view.js ***!
  \********************************************/
/**
 * File Sample-dynamic.js
 *
 */
(function ($) {
  "use strict";

  $(document).ready(function () {
    // Slick slider for client-testimonials
    setTimeout(function () {
      $(".client-testimonials").slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
      });
    }, 1000);
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
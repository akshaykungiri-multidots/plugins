/******/ (() => { // webpackBootstrap
/*!********************************************!*\
  !*** ./src/blocks/md-video-slider/view.js ***!
  \********************************************/
/**
 * File Sample-dynamic.js
 * 
 */
(function ($) {
  "use strict";

  $(document).ready(function () {
    // Slick slider for storyful-video-slider
    setTimeout(function () {
      if ($('.video-wrapper').length > 0) {
        $('.video-wrapper').each(function () {
          var slide_to_show = $(this).data('slider-to-show');
          var slider_to_scroll = $(this).data('slider-to-scroll');
          var autoplay = $(this).data('slider-autoplay');
          var infinite = $(this).data('slider-infinite');
          var slider_dots = $(this).data('slider-dots');
          var slider_arrows = $(this).data('slider-arrows');
          $(this).slick({
            dots: slider_dots ? true : false,
            arrows: slider_arrows ? true : false,
            infinite: infinite,
            speed: 300,
            slidesToShow: slide_to_show,
            slidesToScroll: slider_to_scroll,
            autoplay: autoplay,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            centerMode: true,
            responsive: [{
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            }, {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }, {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }]
          });
        });
      }
    }, 1000);
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
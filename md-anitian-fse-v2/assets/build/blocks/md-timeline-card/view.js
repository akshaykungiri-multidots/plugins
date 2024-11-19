/******/ (() => { // webpackBootstrap
/*!*********************************************!*\
  !*** ./src/blocks/md-timeline-card/view.js ***!
  \*********************************************/
/**
 * File Sample-dynamic.js
 *
 */
(function ($) {
  "use strict";

  jQuery(".mdTimelineSlide").slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  });
  jQuery(document).on("click", ".mdSlidePrev", function () {
    jQuery(this).parents(".mdTimelineSlide").slick("slickPrev");
  });
  jQuery(document).on("click", ".mdSlideNext", function () {
    jQuery(this).parents(".mdTimelineSlide").slick("slickNext");
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
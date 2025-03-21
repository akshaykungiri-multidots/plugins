/******/ (() => { // webpackBootstrap
/*!****************************************************!*\
  !*** ./src/blocks/md-image-banner-process/view.js ***!
  \****************************************************/
/**
 * File Sample-dynamic.js
 *
 */
(function () {
  "use strict";

  jQuery(document).ready(function ($) {
    $(".md_crafto_text_video__youtube_icon .play-button").on("click", function () {
      $(".crafto_video_popup__wrap").addClass("show-popup");
    });
    $(".crafto_video_popup__inner-header .close-popup").on("click", function () {
      $(".crafto_video_popup__wrap").removeClass("show-popup");
    });
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
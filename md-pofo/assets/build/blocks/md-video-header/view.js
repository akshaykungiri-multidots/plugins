/******/ (() => { // webpackBootstrap
/*!********************************************!*\
  !*** ./src/blocks/md-video-header/view.js ***!
  \********************************************/
/**
 * File Sample-dynamic.js
 *
 */
(function () {
  "use strict";

  jQuery(document).ready(function ($) {
    $(".md_pofo_text_video__youtube_icon .play-button").on("click", function () {
      $(".pofo_video_popup__wrap").addClass("show-popup");
    });
    $(".pofo_video_popup__inner-header .close-popup").on("click", function () {
      $(".pofo_video_popup__wrap").removeClass("show-popup");
    });
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
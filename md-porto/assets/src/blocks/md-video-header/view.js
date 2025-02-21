/**
 * File Sample-dynamic.js
 *
 */
(function () {
  "use strict";

  jQuery(document).ready(function ($) {
    $(".md_porto_text_video__youtube_icon .play-button").on("click", function () {
      $(".porto_video_popup__wrap").addClass("show-popup");
    });
    $(".porto_video_popup__inner-header .close-popup").on("click", function () {
      $(".porto_video_popup__wrap").removeClass("show-popup");
    });
  });
})(jQuery);

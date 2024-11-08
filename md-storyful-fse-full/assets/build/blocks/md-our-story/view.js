/******/ (() => { // webpackBootstrap
/*!*****************************************!*\
  !*** ./src/blocks/md-our-story/view.js ***!
  \*****************************************/
/**
 * File Sample-dynamic.js
 *
 * @param $
 */
(function ($) {
  'use strict';

  $(document).on('click', '.media-video__playbtn', function (e) {
    e.preventDefault();
    const $this = $(this);
    const $target = $this.parents('.our-story-section').find('.video-popup').addClass('show-popup');
  });
  $(document).on('click', '.video-popup .close-btn', function (e) {
    e.preventDefault();
    $('.video-popup').removeClass('show-popup');
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
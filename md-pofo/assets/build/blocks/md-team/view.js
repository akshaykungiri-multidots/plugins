/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./src/blocks/md-team/view.js ***!
  \************************************/
/**
 * File company-tabs.js.
 *
 * Please add the file description here.
 * @param {jQuery} $
 */
(function ($) {
  'use strict';

  $('.team .team__author__box .team__author__box-item-inner').on('click', function () {
    $(this).siblings('.team__popup-model').addClass('open-popup slideInDown');
    $('html').css('overflowY', 'hidden');
  }).on('click', '.linked-in-icon', function (e) {
    e.stopPropagation();
  });
  $('.team__popup-model .close,.bg_overlay').on('click', function () {
    $('.team__popup-model').removeClass('open-popup slideInDown');
    $('html').css('overflowY', 'auto');
  });
  $(document).keyup(function (e) {
    if (27 === e.keyCode && $('.team__popup-model').hasClass('open-popup')) {
      $('.team__popup-model').removeClass('open-popup slideInDown');
    }
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
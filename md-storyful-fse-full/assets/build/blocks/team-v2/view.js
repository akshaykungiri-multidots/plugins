/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./src/blocks/team-v2/view.js ***!
  \************************************/
/**
 * File company-tabs.js.
 *
 * Please add the file description here.
 * @param {jQuery} $
 */
(function ($) {
  'use strict';

  $('.leadership .leadership__author__box .leadership__author__box-item-inner').on('click', function () {
    $(this).siblings('.leadership__popup-model').addClass('open-popup slideInDown');
    $('html').css('overflowY', 'hidden');
  }).on('click', '.linked-in-icon', function (e) {
    e.stopPropagation();
  });
  $('.leadership__popup-model .close,.bg_overlay').on('click', function () {
    $('.leadership__popup-model').removeClass('open-popup slideInDown');
    $('html').css('overflowY', 'auto');
  });
  $(document).keyup(function (e) {
    if (27 === e.keyCode && $('.leadership__popup-model').hasClass('open-popup')) {
      $('.leadership__popup-model').removeClass('open-popup slideInDown');
    }
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
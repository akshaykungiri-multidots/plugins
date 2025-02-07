/******/ (() => { // webpackBootstrap
/*!***************************************************!*\
  !*** ./src/blocks/md-client-testimonials/view.js ***!
  \***************************************************/
/**
 * File company-tabs.js.
 *
 * Please add the file description here.
 * @param {jQuery} $
 */
(function ($) {
  'use strict';

  $('.testimonials .testimonials__author__box .testimonials__author__box-item-inner').on('click', function () {
    $(this).siblings('.testimonials__popup-model').addClass('open-popup slideInDown');
    $('html').css('overflowY', 'hidden');
  }).on('click', '.linked-in-icon', function (e) {
    e.stopPropagation();
  });
  $('.testimonials__popup-model .close,.bg_overlay').on('click', function () {
    $('.testimonials__popup-model').removeClass('open-popup slideInDown');
    $('html').css('overflowY', 'auto');
  });
  $(document).keyup(function (e) {
    if (27 === e.keyCode && $('.testimonials__popup-model').hasClass('open-popup')) {
      $('.testimonials__popup-model').removeClass('open-popup slideInDown');
    }
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
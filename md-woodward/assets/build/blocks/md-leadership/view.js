/******/ (() => { // webpackBootstrap
/*!******************************************!*\
  !*** ./src/blocks/md-leadership/view.js ***!
  \******************************************/
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
  $(document).on('click', '.leadership__author__box-item-inner-button-btn', function () {
    const targetId = $(this).parents('.leadership__author__box-item').attr('data-id');
    $('.leader_role_popup').find('.leader_role_popup__wrap').removeClass('show-popup');
    $('.leader_role_popup').find(`.leader_role_popup__wrap[data-target="${targetId}"]`).addClass('show-popup');
  });
  $(document).on('click', '.leader_role_popup__wrap .close-popup', function () {
    $(this).parents('.leader_role_popup__wrap').removeClass('show-popup');
    $('html').css('overflowY', 'auto');
  });
  $(document).on('click', '.leadership__roles .leadership__roles__box-item', function () {
    $('.leadership__roles .leadership__roles__box-item').removeClass('active');
    $(this).addClass('active');
    const role = $(this).attr('data-role');
    $('.leadership__author__box .leadership__author__box-item').hide();
    $('.leadership__author__box .leadership__author__box-item[data-role="' + role + '"]').show();
  });
  $(document).ready(function () {
    $('.leadership__author__box .leadership__author__box-item').hide();
    $('.leadership__author__box .leadership__author__box-item[data-role="0"]').show();
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
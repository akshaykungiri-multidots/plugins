/******/ (() => { // webpackBootstrap
/*!********************************************!*\
  !*** ./src/blocks/md-case-studies/view.js ***!
  \********************************************/
/**
 * File Sample-dynamic.js
 * 
 */
(function ($) {
  "use strict";

  $(document).on('click', '.case-studies__list .case-studies__item', function (e) {
    e.preventDefault();
    var post_id = $(this).data('post-id');
    $('.case-studies__feature-post .item').removeClass('active');
    $('.case-studies__feature-post .item[data-post-id="' + post_id + '"]').addClass('active');
    $('.case-studies__list .case-studies__item').removeClass('active');
    $(this).addClass('active');
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
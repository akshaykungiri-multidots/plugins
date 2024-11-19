/******/ (() => { // webpackBootstrap
/*!****************************************!*\
  !*** ./src/blocks/md-timeline/view.js ***!
  \****************************************/
/**
 * File Sample-dynamic.js
 * 
 */
(function ($) {
  "use strict";

  $(document).on("click", ".md_anitian_leadership__tabs li a", function (e) {
    e.preventDefault();
    var tab_id = $(this).attr('href');
    $('.md_anitian_leadership__tabs .tab-content .tab-pane').removeClass('show').removeClass('active');
    $('.md_anitian_leadership__tabs li').removeClass('active');
    $(this).parent().addClass('active');
    $("#myTabContent").find(tab_id).addClass('show').addClass('active');
  });
  $(document).on("click", ".leadership__member-description .read-more", function () {
    $(this).parent().find('.hidden-description').show();
    $(this).parent().parent().parent().find('.read-less').show();
    $(this).parent().find('.ellipsis').hide();
    $(this).hide();
  });
  $(document).on("click", ".leadership__member-description .read-less", function () {
    $(this).parent().find('.hidden-description').hide();
    $(this).parent().find('.read-more').show();
    $(this).parent().find('.ellipsis').show();
    $(this).hide();
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
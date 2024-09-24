/******/ (() => { // webpackBootstrap
/*!*************************************!*\
  !*** ./src/blocks/md-posts/view.js ***!
  \*************************************/
/**
 * File Sample-dynamic.js
 * 
 */
(function ($) {
  "use strict";

  $(document).ready(function () {});
  function get_resource_data() {
    var resource_type = $('.storyful-resources .browse-tab-filters__item.active').data('value');
    var resources_atts = $('.resources-attributes').val();
    var resources_cat = $('.storyful-resources .custom-select-filter-wrapper .resource_cat_listing .custom-select-filter__item.active').data('value');
    var filter_by_date = $('.storyful-resources .custom-select-filter-wrapper .select-date-filter .custom-select-filter__item.active').data('value');
    var post_type = $('.storyful-resources .storyful_post_type').val();
    var search_val = "";
    if ($('.storyful-resources #browse-search').length > 0) {
      search_val = $('.storyful-resources #browse-search').val();
    }
    // Get page number from href
    var page_number_url = $('.pagination .page-numbers.current').attr('href');
    var page_number = 1;
    if (page_number_url !== undefined) {
      var page_number = page_number_url.split('/page/');
      page_number = page_number[1];
    }
    // If page number is undefined then set it to 1
    page_number = page_number ? page_number : 1;
    $.ajax({
      url: siteConfig.ajaxUrl,
      type: 'POST',
      data: {
        action: 'storyful_get_resources',
        resource_type: resource_type,
        nonce: siteConfig.storyful_nonce,
        resources_atts: resources_atts,
        resources_cat: resources_cat,
        filter_by_date: filter_by_date,
        page_number: page_number,
        post_type: post_type,
        search_val: search_val
      },
      beforeSend: function () {
        $('body').addClass('popup-loader');
      },
      success: function (response) {
        $('.storyful-resources__container').html(response);
      },
      complete: function () {
        $('body').removeClass('popup-loader');
      }
    });
  }
  $(document).on('click', '.storyful-resources .browse-tab-filters__item', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $target = $($this.data('target'));
    $this.addClass('active').siblings().removeClass('active');
    $target.addClass('active').siblings().removeClass('active');
    $('.storyful-resources .custom-select-filter-wrapper .custom-select-filter__item').removeClass('active');
    get_resource_data();
  });
  $(document).on('click', '.storyful-resources .custom-select-filter-wrapper', function (e) {
    $(this).toggleClass('active-select');
  });
  $(document).on('click', '.storyful-resources .custom-select-filter-wrapper .custom-select-filter__item', function (e) {
    $(this).parent().find('.custom-select-filter__item').removeClass('active');
    $(this).addClass('active');
    get_resource_data();
  });

  // On click of pagination
  $(document).on('click', '.pagination a.page-numbers', function (e) {
    e.preventDefault();
    $(this).addClass('current').siblings().removeClass('current');
    get_resource_data();
  });
  $(document).on('keypress', '.storyful-resources #browse-search', function (e) {
    e.preventDefault();
    if (e.which === 13) {
      get_resource_data();
    }
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
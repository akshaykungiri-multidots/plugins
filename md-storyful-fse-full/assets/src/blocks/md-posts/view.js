/**
 * File Sample-dynamic.js
 *
 * @param $
 */
(function ($) {
  "use strict";

  $(document).ready(function () {});

  function getResourceData() {
    const resourceType = $(
      ".storyful-resources .browse-tab-filters__item.active"
    ).data("value");
    const resourcesAtts = $(".resources-attributes").val();
    const resourcesCat = $(
      ".storyful-resources .custom-select-filter-wrapper .resource_cat_listing .custom-select-filter__item.active"
    ).data("value");
    const filterByDate = $(
      ".storyful-resources .custom-select-filter-wrapper .select-date-filter .custom-select-filter__item.active"
    ).data("value");
    const postType = $(".storyful-resources .storyful_post_type").val();
    let searchVal = "";
    if ($(".storyful-resources #browse-search").length > 0) {
      searchVal = $(".storyful-resources #browse-search").val();
    }
    // Get page number from href
    const pageNumberUrl = $(".pagination .page-numbers.current").attr("href");
    let pageNumber = 1;
    if (pageNumberUrl !== undefined) {
      const pageNumberArray = pageNumberUrl.split("/page/");
      pageNumber = pageNumberArray[1];
    }
    // If page number is undefined then set it to 1
    pageNumber = pageNumber ? pageNumber : 1;
    $.ajax({
      url: siteConfig.ajaxUrl,
      type: "POST",
      data: {
        action: "storyful_get_resources",
        resourceType,
        nonce: siteConfig.storyful_nonce,
        resourcesAtts,
        resourcesCat,
        filterByDate,
        pageNumber,
        postType,
        searchVal,
      },
      beforeSend() {
        $("body").addClass("popup-loader");
      },
      success(response) {
        $(".storyful-resources__container").html(response);
      },
      complete() {
        $("body").removeClass("popup-loader");
      },
    });
  }

  $(document).on(
    "click",
    ".storyful-resources .browse-tab-filters__item",
    function (e) {
      e.preventDefault();
      const $this = $(this);
      const $target = $($this.data("target"));

      $this.addClass("active").siblings().removeClass("active");
      $target.addClass("active").siblings().removeClass("active");

      $(
        ".storyful-resources .custom-select-filter-wrapper .custom-select-filter__item"
      ).removeClass("active");

      getResourceData();
    }
  );

  $(document).on(
    "click",
    ".storyful-resources .custom-select-filter-wrapper",
    function (e) {
      $(this).toggleClass("active-select");
    }
  );

  $(document).on(
    "click",
    ".storyful-resources .custom-select-filter-wrapper .custom-select-filter__item",
    function (e) {
      $(this)
        .parent()
        .find(".custom-select-filter__item")
        .removeClass("active");
      $(this).addClass("active");
      get_resource_data();
    }
  );

  // On click of pagination
  $(document).on("click", ".pagination a.page-numbers", function (e) {
    e.preventDefault();
    $(this).addClass("current").siblings().removeClass("current");
    get_resource_data();
  });

  $(document).on(
    "keypress",
    ".storyful-resources #browse-search",
    function (e) {
      e.preventDefault();
      if (e.which === 13) {
        get_resource_data();
      }
    }
  );
})(jQuery);

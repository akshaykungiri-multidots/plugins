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

  $(document).ready(function () {
    function mdLoadPosts(currentPage = 1) {
      const postAttributes = $(".md-posts").find('input[name="md-posts__loadmore-attributes"]').val();
      const taxonomiesArr = [];
      $(".insights-filter-dropbox .category-filter-wrapper select").each(function () {
        const taxonomyVal = $(this).attr("name");
        const termVal = $(this).val();
        taxonomiesArr.push({
          taxonomy: taxonomyVal,
          term: termVal
        });
      });
      const searchVal = $(".products-list__search-container input").val();
      const data = {
        action: "md_pofo_load_more",
        post_attributes: postAttributes,
        current_page: currentPage,
        taxonomies: taxonomiesArr,
        search: searchVal,
        ajax_nonce: siteConfig.ajax_nonce
      };
      $.post(siteConfig.ajaxUrl, data, function (response) {
        const jsondata = response.data;
        const htmldata = jsondata.data;
        $(".md-posts__grid").html(htmldata);
      });
    }
    $(document).on("click", "ul.page-numbers li a.page-numbers:not(.current)", function (e) {
      e.preventDefault();
      // extract page number from href ?paged=2
      const page = $(this).attr("href").split("paged=")[1];
      mdLoadPosts(page);
    });
    $(document).on("change", ".insights-filter-dropbox select", function () {
      mdLoadPosts();
    });
    $(document).on("keypress", ".products-list__search-container input", function (e) {
      if (e.which === 13) {
        mdLoadPosts();
      }
    });
    $(document).on("click", ".products-list__search-container button", function () {
      mdLoadPosts();
    });
    $(document).on("click", ".products-list__reset-button", function () {
      $(".insights-filter-dropbox .category-filter-wrapper select").val("");
      $(".products-list__search-container input").val("");
      mdLoadPosts();
    });
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
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
    function mdLoadPosts() {
      const postAttributes = $(".md-posts").find('input[name="md-posts__loadmore-post_attributes"]').val();
      const taxonomiesVal = [];
      $(".md-posts__filter .md-posts__filter-select").each(function () {
        const termVal = $(this).val();
        if (termVal === "") {
          return;
        }
        const taxonomyVal = $(this).attr("name");
        taxonomiesVal.push({
          taxonomy: taxonomyVal,
          term: termVal
        });
      });
      const currentPage = $(".md-posts").find('input[name="md-posts__loadmore-current_page"]').val();
      const data = {
        action: "md_efi_fse_full_load_more",
        post_attributes: postAttributes,
        current_page: currentPage,
        taxonomies: taxonomiesVal,
        ajax_nonce: siteConfig.ajax_nonce
      };
      $.post(siteConfig.ajaxUrl, data, function (response) {
        const jsondata = response.data;
        const htmldata = jsondata.data;
        const loadmore = jsondata.more;
        const currentPageVal = jsondata.current_page;
        if (!loadmore) {
          $(".md-posts__loadmore-button").hide();
        } else {
          $(".md-posts__loadmore-button").show();
        }
        $(".md-posts").find('input[name="md-posts__loadmore-current_page"]').val(currentPageVal);
        $(".md-posts__grid").append(htmldata);
      });
    }

    // Post load more event
    $(document).on("click", ".md-posts__loadmore-button", function (e) {
      e.preventDefault();
      $(this).text("Loading...");
      mdLoadPosts();
      $(".md-posts__loadmore-button").text("Load More");
    });
    $(document).on("change", ".md-posts__filter .md-posts__filter-select", function () {
      $(".md-posts__grid").html("");
      $(".md-posts").find('input[name="md-posts__loadmore-current_page"]').val(0);
      mdLoadPosts();
    });
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=view.js.map
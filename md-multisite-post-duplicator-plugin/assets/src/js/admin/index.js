/**
 * File admin.js.
 *
 * Handles admin scripts
 */
(function ($) {
  "use strict";

  var md_multisite_post_duplicator_ajax_url = siteConfig.ajaxUrl;
  jQuery(document).ready(function ($) {
    $("#mdmp_blog_id").change(function () {
      let mdmp_blog_id = $(this).val();
      $.ajax({
        url: md_multisite_post_duplicator_ajax_url,
        data: {
          action: "md_multisite_post_duplicator_get_categories_and_tags",
          blog_id: mdmp_blog_id,
        },
        method: "POST",
        success: function (response) {
          console.log(response);
          let categories = response.categories;
          let tags = response.tags;
          $("#md_multisite_post_duplicator_is_categories").val("0");
          $("#md_multisite_post_duplicator_is_tags").val("0");
          let categories_html = "";
          let tags_html = "";
          if (categories.length > 0) {
            $("#md_multisite_post_duplicator_is_categories").val("1");
            $.each(categories, function (index, value) {
              categories_html +=
                "<option value='" +
                value.term_id +
                "' >" +
                value.name +
                "</option>";
            });
          }
          if (tags.length > 0) {
            $("#md_multisite_post_duplicator_is_tags").val("1");
            $.each(tags, function (index, value) {
              tags_html +=
                "<option value='" +
                value.term_id +
                "' >" +
                value.name +
                "</option>";
            });
          }
          $("#mdmp_blog_categories").html(categories_html);
          $("#mdmp_blog_tags").html(tags_html);
        },
      });
    });

    $(".md-select2").select2({
      width: "100%",
    });
  });
})(jQuery);

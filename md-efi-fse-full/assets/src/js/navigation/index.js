/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function ($) {
  "use strict";

  $(".menu-toggle").click(function () {
    $("header .main-navigation").toggleClass("toggled");
  });

  // responsive menu css
  $(".main-navigation ul.menu>li.menu-item-has-children").on(
    "click",
    function () {
      const windowWidth = $(window).width();
      if (767 > windowWidth) {
        $(this).find(".sub-menu,.children").slideToggle();
        $(this).toggleClass("active-sub");
      }
    }
  );

  // Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 67) {
      $(".md-efi-fse-full-header").addClass("fixed-header");
    } else {
      $(".md-efi-fse-full-header").removeClass("fixed-header");
    }
  });

  function md_load_posts() {
    let post_attributes = $(".md-posts")
      .find('input[name="md-posts__loadmore-post_attributes"]')
      .val();
    let taxonomies = [];
    $(".md-posts__filter .md-posts__filter-select").each(function () {
      let taxonomy = $(this).attr("name");
      console.log(taxonomy);
      let term = $(this).val();
      if (term == "") {
        return;
      }
      taxonomies.push({ taxonomy: taxonomy, term: term });
    });
    let current_page = $(".md-posts")
      .find('input[name="md-posts__loadmore-current_page"]')
      .val();

    var data = {
      action: "md_efi_fse_full_load_more",
      post_attributes: post_attributes,
      current_page: current_page,
      taxonomies: taxonomies,
      ajax_nonce: siteConfig.ajax_nonce,
    };
    $.post(siteConfig.ajaxUrl, data, function (response) {
      let jsondata = response.data;
      let htmldata = jsondata.data;
      let loadmore = jsondata.more;
      let current_page = jsondata.current_page;
      if (!loadmore) {
        $(".md-posts__loadmore-button").hide();
      } else {
        $(".md-posts__loadmore-button").show();
      }
      $(".md-posts")
        .find('input[name="md-posts__loadmore-current_page"]')
        .val(current_page);
      $(".md-posts__grid").append(htmldata);
    });
  }

  // Post load more event
  $(document).on("click", ".md-posts__loadmore-button", function (e) {
    e.preventDefault();
    $(this).text("Loading...");
    md_load_posts();
    $(".md-posts__loadmore-button").text("Load More");
  });

  $(document).on(
    "change",
    ".md-posts__filter .md-posts__filter-select",
    function (e) {
      $(".md-posts__grid").html("");
      $(".md-posts")
        .find('input[name="md-posts__loadmore-current_page"]')
        .val(0);
      md_load_posts();
    }
  );

  function md_create_slick_slider() {
    $(".md_hero_banner_slider")
      .find(".md_slider")
      .each(function () {
        let autoplay = $(this).data("autoplay");
        let arrows = $(this).data("arrows");
        let dots = $(this).data("dots");
        let infinite = $(this).data("infinite");
        let slidesToShow = $(this).data("slidestoshow");
        let slidesToScroll = $(this).data("slidestoscroll");
        $(this).slick({
          autoplay: autoplay,
          arrows: arrows,
          dots: dots,
          infinite: infinite,
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToScroll,
        });
      });
    $(".md_hero_banner_slider_v2")
      .find(".md_slider")
      .each(function () {
        let autoplay = $(this).data("autoplay");
        let arrows = $(this).data("arrows");
        let dots = $(this).data("dots");
        let infinite = $(this).data("infinite");
        let slidesToShow = $(this).data("slidestoshow");
        let slidesToScroll = $(this).data("slidestoscroll");
        $(this).slick({
          autoplay: autoplay,
          arrows: arrows,
          dots: dots,
          infinite: infinite,
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToScroll,
          centerMode: true,
        });
      });
    $(".md_hero_banner_slider_v3")
      .find(".md_slider")
      .each(function () {
        let autoplay = $(this).data("autoplay");
        let arrows = $(this).data("arrows");
        let dots = $(this).data("dots");
        let infinite = $(this).data("infinite");
        let slidesToShow = $(this).data("slidestoshow");
        let slidesToScroll = $(this).data("slidestoscroll");
        $(this).slick({
          autoplay: autoplay,
          arrows: arrows,
          dots: dots,
          infinite: infinite,
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToScroll,
        });
      });
  }

  $(document).on("click", ".md_hero_banner_slider_v2 .slick-prev", function () {
    $(".md_hero_banner_slider_v2 .md_slider").slick("slickPrev");
  });
  $(document).on("click", ".md_hero_banner_slider_v2 .slick-next", function () {
    $(".md_hero_banner_slider_v2 .md_slider").slick("slickNext");
  });
  md_create_slick_slider();

  $(document).ready(function () {
    if ($(".history-list").length) {
      $(".history-list .history-list__years-list .history-list__year-item")
        .first()
        .addClass("active");
      $(".history-list__year-detail .history-list__year-detail-item")
        .first()
        .addClass("active");
    }
  });
  $(document).on("click", ".history-list .history-list__years-list .history-list__year-item",function () {
      let year = $(this).data("getyear");
      $( ".history-list .history-list__years-list .history-list__year-item").removeClass("active");
      $(this).addClass("active");
      $(".history-list__year-detail .history-list__year-detail-item").removeClass("active");
      $(".history-list__year-detail .history-list__year-detail-item[data-year=" + year + "]").addClass("active");
    }
  );
})(jQuery);

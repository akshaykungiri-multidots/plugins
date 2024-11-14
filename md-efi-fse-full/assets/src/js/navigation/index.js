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

  function mdCreateSlickSlider() {
    $(".md_hero_banner_slider")
      .find(".md_slider")
      .each(function () {
        const autoplay = $(this).data("autoplay");
        const arrows = $(this).data("arrows");
        const dots = $(this).data("dots");
        const infinite = $(this).data("infinite");
        const slidesToShow = $(this).data("slidestoshow");
        const slidesToScroll = $(this).data("slidestoscroll");
        $(this).slick({
          autoplay,
          arrows,
          dots,
          infinite,
          slidesToShow,
          slidesToScroll,
        });
      });
    $(".md_hero_banner_slider_v2")
      .find(".md_slider")
      .each(function () {
        const autoplay = $(this).data("autoplay");
        const arrows = $(this).data("arrows");
        const dots = $(this).data("dots");
        const infinite = $(this).data("infinite");
        const slidesToShow = $(this).data("slidestoshow");
        const slidesToScroll = $(this).data("slidestoscroll");
        $(this).slick({
          autoplay,
          arrows,
          dots,
          infinite,
          slidesToShow,
          slidesToScroll,
          centerMode: true,
        });
      });
    $(".md_hero_banner_slider_v3")
      .find(".md_slider")
      .each(function () {
        const autoplay = $(this).data("autoplay");
        const arrows = $(this).data("arrows");
        const dots = $(this).data("dots");
        const infinite = $(this).data("infinite");
        const slidesToShow = $(this).data("slidestoshow");
        const slidesToScroll = $(this).data("slidestoscroll");
        $(this).slick({
          autoplay,
          arrows,
          dots,
          infinite,
          slidesToShow,
          slidesToScroll,
        });
      });
  }

  $(document).on("click", ".md_hero_banner_slider_v2 .slick-prev", function () {
    $(".md_hero_banner_slider_v2 .md_slider").slick("slickPrev");
  });
  $(document).on("click", ".md_hero_banner_slider_v2 .slick-next", function () {
    $(".md_hero_banner_slider_v2 .md_slider").slick("slickNext");
  });
  mdCreateSlickSlider();

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
      const year = $(this).data("getyear");
      $( ".history-list .history-list__years-list .history-list__year-item").removeClass("active");
      $(this).addClass("active");
      $(".history-list__year-detail .history-list__year-detail-item").removeClass("active");
      $(".history-list__year-detail .history-list__year-detail-item[data-year=" + year + "]").addClass("active");
    }
  );
})(jQuery);

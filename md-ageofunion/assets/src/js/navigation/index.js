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
      $(".md-ageofunion-header").addClass("fixed-header");
    } else {
      $(".md-ageofunion-header").removeClass("fixed-header");
    }
  });

  $(document).on("hover", ".md_projects__listing__grid__item", function () {
    $(".md_projects__listing__grid__item").removeClass("hovered");
    $(this).addClass("hovered");
  });

  $(".md_logo_slider__slider").each(function () {
    const slidesToShow = $(this).data("slides-to-show");
    const slidesToScroll = $(this).data("slides-to-scroll");
    $(this).slick({
      slidesToShow,
      slidesToScroll,
      autoplay: $(this).data("autoplay") ? 1 : 0,
      infinite: $(this).data("infinite"),
      dots: $(this).data("show-dots"),
      arrows: $(this).data("show-arrows"),
    });
  });

  $(document).on("click", ".md_centre_accordian__list__item", function () {
    $(".md_centre_accordian__list__item").removeClass("active");
    $(this).addClass("active");
  });
  $(document).on("click", ".md_about_faq__list__item", function () {
    $(".md_about_faq__list__item").removeClass("active");
    $(this).addClass("active");
  });
})(jQuery);

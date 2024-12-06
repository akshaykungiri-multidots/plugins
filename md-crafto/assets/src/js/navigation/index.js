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
      $(".md-crafto-header").addClass("fixed-header");
    } else {
      $(".md-crafto-header").removeClass("fixed-header");
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
    $(".md_media_text_slideshow_media")
      .find(".md_slider")
      .each(function () {
        const autoplay = $(this).data("autoplay");
        const autoplaySpeed = $(this).data("autoplayspeed");
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
          autoplaySpeed,
        });
      });
    $(".service-slider__slider")
      .find(".md_slider")
      .each(function () {
        const autoplay = $(this).data("autoplay");
        const autoplaySpeed = $(this).data("autoplayspeed");
        const arrows = $(this).data("arrows");
        const dots = $(this).data("dots");
        const infinite = $(this).data("infinite");
        const slidesToShow = $(this).data("slides-to-show");
        const slidesToScroll = $(this).data("slides-to-scroll");
        $(this).slick({
          autoplay,
          arrows,
          dots,
          infinite,
          slidesToShow,
          slidesToScroll,
          autoplaySpeed,
          centerMode: true,
        });
      });

    $(".md_about_slider_section")
      .find(".md_about_slider")
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

  $(document).on("click", ".service-slider .slick-prev", function () {
    $(".service-slider .md_slider").slick("slickPrev");
  });
  $(document).on("click", ".service-slider .slick-next", function () {
    $(".service-slider .md_slider").slick("slickNext");
  });

  mdCreateSlickSlider();

  $(document).on("click", ".md_page_title__go_down", function () {
    $("html, body").animate(
      {
        scrollTop: $(".md_page_title").height(),
      },
      800
    );
  });

  $(document).on(
    "click",
    ".md_faq_section__faq_items .ma_faq_block--inner-item",
    function () {
      $(".md_faq_section__faq_items .ma_faq_block--inner-item").removeClass(
        "active"
      );
      $(this).addClass("active");
      $(".md_faq_section__faq_items")
        .find("i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    }
  );

  $('.md_logo_slider__slider').each(function () {
		const slidesToShow = $(this).data('slides-to-show');
		const slidesToScroll = $(this).data('slides-to-scroll');
		$(this).slick({
			slidesToShow,
			slidesToScroll,
			autoplay: ( $(this).data('autoplay') ? 1 : 0 ),
			infinite: $(this).data('infinite'),
			dots: $(this).data('show-dots'),
			arrows: $(this).data('show-arrows'),
		});
	});
})(jQuery);

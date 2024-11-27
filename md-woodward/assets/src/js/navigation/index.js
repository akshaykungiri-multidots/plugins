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
      $(".md-woodward-header").addClass("fixed-header");
    } else {
      $(".md-woodward-header").removeClass("fixed-header");
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
    $(".md_our_team_media")
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
  }

  $(document).on("click", ".md_hero_banner_slider_v2 .slick-prev", function () {
    $(".md_hero_banner_slider_v2 .md_slider").slick("slickPrev");
  });
  $(document).on("click", ".md_hero_banner_slider_v2 .slick-next", function () {
    $(".md_hero_banner_slider_v2 .md_slider").slick("slickNext");
  });
  mdCreateSlickSlider();

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

  $(document).on("click", ".md_suppliers_block__tabs .md_suppliers_block__tabs-title .md_suppliers_block__tab-title-wrap", function () {
    const tab = $(this).data("tab");
    $(this).closest(".md_suppliers_block__tabs").find(".md_suppliers_block__tab-title-wrap").removeClass("active");
    $(this).addClass("active");
    $(this).closest(".md_suppliers_block__tabs").find(".md_suppliers_block__tabs-content .md_suppliers_block__tab-content_item").removeClass("active");
    $(this).closest(".md_suppliers_block__tabs").find(".md_suppliers_block__tabs-content .md_suppliers_block__tab-content_item[data-tab='" + tab + "']").addClass("active");
  });

  $(document).on("click", ".md_tab_navigation_list .md_tab_navigation_item", function () {
    const tab = $(this).data("tab");
    $(this).closest(".md_tab_navigation_list").find(".md_tab_navigation_item").removeClass("active");
    $(this).addClass("active");
    $(this).closest(".md_tab_navigation_inner").find(".md_tab_navigation_content_item").removeClass("active");
    $(this).closest(".md_tab_navigation_inner").find(".md_tab_navigation_content_item[data-tab='" + tab + "']").addClass("active");
  });
  
})(jQuery);

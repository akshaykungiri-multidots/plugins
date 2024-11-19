/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function ($) {
	'use strict';

	$('.menu-toggle').click(function () {
		$('header .main-navigation').toggleClass('toggled');
	});

	// responsive menu css
	$('.main-navigation ul.menu>li.menu-item-has-children').on(
		'click',
		function () {
			const windowWidth = $(window).width();
			if (767 > windowWidth) {
				$(this).find('.sub-menu,.children').slideToggle();
				$(this).toggleClass('active-sub');
			}
		}
	);

	// Sticky Header
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 67) {
			$('.md-anitian-fse-v2-header').addClass('fixed-header');
		} else {
			$('.md-anitian-fse-v2-header').removeClass('fixed-header');
		}
	});

	
	jQuery(document).ready(function($) {
		$(".featured-resources-slider .featured-slider .wp-block-post-template").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
		});
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

	  function mdCreateSlickSliderImageBox() {
		// Create slick slider js for md-slick-slider.
		setTimeout(function(){
			const $slider = $('.md-slick-slider.enableSlider');
			if ( $slider.length > 0 ) {
				$slider.each(function(){
					if ( $( this ).hasClass( 'slick-initialized' ) ) {
						$( this ).slick('unslick');
					}
					$(this).slick({
						slidesToShow: 3,
						slidesToScroll: 1,
						arrows: true,
						speed: 300,
					});
				});
			}
		}, 10 );
	}
	mdCreateSlickSliderImageBox();

})(jQuery);

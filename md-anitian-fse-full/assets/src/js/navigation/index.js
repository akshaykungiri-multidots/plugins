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
			$('.md-anitian-fse-full-header').addClass('fixed-header');
		} else {
			$('.md-anitian-fse-full-header').removeClass('fixed-header');
		}
	});

	
	jQuery(document).ready(function($) {
		$(".featured-resources-slider .featured-slider .wp-block-post-template").slick({
			slidesToShow: 2,
			slidesToScroll: 1,
		});
	});

	function md_create_slick_slider() {
		// Create slick slider js for md-slick-slider.
		setTimeout(function(){
			var $slider = $('.md-slick-slider.enable_slider');
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
	md_create_slick_slider();
})(jQuery);

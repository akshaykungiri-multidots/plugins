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
			$('.md-ageofunion-header').addClass('fixed-header');
		} else {
			$('.md-ageofunion-header').removeClass('fixed-header');
		}
	});

	$(document).on('hover', '.md_projects__listing__grid__item', function () {
		$('.md_projects__listing__grid__item').removeClass('hovered');
		$(this).addClass('hovered');
	});
	
})(jQuery);

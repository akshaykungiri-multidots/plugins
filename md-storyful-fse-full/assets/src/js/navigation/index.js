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
			$('.md-storyful-fse-full-header').addClass('fixed-header');
		} else {
			$('.md-storyful-fse-full-header').removeClass('fixed-header');
		}
	});

	$(document).on('click', '.md_search_icon', function () {
		$('.md_search_input').show();
		$('.md_search_input input').focus();
	});
	$(document).on('click', '.close-search', function () {
		$('.md_search_input').hide();
	});
	
	$('.md-subheading-menu1').hover(function () {
		$('.md-subheading-menu2__list').hide();
		$('.md-subheading-menu1__list').show();
	});
	$('.md-subheading-menu2').hover(function () {
		$('.md-subheading-menu1__list').hide();
		$('.md-subheading-menu2__list').show();
	});
	$(document).on('mouseover', function (event) {
		if (!$(event.target).closest('.md-subheading-menu1').length && !$(event.target).closest('.md-subheading-menu1__list').length) {
			$('.md-subheading-menu1__list').hide();
		}
		if (!$(event.target).closest('.md-subheading-menu2').length && !$(event.target).closest('.md-subheading-menu2__list').length) {
			$('.md-subheading-menu2__list').hide();
		}
	});
})(jQuery);

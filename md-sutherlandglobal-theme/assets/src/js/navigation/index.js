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
			$('.md-sutherlandglobal-header').addClass('fixed-header');
		} else {
			$('.md-sutherlandglobal-header').removeClass('fixed-header');
		}
	});

	function md_load_posts(current_page = 1) {

		let post_type = $('.md-posts').find('input[name="md-posts__loadmore-post_type"]').val();
		let posts_per_page = $('.md-posts').find('input[name="md-posts__loadmore-posts_per_page"]').val();
		let taxonomies = [];
		$('.insights-filter-dropbox .category-filter-wrapper .ckkBox').each(function () {
			let taxonomy = $(this).attr('name');
			let term = $(this).val();
			if ($(this).is(':checked')) {
				taxonomies.push({ taxonomy: taxonomy, term: term });
			}
		});

		var data = {
			action: 'md_sutherlandglobal_load_more',
			post_type: post_type,
			posts_per_page: posts_per_page,
			current_page: current_page,
			taxonomies: taxonomies,
			ajax_nonce: siteConfig.ajax_nonce,
		};
		$.post(siteConfig.ajaxUrl, data, function (response) {
			let jsondata = response.data;
			let htmldata = jsondata.data;
			$('.md-posts__grid').html(htmldata);
		});
	}

	$(document).on('click', 'ul.page-numbers li a.page-numbers:not(.current)', function (e) {
		e.preventDefault();
		// extract page number from href ?paged=2
		let page = $(this).attr('href').split('paged=')[1];
		md_load_posts(page);
	});

	$(document).on('click', '.insights-filter-dropbox .category-filter-wrapper button', function (e) {
		e.preventDefault();
		$(this).next().slideToggle();
	});

	$(document).on('click', '.insights-filter-dropbox .category-filter-wrapper .ckkBox', function (e) {
		md_load_posts();
	});

})(jQuery);

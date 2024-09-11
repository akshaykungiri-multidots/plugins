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
			$('.md-efi-header').addClass('fixed-header');
		} else {
			$('.md-efi-header').removeClass('fixed-header');
		}
	});

	function md_load_posts() {

		let post_type = $('.md-posts').find('input[name="md-posts__loadmore-post_type"]').val();
		let posts_per_page = $('.md-posts').find('input[name="md-posts__loadmore-posts_per_page"]').val();
		let post_in_row = $('.md-posts').find('input[name="md-posts__loadmore-post_in_row"]').val();
		let taxonomies = [];
		$('.md-posts__filter .md-posts__filter-select').each(function () {
			let taxonomy = $(this).attr('name');
			console.log(taxonomy);
			let term = $(this).val();
			if (term == '') {
				return;
			}
			taxonomies.push({ taxonomy: taxonomy, term: term });
		});
		let current_page = $('.md-posts').find('input[name="md-posts__loadmore-current_page"]').val();

		var data = {
			action: 'md_efi_load_more',
			post_type: post_type,
			posts_per_page: posts_per_page,
			post_in_row: post_in_row,
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
				$('.md-posts__loadmore-button').hide();
			} else {
				$('.md-posts__loadmore-button').show();
			}
			$('.md-posts').find('input[name="md-posts__loadmore-current_page"]').val(current_page);
			$('.md-posts__grid').append(htmldata);
		});
	}

	// Post load more event
	$(document).on('click', '.md-posts__loadmore-button', function (e) {
		e.preventDefault();
		$(this).text('Loading...');
		md_load_posts();
		$('.md-posts__loadmore-button').text('Load More');
	});

	$(document).on('change', '.md-posts__filter .md-posts__filter-select', function (e) {
		$('.md-posts__grid').html('');
		$('.md-posts').find('input[name="md-posts__loadmore-current_page"]').val(0);
		md_load_posts();
	});
	
})(jQuery);

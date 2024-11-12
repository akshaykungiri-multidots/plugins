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
			$('.md-pointcentral-fse-header').addClass('fixed-header');
		} else {
			$('.md-pointcentral-fse-header').removeClass('fixed-header');
		}
	});

	function mdLoadPosts() {

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
			action: 'md_pointcentral_fse_load_more',
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
		mdLoadPosts();
		$('.md-posts__loadmore-button').text('Load More');
	});

	$(document).on('change', '.md-posts__filter .md-posts__filter-select', function (e) {
		$('.md-posts__grid').html('');
		$('.md-posts').find('input[name="md-posts__loadmore-current_page"]').val(0);
		mdLoadPosts();
	});

	$(document).on('click', '.pointcentral-tab-banner .tab-list-item', function (e) {
		e.preventDefault();
		let tab = $(this).data('tab');
		$('.pointcentral-tab-banner .tab-list-item').removeClass('active');
		$(this).addClass('active');
		$('.pointcentral-tab-banner .tab-content-item').removeClass('active');
		$('.pointcentral-tab-banner .tab-content-item[data-tab="' + tab + '"]').addClass('active');
	})

	$(document).on('click', '.testimonial-next-prev .next', function (e) {
		e.preventDefault();
		const current = $('.md-quote-slider__items .md-quote-slider__item.active');
		$('.md-quote-slider__items .md-quote-slider__item.active').removeClass('active').addClass('no-trans');
		if (current.next().length > 0) {
			current.next().addClass('active').removeClass('no-trans');
		} else {
			$('.md-quote-slider__items .md-quote-slider__item').first().addClass('active').removeClass('no-trans');
		}
	});
	$(document).on('click', '.testimonial-next-prev .prev', function (e) {
		e.preventDefault();
		const current = $('.md-quote-slider__items .md-quote-slider__item.active');
		$('.md-quote-slider__items .md-quote-slider__item.active').removeClass('active').addClass('no-trans');
		if (current.prev().length > 0) {
			current.prev().addClass('active').removeClass('no-trans');
		}else {
			$('.md-quote-slider__items .md-quote-slider__item').last().addClass('active').removeClass('no-trans');
		}
	});

	$('.md_logo_slider__slider').each(function () {
		const slidesToShow = $(this).data('slides-to-show');
		const slidesToScroll = $(this).data('slides-to-scroll');
		$(this).slick({
			slidesToShow,
			slidesToScroll,
			autoplay: $(this).data('autoplay'),
			infinite: $(this).data('infinite'),
			dots: $(this).data('show-dots'),
			arrows: $(this).data('show-arrows'),
		});
	});

	$(".md_logo_slider__stop").click(function () {
		if ($(this).find("i").hasClass("dashicons-controls-play")) {
			$(this).find("i").removeClass("dashicons-controls-play").addClass("dashicons-controls-pause");
			$(this).parent().prev(".md_logo_slider__slider").slick("slickPlay");
		} else {
			$(this).parent().prev(".md_logo_slider__slider").slick("slickPause");
			$(this).find("i").removeClass("dashicons-controls-pause").addClass("dashicons-controls-play");
		}
	});
})(jQuery);

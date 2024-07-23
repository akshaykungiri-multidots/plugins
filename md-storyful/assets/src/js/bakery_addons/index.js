/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function ($) {
	'use strict';

	function get_resource_data() {
		var resource_type = $('.storyful-resources .browse-tab-filters__item.active').data('value');
		var resources_atts = $('.resources-attributes').val();
		var resources_cat = $('.storyful-resources .custom-select-filter-wrapper .resource_cat_listing .custom-select-filter__item.active').data('value');
		var filter_by_date = $('.storyful-resources .custom-select-filter-wrapper .select-date-filter .custom-select-filter__item.active').data('value');
		var post_type = $('.storyful-resources .storyful_post_type').val();
		var search_val = "";
		if ($('.storyful-resources #browse-search').length > 0) {
			search_val = $('.storyful-resources #browse-search').val();
		}
		// Get page number from href
		var page_number_url = $('.pagination .page-numbers.current').attr('href');
		var page_number = 1;
		if (page_number_url !== undefined) {
			var page_number = page_number_url.split('/page/');
			page_number = page_number[1];
		}
		// If page number is undefined then set it to 1
		page_number = page_number ? page_number : 1;
		$.ajax({
			url: siteConfig.ajaxUrl,
			type: 'POST',
			data: {
				action: 'storyful_get_resources',
				resource_type: resource_type,
				nonce: siteConfig.storyful_nonce,
				resources_atts: resources_atts,
				resources_cat: resources_cat,
				filter_by_date: filter_by_date,
				page_number: page_number,
				post_type: post_type,
				search_val: search_val,
			},
			beforeSend: function () {
				$('body').addClass('popup-loader');
			},
			success: function (response) {
				$('.storyful-resources__container').html(response);
			},
			complete: function () {
				$('body').removeClass('popup-loader');
			}
		});
	}

	$(document).on('click', '.storyful-resources .browse-tab-filters__item', function (e) {
		e.preventDefault();
		var $this = $(this);
		var $target = $($this.data('target'));

		$this.addClass('active').siblings().removeClass('active');
		$target.addClass('active').siblings().removeClass('active');

		$('.storyful-resources .custom-select-filter-wrapper .custom-select-filter__item').removeClass('active');

		get_resource_data();
	});

	$(document).on('click', '.storyful-resources .custom-select-filter-wrapper', function (e) {
		$(this).toggleClass('active-select');
	});

	$(document).on('click', '.storyful-resources .custom-select-filter-wrapper .custom-select-filter__item', function (e) {
		$(this).parent().find('.custom-select-filter__item').removeClass('active');
		$(this).addClass('active');
		get_resource_data();
	});

	// On click of pagination
	$(document).on('click', '.pagination a.page-numbers', function (e) {
		e.preventDefault();
		$(this).addClass('current').siblings().removeClass('current');
		get_resource_data();
	});

	$(document).on('keypress', '.storyful-resources #browse-search', function (e) {
		e.preventDefault();
		if (e.which === 13) {
			get_resource_data();
		}
	});

	$(document).on('click', '.case-studies__list .case-studies__item', function (e) {
		e.preventDefault();
		var post_id = $(this).data('post-id');
		$('.case-studies__feature-post .item').removeClass('active');
		$('.case-studies__feature-post .item[data-post-id="' + post_id + '"]').addClass('active');
		$('.case-studies__list .case-studies__item').removeClass('active');
		$(this).addClass('active');
	});

	$(document).ready(function () {
		// Slick slider for client-testimonials
		$('.client-testimonials').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 5000,
		});
	});

	$(document).ready(function () {
		// Slick slider for storyful-video-slider
		setTimeout(function () {

			if ($('.video-wrapper').length > 0) {
				$('.video-wrapper').each(function () {
					var slide_to_show = $(this).data('slider-to-show');
					var slider_to_scroll = $(this).data('slider-to-scroll');
					var autoplay = $(this).data('slider-autoplay');
					var infinite = $(this).data('slider-infinite');
					var slider_dots = $(this).data('slider-dots');
					var slider_arrows = $(this).data('slider-arrows');
					var slider_pause_on_hover = $(this).data('slider-pause-on-hover');
					var slider_center_mode = $(this).data('slider-center-mode');
					$(this).slick({
						dots: slider_dots,
						arrows: slider_arrows,
						infinite: infinite,
						speed: 300,
						slidesToShow: slide_to_show,
						slidesToScroll: slider_to_scroll,
						autoplay: autoplay,
						autoplaySpeed: 5000,
						pauseOnHover: slider_pause_on_hover,
						centerMode: slider_center_mode,
						responsive: [
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 3,
									infinite: true,
									dots: true
								}
							},
							{
								breakpoint: 600,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2
								}
							},
							{
								breakpoint: 480,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1
								}
							}
						],
					});
				});
			}
		}, 1000);

		$(document).on('click', '.media-video__playbtn', function (e) {
			e.preventDefault();
			var $this = $(this);
			var $target = $this.parents('.our-story-section').find('.video-popup').addClass('show-popup');
		});
		$(document).on('click', '.video-popup .close-btn', function (e) {
			e.preventDefault();
			$('.video-popup').removeClass('show-popup');
		});

		$(document).on('click', '.storyful-timeline-year', function (e) {
			e.preventDefault();
			var $this = $(this);
			var $data_key = $this.data('key');
			$('.storyful-timeline-year').removeClass('active');
			$this.addClass('active');
			$('.storyful-timeline-item').removeClass('active');
			$('.storyful-timeline-item[data-key="' + $data_key + '"]').addClass('active');
		});

		$(document).on('click', '.leadership__author__box-item-inner', function (e) {
			e.preventDefault();
			var $this = $(this);
			$this.parents('.leadership__author__box-item').find('.leadership__popup-model').show();
		});
		$(document).on('click', '.leadership__popup-model .close', function (e) {
			e.preventDefault();
			$('.leadership__popup-model').hide();
		});
	});
	
})(jQuery);

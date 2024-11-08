/**
 * File Sample-dynamic.js
 *
 * @param $
 */
(function ($) {
	'use strict';

	$(document).ready(function () {
		// Slick slider for storyful-video-slider
		setTimeout(function () {
			if ($('.video-wrapper').length > 0) {
				$('.video-wrapper').each(function () {
					const slide_to_show = $(this).data('slider-to-show');
					const slider_to_scroll = $(this).data('slider-to-scroll');
					const autoplay = $(this).data('slider-autoplay');
					const infinite = $(this).data('slider-infinite');
					const slider_dots = $(this).data('slider-dots');
					const slider_arrows = $(this).data('slider-arrows');
					$(this).slick({
						dots: slider_dots ? true : false,
						arrows: slider_arrows ? true : false,
						infinite,
						speed: 300,
						slidesToShow: slide_to_show,
						slidesToScroll: slider_to_scroll,
						autoplay,
						autoplaySpeed: 5000,
						pauseOnHover: true,
						centerMode: true,
						responsive: [
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: 3,
									slidesToScroll: 3,
									infinite: true,
									dots: true,
								},
							},
							{
								breakpoint: 600,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2,
								},
							},
							{
								breakpoint: 480,
								settings: {
									slidesToShow: 1,
									slidesToScroll: 1,
								},
							},
						],
					});
				});
			}
		}, 1000);
	});
})(jQuery);

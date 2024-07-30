/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function ($) {
	'use strict';
	
	$(document).on('click', '.pointcentral-tab-banner .tab-list-item', function (e) {
		e.preventDefault();
		$('.pointcentral-tab-banner .tab-list-item').removeClass('active');
		$(this).addClass('active');
		$('.pointcentral-tab-banner .tab-content .tab-content-item').hide();
		$('.pointcentral-tab-banner .tab-content .tab-content-item[data-tab="' + $(this).data('tab') + '"]').show();
	});

	$(document).ready(function () {
		if ($('.pointcentral-testimonials-slider').length) {
			$('.pointcentral-testimonials-slider').each(function () {
				$(this).slick({
					dots: ( $(this).data('dots') === 'yes' ) ? true : false,
					infinite: $(this).data('infinite-loop') === 'yes' ? true : false,
					speed: 300,
					slidesToShow: 1,
					adaptiveHeight: true,
					autoplay: $(this).data('auto-play') === 'yes' ? true : false,
					autoplaySpeed: 3000,
					arrows: $(this).data('arrows') === 'yes' ? true : false,
					pauseOnHover: $(this).data('pause-on-hover') === 'yes' ? true : false,
				});
			});
		}
		if ($('.pointcentral-logo-slider-wrap').length) {
			$('.pointcentral-logo-slider-wrap').each(function () {
				$(this).slick({
					dots: $(this).data('dots'),
					arrows: $(this).data('arrows'),
					pauseOnHover: $(this).data('pause-on-hover'),
					slidesToShow: $(this).data('slide-to-show'),
					slidesToScroll: $(this).data('slide-to-scroll'),
					autoplay: $(this).data('auto-play'),
					infinite: true,
					speed: 300,
					adaptiveHeight: true,
					autoplaySpeed: 2000,
				});
			});
		}
	});

})(jQuery);

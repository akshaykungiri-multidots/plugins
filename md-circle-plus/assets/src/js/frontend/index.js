/**
 * File frontend.js.
 *
 * Handles frontend scripts
 */
(function ($) {
	'use strict';

	$(window).on('elementor/frontend/init',function(){
		elementorFrontend.hooks.addAction('frontend/element_ready/faq-plus.default',function(scope,$){
			$(document).on('click', '.faq-item', function () {
				// Slide up except the current one
				$('.faq-answer').not($(this).find('.faq-answer')).slideUp();
				// Change the icon of the current one
				$('.faq-item').not($(this)).find('i').removeClass('fa-minus').addClass('fa-plus');
				
				$(this).find('.faq-answer').slideToggle();
				$(this).find('i').toggleClass('fa-minus fa-plus');
			});
		});
	});

})(jQuery);

/**
 * File frontend.js.
 *
 * Handles frontend scripts
 */
(function ($) {
	'use strict';

	function md_create_TimelineSlide() {

		setTimeout(function(){
			var $slider = $('.mdTimelineSlide');
			if ( $slider.length > 0 ) {
				$slider.each(function(){
					if ( $( this ).hasClass( 'slick-initialized' ) ) {
						$( this ).slick('unslick');
					}
					$(this).slick({
						autoplay: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: false,
						dots: false,
						adoptiveHeight: true,
					});
				});
			}
		}, 10 );

		jQuery(document).on("click", ".mdSlidePrev", function() {
			jQuery(this).parents(".mdTimelineSlide").slick('slickPrev');
		});
		jQuery(document).on("click", ".mdSlideNext", function() {
			jQuery(this).parents(".mdTimelineSlide").slick('slickNext');
		});
	}

	$(window).on('elementor/frontend/init',function(){
		elementorFrontend.hooks.addAction('frontend/element_ready/md-timeline.default',function(scope,$){
			md_create_TimelineSlide();
		});

		elementorFrontend.hooks.addAction('frontend/element_ready/md_more_real_facts.default',function(scope,$){
			md_create_TimelineSlide();

			$(document).on('click', '.md-more-real-facts__button-link', function(event) {
				event.preventDefault();
				$('.md-more-real-facts__repeater').show();
				md_create_TimelineSlide();
				jQuery(".mdRealFactSlider").slick({
					autoplay: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: true,
					dots: true,
				});
			});
		});
	});

})(jQuery);

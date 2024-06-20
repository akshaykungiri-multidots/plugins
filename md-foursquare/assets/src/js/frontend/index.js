/**
 * File frontend.js.
 *
 * Handles frontend scripts
 */
(function ($) {
	'use strict';

	function md_create_slick_slider() {
		// Create slick slider js for foursquare_slick_slider.
		setTimeout(function(){
			var $slider = $('.foursquare_slick_slider');
			if ( $slider.length > 0 ) {
				$slider.each(function(){
					if ( $( this ).hasClass( 'slick-initialized' ) ) {
						$( this ).slick('unslick');
					}
					$(this).slick({
						slidesToShow: $( this ).data( 'slide-to-show' ),
						slidesToScroll: $( this ).data( 'slide-to-scroll' ),
						autoplay: ( $( this ).data( 'autoplay' ) == 'yes' ) ? true : false,
						autoplaySpeed: $( this ).data( 'autoplay-speed' ),
						infinite: ( $( this ).data( 'infinite' ) == 'yes' ) ? true : false,
						arrows: ( $( this ).data( 'arrows' ) == 'yes' ) ? true : false,
						dots: ( $( this ).data( 'dots' ) == 'yes' ) ? true : false,
						pauseOnHover: ( $( this ).data( 'pause-on-hover' ) == 'yes' ) ? true : false,
						adaptiveHeight: ( $( this ).data( 'adaptive-height' ) == 'yes' ) ? true : false,
						centerMode: ( $( this ).data( 'center-mode' ) == 'yes' ) ? true : false,
						speed: 300,
					});
				});
			}
		}, 10 );
	}

	$(window).on('elementor/frontend/init',function(){
		elementorFrontend.hooks.addAction('frontend/element_ready/foursquare-news.default',function(scope,$){
			md_create_slick_slider();
		});

		elementorFrontend.hooks.addAction('frontend/element_ready/foursquare_logo_slider.default',function(scope,$){
			md_create_slick_slider();
		});
	});
})(jQuery);

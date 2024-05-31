/**
 * File frontend.js.
 *
 * Handles frontend scripts
 */
(function ($) {
	'use strict';

	function md_create_slick_slider() {
		// Create slick slider js for md-slick-slider.
		setTimeout(function(){
			var $slider = $('.md-slick-slider');
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
						speed: 300,
					});
				});
			}
		}, 10 );
	}

	$(window).on('elementor/frontend/init',function(){

		elementorFrontend.hooks.addAction('frontend/element_ready/fiery_hero_slider.default',function(scope,$){
			md_create_slick_slider();
		});

		elementorFrontend.hooks.addAction('frontend/element_ready/fiery_case_studies_slider.default',function(scope,$){
			md_create_slick_slider();
		});
		
	});

})(jQuery);

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
					console.log($( this ).data( 'dots' ));
					$(this).slick({
						slidesToShow: $( this ).data( 'slides-to-show' ),
						slidesToScroll: $( this ).data( 'slides-to-scroll' ),
						autoplay: ( $( this ).data( 'autoplay' ) == 'yes' ) ? true : false,
						autoplaySpeed: $( this ).data( 'autoplay-speed' ),
						infinite: ( $( this ).data( 'infinite-scroll' ) == 'yes' ) ? true : false,
						arrows: ( $( this ).data( 'arrows' ) == 'yes' ) ? true : false,
						dots: ( $( this ).data( 'dots' ) == 'yes' ) ? true : false,
						speed: 300,
					});
				});
			}
		}, 10 );
	}
	md_create_slick_slider();

	$(document).on("click", ".bakery_antiann__customer_stories__bottom .slick-prev", function () {
		$(this).parent().parent().parent().parent().find(".md-slick-slider").slick("slickPrev");
	});

	$(document).on("click", ".bakery_antiann__customer_stories__bottom .slick-next", function () {
		$(this).parent().parent().parent().parent().find(".md-slick-slider").slick("slickNext");
	});

})(jQuery);

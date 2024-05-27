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
			$slider.each(function(){
				$(this).slick({
					slidesToShow: $( this ).data( 'slide-to-show' ),
					slidesToScroll: $( this ).data( 'slide-to-scroll' ),
					autoplay: ( $( this ).data( 'autoplay' ) == 'yes' ) ? true : false,
					autoplaySpeed: $( this ).data( 'autoplay-speed' ),
					infinite: ( $( this ).data( 'infinite' ) == 'yes' ) ? true : false,
					arrows: ( $( this ).data( 'arrows' ) == 'yes' ) ? true : false,
					dots: ( $( this ).data( 'dots' ) == 'yes' ) ? true : false,
					pauseOnHover: $( this ).data( 'pause-on-hover' ),
					adaptiveHeight: $( this ).data( 'adaptive-height' ),
					speed: 300,
				});
			});
		}, 1000);
	}

	$(window).on('elementor/frontend/init',function(){

		elementorFrontend.hooks.addAction('frontend/element_ready/logo_slider.default',function(scope,$){
			md_create_slick_slider();
		});

		elementorFrontend.hooks.addAction('frontend/element_ready/resource_block.default',function(scope,$){
			md_create_slick_slider();
		});

		elementorFrontend.hooks.addAction('frontend/element_ready/customer_stories.default',function(scope,$){
			// Create slick slider js for md-slick-slider.
			setTimeout(function(){
				var $slider = $('.md-stories-slider');
				$slider.each(function(){
					$(this).slick({
						slidesToShow: $( this ).data( 'slide-to-show' ),
						slidesToScroll: $( this ).data( 'slide-to-scroll' ),
						autoplay: ( $( this ).data( 'autoplay' ) == 'yes' ) ? true : false,
						autoplaySpeed: $( this ).data( 'autoplay-speed' ),
						infinite: ( $( this ).data( 'infinite' ) == 'yes' ) ? true : false,
						arrows: false,
						dots: ( $( this ).data( 'dots' ) == 'yes' ) ? true : false,
						pauseOnHover: $( this ).data( 'pause-on-hover' ),
						adaptiveHeight: $( this ).data( 'adaptive-height' ),
						speed: 300,
					});
				});
			}, 1000);

			$(document).on("click", ".customer-stories .customer-stories__bottom .slick-arrows .slick-prev", function () {
			  $(this).parent().parent().parent().find(".md-stories-slider").slick("slickPrev");
			});
		
			$(document).on("click", ".customer-stories .customer-stories__bottom .slick-arrows .slick-next", function () {
				$(this).parent().parent().parent().find(".md-stories-slider").slick("slickNext");
			});

		});

		elementorFrontend.hooks.addAction('frontend/element_ready/toggle_image_box.default',function(scope,$){
			$(document).on("click", ".image-toggle-boxes__item .title", function () {
				if ($(this).hasClass("active")) {
					$(this).removeClass("active");
					$(this).parent().find(".content").slideUp();
					$(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-right");
				} else {
					$(this).addClass("active");
					$(this).parent().find(".content").slideDown();
					$(this).find("i").removeClass("fa-angle-right").addClass("fa-angle-down");
				}
			});
		});
		
	});
})(jQuery);

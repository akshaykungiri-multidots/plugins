/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function ($) {
	'use strict';

	$(document).on("click", ".md_anitian_leadership__tabs li a", function() {
		var tab_id = $(this).attr('href');
		$('.md_anitian_leadership__tabs .tab-content .tab-pane').removeClass('show');
		$('.md_anitian_leadership__tabs li').removeClass('active');
		$(this).parent().addClass('active');
		$(tab_id).addClass('show');
	});

	$(document).on("click", ".leadership__member-description .read-more", function() {
		$(this).parent().find('.hidden-description').show();
		$(this).parent().find('.read-less').show();
		$(this).parent().find('.ellipsis').hide();
		$(this).hide();
	});
	$(document).on("click", ".leadership__member-description .read-less", function() {
		$(this).parent().find('.hidden-description').hide();
		$(this).parent().find('.read-more').show();
		$(this).parent().find('.ellipsis').show();
		$(this).hide();
	});

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
	
})(jQuery);

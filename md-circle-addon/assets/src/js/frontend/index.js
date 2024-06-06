/**
 * File frontend.js.
 *
 * Handles frontend scripts
 */
(function ($) {
	'use strict';

	function md_create_slick_slider() {
		// Create slick slider js for circle_slick_slider.
		setTimeout(function(){
			var $slider = $('.circle_slick_slider');
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
		elementorFrontend.hooks.addAction('frontend/element_ready/circle_faq.default',function(scope,$){
			$(document).on('click', '.circle-faq-title', function () {
				// Slide up except the current one
				$('.circle-faq-content').not($(this).next('.circle-faq-content')).slideUp();
				// Change the icon of the current one
				$('.circle-faq-title').not($(this)).find('i').removeClass('fa-minus').addClass('fa-plus');
				
				$(this).next('.circle-faq-content').slideDown();
				$(this).find('i').toggleClass('fa-minus fa-plus');
		
				// Change image of right side
				var imageUrl = $(this).parent().find('.circle-faq-image').data('faq-image');
				$('.circle-faq-item-image img').attr('src', imageUrl);
			});
		});
		elementorFrontend.hooks.addAction('frontend/element_ready/circle-animated-text-banner.default',function(scope,$){
			setTimeout(function(){
				let animated_titles = $('.circle-animated-text-banner__title').find('.animated-title').data('animated-titles');
				let animated_titles_array = [];
				if (animated_titles) {
					animated_titles.map(({animated_title}) => {
						animated_titles_array.push(animated_title);
					});
					window.ityped.init(document.querySelector('.animated-title'),{
						strings: animated_titles_array,
						loop: true
					});
				}

			}, 1000);
		});
		elementorFrontend.hooks.addAction('frontend/element_ready/circle_image_categories.default',function(scope,$){
			$(document).on('click', '.circle-image-categories__category_name', function () {
				$(this).parent().find('.circle-image-categories__category_name').removeClass('active');
				$(this).addClass('active');
				$(this).parent().parent().find('.circle-image-categories__category_content').removeClass('active');
				let category_key = $(this).data('category-key');
				$(this).parent().parent().find('.circle-image-categories__category_content[data-category-key="'+category_key+'"]').addClass('active');
			});
		});

		elementorFrontend.hooks.addAction('frontend/element_ready/circle-testimonials.default',function(scope,$){
			md_create_slick_slider();
		});
	});
})(jQuery);

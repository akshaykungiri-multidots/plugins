/**
 * File Sample-dynamic.js
 * 
 */
(function ($) {
    "use strict";

    $(document).on('click', '.media-video__playbtn', function (e) {
			e.preventDefault();
			var $this = $(this);
			var $target = $this.parents('.our-story-section').find('.video-popup').addClass('show-popup');
		});
		$(document).on('click', '.video-popup .close-btn', function (e) {
			e.preventDefault();
			$('.video-popup').removeClass('show-popup');
		});

})( jQuery );
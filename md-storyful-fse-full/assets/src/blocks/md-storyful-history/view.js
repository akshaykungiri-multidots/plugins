/**
 * File Sample-dynamic.js
 * 
 */
(function ($) {
    "use strict";
    $(document).on('click', '.storyful-timeline-year', function (e) {
			e.preventDefault();
			var $this = $(this);
			var $data_key = $this.data('key');
			$('.storyful-timeline-year').removeClass('active');
			$this.addClass('active');
			$('.storyful-timeline-item').removeClass('active');
			$('.storyful-timeline-item[data-key="' + $data_key + '"]').addClass('active');
		});

})( jQuery );
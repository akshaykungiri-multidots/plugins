/**
 * File Sample-dynamic.js
 * 
 */
(function ($) {
    "use strict";
	
	$(document).ready(function () {
		$(document).on('click', '.md-product-detail-accordion .wc-accordion-item .wc-accordion-header', function (e) {
			
			if ($(e.target).hasClass('wc-accordion-header')) {
				$(this).parent().toggleClass('open');
			}
		});
	});

})( jQuery );
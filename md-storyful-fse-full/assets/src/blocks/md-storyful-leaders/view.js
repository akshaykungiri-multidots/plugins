/**
 * File Sample-dynamic.js
 * 
 */
(function ($) {
    "use strict";
    $(document).on('click', '.leadership__author__box-item-inner', function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.parents('.leadership__author__box-item').find('.leadership__popup-model').show();
	});
	$(document).on('click', '.leadership__popup-model .close', function (e) {
		e.preventDefault();
		$('.leadership__popup-model').hide();
	});

})( jQuery );
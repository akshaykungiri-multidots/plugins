/**
 * File admin.js.
 *
 * Handles admin scripts
 */
(function ($) {
	'use strict';
	// on change promotion_type hide coupon_code, promotion_value and amount_off fields
	$(document).on('change', '#promotion_type', function () {
		var promotionType = $(this).val();
		if (promotionType === 'free_gift') {
			$('#coupon_code, #promotion_value, #amount_off').closest('.form-field').hide();
		} else if (promotionType === 'coupon_code') {
			$('#coupon_code').closest('.form-field').show();
			$('#promotion_value, #amount_off').closest('.form-field').show();
		} else {
			$('#coupon_code').closest('.form-field').hide();
			$('#promotion_value, #amount_off').closest('.form-field').show();
		}
	}).change();
	$(document).on('change', '#promotion_enable', function () {
		if ($(this).is(':checked')) {
			$(this).parent().parent().nextAll('.form-field').show();
		} else {
			$(this).parent().parent().nextAll('.form-field').hide();
		}
	}).change();
})(jQuery);

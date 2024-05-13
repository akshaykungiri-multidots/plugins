/**
 * File frontend.js.
 *
 * Handles frontend scripts
 */
(function ($) {
	'use strict';

	$(document).ready(function () {
		// display shiiping address on checkout page when check md_display_shipping_address is checked
		$(document.body).on('change', '#md_display_shipping_address', function () {
			if ($(this).is(':checked')) {
				$('.md-shipping-address').show();
			} else {
				$('.md-shipping-address').hide();
			}

			// Apply select2 to country and state
			$('.md-country-dropdown select, .md-state-dropdown select').select2({
				width: '100%',
			});
		});
	});

	function updateStates(countryField, stateField) {
        var country = countryField.val();
        var stateContainer = stateField.closest('.woocommerce-input-wrapper');

        // Clear existing states
        stateField.empty().append('<option value="">Select a state...</option>').attr('disabled', 'disabled');

        // If country is selected
        if (country) {
            $.ajax({
                type: 'POST',
                url: siteConfig.ajaxUrl,
                data: {
                    action: 'md_get_states_by_country',
                    country: country,
					nonce: siteConfig.ajax_nonce,
                },
                success: function(result) {
                    if (result) {
                        var states = result;
						if ( states.success === false ) {
							stateField.append('<option value="">No states found</option>');
						} else {
							stateField.html(states.data);
						}
						stateField.removeAttr('disabled');
						return;
                    }
                }
            });
        }
    }

    // Trigger updateStates on country change
    $(document).on('change', '.md-country-dropdown select', function() {
		var countryField = $(this);
		var stateField = countryField.parent().parent().parent().find('.md-state-dropdown select');
		updateStates(countryField, stateField);
	});

})(jQuery);

/**
 * File Sample-dynamic.js
 * 
 */
(function ($) {
    "use strict";

  $(document).on('click', '.md-prod-cat__item > a', function(e) {
    $(this).next().slideToggle();
    if ($(this).find('.dashicons').hasClass('dashicons-plus')) {
      $(this).find('.dashicons-plus').removeClass('dashicons-plus').addClass('dashicons-minus');
    } else {
      $(this).find('.dashicons-minus').removeClass('dashicons-minus').addClass('dashicons-plus');
    }
	});

})( jQuery );
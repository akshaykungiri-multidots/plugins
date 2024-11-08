/**
 * File Sample-dynamic.js
 *
 * @param $
 */
(function ($) {
	'use strict';

	$(document).on(
		'click',
		'.case-studies__list .case-studies__item',
		function (e) {
			e.preventDefault();
			const postId = $(this).data('post-id');
			$('.case-studies__feature-post .item').removeClass('active');
			$(
				'.case-studies__feature-post .item[data-post-id="' +
					postId +
					'"]'
			).addClass('active');
			$('.case-studies__list .case-studies__item').removeClass('active');
			$(this).addClass('active');
		}
	);
})(jQuery);

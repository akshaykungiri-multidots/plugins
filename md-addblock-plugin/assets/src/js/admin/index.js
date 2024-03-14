/**
 * File admin.js.
 *
 * Handles admin scripts
 */
(function ($) {
	'use strict';
	jQuery(document).ready(function($) {
		$('#sync-posts').click(function(e) {
			e.preventDefault();
	
			var postType = $('#md_post_type').val();
			var searchContent = $('#search_content').val();
			var blockContent = $('#block_content').val();
			var batchSize = 20; // Set batch size
	
			// Function to sync posts in batches
			function syncPosts(offset) {
				var data = {
					action: 'md_addblock_sync_posts',
					post_type: postType,
					search_content: searchContent,
					block_content: blockContent,
					offset: offset, // Include offset for pagination
					batch_size: batchSize // Include batch size
				};
	
				$.ajax({
					type: 'POST',
					url: siteConfig.ajaxUrl,
					data: data,
					dataType: 'json',
					beforeSend: function() {
						// Show loading indicator or any other UI feedback
					},
					success: function(response) {
						// Process response
						if (response.success && response.data.length > 0) {
							$.each(response.data, function(index, item) {
								console.log('Post ID: ' + item.post_id + ', Message: ' + item.message);
							});
							// console.log('Posts synced successfully.');
							// Continue syncing if there are more posts
							syncPosts(offset + batchSize);
						} else {
							console.log('No more posts to sync.');
						}
					},
					error: function(xhr, status, error) {
						// Handle error
						console.error(xhr.responseText);
						alert('An error occurred while syncing posts.');
					},
					complete: function() {
						// Hide loading indicator or perform any cleanup
					}
				});
			}
	
			// Start syncing posts
			syncPosts(0);
		});
	});
})(jQuery);

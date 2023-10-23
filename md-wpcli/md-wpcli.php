<?php

/**
 * Plugin Name: MD WP CLI
 * Description: WP-CLI command to assign categories, tags, and featured images to posts from a CSV file.
 * Version: 1.0
 */

if ( defined( 'WP_CLI' ) && WP_CLI ) {

	// Function to upload featured image from URL
	function upload_featured_image( $post_id, $image_url ) {
		$image = media_sideload_image( $image_url, $post_id );
		if ( ! is_wp_error( $image ) ) {
			$attachments = get_posts(
				array(
					'post_parent' => $post_id,
					'post_type'   => 'attachment',
				)
			);
			if ( count( $attachments ) > 0 ) {
				return $attachments[0]->ID;
			}
		}
		return false;
	}

	/**
	 * Functionality 1: to import csv file to read post id and category name, tag and feature image.
	 */
	function import_csv_data_command( $args, $assoc_args ) {
		$csv_file = $args[0]; // Get the CSV file path from the command

		if ( empty( $csv_file ) ) {
			WP_CLI::error( 'Please provide a path to the CSV file.' );
			return;
		}

		if ( ! file_exists( $csv_file ) ) {
			WP_CLI::error( 'The specified CSV file does not exist.' );
			return;
		}

		// Define delimiter and enclosure for CSV file
		$delimiter = ',';
		$enclosure = '"';
		$handle    = fopen( $csv_file, 'r' );

		if ( false !== $handle ) {
			while ( ( $data = fgetcsv( $handle, 0, $delimiter, $enclosure ) ) !== false ) {
				$post_id            = $data[0];
				$category_name      = $data[1];
				$tag                = $data[2];
				$featured_image_url = $data[3];

				// Check if the post exists
				$post = get_post( $post_id );

				if ( $post ) {
					// Assign or create categories
					if ( ! empty( $category_name ) ) {
						$categories_terms = explode( ',', $category_name );
						wp_set_object_terms( $post_id, $categories_terms, 'category' );
					}

					// Assign or create tags
					if ( ! empty( $tag ) ) {
						$tags_terms = explode( ',', $tag );
						wp_set_object_terms( $post_id, $tags_terms, 'post_tag' );
					}

					// Assign featured image from URL
					if ( ! has_post_thumbnail( $post_id ) && ! empty( $featured_image_url ) ) {
						$image_id = upload_featured_image( $post_id, $featured_image_url );
						if ( $image_id ) {
							set_post_thumbnail( $post_id, $image_id );
						}
					}
				}
			}

			fclose( $handle );
		}

		WP_CLI::success( 'CSV import completed.' );
	}

	WP_CLI::add_command( 'import_csv_data', 'import_csv_data_command' );

	// Function to remove image dimenstion from post content
	function remove_image_dimensions_from_content( $content, $custom_dimensions ) {
		// Remove custom dimensions specified in the command
		if ( ! empty( $custom_dimensions ) ) {
			$custom_dimensions = explode( ',', $custom_dimensions );
			foreach ( $custom_dimensions as $dimension ) {
				$content = preg_replace( '/-' . $dimension . 'x' . $dimension . '\.(jpg|jpeg|png|gif)/i', '.$1', $content );
			}
		}

		// Remove default dimensions (e.g., -250x250)
		$content = preg_replace( '/-\d+x\d+\.(jpg|jpeg|png|gif)/i', '.$1', $content );

		return $content;
	}

	/**
	 * Functionality 2: Run through each post content and find the images with dimentions added in url.
	 */
	function remove_image_dimensions_command( $args, $assoc_args ) {

		$custom_dimensions = isset( $assoc_args['custom_dimensions'] ) ? $assoc_args['custom_dimensions'] : '';

		// Find and remove dimensions in post content
		$posts = get_posts(
			array(
				'post_type'      => 'post',
				'posts_per_page' => -1,
			)
		);

		foreach ( $posts as $post ) {
			$content     = $post->post_content;
			$new_content = remove_image_dimensions_from_content( $content, $custom_dimensions );

			if ( $content !== $new_content ) {
				// Update the post content if dimensions were removed
				wp_update_post(
					array(
						'ID'           => $post->ID,
						'post_content' => $new_content,
					)
				);
			}
		}

		WP_CLI::success( 'Image dimensions removed from post content.' );
	}

	WP_CLI::add_command( 'remove_image_dimensions', 'remove_image_dimensions_command' );

	// Function to add alt tags from post content in images
	function add_alt_tags_to_images( $content ) {
		$dom = new DOMDocument();
		@$dom->loadHTML( $content );

		$images = $dom->getElementsByTagName( 'img' );
		foreach ( $images as $image ) {
			$alt = $image->getAttribute( 'alt' );
			if ( empty( $alt ) ) {
				$src      = $image->getAttribute( 'src' );
				$filename = basename( $src );

				// Get the title from the media library
				$attachment = get_posts(
					array(
						'post_type'      => 'attachment',
						'post_name'      => $filename,
						'posts_per_page' => 1,
					)
				);
				if ( ! empty( $attachment ) ) {
					$title = $attachment[0]->post_title;
					$image->setAttribute( 'alt', $title );
				}
			}
		}

		$new_content = $dom->saveHTML();
		return $new_content;
	}

	/**
	 * Functionality 3: Run through each post content and find images and add alt tags from title.
	 */
	function add_alt_tags_to_images_command( $args, $assoc_args ) {
		// Find and update images in post content
		$posts = get_posts(
			array(
				'post_type'      => 'post',
				'posts_per_page' => -1,
			)
		);

		foreach ( $posts as $post ) {
			$content     = $post->post_content;
			$new_content = add_alt_tags_to_images( $content );

			if ( $content !== $new_content ) {
				// Update the post content if alt tags were added
				wp_update_post(
					array(
						'ID'           => $post->ID,
						'post_content' => $new_content,
					)
				);
			}
		}

		WP_CLI::success( 'Alt tags added to images in post content.' );
	}

	WP_CLI::add_command( 'add_alt_tags_to_images', 'add_alt_tags_to_images_command' );
}

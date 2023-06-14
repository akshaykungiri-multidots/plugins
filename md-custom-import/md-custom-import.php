<?php
/*
 * Plugin Name:       MultiDots Custom Import
 * Plugin URI:        https://wordpress.org/plugins/md-custom-import
 * Description:       Assign category, tags, featured image from csv to post.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Akshay Kungiri
 * Author URI:        https://wordpress.org/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       md-imp
 * Domain Path:       /languages
 */

/**
 * Load Text Domain
 *
 * This gets the plugin ready for translation.
 *
 * @package Multisite Custom Import
 * @since   1.0.0
 */
load_plugin_textdomain('mdimp', false, dirname(plugin_basename(__FILE__)) . '/languages/');

/**
 * 
 */
function md_imp_does_file_exists($filename, $field = 'post_id')
{
	global $wpdb;
	return ($wpdb->get_var("SELECT $field FROM {$wpdb->postmeta} WHERE meta_value LIKE '%/$filename'"));
}

/**
 * 
 */
function md_imp_csv_command_callback($args, $assoc_args)
{
	// Check if csv parameter exist or not.
	if (!isset($assoc_args['csv'])) {
		WP_CLI::error('There is missing csv argument in the command.');
	} else {
		$filename = $assoc_args['csv'];

		// Check if file exist ot not.
		if (!file_exists($filename)) {
			WP_CLI::error('File does not exist in given path.');
		}

		// Check if file is csv type or not.
		if (pathinfo($filename, PATHINFO_EXTENSION) === 'csv') {

			if (($handle = fopen($filename, 'r')) !== false) {

				while (($data = fgetcsv($handle)) !== false) {
					$post_id = $data[0];
					$category_name = explode(",", $data[1]);
					$tags = explode(",", $data[2]);
					$featured_image = $data[3];
					if ($post_id == 'post_id') {
						continue;
					}
					$postObj = get_post($post_id);
					if (!$postObj) {
						WP_CLI::Error('Post ID ' . $post_id . ' is not updated because not found or invalid.', 0);
						continue;
					}

					// Assign categories.
					if (!empty($category_name)) {
						wp_add_object_terms($post_id, $category_name, 'category');
						// WP_CLI::runcommand("post term add $post_id category '$category_name' ");
					}

					// Assign tags.
					if (!empty($tags)) {
						wp_add_object_terms($post_id, $tags, 'post_tag');
						// WP_CLI::runcommand("post term add $post_id post_tag '$tags' ");
					}

					// // Assign featured image.
					if (!empty($featured_image)) {
						$inserted_attachment_id = md_imp_does_file_exists(basename($featured_image));
						if ($inserted_attachment_id) {
							set_post_thumbnail($post_id, $inserted_attachment_id);
						} else {
							WP_CLI::runcommand("media import $featured_image --post_id=$post_id --featured_image");
						}
					}

					WP_CLI::success('Post ID ' . $post_id . ' is updated successfully.');
				}

				fclose($handle);
			}
		} else {
			WP_CLI::error('Invalid file format. Only csv file is supported.');
		}
	}
}

// Check if WP_CLI is defined or not.
if (defined('WP_CLI') && WP_CLI) {
	// Adding custom command to import csv.
	WP_CLI::add_command('md_imp_csv', 'md_imp_csv_command_callback');
}

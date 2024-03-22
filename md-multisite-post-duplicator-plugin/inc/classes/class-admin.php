<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    MD_Multisite_Post_Duplicator
 * @subpackage MD_Multisite_Post_Duplicator/admin
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Multisite_Post_Duplicator\Inc;

use MD_Multisite_Post_Duplicator\Inc\Traits\Singleton;

/**
 * Main class file.
 */
class Admin
{

	use Singleton;

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 */
	public function __construct()
	{
		if (defined('MD_MULTISITE_POST_DUPLICATOR_VERSION')) {
			$this->version = MD_MULTISITE_POST_DUPLICATOR_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->setup_admin_hooks();
	}
	/**
	 * Function is used to define admin hooks.
	 *
	 * @since   1.0.0
	 */
	public function setup_admin_hooks()
	{
		add_action('admin_enqueue_scripts', array($this, 'enqueue_styles'));
		add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts'));

		if (is_main_site()) {
			add_action('add_meta_boxes', array($this, 'md_multisite_post_duplicator_add_book_metabox'));
			add_action('wp_ajax_md_multisite_post_duplicator_get_categories_and_tags', array($this, 'md_multisite_post_duplicator_get_categories_and_tags_callback'));
			add_action('save_post', array($this, 'md_multisite_post_duplicator_save_postdata'), 1, 2);
			add_filter('upload_dir', array($this, 'md_multisite_post_duplicator_custom_upload_dir'));
		}
	}


	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles()
	{
		wp_enqueue_style('md-multisite-select2', MD_MULTISITE_POST_DUPLICATOR_URL . 'assets/src/sass/admin/select2.min.css', array(), $this->version, 'all');
		wp_enqueue_style('md-multisite-post-duplicator', MD_MULTISITE_POST_DUPLICATOR_URL . 'assets/build/admin.css', array(), $this->version, 'all');
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts()
	{
		wp_enqueue_script('md-multisite-post-duplicator', MD_MULTISITE_POST_DUPLICATOR_URL . 'assets/build/admin.js', array('jquery'), $this->version, false);

		wp_localize_script(
			'md-multisite-post-duplicator',
			'siteConfig',
			array(
				'ajaxUrl'    => admin_url('admin-ajax.php'),
				'ajax_nonce' => wp_create_nonce('loadmore_post_nonce'),
			)
		);
	}

	/**
	 * Adding Metabox.
	 */
	public function md_multisite_post_duplicator_add_book_metabox()
	{

		add_meta_box(
			'md_multisite_post_duplicator_multi_site_box_id',                 // Unique ID.
			'Multisite fields',      // Box title.
			array($this, 'md_multisite_post_duplicator_meta_box_html'),  // Content callback, must be of type callable.
			'post',              // Post type.
			'advanced',          // Context.
			'high',
		);
	}

	/**
	 * Adding form html for metabox.
	 */
	public function md_multisite_post_duplicator_meta_box_html()
	{
		$subsites = get_sites();
	?>
		<div>
			<?php wp_nonce_field(MD_MULTISITE_POST_DUPLICATOR_BASEPATH, 'md_multisite_post_duplicator_multi_site_nonce'); ?>
			<p>
				<label><?php esc_html_e('Select Subsite', 'md-mp'); ?></label>
				<br />
				<select name="mdmp_blog_id" class="widefat md-select2" id="mdmp_blog_id">
					<option value=""><?php esc_html_e('None', 'md-mp'); ?></option>
					<?php
					$current_blog_id = get_current_blog_id();
					foreach ($subsites as $value) {
						if ($current_blog_id === (int) $value->blog_id) {
							continue;
						}
						$blog_name = get_blog_option($value->blog_id, 'blogname');
						echo "<option value='" . esc_attr($value->blog_id) . "'>" . esc_html($blog_name) . '</option>';
					}
					?>
				</select>
			</p>
			<p>
				<label><?php esc_html_e('Select Categories', 'md-mp'); ?></label>
				<br />
				<select name="mdmp_blog_categories[]" id="mdmp_blog_categories" class="widefat md-select2" multiple>
				</select>
				<input type="hidden" name="md_multisite_post_duplicator_is_categories" id="md_multisite_post_duplicator_is_categories" value="0" />
			</p>
			<p>
				<label><?php esc_html_e('Select Tags', 'md-mp'); ?></label>
				<br />
				<select name="mdmp_blog_tags[]" id="mdmp_blog_tags" class="widefat md-select2" multiple>
				</select>
				<input type="hidden" name="md_multisite_post_duplicator_is_tags" id="md_multisite_post_duplicator_is_tags" value="0" />
			</p>
		</div>
<?php
	}

	/**
	 * Save post in multisite.
	 */
	public function md_multisite_post_duplicator_save_postdata($post_id, $original_post)
	{

		/* Verify the nonce before proceeding. */
		if (!isset($_POST['md_multisite_post_duplicator_multi_site_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['md_multisite_post_duplicator_multi_site_nonce'])), MD_MULTISITE_POST_DUPLICATOR_BASEPATH)) {
			return $post_id;
		}

		// Check if this is an autosave or revision.
		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
			return $post_id;
		}

		// actually we need only "publish" status.
		if ('publish' !== get_post_status($original_post)) {
			return $post_id;
		}

		// prevent "Fatal error: Maximum function nesting level reached".
		remove_action('save_post', array($this, __FUNCTION__));

		// Set the parent blog ID.
		$parent_blog_id      = isset($_REQUEST['mdmp_blog_id']) ? sanitize_text_field(wp_unslash($_REQUEST['mdmp_blog_id'])) : '';

		if (isset($_REQUEST['mdmp_blog_categories']) && !empty($_REQUEST['mdmp_blog_categories'])) {
			$mdmp_blog_categories = isset($_REQUEST['mdmp_blog_categories']) ? array_map('intval', $_REQUEST['mdmp_blog_categories']) : array();
		} else {
			$mdmp_blog_categories = wp_get_object_terms($post_id, 'category', array('fields' => 'names'));
		}
		if (isset($_REQUEST['mdmp_blog_tags']) && !empty($_REQUEST['mdmp_blog_tags'])) {
			$mdmp_blog_tags = isset($_REQUEST['mdmp_blog_tags']) ? array_map('intval', $_REQUEST['mdmp_blog_tags']) : array();
		} else {
			$mdmp_blog_tags = wp_get_object_terms($post_id, 'post_tag', array('fields' => 'names'));
		}

		// Get the current blog ID.
		$current_blog_id = get_current_blog_id();

		// Get child post array.
		$mdmp_child_blogs_post_array = get_post_meta($post_id, 'mdmp_child_blogs_post_array', true);
		// check if post is new.
		$child_post_id = "";
		if (is_array($mdmp_child_blogs_post_array) && isset($mdmp_child_blogs_post_array[$parent_blog_id])) {
			$child_post_id = $mdmp_child_blogs_post_array[$parent_blog_id];
		}

		// Switch to the parent blog if not already on it.
		if ($current_blog_id === $parent_blog_id || ('' === $parent_blog_id)) {
			return $post_id;
		}

		// If a featured image exists on the main site
		$file = "";
		if (has_post_thumbnail($post_id)) {
			// Get the current post thumbnail ID
			$main_site_featured_image_id = get_post_thumbnail_id($post_id);
			$file = wp_get_original_image_path($main_site_featured_image_id);
		}

		switch_to_blog($parent_blog_id);

		// Check if post deleted or not in subsite
		if (NULL === get_post($child_post_id)) {
			$child_post_id = "";
		}
		// Find all image URLs in the post content
		$post_content = $original_post->post_content;
		preg_match_all('/<img.+?src=[\'"]([^\'"]+)[\'"].*?>/i', $post_content, $matches);
		$image_urls = $matches[1];

		// Loop through the image URLs and upload them to the subsite
		foreach ($image_urls as $image_url) {
			// Upload the image to the subsite
			$filename = basename($image_url);
			if ($this->does_file_exists($filename, 'meta_value')) {
				$uploads = wp_upload_dir();
				$new_image_url = $uploads['url'] . "/$filename";
				$post_content = str_replace($image_url, $new_image_url, $post_content);
			} else {
				$upload = wp_upload_bits(basename($image_url), null, file_get_contents($image_url));

				// Attach the uploaded image to the subsite
				if ($upload['error'] === false) {
					$attachment = array(
						'guid'           => $upload['url'],
						'post_mime_type' => $upload['type'],
						'post_title'     => preg_replace('/\.[^.]+$/', '', basename($upload['file'])),
						'post_content'   => '',
						'post_status'    => 'inherit',
					);

					// Insert the attachment to the subsite's media library
					$attachment_id = wp_insert_attachment($attachment, $upload['file']);

					// Generate attachment metadata
					$attachment_data = wp_generate_attachment_metadata($attachment_id, $upload['file']);

					// Update attachment metadata
					wp_update_attachment_metadata($attachment_id, $attachment_data);

					// Update the image path in the post content to the subsite's image URL
					$new_image_url = wp_get_attachment_url($attachment_id);
					$post_content = str_replace($image_url, $new_image_url, $post_content);
				}
			}
		}
		if ($child_post_id !== "") {
			$post_data = array(
				'ID' 			=> $child_post_id,
				'post_content'  => $post_content,
			);
			$new_post_id = wp_update_post($post_data);
		} else {
			// Create a new post on the parent blog.
			$post_data = array(
				'post_author'   => $original_post->post_author,
				'post_date'     => $original_post->post_date,
				'post_modified' => $original_post->post_modified,
				'post_content'  => $post_content,
				'post_title'    => $original_post->post_title,
				'post_excerpt'  => $original_post->post_excerpt,
				'post_status'   => 'draft',
				'post_name'     => $original_post->post_name,
				'post_type'     => $original_post->post_type,
			);

			// Insert the post into the database.
			$new_post_id = wp_insert_post($post_data);
		}

		wp_set_object_terms($new_post_id, $mdmp_blog_categories, 'category', false);
		wp_set_object_terms($new_post_id, $mdmp_blog_tags, 'post_tag', false);

		if (!empty($file)) {
			// Upload the image to the subsite's media library
			$this->md_copy_multisite_image($file, $new_post_id);
		}

		// Switch back to the original blog if necessary.
		switch_to_blog($current_blog_id);

		$child_blogs_array = array(
			$parent_blog_id => $new_post_id,
		);
		if (!empty($mdmp_child_blogs_post_array)) {
			array_push($mdmp_child_blogs_post_array, $child_blogs_array);
			update_post_meta($post_id, 'mdmp_child_blogs_post_array', $child_blogs_array);
		} else {
			add_post_meta($post_id, 'mdmp_child_blogs_post_array', $child_blogs_array);
		}
	}

	/**
	 * Check if file exists or not.
	 */
	public function does_file_exists($filename, $field = 'post_id')
	{
		global $wpdb;

		return $wpdb->get_var($wpdb->prepare(
			"SELECT %s FROM {$wpdb->postmeta} WHERE meta_value LIKE %s",
			$field,
			'%' . $wpdb->esc_like('/' . $filename)
		));
	}

	/**
	 * Function to copy image from one site to another.
	 */
	public function md_copy_multisite_image($file, $post_id)
	{
		$uploads = wp_upload_dir();
		$inserted_attachment_id = $this->does_file_exists(basename($file));
		if (!$inserted_attachment_id) {
			$filename = wp_unique_filename($uploads['path'], basename($file));
			$new_file = $uploads['path'] . "/$filename";
			$new_file_url = $uploads['url'] . "/$filename";

			$sideload = @copy($file, $new_file);

			$inserted_attachment_id = wp_insert_attachment(
				array(
					'guid' => $new_file_url,
					'post_mime_type' => mime_content_type($new_file),
					'post_title'     => preg_replace('/\.[^.]+$/', '', $filename),
					'post_content'   => '',
					'post_status'    => 'inherit',
				),
				$new_file
			);
		}
		set_post_thumbnail($post_id, $inserted_attachment_id);
	}

	/**
	 * Ajax callback function to get tags and categories of multisite.
	 */
	public function md_multisite_post_duplicator_get_categories_and_tags_callback()
	{
		$blog_id = isset($_REQUEST['blog_id']) ? sanitize_text_field(wp_unslash($_REQUEST['blog_id'])) : '';

		switch_to_blog($blog_id);
		$categories = get_terms(
			array(
				'taxonomy'   => 'category',
				'hide_empty' => false,
				'exclude'    => array(1),
			)
		);
		$post_tags  = get_terms(
			array(
				'taxonomy'   => 'post_tag',
				'hide_empty' => false,
			)
		);
		restore_current_blog();
		$response = array(
			'categories' => $categories,
			'tags'       => $post_tags,
		);
		wp_send_json($response);
	}

	/**
	 * Function to upload main site file in sitewise directory.	
	 */
	function md_multisite_post_duplicator_custom_upload_dir($dirs)
	{
		$current_blog_id = get_current_blog_id();
		$base_dir = WP_CONTENT_DIR . '/uploads/sites/';

		// Create a subdirectory based on the main site ID
		$main_site_dir = $base_dir . $current_blog_id . '/';

		// Create the main site directory if it doesn't exist
		if (!file_exists($main_site_dir)) {
			wp_mkdir_p($main_site_dir);
		}

		// Set the upload directory paths for the main site
		if ($current_blog_id === 1) {
			$dirs['path'] = $main_site_dir . $dirs['subdir'];
			$dirs['url'] = WP_CONTENT_URL . '/uploads/sites/' . $current_blog_id . '/' . $dirs['subdir'];
		}

		return $dirs;
	}
}

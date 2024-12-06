<?php

/**
 * Register Post Types
 *
 * @package md-crafto
 */

namespace MD_CRAFTO\Includes;

use MD_CRAFTO\Includes\Traits\Singleton;

/**
 * Class for register post types.
 */
class Register_Post_Types
{
	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct()
	{

		// load class.
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	protected function setup_hooks()
	{

		/**
		 * Actions.
		 */
		add_action('init', array($this, 'register_service_cpt'), 0);

		// Add custom fields like service icon, service subtitle using default metabox.
		add_action('add_meta_boxes', array($this, 'add_service_metabox'));

		// Save custom fields data.
		add_action('save_post', array($this, 'save_service_metabox'));

		// Add filed number of likes in post type using metabox.
		add_action('add_meta_boxes', array($this, 'add_likes_metabox'));

		// Save custom fields data.
		add_action('save_post', array($this, 'save_likes_metabox'));
	}

	/**
	 * Register Custom Post Type Movie.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_service_cpt()
	{

		$labels = array(
			'name'                  => _x('Services', 'Post Type General Name', 'md-crafto'),
			'singular_name'         => _x('Service', 'Post Type Singular Name', 'md-crafto'),
			'menu_name'             => _x('Services', 'Admin Menu text', 'md-crafto'),
			'name_admin_bar'        => _x('Service', 'Add New on Toolbar', 'md-crafto'),
			'archives'              => __('Service Archives', 'md-crafto'),
			'attributes'            => __('Service Attributes', 'md-crafto'),
			'parent_item_colon'     => __('Parent Service:', 'md-crafto'),
			'all_items'             => __('All Services', 'md-crafto'),
			'add_new_item'          => __('Add New Service', 'md-crafto'),
			'add_new'               => __('Add New', 'md-crafto'),
			'new_item'              => __('New Service', 'md-crafto'),
			'edit_item'             => __('Edit Service', 'md-crafto'),
			'update_item'           => __('Update Service', 'md-crafto'),
			'view_item'             => __('View Service', 'md-crafto'),
			'view_items'            => __('View Services', 'md-crafto'),
			'search_items'          => __('Search Service', 'md-crafto'),
			'not_found'             => __('Not found', 'md-crafto'),
			'not_found_in_trash'    => __('Not found in Trash', 'md-crafto'),
			'featured_image'        => __('Featured Image', 'md-crafto'),
			'set_featured_image'    => __('Set featured image', 'md-crafto'),
			'remove_featured_image' => __('Remove featured image', 'md-crafto'),
			'use_featured_image'    => __('Use as featured image', 'md-crafto'),
			'insert_into_item'      => __('Insert into Service', 'md-crafto'),
			'uploaded_to_this_item' => __('Uploaded to this Service', 'md-crafto'),
			'items_list'            => __('Services list', 'md-crafto'),
			'items_list_navigation' => __('Services list navigation', 'md-crafto'),
			'filter_items_list'     => __('Filter Services list', 'md-crafto'),
		);
		$args   = array(
			'label'               => __('Service', 'md-crafto'),
			'description'         => __('The service', 'md-crafto'),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-admin-tools',
			'supports'            => array(
				'title',
				'editor',
				'excerpt',
				'thumbnail',
				'revisions',
				'author',
				'comments',
				'trackbacks',
				'page-attributes',
				'custom-fields',
			),
			'taxonomies'          => array(),
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'hierarchical'        => false,
			'exclude_from_search' => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
		);

		register_post_type('service', $args);
	}

	/**
	 * Add custom fields to service post type.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function add_service_metabox()
	{
		add_meta_box(
			'service_metabox',
			__('Service Details', 'md-crafto'),
			array($this, 'service_metabox_callback'),
			'service',
			'normal',
			'high'
		);
	}

	/**
	 * Add custom fields to service post type.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function add_likes_metabox()
	{
		add_meta_box(
			'likes_metabox',
			__('Likes', 'md-crafto'),
			array($this, 'likes_metabox_callback'),
			'post',
			'normal',
			'high'
		);
	}

	/**
	 * Callback function for service metabox.
	 *
	 * @param object $post Post object.
	 * @return void
	 * @since 1.0.0
	 */
	public function service_metabox_callback($post)
	{
		// Add nonce for security and authentication.
		wp_nonce_field('service_metabox', 'service_metabox_nonce');

		// Retrieve an existing value from the database.
		$service_icon = get_post_meta($post->ID, 'service_icon', true);
		$service_subtitle = get_post_meta($post->ID, 'service_subtitle', true);

		// Set default values.
		if (empty($service_icon)) {
			$service_icon = '';
		}
		if (empty($service_subtitle)) {
			$service_subtitle = '';
		}

		// Form fields.
		echo '<table class="form-table">';
		echo '<tr>';
		echo '<th><label for="service_icon" class="service_icon_label">' . __('Service Icon', 'md-crafto') . '</label></th>';
		echo '<td>';
		echo '<input type="text" id="service_icon" name="service_icon" class="service_icon_field" value="' . esc_attr($service_icon) . '" size="25" />';
		echo '<p class="description">' . __('Enter the service icon', 'md-crafto') . '</p>';
		echo '</td>';
		echo '</tr>';

		echo '<tr>';
		echo '<th><label for="service_subtitle" class="service_subtitle_label">' . __('Service Subtitle', 'md-crafto') . '</label></th>';
		echo '<td>';
		echo '<input type="text" id="service_subtitle" name="service_subtitle" class="service_subtitle_field" value="' . esc_attr($service_subtitle) . '" size="25" />';
		echo '<p class="description">' . __('Enter the service subtitle', 'md-crafto') . '</p>';
		echo '</td>';
		echo '</tr>';
		echo '</table>';
	}

	/**
	 * Save custom fields data.
	 *
	 * @param int $post_id Post ID.
	 * @return void
	 * @since 1.0.0
	 */
	public function save_service_metabox($post_id)
	{
		// Add nonce for security and authentication.
		$nonce_name = isset($_POST['service_metabox_nonce']) ? sanitize_text_field($_POST['service_metabox_nonce']) : '';
		$nonce_action = 'service_metabox';

		// Check if a nonce is set.
		if (!isset($nonce_name)) {
			return;
		}

		// Check if a nonce is valid.
		if (!wp_verify_nonce($nonce_name, $nonce_action)) {
			return;
		}

		// Check if the user has permissions to save data.
		if (!current_user_can('edit_post', $post_id)) {
			return;
		}

		// Check if it's not an autosave.
		if (wp_is_post_autosave($post_id)) {
			return;
		}

		// Check if it's not a revision.
		if (wp_is_post_revision($post_id)) {
			return;
		}

		// Sanitize user input.
		$service_icon = isset($_POST['service_icon']) ? sanitize_text_field($_POST['service_icon']) : '';
		$service_subtitle = isset($_POST['service_subtitle']) ? sanitize_text_field($_POST['service_subtitle']) : '';

		// Update the meta field in the database.
		update_post_meta($post_id, 'service_icon', $service_icon);
		update_post_meta($post_id, 'service_subtitle', $service_subtitle);
	}

	/**
	 * Callback function for likes metabox.
	 *
	 * @param object $post Post object.
	 * @return void
	 * @since 1.0.0
	 */
	public function likes_metabox_callback($post)
	{
		// Add nonce for security and authentication.
		wp_nonce_field('likes_metabox', 'likes_metabox_nonce');

		// Retrieve an existing value from the database.
		$likes = get_post_meta($post->ID, 'likes', true);

		// Set default values.
		if (empty($likes)) {
			$likes = 0;
		}

		// Form fields.
		echo '<table class="form-table">';
		echo '<tr>';
		echo '<th><label for="likes" class="likes_label">' . esc_html__('Number of Likes', 'md-crafto') . '</label></th>';
		echo '<td>';
		echo '<input type="text" id="likes" name="likes" class="likes_field" value="' . esc_attr($likes) . '" size="25" />';
		echo '<p class="description">' . esc_html__('Enter the number of likes.', 'md-crafto') . '</p>';
		echo '</td>';
		echo '</tr>';
		echo '</table>';
	}

	/**
	 * Save custom fields data.
	 *
	 * @param int $post_id Post ID.
	 * @return void
	 * @since 1.0.0
	 */
	public function save_likes_metabox($post_id)
	{
		// Add nonce for security and authentication.
		$nonce_name = isset($_POST['likes_metabox_nonce']) ? sanitize_text_field($_POST['likes_metabox_nonce']) : '';
		$nonce_action = 'likes_metabox';

		// Check if a nonce is set.
		if (!isset($nonce_name)) {
			return;
		}

		// Check if a nonce is valid.
		if (!wp_verify_nonce($nonce_name, $nonce_action)) {
			return;
		}

		// Check if the user has permissions to save data.
		if (!current_user_can('edit_post', $post_id)) {
			return;
		}

		// Check if it's not an autosave.
		if (wp_is_post_autosave($post_id)) {
			return;
		}

		// Check if it's not a revision.
		if (wp_is_post_revision($post_id)) {
			return;
		}

		// Sanitize user input.
		$likes = isset($_POST['likes']) ? sanitize_text_field($_POST['likes']) : '';

		// Update the meta field in the database.
		update_post_meta($post_id, 'likes', $likes);
	}
}

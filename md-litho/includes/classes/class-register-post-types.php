<?php
/**
 * Register Post Types
 *
 * @package md-litho
 */

namespace MD_LITHO\Includes;

use MD_LITHO\Includes\Traits\Singleton;

/**
 * Class for register post types.
 */
class Register_Post_Types {
	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	protected function setup_hooks() {

		/**
		 * Actions.
		 */
		add_action( 'init', array( $this, 'register_movie_cpt' ), 0 );

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
	public function register_movie_cpt() {

		$labels = array(
			'name'                  => _x( 'Movies', 'Post Type General Name', 'md-litho' ),
			'singular_name'         => _x( 'Movie', 'Post Type Singular Name', 'md-litho' ),
			'menu_name'             => _x( 'Movies', 'Admin Menu text', 'md-litho' ),
			'name_admin_bar'        => _x( 'Movie', 'Add New on Toolbar', 'md-litho' ),
			'archives'              => __( 'Movie Archives', 'md-litho' ),
			'attributes'            => __( 'Movie Attributes', 'md-litho' ),
			'parent_item_colon'     => __( 'Parent Movie:', 'md-litho' ),
			'all_items'             => __( 'All Movies', 'md-litho' ),
			'add_new_item'          => __( 'Add New Movie', 'md-litho' ),
			'add_new'               => __( 'Add New', 'md-litho' ),
			'new_item'              => __( 'New Movie', 'md-litho' ),
			'edit_item'             => __( 'Edit Movie', 'md-litho' ),
			'update_item'           => __( 'Update Movie', 'md-litho' ),
			'view_item'             => __( 'View Movie', 'md-litho' ),
			'view_items'            => __( 'View Movies', 'md-litho' ),
			'search_items'          => __( 'Search Movie', 'md-litho' ),
			'not_found'             => __( 'Not found', 'md-litho' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-litho' ),
			'featured_image'        => __( 'Featured Image', 'md-litho' ),
			'set_featured_image'    => __( 'Set featured image', 'md-litho' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-litho' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-litho' ),
			'insert_into_item'      => __( 'Insert into Movie', 'md-litho' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Movie', 'md-litho' ),
			'items_list'            => __( 'Movies list', 'md-litho' ),
			'items_list_navigation' => __( 'Movies list navigation', 'md-litho' ),
			'filter_items_list'     => __( 'Filter Movies list', 'md-litho' ),
		);
		$args   = array(
			'label'               => __( 'Movie', 'md-litho' ),
			'description'         => __( 'The movies', 'md-litho' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-admin-post',
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

		register_post_type( 'movies', $args );
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
			__('Likes', 'md-litho'),
			array($this, 'likes_metabox_callback'),
			'post',
			'normal',
			'high'
		);
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
		echo '<th><label for="likes" class="likes_label">' . esc_html__('Number of Likes', 'md-litho') . '</label></th>';
		echo '<td>';
		echo '<input type="text" id="likes" name="likes" class="likes_field" value="' . esc_attr($likes) . '" size="25" />';
		echo '<p class="description">' . esc_html__('Enter the number of likes.', 'md-litho') . '</p>';
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

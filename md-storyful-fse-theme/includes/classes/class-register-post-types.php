<?php
/**
 * Register Post Types
 *
 * @package md-storyful-fse
 */

namespace MD_STORYFUL_FSE\Includes;

use MD_STORYFUL_FSE\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_resources_cpt' ), 0 );

		// Add custom meta box for resources.
		add_action( 'add_meta_boxes', array( $this, 'add_popular_post_meta_box' ) );

		// Save meta box content.
		add_action( 'save_post', array( $this, 'save_popular_post_meta_box' ) );
	}

	/**
	 * Register Custom Post Type Resource.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_resources_cpt() {

		$labels = array(
			'name'                  => _x( 'Resources', 'Post Type General Name', 'md-storyful-fse' ),
			'singular_name'         => _x( 'Resource', 'Post Type Singular Name', 'md-storyful-fse' ),
			'menu_name'             => _x( 'Resources', 'Admin Menu text', 'md-storyful-fse' ),
			'name_admin_bar'        => _x( 'Resource', 'Add New on Toolbar', 'md-storyful-fse' ),
			'archives'              => __( 'Resource Archives', 'md-storyful-fse' ),
			'attributes'            => __( 'Resource Attributes', 'md-storyful-fse' ),
			'parent_item_colon'     => __( 'Parent Resource:', 'md-storyful-fse' ),
			'all_items'             => __( 'All Resources', 'md-storyful-fse' ),
			'add_new_item'          => __( 'Add New Resource', 'md-storyful-fse' ),
			'add_new'               => __( 'Add New', 'md-storyful-fse' ),
			'new_item'              => __( 'New Resource', 'md-storyful-fse' ),
			'edit_item'             => __( 'Edit Resource', 'md-storyful-fse' ),
			'update_item'           => __( 'Update Resource', 'md-storyful-fse' ),
			'view_item'             => __( 'View Resource', 'md-storyful-fse' ),
			'view_items'            => __( 'View Resources', 'md-storyful-fse' ),
			'search_items'          => __( 'Search Resource', 'md-storyful-fse' ),
			'not_found'             => __( 'Not found', 'md-storyful-fse' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-storyful-fse' ),
			'featured_image'        => __( 'Featured Image', 'md-storyful-fse' ),
			'set_featured_image'    => __( 'Set featured image', 'md-storyful-fse' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-storyful-fse' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-storyful-fse' ),
			'insert_into_item'      => __( 'Insert into Resource', 'md-storyful-fse' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Resource', 'md-storyful-fse' ),
			'items_list'            => __( 'Resources list', 'md-storyful-fse' ),
			'items_list_navigation' => __( 'Resources list navigation', 'md-storyful-fse' ),
			'filter_items_list'     => __( 'Filter Resources list', 'md-storyful-fse' ),
		);
		$args   = array(
			'label'               => __( 'Resources', 'md-storyful-fse' ),
			'description'         => __( 'The resources', 'md-storyful-fse' ),
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

		register_post_type( 'resources', $args );
	}

	/**
	 * Add meta box for resources.
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function add_popular_post_meta_box() {
		add_meta_box(
			'popular_post_meta_box',
			__( 'Is Popular Details', 'md-storyful-fse' ),
			array( $this, 'popular_post_meta_box_callback' ),
			array( 'resources', 'post' ),
			'normal',
			'high'
		);
	}

	/**
	 * Meta box callback function.
	 *
	 * @param object $post Post object.
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function popular_post_meta_box_callback( $post ) {
		// Add nonce for security and authentication.
		wp_nonce_field( 'popular_post_meta_box', 'popular_post_meta_box_nonce' );

		// Retrieve an existing value from the database.
		$post_is_popular = get_post_meta( $post->ID, 'post_is_popular', true );

		// Set default value.
		if ( empty( $post_is_popular ) ) {
			$post_is_popular = 'no';
		}

		// Form fields.
		echo '<label for="post_is_popular">';
		esc_html_e( 'Is Popular', 'md-storyful-fse' );
		echo '</label>';
		echo '<select id="post_is_popular" name="post_is_popular">';
		echo '<option value="yes" ' . selected( $post_is_popular, 'yes', false ) . '>' . esc_html__( 'Yes', 'md-storyful-fse' ) . '</option>';
		echo '<option value="no" ' . selected( $post_is_popular, 'no', false ) . '>' . esc_html__( 'No', 'md-storyful-fse' ) . '</option>';
		echo '</select>';

	}

	/**
	 * Save meta box content.
	 *
	 * @param int $post_id Post ID.
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function save_popular_post_meta_box( $post_id ) {
		// Add nonce for security and authentication.
		$nonce_name   = isset( $_POST['popular_post_meta_box_nonce'] ) ? sanitize_term_field( 'popular_post_meta_box_nonce', $_POST['popular_post_meta_box_nonce'], $post_id, 'post', 'raw' ) : '';
		$nonce_action = 'popular_post_meta_box';

		// Check if a nonce is set.
		if ( ! isset( $nonce_name ) ) {
			return;
		}

		// Check if a nonce is valid.
		if ( ! wp_verify_nonce( $nonce_name, $nonce_action ) ) {
			return;
		}

		// Check if the user has permissions to save data.
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		// Check if it's not an autosave.
		if ( wp_is_post_autosave( $post_id ) ) {
			return;
		}

		// Check if it's not a revision.
		if ( wp_is_post_revision( $post_id ) ) {
			return;
		}

		// Sanitize user input.
		$post_is_popular = isset( $_POST['post_is_popular'] ) ? sanitize_text_field( $_POST['post_is_popular'] ) : '';

		// Update the meta field in the database.
		update_post_meta( $post_id, 'post_is_popular', $post_is_popular );
	}

}

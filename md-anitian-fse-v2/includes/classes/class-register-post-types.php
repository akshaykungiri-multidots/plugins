<?php
/**
 * Register Post Types
 *
 * @package md-anitian-fse-v2
 */

namespace MD_ANITIAN_FSE_V2\Includes;

use MD_ANITIAN_FSE_V2\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_leadership_cpt' ), 0 );

		// Add custom meta box for resources.
		add_action( 'add_meta_boxes', array( $this, 'add_popular_post_meta_box' ) );

		// Save meta box content.
		add_action( 'save_post', array( $this, 'save_popular_post_meta_box' ) );
		add_action( 'save_post', array( $this, 'save_leadership_post_meta_box' ) );
	}

	/**
	 * Register Custom Post Type Resource.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_resources_cpt() {

		$labels = array(
			'name'                  => _x( 'Resources', 'Post Type General Name', 'md-anitian-fse-v2' ),
			'singular_name'         => _x( 'Resource', 'Post Type Singular Name', 'md-anitian-fse-v2' ),
			'menu_name'             => _x( 'Resources', 'Admin Menu text', 'md-anitian-fse-v2' ),
			'name_admin_bar'        => _x( 'Resource', 'Add New on Toolbar', 'md-anitian-fse-v2' ),
			'archives'              => __( 'Resource Archives', 'md-anitian-fse-v2' ),
			'attributes'            => __( 'Resource Attributes', 'md-anitian-fse-v2' ),
			'parent_item_colon'     => __( 'Parent Resource:', 'md-anitian-fse-v2' ),
			'all_items'             => __( 'All Resources', 'md-anitian-fse-v2' ),
			'add_new_item'          => __( 'Add New Resource', 'md-anitian-fse-v2' ),
			'add_new'               => __( 'Add New', 'md-anitian-fse-v2' ),
			'new_item'              => __( 'New Resource', 'md-anitian-fse-v2' ),
			'edit_item'             => __( 'Edit Resource', 'md-anitian-fse-v2' ),
			'update_item'           => __( 'Update Resource', 'md-anitian-fse-v2' ),
			'view_item'             => __( 'View Resource', 'md-anitian-fse-v2' ),
			'view_items'            => __( 'View Resources', 'md-anitian-fse-v2' ),
			'search_items'          => __( 'Search Resource', 'md-anitian-fse-v2' ),
			'not_found'             => __( 'Not found', 'md-anitian-fse-v2' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-anitian-fse-v2' ),
			'featured_image'        => __( 'Featured Image', 'md-anitian-fse-v2' ),
			'set_featured_image'    => __( 'Set featured image', 'md-anitian-fse-v2' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-anitian-fse-v2' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-anitian-fse-v2' ),
			'insert_into_item'      => __( 'Insert into Resource', 'md-anitian-fse-v2' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Resource', 'md-anitian-fse-v2' ),
			'items_list'            => __( 'Resources list', 'md-anitian-fse-v2' ),
			'items_list_navigation' => __( 'Resources list navigation', 'md-anitian-fse-v2' ),
			'filter_items_list'     => __( 'Filter Resources list', 'md-anitian-fse-v2' ),
		);
		$args   = array(
			'label'               => __( 'Resources', 'md-anitian-fse-v2' ),
			'description'         => __( 'The resources', 'md-anitian-fse-v2' ),
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
	 * Register Custom Post Type Leadership.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_leadership_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Leaderships', 'Post Type General Name', 'md-anitian-fse-v2' ),
			'singular_name'         => _x( 'Leadership', 'Post Type Singular Name', 'md-anitian-fse-v2' ),
			'menu_name'             => _x( 'Leaderships', 'Admin Menu text', 'md-anitian-fse-v2' ),
			'name_admin_bar'        => _x( 'Leadership', 'Add New on Toolbar', 'md-anitian-fse-v2' ),
			'archives'              => __( 'Leadership Archives', 'md-anitian-fse-v2' ),
			'attributes'            => __( 'Leadership Attributes', 'md-anitian-fse-v2' ),
			'parent_item_colon'     => __( 'Parent Leadership:', 'md-anitian-fse-v2' ),
			'all_items'             => __( 'All Leaderships', 'md-anitian-fse-v2' ),
			'add_new_item'          => __( 'Add New Leadership', 'md-anitian-fse-v2' ),
			'add_new'               => __( 'Add New', 'md-anitian-fse-v2' ),
			'new_item'              => __( 'New Leadership', 'md-anitian-fse-v2' ),
			'edit_item'             => __( 'Edit Leadership', 'md-anitian-fse-v2' ),
			'update_item'           => __( 'Update Leadership', 'md-anitian-fse-v2' ),
			'view_item'             => __( 'View Leadership', 'md-anitian-fse-v2' ),
			'view_items'            => __( 'View Leaderships', 'md-anitian-fse-v2' ),
			'search_items'          => __( 'Search Leadership', 'md-anitian-fse-v2' ),
			'not_found'             => __( 'Not found', 'md-anitian-fse-v2' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-anitian-fse-v2' ),
			'featured_image'        => __( 'Featured Image', 'md-anitian-fse-v2' ),
			'set_featured_image'    => __( 'Set featured image', 'md-anitian-fse-v2' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-anitian-fse-v2' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-anitian-fse-v2' ),
			'insert_into_item'      => __( 'Insert into Leadership', 'md-anitian-fse-v2' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Leadership', 'md-anitian-fse-v2' ),
			'items_list'            => __( 'Leaderships list', 'md-anitian-fse-v2' ),
			'items_list_navigation' => __( 'Leaderships list navigation', 'md-anitian-fse-v2' ),
			'filter_items_list'     => __( 'Filter Leaderships list', 'md-anitian-fse-v2' ),
		);
		
		$args   = array(
			'label'               => __( 'Leaderships', 'md-anitian-fse-v2' ),
			'description'         => __( 'The leaderships', 'md-anitian-fse-v2' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-businessman',
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

		register_post_type( 'leaderships', $args );
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
			__( 'Is Popular Details', 'md-anitian-fse-v2' ),
			array( $this, 'popular_post_meta_box_callback' ),
			array( 'resources', 'post' ),
			'normal',
			'high'
		);

		add_meta_box(
			'leadership_post_meta_box',
			__( 'More Details', 'md-anitian-fse-v2' ),
			array( $this, 'leadership_post_meta_box_callback' ),
			array( 'leaderships' ),
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
		esc_html_e( 'Is Popular', 'md-anitian-fse-v2' );
		echo '</label>';
		echo '<select id="post_is_popular" name="post_is_popular">';
		echo '<option value="yes" ' . selected( $post_is_popular, 'yes', false ) . '>' . esc_html__( 'Yes', 'md-anitian-fse-v2' ) . '</option>';
		echo '<option value="no" ' . selected( $post_is_popular, 'no', false ) . '>' . esc_html__( 'No', 'md-anitian-fse-v2' ) . '</option>';
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

	/**
	 * Meta box callback function.
	 *
	 * @param object $post Post object.
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function leadership_post_meta_box_callback( $post ) {
		// Add nonce for security and authentication.
		wp_nonce_field( 'leadership_post_meta_box', 'leadership_post_meta_box_nonce' );

		// Retrieve an existing value from the database.
		$post_designation = get_post_meta( $post->ID, 'post_designation', true );

		// Set default value.
		if ( empty( $post_designation ) ) {
			$post_designation = '';
		}

		// Form fields.
		echo '<label for="post_designation">';
		esc_html_e( 'Designation', 'md-anitian-fse-v2' );
		echo '</label>';
		echo '<input type="text" id="post_designation" name="post_designation" value="' . esc_attr( $post_designation ) . '" size="25" />';
	}

	/**
	 * Save meta box content.
	 *
	 * @param int $post_id Post ID.
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function save_leadership_post_meta_box( $post_id ) {
		// Add nonce for security and authentication.
		$nonce_name   = isset( $_POST['leadership_post_meta_box_nonce'] ) ? sanitize_term_field( 'leadership_post_meta_box_nonce', $_POST['leadership_post_meta_box_nonce'], $post_id, 'post', 'raw' ) : '';
		$nonce_action = 'leadership_post_meta_box';

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
		$post_designation = isset( $_POST['post_designation'] ) ? sanitize_text_field( $_POST['post_designation'] ) : '';

		// Update the meta field in the database.
		update_post_meta( $post_id, 'post_designation', $post_designation );
	}
}

<?php
/**
 * Register Post Types
 *
 * @package md-storyful-fse-full
 */

namespace MD_STORYFUL_FSE_FULL\Includes;

use MD_STORYFUL_FSE_FULL\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_storyful_history_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_storyful_leaders_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_storyful_testimonials' ), 0 );

		// Add custom meta box for resources.
		add_action( 'add_meta_boxes', array( $this, 'add_popular_post_meta_box' ) );

		// Save meta box content.
		add_action( 'save_post', array( $this, 'save_popular_post_meta_box' ) );
		add_action( 'save_post', array( $this, 'save_storyful_history_meta_box' ) );
		add_action( 'save_post', array( $this, 'save_storyful_leaders_meta_box' ) );
	}

	/**
	 * Register Custom Post Type Resource.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_resources_cpt() {

		$labels = array(
			'name'                  => _x( 'Resources', 'Post Type General Name', 'md-storyful-fse-full' ),
			'singular_name'         => _x( 'Resource', 'Post Type Singular Name', 'md-storyful-fse-full' ),
			'menu_name'             => _x( 'Resources', 'Admin Menu text', 'md-storyful-fse-full' ),
			'name_admin_bar'        => _x( 'Resource', 'Add New on Toolbar', 'md-storyful-fse-full' ),
			'archives'              => __( 'Resource Archives', 'md-storyful-fse-full' ),
			'attributes'            => __( 'Resource Attributes', 'md-storyful-fse-full' ),
			'parent_item_colon'     => __( 'Parent Resource:', 'md-storyful-fse-full' ),
			'all_items'             => __( 'All Resources', 'md-storyful-fse-full' ),
			'add_new_item'          => __( 'Add New Resource', 'md-storyful-fse-full' ),
			'add_new'               => __( 'Add New', 'md-storyful-fse-full' ),
			'new_item'              => __( 'New Resource', 'md-storyful-fse-full' ),
			'edit_item'             => __( 'Edit Resource', 'md-storyful-fse-full' ),
			'update_item'           => __( 'Update Resource', 'md-storyful-fse-full' ),
			'view_item'             => __( 'View Resource', 'md-storyful-fse-full' ),
			'view_items'            => __( 'View Resources', 'md-storyful-fse-full' ),
			'search_items'          => __( 'Search Resource', 'md-storyful-fse-full' ),
			'not_found'             => __( 'Not found', 'md-storyful-fse-full' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-storyful-fse-full' ),
			'featured_image'        => __( 'Featured Image', 'md-storyful-fse-full' ),
			'set_featured_image'    => __( 'Set featured image', 'md-storyful-fse-full' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-storyful-fse-full' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-storyful-fse-full' ),
			'insert_into_item'      => __( 'Insert into Resource', 'md-storyful-fse-full' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Resource', 'md-storyful-fse-full' ),
			'items_list'            => __( 'Resources list', 'md-storyful-fse-full' ),
			'items_list_navigation' => __( 'Resources list navigation', 'md-storyful-fse-full' ),
			'filter_items_list'     => __( 'Filter Resources list', 'md-storyful-fse-full' ),
		);
		$args   = array(
			'label'               => __( 'Resources', 'md-storyful-fse-full' ),
			'description'         => __( 'The resources', 'md-storyful-fse-full' ),
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
	 * Register Custom Post Type Storyful History.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_storyful_history_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Storyful History', 'Post Type General Name', 'md-storyful-fse-full' ),
			'singular_name'         => _x( 'Storyful History', 'Post Type Singular Name', 'md-storyful-fse-full' ),
			'menu_name'             => _x( 'Storyful History', 'Admin Menu text', 'md-storyful-fse-full' ),
			'name_admin_bar'        => _x( 'Storyful History', 'Add New on Toolbar', 'md-storyful-fse-full' ),
			'archives'              => __( 'Storyful History Archives', 'md-storyful-fse-full' ),
			'attributes'            => __( 'Storyful History Attributes', 'md-storyful-fse-full' ),
			'parent_item_colon'     => __( 'Parent Storyful History:', 'md-storyful-fse-full' ),
			'all_items'             => __( 'All Storyful History', 'md-storyful-fse-full' ),
			'add_new_item'          => __( 'Add New Storyful History', 'md-storyful-fse-full' ),
			'add_new'               => __( 'Add New', 'md-storyful-fse-full' ),
			'new_item'              => __( 'New Storyful History', 'md-storyful-fse-full' ),
			'edit_item'             => __( 'Edit Storyful History', 'md-storyful-fse-full' ),
			'update_item'           => __( 'Update Storyful History', 'md-storyful-fse-full' ),
			'view_item'             => __( 'View Storyful History', 'md-storyful-fse-full' ),
			'view_items'            => __( 'View Storyful History', 'md-storyful-fse-full' ),
			'search_items'          => __( 'Search Storyful History', 'md-storyful-fse-full' ),
			'not_found'             => __( 'Not found', 'md-storyful-fse-full' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-storyful-fse-full' ),
			'featured_image'        => __( 'Featured Image', 'md-storyful-fse-full' ),
			'set_featured_image'    => __( 'Set featured image', 'md-storyful-fse-full' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-storyful-fse-full' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-storyful-fse-full' ),
			'insert_into_item'      => __( 'Insert into Storyful History', 'md-storyful-fse-full' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Storyful History', 'md-storyful-fse-full' ),
			'items_list'            => __( 'Storyful History list', 'md-storyful-fse-full' ),
			'items_list_navigation' => __( 'Storyful History list navigation', 'md-storyful-fse-full' ),
			'filter_items_list'     => __( 'Filter Storyful History list', 'md-storyful-fse-full' ),
		);

		$args = array(
			'label'               => __( 'Storyful History', 'md-storyful-fse-full' ),
			'description'         => __( 'The storyful history', 'md-storyful-fse-full' ),
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

		register_post_type( 'storyful_history', $args );
	}

	/**
	 * Register Custom Post Type Storyful Leaders.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_storyful_leaders_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Storyful Leaders', 'Post Type General Name', 'md-storyful-fse-full' ),
			'singular_name'         => _x( 'Storyful Leader', 'Post Type Singular Name', 'md-storyful-fse-full' ),
			'menu_name'             => _x( 'Storyful Leaders', 'Admin Menu text', 'md-storyful-fse-full' ),
			'name_admin_bar'        => _x( 'Storyful Leader', 'Add New on Toolbar', 'md-storyful-fse-full' ),
			'archives'              => __( 'Storyful Leader Archives', 'md-storyful-fse-full' ),
			'attributes'            => __( 'Storyful Leader Attributes', 'md-storyful-fse-full' ),
			'parent_item_colon'     => __( 'Parent Storyful Leader:', 'md-storyful-fse-full' ),
			'all_items'             => __( 'All Storyful Leaders', 'md-storyful-fse-full' ),
			'add_new_item'          => __( 'Add New Storyful Leader', 'md-storyful-fse-full' ),
			'add_new'               => __( 'Add New', 'md-storyful-fse-full' ),
			'new_item'              => __( 'New Storyful Leader', 'md-storyful-fse-full' ),
			'edit_item'             => __( 'Edit Storyful Leader', 'md-storyful-fse-full' ),
			'update_item'           => __( 'Update Storyful Leader', 'md-storyful-fse-full' ),
			'view_item'             => __( 'View Storyful Leader', 'md-storyful-fse-full' ),
			'view_items'            => __( 'View Storyful Leaders', 'md-storyful-fse-full' ),
			'search_items'          => __( 'Search Storyful Leader', 'md-storyful-fse-full' ),
			'not_found'             => __( 'Not found', 'md-storyful-fse-full' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-storyful-fse-full' ),
			'featured_image'        => __( 'Featured Image', 'md-storyful-fse-full' ),
			'set_featured_image'    => __( 'Set featured image', 'md-storyful-fse-full' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-storyful-fse-full' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-storyful-fse-full' ),
			'insert_into_item'      => __( 'Insert into Storyful Leader', 'md-storyful-fse-full' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Storyful Leader', 'md-storyful-fse-full' ),
			'items_list'            => __( 'Storyful Leaders list', 'md-storyful-fse-full' ),
			'items_list_navigation' => __( 'Storyful Leaders list navigation', 'md-storyful-fse-full' ),
			'filter_items_list'     => __( 'Filter Storyful Leaders list', 'md-storyful-fse-full' ),
		);

		$args = array(
			'label'               => __( 'Storyful Leaders', 'md-storyful-fse-full' ),
			'description'         => __( 'The storyful leaders', 'md-storyful-fse-full' ),
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

		register_post_type( 'storyful_leaders', $args );
	}

	/**
	 * Register Custom Post Type Storyful Testimonials.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_storyful_testimonials() {
		
		$labels = array(
			'name'                  => _x( 'Storyful Testimonials', 'Post Type General Name', 'md-storyful-fse-full' ),
			'singular_name'         => _x( 'Storyful Testimonial', 'Post Type Singular Name', 'md-storyful-fse-full' ),
			'menu_name'             => _x( 'Storyful Testimonials', 'Admin Menu text', 'md-storyful-fse-full' ),
			'name_admin_bar'        => _x( 'Storyful Testimonial', 'Add New on Toolbar', 'md-storyful-fse-full' ),
			'archives'              => __( 'Storyful Testimonial Archives', 'md-storyful-fse-full' ),
			'attributes'            => __( 'Storyful Testimonial Attributes', 'md-storyful-fse-full' ),
			'parent_item_colon'     => __( 'Parent Storyful Testimonial:', 'md-storyful-fse-full' ),
			'all_items'             => __( 'All Storyful Testimonials', 'md-storyful-fse-full' ),
			'add_new_item'          => __( 'Add New Storyful Testimonial', 'md-storyful-fse-full' ),
			'add_new'               => __( 'Add New', 'md-storyful-fse-full' ),
			'new_item'              => __( 'New Storyful Testimonial', 'md-storyful-fse-full' ),
			'edit_item'             => __( 'Edit Storyful Testimonial', 'md-storyful-fse-full' ),
			'update_item'           => __( 'Update Storyful Testimonial', 'md-storyful-fse-full' ),
			'view_item'             => __( 'View Storyful Testimonial', 'md-storyful-fse-full' ),
			'view_items'            => __( 'View Storyful Testimonials', 'md-storyful-fse-full' ),
			'search_items'          => __( 'Search Storyful Testimonial', 'md-storyful-fse-full' ),
			'not_found'             => __( 'Not found', 'md-storyful-fse-full' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-storyful-fse-full' ),
			'featured_image'        => __( 'Featured Image', 'md-storyful-fse-full' ),
			'set_featured_image'    => __( 'Set featured image', 'md-storyful-fse-full' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-storyful-fse-full' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-storyful-fse-full' ),
			'insert_into_item'      => __( 'Insert into Storyful Testimonial', 'md-storyful-fse-full' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Storyful Testimonial', 'md-storyful-fse-full' ),
			'items_list'            => __( 'Storyful Testimonials list', 'md-storyful-fse-full' ),
			'items_list_navigation' => __( 'Storyful Testimonials list navigation', 'md-storyful-fse-full' ),
			'filter_items_list'     => __( 'Filter Storyful Testimonials list', 'md-storyful-fse-full' ),
		);

		$args = array(
			'label'               => __( 'Storyful Testimonials', 'md-storyful-fse-full' ),
			'description'         => __( 'The storyful testimonials', 'md-storyful-fse-full' ),
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

		register_post_type( 'md_testimonials', $args );
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
			__( 'Is Popular Details', 'md-storyful-fse-full' ),
			array( $this, 'popular_post_meta_box_callback' ),
			array( 'resources', 'post' ),
			'normal',
			'high'
		);

		add_meta_box(
			'storyful_history_meta_box',
			__( 'Storyful History Year', 'md-storyful-fse-full' ),
			array( $this, 'storyful_history_meta_box_callback' ),
			array( 'storyful_history' ),
			'normal',
			'high'
		);

		add_meta_box(
			'storyful_leaders_meta_box',
			__( 'Storyful Leader Details', 'md-storyful-fse-full' ),
			array( $this, 'storyful_leaders_meta_box_callback' ),
			array( 'storyful_leaders' ),
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
		esc_html_e( 'Is Popular', 'md-storyful-fse-full' );
		echo '</label>';
		echo '<select id="post_is_popular" name="post_is_popular">';
		echo '<option value="yes" ' . selected( $post_is_popular, 'yes', false ) . '>' . esc_html__( 'Yes', 'md-storyful-fse-full' ) . '</option>';
		echo '<option value="no" ' . selected( $post_is_popular, 'no', false ) . '>' . esc_html__( 'No', 'md-storyful-fse-full' ) . '</option>';
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
	public function storyful_history_meta_box_callback( $post ) {
		// Add nonce for security and authentication.
		wp_nonce_field( 'storyful_history_meta_box', 'storyful_history_meta_box_nonce' );

		// Retrieve an existing value from the database.
		$storyful_history_year = get_post_meta( $post->ID, 'storyful_history_year', true );

		// Form fields.
		echo '<label for="storyful_history_year">';
		esc_html_e( 'Year', 'md-storyful-fse-full' );
		echo '</label>';
		echo '<input type="text" id="storyful_history_year" name="storyful_history_year" value="' . esc_attr( $storyful_history_year ) . '">';
	}

	/**
	 * Save meta box content.
	 *
	 * @param int $post_id Post ID.
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function save_storyful_history_meta_box( $post_id ) {
		// Add nonce for security and authentication.
		$nonce_name   = isset( $_POST['storyful_history_meta_box_nonce'] ) ? sanitize_term_field( 'storyful_history_meta_box_nonce', $_POST['storyful_history_meta_box_nonce'], $post_id, 'post', 'raw' ) : '';
		$nonce_action = 'storyful_history_meta_box';

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
		$storyful_history_year = isset( $_POST['storyful_history_year'] ) ? sanitize_text_field( $_POST['storyful_history_year'] ) : '';

		// Update the meta field in the database.
		update_post_meta( $post_id, 'storyful_history_year', $storyful_history_year );
	}

	/**
	 * Meta box callback function.
	 *
	 * @param object $post Post object.
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function storyful_leaders_meta_box_callback( $post ) {
		// Add nonce for security and authentication.
		wp_nonce_field( 'storyful_leaders_meta_box', 'storyful_leaders_meta_box_nonce' );

		// Retrieve an existing value from the database.
		$storyful_leader_designation = get_post_meta( $post->ID, 'storyful_leader_designation', true );
		$storyful_leader_linked_in = get_post_meta( $post->ID, 'storyful_leader_linked_in', true );

		// Form fields.
		echo '<label for="storyful_leader_designation">';
		esc_html_e( 'Designation', 'md-storyful-fse-full' );
		echo '</label>';
		echo '<input type="text" id="storyful_leader_designation" name="storyful_leader_designation" value="' . esc_attr( $storyful_leader_designation ) . '">';

		echo '<label for="storyful_leader_linked_in">';
		esc_html_e( 'Linked In', 'md-storyful-fse-full' );
		echo '</label>';
		echo '<input type="text" id="storyful_leader_linked_in" name="storyful_leader_linked_in" value="' . esc_attr( $storyful_leader_linked_in ) . '">';
	}

	/**
	 * Save meta box content.
	 *
	 * @param int $post_id Post ID.
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function save_storyful_leaders_meta_box( $post_id ) {
		// Add nonce for security and authentication.
		$nonce_name   = isset( $_POST['storyful_leaders_meta_box_nonce'] ) ? sanitize_term_field( 'storyful_leaders_meta_box_nonce', $_POST['storyful_leaders_meta_box_nonce'], $post_id, 'post', 'raw' ) : '';
		$nonce_action = 'storyful_leaders_meta_box';

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
		$storyful_leader_designation = isset( $_POST['storyful_leader_designation'] ) ? sanitize_text_field( $_POST['storyful_leader_designation'] ) : '';
		$storyful_leader_linked_in = isset( $_POST['storyful_leader_linked_in'] ) ? sanitize_text_field( $_POST['storyful_leader_linked_in'] ) : '';

		// Update the meta field in the database.
		update_post_meta( $post_id, 'storyful_leader_designation', $storyful_leader_designation );
		update_post_meta( $post_id, 'storyful_leader_linked_in', $storyful_leader_linked_in );
	}

}

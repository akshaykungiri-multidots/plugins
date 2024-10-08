<?php
/**
 * Register Post Types
 *
 * @package md-efi-fse-full
 */

namespace MD_EFI_FSE_FULL\Includes;

use MD_EFI_FSE_FULL\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_resource_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_press_release_cpt' ), 0 );

		// Add custom meta box for press releases.
		add_action( 'add_meta_boxes', array( $this, 'add_press_release_meta_box' ) );

		// Save meta box content.
		add_action( 'save_post', array( $this, 'save_press_release_meta_box' ) );
	}

	/**
	 * Register Custom Post Type Resource.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_resource_cpt() {

		$labels = array(
			'name'                  => _x( 'Resources', 'Post Type General Name', 'md-efi-fse-full' ),
			'singular_name'         => _x( 'Resource', 'Post Type Singular Name', 'md-efi-fse-full' ),
			'menu_name'             => _x( 'Resources', 'Admin Menu text', 'md-efi-fse-full' ),
			'name_admin_bar'        => _x( 'Resource', 'Add New on Toolbar', 'md-efi-fse-full' ),
			'archives'              => __( 'Resource Archives', 'md-efi-fse-full' ),
			'attributes'            => __( 'Resource Attributes', 'md-efi-fse-full' ),
			'parent_item_colon'     => __( 'Parent Resource:', 'md-efi-fse-full' ),
			'all_items'             => __( 'All Resources', 'md-efi-fse-full' ),
			'add_new_item'          => __( 'Add New Resource', 'md-efi-fse-full' ),
			'add_new'               => __( 'Add New', 'md-efi-fse-full' ),
			'new_item'              => __( 'New Resource', 'md-efi-fse-full' ),
			'edit_item'             => __( 'Edit Resource', 'md-efi-fse-full' ),
			'update_item'           => __( 'Update Resource', 'md-efi-fse-full' ),
			'view_item'             => __( 'View Resource', 'md-efi-fse-full' ),
			'view_items'            => __( 'View Resources', 'md-efi-fse-full' ),
			'search_items'          => __( 'Search Resource', 'md-efi-fse-full' ),
			'not_found'             => __( 'Not found', 'md-efi-fse-full' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-efi-fse-full' ),
			'featured_image'        => __( 'Featured Image', 'md-efi-fse-full' ),
			'set_featured_image'    => __( 'Set featured image', 'md-efi-fse-full' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-efi-fse-full' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-efi-fse-full' ),
			'insert_into_item'      => __( 'Insert into Resource', 'md-efi-fse-full' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Resource', 'md-efi-fse-full' ),
			'items_list'            => __( 'Resources list', 'md-efi-fse-full' ),
			'items_list_navigation' => __( 'Resources list navigation', 'md-efi-fse-full' ),
			'filter_items_list'     => __( 'Filter Resources list', 'md-efi-fse-full' ),
		);
		$args   = array(
			'label'               => __( 'Resource', 'md-efi-fse-full' ),
			'description'         => __( 'The resources', 'md-efi-fse-full' ),
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
			'taxonomies'          => array( 'industry', 'product', 'resource_type' ),
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
	 * Register Custom Post Type Press Release.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_press_release_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Press Releases', 'Post Type General Name', 'md-efi-fse-full' ),
			'singular_name'         => _x( 'Press Release', 'Post Type Singular Name', 'md-efi-fse-full' ),
			'menu_name'             => _x( 'Press Releases', 'Admin Menu text', 'md-efi-fse-full' ),
			'name_admin_bar'        => _x( 'Press Release', 'Add New on Toolbar', 'md-efi-fse-full' ),
			'archives'              => __( 'Press Release Archives', 'md-efi-fse-full' ),
			'attributes'            => __( 'Press Release Attributes', 'md-efi-fse-full' ),
			'parent_item_colon'     => __( 'Parent Press Release:', 'md-efi-fse-full' ),
			'all_items'             => __( 'All Press Releases', 'md-efi-fse-full' ),
			'add_new_item'          => __( 'Add New Press Release', 'md-efi-fse-full' ),
			'add_new'               => __( 'Add New', 'md-efi-fse-full' ),
			'new_item'              => __( 'New Press Release', 'md-efi-fse-full' ),
			'edit_item'             => __( 'Edit Press Release', 'md-efi-fse-full' ),
			'update_item'           => __( 'Update Press Release', 'md-efi-fse-full' ),
			'view_item'             => __( 'View Press Release', 'md-efi-fse-full' ),
			'view_items'            => __( 'View Press Releases', 'md-efi-fse-full' ),
			'search_items'          => __( 'Search Press Release', 'md-efi-fse-full' ),
			'not_found'             => __( 'Not found', 'md-efi-fse-full' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-efi-fse-full' ),
			'featured_image'        => __( 'Featured Image', 'md-efi-fse-full' ),
			'set_featured_image'    => __( 'Set featured image', 'md-efi-fse-full' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-efi-fse-full' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-efi-fse-full' ),
			'insert_into_item'      => __( 'Insert into Press Release', 'md-efi-fse-full' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Press Release', 'md-efi-fse-full' ),
			'items_list'            => __( 'Press Releases list', 'md-efi-fse-full' ),
			'items_list_navigation' => __( 'Press Releases list navigation', 'md-efi-fse-full' ),
			'filter_items_list'     => __( 'Filter Press Releases list', 'md-efi-fse-full' ),
		);
		$args   = array(
			'label'               => __( 'Press Release', 'md-efi-fse-full' ),
			'description'         => __( 'The press releases', 'md-efi-fse-full' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-megaphone',
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
			'taxonomies'          => array( 'industry', 'product', 'resource_type' ),
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

		register_post_type( 'press-releases', $args );
	}

	/**
	 * Add meta box for press releases.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function add_press_release_meta_box() {
		add_meta_box(
			'press-release-meta-box',
			__( 'Press Release Details', 'md-efi-fse-full' ),
			array( $this, 'press_release_meta_box_callback' ),
			'press-releases',
			'normal',
			'high'
		);
	}

	/**
	 * Press release meta box callback.
	 *
	 * @param object $post Post object.
	 * @return void
	 * @since 1.0.0
	 */
	public function press_release_meta_box_callback( $post ) {
		// Add nonce for security and authentication.
		wp_nonce_field( 'press_release_meta_box', 'press_release_meta_box_nonce' );

		// Retrieve an existing value from the database.
		$press_release_date = get_post_meta( $post->ID, 'press_release_date', true );

		// Set default values.
		if ( empty( $press_release_date ) ) {
			$press_release_date = '';
		}

		// Form fields.
		echo '<label for="press_release_date">';
		esc_html_e( 'Press Release Date', 'md-efi-fse-full' );
		echo '</label>';
		echo '<input type="date" id="press_release_date" name="press_release_date" value="' . esc_attr( $press_release_date ) . '" size="25" />';
	}

	/**
	 * Save meta box content.
	 *
	 * @param int $post_id Post ID.
	 * @return void
	 * @since 1.0.0
	 */
	public function save_press_release_meta_box( $post_id ) {
		// Add nonce for security and authentication.
		$nonce_name   = isset( $_POST['press_release_meta_box_nonce'] ) ? $_POST['press_release_meta_box_nonce'] : '';
		$nonce_action = 'press_release_meta_box';

		// Check if nonce is set.
		if ( ! isset( $nonce_name ) ) {
			return;
		}

		// Verify that the nonce is valid.
		if ( ! wp_verify_nonce( $nonce_name, $nonce_action ) ) {
			return;
		}

		// Check if the current user has permission to edit the post.
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		// Check if the input is a valid date.
		$press_release_date = isset( $_POST['press_release_date'] ) ? sanitize_text_field( $_POST['press_release_date'] ) : '';

		// Update the meta field in the database.
		update_post_meta( $post_id, 'press_release_date', $press_release_date );
	}
}

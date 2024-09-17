<?php
/**
 * Register Post Types
 *
 * @package md-fiery-shop
 */

namespace MD_FIERY_SHOP\Includes;

use MD_FIERY_SHOP\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_event_cpt' ), 0 );

		// Add custom meta box for resources.
		add_action( 'add_meta_boxes', array( $this, 'add_event_meta_box' ) );

		// Save meta box content.
		add_action( 'save_post', array( $this, 'save_event_meta_box' ) );
	}

	/**
	 * Register Custom Post Type Event.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_event_cpt() {

		$labels = array(
			'name'                  => _x( 'Events', 'Post Type General Name', 'md-fiery-shop' ),
			'singular_name'         => _x( 'Event', 'Post Type Singular Name', 'md-fiery-shop' ),
			'menu_name'             => _x( 'Events', 'Admin Menu text', 'md-fiery-shop' ),
			'name_admin_bar'        => _x( 'Event', 'Add New on Toolbar', 'md-fiery-shop' ),
			'archives'              => __( 'Event Archives', 'md-fiery-shop' ),
			'attributes'            => __( 'Event Attributes', 'md-fiery-shop' ),
			'parent_item_colon'     => __( 'Parent Event:', 'md-fiery-shop' ),
			'all_items'             => __( 'All Events', 'md-fiery-shop' ),
			'add_new_item'          => __( 'Add New Event', 'md-fiery-shop' ),
			'add_new'               => __( 'Add New', 'md-fiery-shop' ),
			'new_item'              => __( 'New Event', 'md-fiery-shop' ),
			'edit_item'             => __( 'Edit Event', 'md-fiery-shop' ),
			'update_item'           => __( 'Update Event', 'md-fiery-shop' ),
			'view_item'             => __( 'View Event', 'md-fiery-shop' ),
			'view_items'            => __( 'View Events', 'md-fiery-shop' ),
			'search_items'          => __( 'Search Event', 'md-fiery-shop' ),
			'not_found'             => __( 'Not found', 'md-fiery-shop' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-fiery-shop' ),
			'featured_image'        => __( 'Featured Image', 'md-fiery-shop' ),
			'set_featured_image'    => __( 'Set featured image', 'md-fiery-shop' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-fiery-shop' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-fiery-shop' ),
			'insert_into_item'      => __( 'Insert into Event', 'md-fiery-shop' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Event', 'md-fiery-shop' ),
			'items_list'            => __( 'Events list', 'md-fiery-shop' ),
			'items_list_navigation' => __( 'Events list navigation', 'md-fiery-shop' ),
			'filter_items_list'     => __( 'Filter Events list', 'md-fiery-shop' ),
		);
		$args   = array(
			'label'               => __( 'Event', 'md-fiery-shop' ),
			'description'         => __( 'The events', 'md-fiery-shop' ),
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

		register_post_type( 'events', $args );

		// Products Post Type
		$labels = array(
			'name'                  => _x( 'Products', 'Post Type General Name', 'md-fiery-shop' ),
			'singular_name'         => _x( 'Product', 'Post Type Singular Name', 'md-fiery-shop' ),
			'menu_name'             => _x( 'Products', 'Admin Menu text', 'md-fiery-shop' ),
			'name_admin_bar'        => _x( 'Product', 'Add New on Toolbar', 'md-fiery-shop' ),
			'archives'              => __( 'Product Archives', 'md-fiery-shop' ),
			'attributes'            => __( 'Product Attributes', 'md-fiery-shop' ),
			'parent_item_colon'     => __( 'Parent Product:', 'md-fiery-shop' ),
			'all_items'             => __( 'All Products', 'md-fiery-shop' ),
			'add_new_item'          => __( 'Add New Product', 'md-fiery-shop' ),
			'add_new'               => __( 'Add New', 'md-fiery-shop' ),
			'new_item'              => __( 'New Product', 'md-fiery-shop' ),
			'edit_item'             => __( 'Edit Product', 'md-fiery-shop' ),
			'update_item'           => __( 'Update Product', 'md-fiery-shop' ),
			'view_item'             => __( 'View Product', 'md-fiery-shop' ),
			'view_items'            => __( 'View Products', 'md-fiery-shop' ),
			'search_items'          => __( 'Search Product', 'md-fiery-shop' ),
			'not_found'             => __( 'Not found', 'md-fiery-shop' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-fiery-shop' ),
			'featured_image'        => __( 'Featured Image', 'md-fiery-shop' ),
			'set_featured_image'    => __( 'Set featured image', 'md-fiery-shop' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-fiery-shop' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-fiery-shop' ),
			'insert_into_item'      => __( 'Insert into Product', 'md-fiery-shop' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Product', 'md-fiery-shop' ),
			'items_list'            => __( 'Products list', 'md-fiery-shop' ),
			'items_list_navigation' => __( 'Products list navigation', 'md-fiery-shop' ),
			'filter_items_list'     => __( 'Filter Products list', 'md-fiery-shop' ),
		);
		$args   = array(
			'label'               => __( 'Product', 'md-fiery-shop' ),
			'description'         => __( 'The products', 'md-fiery-shop' ),
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

		register_post_type( 'products', $args );
	}

	/**
	 * Add meta box for resources.
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function add_event_meta_box() {
		add_meta_box(
			'event_meta_box',
			__( 'Event Details', 'md-storyful-fse' ),
			array( $this, 'event_meta_box_callback' ),
			array( 'events' ),
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
	public function event_meta_box_callback( $post ) {
		// Add nonce for security and authentication.
		wp_nonce_field( 'event_meta_box', 'event_meta_box_nonce' );

		// Get meta value for Webstie URL.
		$website_url = get_post_meta( $post->ID, 'website_url', true );

		// Display form.
		?>
		<p>
			<label for="website_url"><?php esc_html_e( 'Website URL', 'md-storyful-fse' ); ?></label>
			<input class="widefat" type="text" name="website_url" id="website_url" value="<?php echo esc_attr( $website_url ); ?>">
		</p>
		<?php

	}

	/**
	 * Save meta box content.
	 *
	 * @param int $post_id Post ID.
	 * 
	 * @return void
	 * @since 1.0.0
	 */
	public function save_event_meta_box( $post_id ) {
		// Add nonce for security and authentication.
		$nonce_name   = isset( $_POST['event_meta_box_nonce'] ) ? sanitize_term_field( 'event_meta_box_nonce', $_POST['event_meta_box_nonce'], $post_id, 'post', 'raw' ) : '';
		$nonce_action = 'event_meta_box';

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
		$website_url = isset( $_POST['website_url'] ) ? sanitize_text_field( $_POST['website_url'] ) : '';

		// Update the meta field in the database.
		update_post_meta( $post_id, 'website_url', $website_url );
	}
}

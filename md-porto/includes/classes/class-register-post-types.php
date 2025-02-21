<?php
/**
 * Register Post Types
 *
 * @package md-porto
 */

declare( strict_types = 1 );

namespace MD_PORTO\Includes;

use MD_PORTO\Includes\Traits\Singleton;

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
	protected function setup_hooks(): void {

		/**
		 * Actions.
		 */
		add_action( 'init', array( $this, 'register_block_slider_cpt' ) );

		add_action('init', array($this, 'register_service_cpt'), 0);
	}

	/**
	 * Register Custom Post Type Block Slider.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_block_slider_cpt(): void {

		$labels = array(
			'name'               => esc_html__( 'Block Sliders', 'md-porto' ),
			'singular_name'      => esc_html__( 'Block Slider', 'md-porto' ),
			'add_new'            => esc_html__( 'Add New', 'md-porto' ),
			'add_new_item'       => esc_html__( 'Add New Block Slider', 'md-porto' ),
			'edit_item'          => esc_html__( 'Edit Block Slider', 'md-porto' ),
			'new_item'           => esc_html__( 'New Block Slider', 'md-porto' ),
			'view_item'          => esc_html__( 'View Block Slider', 'md-porto' ),
			'search_items'       => esc_html__( 'Search Block Sliders', 'md-porto' ),
			'not_found'          => esc_html__( 'No Block Sliders found', 'md-porto' ),
			'not_found_in_trash' => esc_html__( 'No Block Sliders found in Trash', 'md-porto' ),
			'parent_item_colon'  => esc_html__( 'Parent Block Slider:', 'md-porto' ),
			'menu_name'          => esc_html__( 'Block Sliders', 'md-porto' ),
		);

		$args = array(
			'labels'              => $labels,
			'hierarchical'        => false,
			'description'         => esc_html__( 'Block Sliders', 'md-porto' ),
			'supports'            => array( 'title', 'editor', 'thumbnail', 'revisions' ),
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'menu_position'       => 5,
			'menu_icon'           => 'dashicons-images-alt2',
			'can_export'          => true,
			'has_archive'         => false,
			'exclude_from_search' => true,
			'publicly_queryable'  => false,
			'capability_type'     => 'post',
			'show_in_rest'        => true,
		);

		register_post_type( 'block_slider', $args );
	}

	/**
	 * Register Custom Post Type Services.
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
}

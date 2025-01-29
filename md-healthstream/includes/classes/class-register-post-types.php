<?php
/**
 * Register Post Types
 *
 * @package md-healthstream
 */

declare( strict_types = 1 );

namespace MD_HEALTHSTREAM\Includes;

use MD_HEALTHSTREAM\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_resources_cpt' ), 0 );
	}

	/**
	 * Register Custom Post Type Resource.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_resources_cpt(): void {

		$labels = array(
			'name'                  => _x( 'Resources', 'Post Type General Name', 'md-healthstream' ),
			'singular_name'         => _x( 'Resource', 'Post Type Singular Name', 'md-healthstream' ),
			'menu_name'             => _x( 'Resources', 'Admin Menu text', 'md-healthstream' ),
			'name_admin_bar'        => _x( 'Resource', 'Add New on Toolbar', 'md-healthstream' ),
			'archives'              => __( 'Resource Archives', 'md-healthstream' ),
			'attributes'            => __( 'Resource Attributes', 'md-healthstream' ),
			'parent_item_colon'     => __( 'Parent Resource:', 'md-healthstream' ),
			'all_items'             => __( 'All Resources', 'md-healthstream' ),
			'add_new_item'          => __( 'Add New Resource', 'md-healthstream' ),
			'add_new'               => __( 'Add New', 'md-healthstream' ),
			'new_item'              => __( 'New Resource', 'md-healthstream' ),
			'edit_item'             => __( 'Edit Resource', 'md-healthstream' ),
			'update_item'           => __( 'Update Resource', 'md-healthstream' ),
			'view_item'             => __( 'View Resource', 'md-healthstream' ),
			'view_items'            => __( 'View Resources', 'md-healthstream' ),
			'search_items'          => __( 'Search Resource', 'md-healthstream' ),
			'not_found'             => __( 'Not found', 'md-healthstream' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-healthstream' ),
			'featured_image'        => __( 'Featured Image', 'md-healthstream' ),
			'set_featured_image'    => __( 'Set featured image', 'md-healthstream' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-healthstream' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-healthstream' ),
			'insert_into_item'      => __( 'Insert into Resource', 'md-healthstream' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Resource', 'md-healthstream' ),
			'items_list'            => __( 'Resources list', 'md-healthstream' ),
			'items_list_navigation' => __( 'Resources list navigation', 'md-healthstream' ),
			'filter_items_list'     => __( 'Filter Resources list', 'md-healthstream' ),
		);
		$args   = array(
			'label'               => __( 'Resource', 'md-healthstream' ),
			'description'         => __( 'The resources', 'md-healthstream' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-book-alt',
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
}

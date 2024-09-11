<?php
/**
 * Register Post Types
 *
 * @package md-efi
 */

namespace MD_EFI\Includes;

use MD_EFI\Includes\Traits\Singleton;

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
	}

	/**
	 * Register Custom Post Type Resource.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_resource_cpt() {

		$labels = array(
			'name'                  => _x( 'Resources', 'Post Type General Name', 'md-efi' ),
			'singular_name'         => _x( 'Resource', 'Post Type Singular Name', 'md-efi' ),
			'menu_name'             => _x( 'Resources', 'Admin Menu text', 'md-efi' ),
			'name_admin_bar'        => _x( 'Resource', 'Add New on Toolbar', 'md-efi' ),
			'archives'              => __( 'Resource Archives', 'md-efi' ),
			'attributes'            => __( 'Resource Attributes', 'md-efi' ),
			'parent_item_colon'     => __( 'Parent Resource:', 'md-efi' ),
			'all_items'             => __( 'All Resources', 'md-efi' ),
			'add_new_item'          => __( 'Add New Resource', 'md-efi' ),
			'add_new'               => __( 'Add New', 'md-efi' ),
			'new_item'              => __( 'New Resource', 'md-efi' ),
			'edit_item'             => __( 'Edit Resource', 'md-efi' ),
			'update_item'           => __( 'Update Resource', 'md-efi' ),
			'view_item'             => __( 'View Resource', 'md-efi' ),
			'view_items'            => __( 'View Resources', 'md-efi' ),
			'search_items'          => __( 'Search Resource', 'md-efi' ),
			'not_found'             => __( 'Not found', 'md-efi' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-efi' ),
			'featured_image'        => __( 'Featured Image', 'md-efi' ),
			'set_featured_image'    => __( 'Set featured image', 'md-efi' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-efi' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-efi' ),
			'insert_into_item'      => __( 'Insert into Resource', 'md-efi' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Resource', 'md-efi' ),
			'items_list'            => __( 'Resources list', 'md-efi' ),
			'items_list_navigation' => __( 'Resources list navigation', 'md-efi' ),
			'filter_items_list'     => __( 'Filter Resources list', 'md-efi' ),
		);
		$args   = array(
			'label'               => __( 'Resource', 'md-efi' ),
			'description'         => __( 'The resources', 'md-efi' ),
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
}

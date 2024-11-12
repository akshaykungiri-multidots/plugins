<?php
/**
 * Register Post Types
 *
 * @package md-pointcentral-fse
 */

namespace MD_POINTCENTRAL_FSE\Includes;

use MD_POINTCENTRAL_FSE\Includes\Traits\Singleton;

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
			'name'                  => _x( 'Resources', 'Post Type General Name', 'md-pointcentral-fse' ),
			'singular_name'         => _x( 'Resource', 'Post Type Singular Name', 'md-pointcentral-fse' ),
			'menu_name'             => _x( 'Resources', 'Admin Menu text', 'md-pointcentral-fse' ),
			'name_admin_bar'        => _x( 'Resource', 'Add New on Toolbar', 'md-pointcentral-fse' ),
			'archives'              => __( 'Resource Archives', 'md-pointcentral-fse' ),
			'attributes'            => __( 'Resource Attributes', 'md-pointcentral-fse' ),
			'parent_item_colon'     => __( 'Parent Resource:', 'md-pointcentral-fse' ),
			'all_items'             => __( 'All Resources', 'md-pointcentral-fse' ),
			'add_new_item'          => __( 'Add New Resource', 'md-pointcentral-fse' ),
			'add_new'               => __( 'Add New', 'md-pointcentral-fse' ),
			'new_item'              => __( 'New Resource', 'md-pointcentral-fse' ),
			'edit_item'             => __( 'Edit Resource', 'md-pointcentral-fse' ),
			'update_item'           => __( 'Update Resource', 'md-pointcentral-fse' ),
			'view_item'             => __( 'View Resource', 'md-pointcentral-fse' ),
			'view_items'            => __( 'View Resources', 'md-pointcentral-fse' ),
			'search_items'          => __( 'Search Resource', 'md-pointcentral-fse' ),
			'not_found'             => __( 'Not found', 'md-pointcentral-fse' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-pointcentral-fse' ),
			'featured_image'        => __( 'Featured Image', 'md-pointcentral-fse' ),
			'set_featured_image'    => __( 'Set featured image', 'md-pointcentral-fse' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-pointcentral-fse' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-pointcentral-fse' ),
			'insert_into_item'      => __( 'Insert into Resource', 'md-pointcentral-fse' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Resource', 'md-pointcentral-fse' ),
			'items_list'            => __( 'Resources list', 'md-pointcentral-fse' ),
			'items_list_navigation' => __( 'Resources list navigation', 'md-pointcentral-fse' ),
			'filter_items_list'     => __( 'Filter Resources list', 'md-pointcentral-fse' ),
		);
		$args   = array(
			'label'               => __( 'Resource', 'md-pointcentral-fse' ),
			'description'         => __( 'The resources', 'md-pointcentral-fse' ),
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

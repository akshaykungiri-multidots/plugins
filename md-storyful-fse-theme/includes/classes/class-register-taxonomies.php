<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-storyful-fse
 */

namespace MD_STORYFUL_FSE\Includes;

use MD_STORYFUL_FSE\Includes\Traits\Singleton;

/**
 * Class for register taxonomies.
 */
class Register_Taxonomies {
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
		add_action( 'init', array( $this, 'register_resource_taxonomy' ) );
	}

	/**
	 * Register Taxonomy For Resources.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_resource_taxonomy() {

		$labels = array(
			'name'              => _x( 'Resource Type', 'taxonomy general name', 'md-storyful-fse' ),
			'singular_name'     => _x( 'Resource Type', 'taxonomy singular name', 'md-storyful-fse' ),
			'search_items'      => __( 'Search Resource Type', 'md-storyful-fse' ),
			'all_items'         => __( 'All Resource Type', 'md-storyful-fse' ),
			'parent_item'       => __( 'Parent Resource Type', 'md-storyful-fse' ),
			'parent_item_colon' => __( 'Parent Resource Type:', 'md-storyful-fse' ),
			'edit_item'         => __( 'Edit Resource Type', 'md-storyful-fse' ),
			'update_item'       => __( 'Update Resource Type', 'md-storyful-fse' ),
			'add_new_item'      => __( 'Add New Resource Type', 'md-storyful-fse' ),
			'new_item_name'     => __( 'New Resource Type Name', 'md-storyful-fse' ),
			'menu_name'         => __( 'Resource Type', 'md-storyful-fse' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Resource Type', 'md-storyful-fse' ),
			'hierarchical'       => true,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_nav_menus'  => true,
			'show_tagcloud'      => true,
			'show_in_quick_edit' => true,
			'show_admin_column'  => true,
			'show_in_rest'       => true,
		);
		register_taxonomy( 'resource-type', array( 'resources' ), $args );

		$labels = array(
			'name'              => _x( 'Resource Categories', 'taxonomy general name', 'md-storyful-fse' ),
			'singular_name'     => _x( 'Resource Category', 'taxonomy singular name', 'md-storyful-fse' ),
			'search_items'      => __( 'Search Resource Categories', 'md-storyful-fse' ),
			'all_items'         => __( 'All Resource Categories', 'md-storyful-fse' ),
			'parent_item'       => __( 'Parent Resource Categories', 'md-storyful-fse' ),
			'parent_item_colon' => __( 'Parent Resource Categories:', 'md-storyful-fse' ),
			'edit_item'         => __( 'Edit Resource Categories', 'md-storyful-fse' ),
			'update_item'       => __( 'Update Resource Categories', 'md-storyful-fse' ),
			'add_new_item'      => __( 'Add New Resource Categories', 'md-storyful-fse' ),
			'new_item_name'     => __( 'New Resource Categories Name', 'md-storyful-fse' ),
			'menu_name'         => __( 'Resource Categories', 'md-storyful-fse' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Resource Categories', 'md-storyful-fse' ),
			'hierarchical'       => true,
			'public'             => true,
			'publicly_queryable' => true,
			'show_ui'            => true,
			'show_in_menu'       => true,
			'show_in_nav_menus'  => true,
			'show_tagcloud'      => true,
			'show_in_quick_edit' => true,
			'show_admin_column'  => true,
			'show_in_rest'       => true,
		);
		register_taxonomy( 'resource-category', array( 'resources' ), $args );
	}
}

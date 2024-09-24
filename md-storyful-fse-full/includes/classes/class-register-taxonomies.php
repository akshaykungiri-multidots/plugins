<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-storyful-fse-full
 */

namespace MD_STORYFUL_FSE_FULL\Includes;

use MD_STORYFUL_FSE_FULL\Includes\Traits\Singleton;

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
			'name'              => _x( 'Resource Type', 'taxonomy general name', 'md-storyful-fse-full' ),
			'singular_name'     => _x( 'Resource Type', 'taxonomy singular name', 'md-storyful-fse-full' ),
			'search_items'      => __( 'Search Resource Type', 'md-storyful-fse-full' ),
			'all_items'         => __( 'All Resource Type', 'md-storyful-fse-full' ),
			'parent_item'       => __( 'Parent Resource Type', 'md-storyful-fse-full' ),
			'parent_item_colon' => __( 'Parent Resource Type:', 'md-storyful-fse-full' ),
			'edit_item'         => __( 'Edit Resource Type', 'md-storyful-fse-full' ),
			'update_item'       => __( 'Update Resource Type', 'md-storyful-fse-full' ),
			'add_new_item'      => __( 'Add New Resource Type', 'md-storyful-fse-full' ),
			'new_item_name'     => __( 'New Resource Type Name', 'md-storyful-fse-full' ),
			'menu_name'         => __( 'Resource Type', 'md-storyful-fse-full' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Resource Type', 'md-storyful-fse-full' ),
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
			'name'              => _x( 'Resource Categories', 'taxonomy general name', 'md-storyful-fse-full' ),
			'singular_name'     => _x( 'Resource Category', 'taxonomy singular name', 'md-storyful-fse-full' ),
			'search_items'      => __( 'Search Resource Categories', 'md-storyful-fse-full' ),
			'all_items'         => __( 'All Resource Categories', 'md-storyful-fse-full' ),
			'parent_item'       => __( 'Parent Resource Categories', 'md-storyful-fse-full' ),
			'parent_item_colon' => __( 'Parent Resource Categories:', 'md-storyful-fse-full' ),
			'edit_item'         => __( 'Edit Resource Categories', 'md-storyful-fse-full' ),
			'update_item'       => __( 'Update Resource Categories', 'md-storyful-fse-full' ),
			'add_new_item'      => __( 'Add New Resource Categories', 'md-storyful-fse-full' ),
			'new_item_name'     => __( 'New Resource Categories Name', 'md-storyful-fse-full' ),
			'menu_name'         => __( 'Resource Categories', 'md-storyful-fse-full' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Resource Categories', 'md-storyful-fse-full' ),
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

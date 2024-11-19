<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-anitian-fse-v2
 */

namespace MD_ANITIAN_FSE_V2\Includes;

use MD_ANITIAN_FSE_V2\Includes\Traits\Singleton;

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

		add_action( 'init', array( $this, 'register_leadership_taxonomy' ) );
	}

	/**
	 * Register Taxonomy For Resources.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_resource_taxonomy() {

		$labels = array(
			'name'              => _x( 'Resource Type', 'taxonomy general name', 'md-anitian-fse-v2' ),
			'singular_name'     => _x( 'Resource Type', 'taxonomy singular name', 'md-anitian-fse-v2' ),
			'search_items'      => __( 'Search Resource Type', 'md-anitian-fse-v2' ),
			'all_items'         => __( 'All Resource Type', 'md-anitian-fse-v2' ),
			'parent_item'       => __( 'Parent Resource Type', 'md-anitian-fse-v2' ),
			'parent_item_colon' => __( 'Parent Resource Type:', 'md-anitian-fse-v2' ),
			'edit_item'         => __( 'Edit Resource Type', 'md-anitian-fse-v2' ),
			'update_item'       => __( 'Update Resource Type', 'md-anitian-fse-v2' ),
			'add_new_item'      => __( 'Add New Resource Type', 'md-anitian-fse-v2' ),
			'new_item_name'     => __( 'New Resource Type Name', 'md-anitian-fse-v2' ),
			'menu_name'         => __( 'Resource Type', 'md-anitian-fse-v2' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Resource Type', 'md-anitian-fse-v2' ),
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
	}

	/**
	 * Register Taxonomy For Leadership.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_leadership_taxonomy() {
		
		$labels = array(
			'name'              => _x( 'Leadership Type', 'taxonomy general name', 'md-anitian-fse-v2' ),
			'singular_name'     => _x( 'Leadership Type', 'taxonomy singular name', 'md-anitian-fse-v2' ),
			'search_items'      => __( 'Search Leadership Type', 'md-anitian-fse-v2' ),
			'all_items'         => __( 'All Leadership Type', 'md-anitian-fse-v2' ),
			'parent_item'       => __( 'Parent Leadership Type', 'md-anitian-fse-v2' ),
			'parent_item_colon' => __( 'Parent Leadership Type:', 'md-anitian-fse-v2' ),
			'edit_item'         => __( 'Edit Leadership Type', 'md-anitian-fse-v2' ),
			'update_item'       => __( 'Update Leadership Type', 'md-anitian-fse-v2' ),
			'add_new_item'      => __( 'Add New Leadership Type', 'md-anitian-fse-v2' ),
			'new_item_name'     => __( 'New Leadership Type Name', 'md-anitian-fse-v2' ),
			'menu_name'         => __( 'Leadership Type', 'md-anitian-fse-v2' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Leadership Type', 'md-anitian-fse-v2' ),
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
		register_taxonomy( 'leadership-type', array( 'leaderships' ), $args );
	}
}

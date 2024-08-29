<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-sutherlandglobal
 */

namespace MD_SUTHERLANDGLOBAL\Includes;

use MD_SUTHERLANDGLOBAL\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_industry_taxonomy' ) );
		add_action( 'init', array( $this, 'register_service_taxonomy' ) );
	}

	/**
	 * Register Taxonomy Industry.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_industry_taxonomy() {

		$labels = array(
			'name'              => _x( 'Industries', 'taxonomy general name', 'md-sutherlandglobal' ),
			'singular_name'     => _x( 'Industry', 'taxonomy singular name', 'md-sutherlandglobal' ),
			'search_items'      => __( 'Search Industries', 'md-sutherlandglobal' ),
			'all_items'         => __( 'All Industries', 'md-sutherlandglobal' ),
			'parent_item'       => __( 'Parent Industry', 'md-sutherlandglobal' ),
			'parent_item_colon' => __( 'Parent Industry:', 'md-sutherlandglobal' ),
			'edit_item'         => __( 'Edit Industry', 'md-sutherlandglobal' ),
			'update_item'       => __( 'Update Industry', 'md-sutherlandglobal' ),
			'add_new_item'      => __( 'Add New Industry', 'md-sutherlandglobal' ),
			'new_item_name'     => __( 'New Industry Name', 'md-sutherlandglobal' ),
			'menu_name'         => __( 'Industry', 'md-sutherlandglobal' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Industry', 'md-sutherlandglobal' ),
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
		register_taxonomy( 'industry', array( 'case_study' ), $args );
	}

	/**
	 * Register Taxonomy Service.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_service_taxonomy() {
		
		$labels = array(
			'name'              => _x( 'Services', 'taxonomy general name', 'md-sutherlandglobal' ),
			'singular_name'     => _x( 'Service', 'taxonomy singular name', 'md-sutherlandglobal' ),
			'search_items'      => __( 'Search Services', 'md-sutherlandglobal' ),
			'all_items'         => __( 'All Services', 'md-sutherlandglobal' ),
			'parent_item'       => __( 'Parent Service', 'md-sutherlandglobal' ),
			'parent_item_colon' => __( 'Parent Service:', 'md-sutherlandglobal' ),
			'edit_item'         => __( 'Edit Service', 'md-sutherlandglobal' ),
			'update_item'       => __( 'Update Service', 'md-sutherlandglobal' ),
			'add_new_item'      => __( 'Add New Service', 'md-sutherlandglobal' ),
			'new_item_name'     => __( 'New Service Name', 'md-sutherlandglobal' ),
			'menu_name'         => __( 'Service', 'md-sutherlandglobal' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Service', 'md-sutherlandglobal' ),
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
		register_taxonomy( 'service', array( 'case_study' ), $args );
	}
}

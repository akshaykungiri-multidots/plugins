<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-pofo
 */

declare( strict_types = 1 );

namespace MD_POFO\Includes;

use MD_POFO\Includes\Traits\Singleton;

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
	protected function setup_hooks(): void {

		/**
		 * Actions.
		 */
		add_action( 'init', array( $this, 'register_year_taxonomy' ) );
	}

	/**
	 * Register Taxonomy Year.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_year_taxonomy(): void {

		$labels = array(
			'name'              => _x( 'Years', 'taxonomy general name', 'md-pofo' ),
			'singular_name'     => _x( 'Year', 'taxonomy singular name', 'md-pofo' ),
			'search_items'      => __( 'Search Years', 'md-pofo' ),
			'all_items'         => __( 'All Years', 'md-pofo' ),
			'parent_item'       => __( 'Parent Year', 'md-pofo' ),
			'parent_item_colon' => __( 'Parent Year:', 'md-pofo' ),
			'edit_item'         => __( 'Edit Year', 'md-pofo' ),
			'update_item'       => __( 'Update Year', 'md-pofo' ),
			'add_new_item'      => __( 'Add New Year', 'md-pofo' ),
			'new_item_name'     => __( 'New Year Name', 'md-pofo' ),
			'menu_name'         => __( 'Year', 'md-pofo' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Movie Release Year', 'md-pofo' ),
			'hierarchical'       => false,
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
		register_taxonomy( 'movie-year', array( 'movies' ), $args );
	}
}

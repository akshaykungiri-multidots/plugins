<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-anitian
 */

namespace MD_ANITIAN\Includes;

use MD_ANITIAN\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_year_taxonomy' ) );
	}

	/**
	 * Register Taxonomy Year.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_year_taxonomy() {

		$labels = array(
			'name'              => _x( 'Years', 'taxonomy general name', 'md-anitian' ),
			'singular_name'     => _x( 'Year', 'taxonomy singular name', 'md-anitian' ),
			'search_items'      => __( 'Search Years', 'md-anitian' ),
			'all_items'         => __( 'All Years', 'md-anitian' ),
			'parent_item'       => __( 'Parent Year', 'md-anitian' ),
			'parent_item_colon' => __( 'Parent Year:', 'md-anitian' ),
			'edit_item'         => __( 'Edit Year', 'md-anitian' ),
			'update_item'       => __( 'Update Year', 'md-anitian' ),
			'add_new_item'      => __( 'Add New Year', 'md-anitian' ),
			'new_item_name'     => __( 'New Year Name', 'md-anitian' ),
			'menu_name'         => __( 'Year', 'md-anitian' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Movie Release Year', 'md-anitian' ),
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

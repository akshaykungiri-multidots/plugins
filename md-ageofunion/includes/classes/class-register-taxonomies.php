<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-ageofunion
 */

declare( strict_types = 1 );

namespace MD_AGEOFUNION\Includes;

use MD_AGEOFUNION\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_region_taxonomy' ), 0 );
	}

	/**
	 * Register Taxonomy Region.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_region_taxonomy(): void {
		
		$labels = array(
			'name'                       => esc_html__( 'Regions', 'md-ageofunion' ),
			'singular_name'              => esc_html__( 'Region', 'md-ageofunion' ),
			'search_items'               => esc_html__( 'Search Regions', 'md-ageofunion' ),
			'popular_items'              => esc_html__( 'Popular Regions', 'md-ageofunion' ),
			'all_items'                  => esc_html__( 'All Regions', 'md-ageofunion' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => esc_html__( 'Edit Region', 'md-ageofunion' ),
			'update_item'                => esc_html__( 'Update Region', 'md-ageofunion' ),
			'add_new_item'               => esc_html__( 'Add New Region', 'md-ageofunion' ),
			'new_item_name'              => esc_html__( 'New Region Name', 'md-ageofunion' ),
			'separate_items_with_commas' => esc_html__( 'Separate regions with commas', 'md-ageofunion' ),
			'add_or_remove_items'        => esc_html__( 'Add or remove regions', 'md-ageofunion' ),
			'choose_from_most_used'      => esc_html__( 'Choose from the most used regions', 'md-ageofunion' ),
			'not_found'                  => esc_html__( 'No regions found.', 'md-ageofunion' ),
			'menu_name'                  => esc_html__( 'Regions', 'md-ageofunion' ),
		);

		$args = array(
			'hierarchical'          => true,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => true,
			'query_var'             => true,
			'rewrite'               => array( 'slug' => 'region' ),
			'show_in_rest'          => true,
			'rest_base'             => 'region',
			'rest_controller_class' => 'WP_REST_Terms_Controller',
		);

		register_taxonomy( 'region', array( 'projects' ), $args );
	}
}

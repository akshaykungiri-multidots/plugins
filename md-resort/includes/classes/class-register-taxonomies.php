<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-resort
 */

namespace MD_RESORT\Includes;

use MD_RESORT\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_service_category_taxonomy' ) );
	}

	/**
	 * Register Taxonomy Year.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_service_category_taxonomy() {

		$labels = array(
			'name'                       => _x( 'Service Categories', 'Taxonomy General Name', 'md-resort' ),
			'singular_name'              => _x( 'Service Category', 'Taxonomy Singular Name', 'md-resort' ),
			'menu_name'                  => __( 'Service Category', 'md-resort' ),
			'all_items'                  => __( 'All Items', 'md-resort' ),
			'parent_item'                => __( 'Parent Item', 'md-resort' ),
			'parent_item_colon'          => __( 'Parent Item:', 'md-resort' ),
			'new_item_name'              => __( 'New Item Name', 'md-resort' ),
			'add_new_item'               => __( 'Add New Item', 'md-resort' ),
			'edit_item'                  => __( 'Edit Item', 'md-resort' ),
			'update_item'                => __( 'Update Item', 'md-resort' ),
			'view_item'                  => __( 'View Item', 'md-resort' ),
			'separate_items_with_commas' => __( 'Separate items with commas', 'md-resort' ),
			'add_or_remove_items'        => __( 'Add or remove items', 'md-resort' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-resort' ),
			'popular_items'              => __( 'Popular Items', 'md-resort' ),
			'search_items'               => __( 'Search Items', 'md-resort' ),
			'not_found'                  => __( 'Not Found', 'md-resort' ),
			'no_terms'                   => __( 'No items', 'md-resort' ),
			'items_list'                 => __( 'Items list', 'md-resort' ),
			'items_list_navigation'      => __( 'Items list navigation', 'md-resort' ),
		);

		$args = array(
			'labels'                     => $labels,
			'hierarchical'                => true,
			'public'                     => true,
			'show_ui'                    => true,
			'show_admin_column'          => true,
			'show_in_nav_menus'          => true,
			'show_tagcloud'              => true,
			'show_in_rest'               => true,
			'rewrite'                    => array( 'slug' => 'service-category' ),
		);

		register_taxonomy( 'service_category', array( 'service' ), $args );
	}
}

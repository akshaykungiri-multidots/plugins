<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-putco
 */

namespace MD_PUTCO\Includes;

use MD_PUTCO\Includes\Traits\Singleton;

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
			'name'                       => _x( 'Service Categories', 'Taxonomy General Name', 'md-putco' ),
			'singular_name'              => _x( 'Service Category', 'Taxonomy Singular Name', 'md-putco' ),
			'menu_name'                  => __( 'Service Category', 'md-putco' ),
			'all_items'                  => __( 'All Items', 'md-putco' ),
			'parent_item'                => __( 'Parent Item', 'md-putco' ),
			'parent_item_colon'          => __( 'Parent Item:', 'md-putco' ),
			'new_item_name'              => __( 'New Item Name', 'md-putco' ),
			'add_new_item'               => __( 'Add New Item', 'md-putco' ),
			'edit_item'                  => __( 'Edit Item', 'md-putco' ),
			'update_item'                => __( 'Update Item', 'md-putco' ),
			'view_item'                  => __( 'View Item', 'md-putco' ),
			'separate_items_with_commas' => __( 'Separate items with commas', 'md-putco' ),
			'add_or_remove_items'        => __( 'Add or remove items', 'md-putco' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-putco' ),
			'popular_items'              => __( 'Popular Items', 'md-putco' ),
			'search_items'               => __( 'Search Items', 'md-putco' ),
			'not_found'                  => __( 'Not Found', 'md-putco' ),
			'no_terms'                   => __( 'No items', 'md-putco' ),
			'items_list'                 => __( 'Items list', 'md-putco' ),
			'items_list_navigation'      => __( 'Items list navigation', 'md-putco' ),
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

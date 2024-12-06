<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-crafto
 */

namespace MD_CRAFTO\Includes;

use MD_CRAFTO\Includes\Traits\Singleton;

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
			'name'                       => _x( 'Service Categories', 'Taxonomy General Name', 'md-crafto' ),
			'singular_name'              => _x( 'Service Category', 'Taxonomy Singular Name', 'md-crafto' ),
			'menu_name'                  => __( 'Service Category', 'md-crafto' ),
			'all_items'                  => __( 'All Items', 'md-crafto' ),
			'parent_item'                => __( 'Parent Item', 'md-crafto' ),
			'parent_item_colon'          => __( 'Parent Item:', 'md-crafto' ),
			'new_item_name'              => __( 'New Item Name', 'md-crafto' ),
			'add_new_item'               => __( 'Add New Item', 'md-crafto' ),
			'edit_item'                  => __( 'Edit Item', 'md-crafto' ),
			'update_item'                => __( 'Update Item', 'md-crafto' ),
			'view_item'                  => __( 'View Item', 'md-crafto' ),
			'separate_items_with_commas' => __( 'Separate items with commas', 'md-crafto' ),
			'add_or_remove_items'        => __( 'Add or remove items', 'md-crafto' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-crafto' ),
			'popular_items'              => __( 'Popular Items', 'md-crafto' ),
			'search_items'               => __( 'Search Items', 'md-crafto' ),
			'not_found'                  => __( 'Not Found', 'md-crafto' ),
			'no_terms'                   => __( 'No items', 'md-crafto' ),
			'items_list'                 => __( 'Items list', 'md-crafto' ),
			'items_list_navigation'      => __( 'Items list navigation', 'md-crafto' ),
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

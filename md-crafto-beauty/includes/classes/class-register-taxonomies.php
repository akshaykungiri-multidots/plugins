<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-crafto-beauty
 */

namespace MD_CRAFTO_BEAUTY\Includes;

use MD_CRAFTO_BEAUTY\Includes\Traits\Singleton;

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
			'name'                       => _x( 'Service Categories', 'Taxonomy General Name', 'md-crafto-beauty' ),
			'singular_name'              => _x( 'Service Category', 'Taxonomy Singular Name', 'md-crafto-beauty' ),
			'menu_name'                  => __( 'Service Category', 'md-crafto-beauty' ),
			'all_items'                  => __( 'All Items', 'md-crafto-beauty' ),
			'parent_item'                => __( 'Parent Item', 'md-crafto-beauty' ),
			'parent_item_colon'          => __( 'Parent Item:', 'md-crafto-beauty' ),
			'new_item_name'              => __( 'New Item Name', 'md-crafto-beauty' ),
			'add_new_item'               => __( 'Add New Item', 'md-crafto-beauty' ),
			'edit_item'                  => __( 'Edit Item', 'md-crafto-beauty' ),
			'update_item'                => __( 'Update Item', 'md-crafto-beauty' ),
			'view_item'                  => __( 'View Item', 'md-crafto-beauty' ),
			'separate_items_with_commas' => __( 'Separate items with commas', 'md-crafto-beauty' ),
			'add_or_remove_items'        => __( 'Add or remove items', 'md-crafto-beauty' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-crafto-beauty' ),
			'popular_items'              => __( 'Popular Items', 'md-crafto-beauty' ),
			'search_items'               => __( 'Search Items', 'md-crafto-beauty' ),
			'not_found'                  => __( 'Not Found', 'md-crafto-beauty' ),
			'no_terms'                   => __( 'No items', 'md-crafto-beauty' ),
			'items_list'                 => __( 'Items list', 'md-crafto-beauty' ),
			'items_list_navigation'      => __( 'Items list navigation', 'md-crafto-beauty' ),
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

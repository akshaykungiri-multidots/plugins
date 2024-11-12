<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-pointcentral-fse
 */

namespace MD_POINTCENTRAL_FSE\Includes;

use MD_POINTCENTRAL_FSE\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_product_taxonomy' ) );
		add_action( 'init', array( $this, 'register_resource_type_taxonomy' ) );
	}

	/**
	 * Register Taxonomy Year.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_industry_taxonomy() {
		
		$labels = array(
			'name'                       => _x( 'Industry', 'Taxonomy General Name', 'md-pointcentral-fse' ),
			'singular_name'              => _x( 'Industry', 'Taxonomy Singular Name', 'md-pointcentral-fse' ),
			'menu_name'                  => __( 'Industry', 'md-pointcentral-fse' ),
			'all_items'                  => __( 'All Industries', 'md-pointcentral-fse' ),
			'parent_item'                => __( 'Parent Industry', 'md-pointcentral-fse' ),
			'parent_item_colon'          => __( 'Parent Industry:', 'md-pointcentral-fse' ),
			'new_item_name'              => __( 'New Industry Name', 'md-pointcentral-fse' ),
			'add_new_item'               => __( 'Add New Industry', 'md-pointcentral-fse' ),
			'edit_item'                  => __( 'Edit Industry', 'md-pointcentral-fse' ),
			'update_item'                => __( 'Update Industry', 'md-pointcentral-fse' ),
			'view_item'                  => __( 'View Industry', 'md-pointcentral-fse' ),
			'separate_items_with_commas' => __( 'Separate industries with commas', 'md-pointcentral-fse' ),
			'add_or_remove_items'        => __( 'Add or remove industries', 'md-pointcentral-fse' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-pointcentral-fse' ),
			'popular_items'              => __( 'Popular Industries', 'md-pointcentral-fse' ),
			'search_items'               => __( 'Search Industries', 'md-pointcentral-fse' ),
			'not_found'                  => __( 'Not Found', 'md-pointcentral-fse' ),
			'no_terms'                   => __( 'No industries', 'md-pointcentral-fse' ),
			'items_list'                 => __( 'Industries list', 'md-pointcentral-fse' ),
			'items_list_navigation'      => __( 'Industries list navigation', 'md-pointcentral-fse' ),
		);

		$args = array(
			'labels'            => $labels,
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

		register_taxonomy( 'industry', array( 'resources' ), $args );
	}

	/**
	 * Register Taxonomy Product.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_product_taxonomy() {
		
		$labels = array(
			'name'                       => _x( 'Product', 'Taxonomy General Name', 'md-pointcentral-fse' ),
			'singular_name'              => _x( 'Product', 'Taxonomy Singular Name', 'md-pointcentral-fse' ),
			'menu_name'                  => __( 'Product', 'md-pointcentral-fse' ),
			'all_items'                  => __( 'All Products', 'md-pointcentral-fse' ),
			'parent_item'                => __( 'Parent Product', 'md-pointcentral-fse' ),
			'parent_item_colon'          => __( 'Parent Product:', 'md-pointcentral-fse' ),
			'new_item_name'              => __( 'New Product Name', 'md-pointcentral-fse' ),
			'add_new_item'               => __( 'Add New Product', 'md-pointcentral-fse' ),
			'edit_item'                  => __( 'Edit Product', 'md-pointcentral-fse' ),
			'update_item'                => __( 'Update Product', 'md-pointcentral-fse' ),
			'view_item'                  => __( 'View Product', 'md-pointcentral-fse' ),
			'separate_items_with_commas' => __( 'Separate products with commas', 'md-pointcentral-fse' ),
			'add_or_remove_items'        => __( 'Add or remove products', 'md-pointcentral-fse' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-pointcentral-fse' ),
			'popular_items'              => __( 'Popular Products', 'md-pointcentral-fse' ),
			'search_items'               => __( 'Search Products', 'md-pointcentral-fse' ),
			'not_found'                  => __( 'Not Found', 'md-pointcentral-fse' ),
			'no_terms'                   => __( 'No products', 'md-pointcentral-fse' ),
			'items_list'                 => __( 'Products list', 'md-pointcentral-fse' ),
			'items_list_navigation'      => __( 'Products list navigation', 'md-pointcentral-fse' ),
		);

		$args = array(
			'labels'            => $labels,
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

		register_taxonomy( 'res_product', array( 'resources' ), $args );
	}

	/**
	 * Register Taxonomy Resource Type.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_resource_type_taxonomy() {
		
		$labels = array(
			'name'                       => _x( 'Resource Type', 'Taxonomy General Name', 'md-pointcentral-fse' ),
			'singular_name'              => _x( 'Resource Type', 'Taxonomy Singular Name', 'md-pointcentral-fse' ),
			'menu_name'                  => __( 'Resource Type', 'md-pointcentral-fse' ),
			'all_items'                  => __( 'All Resource Types', 'md-pointcentral-fse' ),
			'parent_item'                => __( 'Parent Resource Type', 'md-pointcentral-fse' ),
			'parent_item_colon'          => __( 'Parent Resource Type:', 'md-pointcentral-fse' ),
			'new_item_name'              => __( 'New Resource Type Name', 'md-pointcentral-fse' ),
			'add_new_item'               => __( 'Add New Resource Type', 'md-pointcentral-fse' ),
			'edit_item'                  => __( 'Edit Resource Type', 'md-pointcentral-fse' ),
			'update_item'                => __( 'Update Resource Type', 'md-pointcentral-fse' ),
			'view_item'                  => __( 'View Resource Type', 'md-pointcentral-fse' ),
			'separate_items_with_commas' => __( 'Separate resource types with commas', 'md-pointcentral-fse' ),
			'add_or_remove_items'        => __( 'Add or remove resource types', 'md-pointcentral-fse' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-pointcentral-fse' ),
			'popular_items'              => __( 'Popular Resource Types', 'md-pointcentral-fse' ),
			'search_items'               => __( 'Search Resource Types', 'md-pointcentral-fse' ),
			'not_found'                  => __( 'Not Found', 'md-pointcentral-fse' ),
			'no_terms'                   => __( 'No resource types', 'md-pointcentral-fse' ),
			'items_list'                 => __( 'Resource Types list', 'md-pointcentral-fse' ),
			'items_list_navigation'      => __( 'Resource Types list navigation', 'md-pointcentral-fse' ),
		);

		$args = array(
			'labels'            => $labels,
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

		register_taxonomy( 'resource_type', array( 'resources' ), $args );

	}
}

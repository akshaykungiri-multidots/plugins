<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-efi
 */

namespace MD_EFI\Includes;

use MD_EFI\Includes\Traits\Singleton;

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
			'name'                       => _x( 'Industry', 'Taxonomy General Name', 'md-efi' ),
			'singular_name'              => _x( 'Industry', 'Taxonomy Singular Name', 'md-efi' ),
			'menu_name'                  => __( 'Industry', 'md-efi' ),
			'all_items'                  => __( 'All Industries', 'md-efi' ),
			'parent_item'                => __( 'Parent Industry', 'md-efi' ),
			'parent_item_colon'          => __( 'Parent Industry:', 'md-efi' ),
			'new_item_name'              => __( 'New Industry Name', 'md-efi' ),
			'add_new_item'               => __( 'Add New Industry', 'md-efi' ),
			'edit_item'                  => __( 'Edit Industry', 'md-efi' ),
			'update_item'                => __( 'Update Industry', 'md-efi' ),
			'view_item'                  => __( 'View Industry', 'md-efi' ),
			'separate_items_with_commas' => __( 'Separate industries with commas', 'md-efi' ),
			'add_or_remove_items'        => __( 'Add or remove industries', 'md-efi' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-efi' ),
			'popular_items'              => __( 'Popular Industries', 'md-efi' ),
			'search_items'               => __( 'Search Industries', 'md-efi' ),
			'not_found'                  => __( 'Not Found', 'md-efi' ),
			'no_terms'                   => __( 'No industries', 'md-efi' ),
			'items_list'                 => __( 'Industries list', 'md-efi' ),
			'items_list_navigation'      => __( 'Industries list navigation', 'md-efi' ),
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
			'name'                       => _x( 'Product', 'Taxonomy General Name', 'md-efi' ),
			'singular_name'              => _x( 'Product', 'Taxonomy Singular Name', 'md-efi' ),
			'menu_name'                  => __( 'Product', 'md-efi' ),
			'all_items'                  => __( 'All Products', 'md-efi' ),
			'parent_item'                => __( 'Parent Product', 'md-efi' ),
			'parent_item_colon'          => __( 'Parent Product:', 'md-efi' ),
			'new_item_name'              => __( 'New Product Name', 'md-efi' ),
			'add_new_item'               => __( 'Add New Product', 'md-efi' ),
			'edit_item'                  => __( 'Edit Product', 'md-efi' ),
			'update_item'                => __( 'Update Product', 'md-efi' ),
			'view_item'                  => __( 'View Product', 'md-efi' ),
			'separate_items_with_commas' => __( 'Separate products with commas', 'md-efi' ),
			'add_or_remove_items'        => __( 'Add or remove products', 'md-efi' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-efi' ),
			'popular_items'              => __( 'Popular Products', 'md-efi' ),
			'search_items'               => __( 'Search Products', 'md-efi' ),
			'not_found'                  => __( 'Not Found', 'md-efi' ),
			'no_terms'                   => __( 'No products', 'md-efi' ),
			'items_list'                 => __( 'Products list', 'md-efi' ),
			'items_list_navigation'      => __( 'Products list navigation', 'md-efi' ),
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
			'name'                       => _x( 'Resource Type', 'Taxonomy General Name', 'md-efi' ),
			'singular_name'              => _x( 'Resource Type', 'Taxonomy Singular Name', 'md-efi' ),
			'menu_name'                  => __( 'Resource Type', 'md-efi' ),
			'all_items'                  => __( 'All Resource Types', 'md-efi' ),
			'parent_item'                => __( 'Parent Resource Type', 'md-efi' ),
			'parent_item_colon'          => __( 'Parent Resource Type:', 'md-efi' ),
			'new_item_name'              => __( 'New Resource Type Name', 'md-efi' ),
			'add_new_item'               => __( 'Add New Resource Type', 'md-efi' ),
			'edit_item'                  => __( 'Edit Resource Type', 'md-efi' ),
			'update_item'                => __( 'Update Resource Type', 'md-efi' ),
			'view_item'                  => __( 'View Resource Type', 'md-efi' ),
			'separate_items_with_commas' => __( 'Separate resource types with commas', 'md-efi' ),
			'add_or_remove_items'        => __( 'Add or remove resource types', 'md-efi' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-efi' ),
			'popular_items'              => __( 'Popular Resource Types', 'md-efi' ),
			'search_items'               => __( 'Search Resource Types', 'md-efi' ),
			'not_found'                  => __( 'Not Found', 'md-efi' ),
			'no_terms'                   => __( 'No resource types', 'md-efi' ),
			'items_list'                 => __( 'Resource Types list', 'md-efi' ),
			'items_list_navigation'      => __( 'Resource Types list navigation', 'md-efi' ),
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

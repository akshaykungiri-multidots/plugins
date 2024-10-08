<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-efi-fse-full
 */

namespace MD_EFI_FSE_FULL\Includes;

use MD_EFI_FSE_FULL\Includes\Traits\Singleton;

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
			'name'                       => _x( 'Industry', 'Taxonomy General Name', 'md-efi-fse-full' ),
			'singular_name'              => _x( 'Industry', 'Taxonomy Singular Name', 'md-efi-fse-full' ),
			'menu_name'                  => __( 'Industry', 'md-efi-fse-full' ),
			'all_items'                  => __( 'All Industries', 'md-efi-fse-full' ),
			'parent_item'                => __( 'Parent Industry', 'md-efi-fse-full' ),
			'parent_item_colon'          => __( 'Parent Industry:', 'md-efi-fse-full' ),
			'new_item_name'              => __( 'New Industry Name', 'md-efi-fse-full' ),
			'add_new_item'               => __( 'Add New Industry', 'md-efi-fse-full' ),
			'edit_item'                  => __( 'Edit Industry', 'md-efi-fse-full' ),
			'update_item'                => __( 'Update Industry', 'md-efi-fse-full' ),
			'view_item'                  => __( 'View Industry', 'md-efi-fse-full' ),
			'separate_items_with_commas' => __( 'Separate industries with commas', 'md-efi-fse-full' ),
			'add_or_remove_items'        => __( 'Add or remove industries', 'md-efi-fse-full' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-efi-fse-full' ),
			'popular_items'              => __( 'Popular Industries', 'md-efi-fse-full' ),
			'search_items'               => __( 'Search Industries', 'md-efi-fse-full' ),
			'not_found'                  => __( 'Not Found', 'md-efi-fse-full' ),
			'no_terms'                   => __( 'No industries', 'md-efi-fse-full' ),
			'items_list'                 => __( 'Industries list', 'md-efi-fse-full' ),
			'items_list_navigation'      => __( 'Industries list navigation', 'md-efi-fse-full' ),
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
			'name'                       => _x( 'Product', 'Taxonomy General Name', 'md-efi-fse-full' ),
			'singular_name'              => _x( 'Product', 'Taxonomy Singular Name', 'md-efi-fse-full' ),
			'menu_name'                  => __( 'Product', 'md-efi-fse-full' ),
			'all_items'                  => __( 'All Products', 'md-efi-fse-full' ),
			'parent_item'                => __( 'Parent Product', 'md-efi-fse-full' ),
			'parent_item_colon'          => __( 'Parent Product:', 'md-efi-fse-full' ),
			'new_item_name'              => __( 'New Product Name', 'md-efi-fse-full' ),
			'add_new_item'               => __( 'Add New Product', 'md-efi-fse-full' ),
			'edit_item'                  => __( 'Edit Product', 'md-efi-fse-full' ),
			'update_item'                => __( 'Update Product', 'md-efi-fse-full' ),
			'view_item'                  => __( 'View Product', 'md-efi-fse-full' ),
			'separate_items_with_commas' => __( 'Separate products with commas', 'md-efi-fse-full' ),
			'add_or_remove_items'        => __( 'Add or remove products', 'md-efi-fse-full' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-efi-fse-full' ),
			'popular_items'              => __( 'Popular Products', 'md-efi-fse-full' ),
			'search_items'               => __( 'Search Products', 'md-efi-fse-full' ),
			'not_found'                  => __( 'Not Found', 'md-efi-fse-full' ),
			'no_terms'                   => __( 'No products', 'md-efi-fse-full' ),
			'items_list'                 => __( 'Products list', 'md-efi-fse-full' ),
			'items_list_navigation'      => __( 'Products list navigation', 'md-efi-fse-full' ),
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
			'name'                       => _x( 'Resource Type', 'Taxonomy General Name', 'md-efi-fse-full' ),
			'singular_name'              => _x( 'Resource Type', 'Taxonomy Singular Name', 'md-efi-fse-full' ),
			'menu_name'                  => __( 'Resource Type', 'md-efi-fse-full' ),
			'all_items'                  => __( 'All Resource Types', 'md-efi-fse-full' ),
			'parent_item'                => __( 'Parent Resource Type', 'md-efi-fse-full' ),
			'parent_item_colon'          => __( 'Parent Resource Type:', 'md-efi-fse-full' ),
			'new_item_name'              => __( 'New Resource Type Name', 'md-efi-fse-full' ),
			'add_new_item'               => __( 'Add New Resource Type', 'md-efi-fse-full' ),
			'edit_item'                  => __( 'Edit Resource Type', 'md-efi-fse-full' ),
			'update_item'                => __( 'Update Resource Type', 'md-efi-fse-full' ),
			'view_item'                  => __( 'View Resource Type', 'md-efi-fse-full' ),
			'separate_items_with_commas' => __( 'Separate resource types with commas', 'md-efi-fse-full' ),
			'add_or_remove_items'        => __( 'Add or remove resource types', 'md-efi-fse-full' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-efi-fse-full' ),
			'popular_items'              => __( 'Popular Resource Types', 'md-efi-fse-full' ),
			'search_items'               => __( 'Search Resource Types', 'md-efi-fse-full' ),
			'not_found'                  => __( 'Not Found', 'md-efi-fse-full' ),
			'no_terms'                   => __( 'No resource types', 'md-efi-fse-full' ),
			'items_list'                 => __( 'Resource Types list', 'md-efi-fse-full' ),
			'items_list_navigation'      => __( 'Resource Types list navigation', 'md-efi-fse-full' ),
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

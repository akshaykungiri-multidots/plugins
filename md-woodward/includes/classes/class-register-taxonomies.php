<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-woodward
 */

namespace MD_WOODWARD\Includes;

use MD_WOODWARD\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_application_taxonomy' ) );
		add_action( 'init', array( $this, 'register_product_type_taxonomy' ) );
	}

	/**
	 * Register Taxonomy Industry.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_industry_taxonomy() {

		$labels = array(
			'name'              => _x( 'Industries', 'taxonomy general name', 'md-woodward' ),
			'singular_name'     => _x( 'Industry', 'taxonomy singular name', 'md-woodward' ),
			'search_items'      => __( 'Search Industries', 'md-woodward' ),
			'all_items'         => __( 'All Industries', 'md-woodward' ),
			'parent_item'       => __( 'Parent Industry', 'md-woodward' ),
			'parent_item_colon' => __( 'Parent Industry:', 'md-woodward' ),
			'edit_item'         => __( 'Edit Industry', 'md-woodward' ),
			'update_item'       => __( 'Update Industry', 'md-woodward' ),
			'add_new_item'      => __( 'Add New Industry', 'md-woodward' ),
			'new_item_name'     => __( 'New Industry Name', 'md-woodward' ),
			'menu_name'         => __( 'Industry', 'md-woodward' ),
		);

		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'industry' ),
		);

		register_taxonomy( 'industry', array( 'md_product' ), $args );
	}

	/**
	 * Register Taxonomy Application.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_application_taxonomy() {
		
		$labels = array(
			'name'              => _x( 'Applications', 'taxonomy general name', 'md-woodward' ),
			'singular_name'     => _x( 'Application', 'taxonomy singular name', 'md-woodward' ),
			'search_items'      => __( 'Search Applications', 'md-woodward' ),
			'all_items'         => __( 'All Applications', 'md-woodward' ),
			'parent_item'       => __( 'Parent Application', 'md-woodward' ),
			'parent_item_colon' => __( 'Parent Application:', 'md-woodward' ),
			'edit_item'         => __( 'Edit Application', 'md-woodward' ),
			'update_item'       => __( 'Update Application', 'md-woodward' ),
			'add_new_item'      => __( 'Add New Application', 'md-woodward' ),
			'new_item_name'     => __( 'New Application Name', 'md-woodward' ),
			'menu_name'         => __( 'Application', 'md-woodward' ),
		);

		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'application' ),
		);

		register_taxonomy( 'application', array( 'md_product' ), $args );
	}

	/**
	 * Register Taxonomy Product Type.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_product_type_taxonomy() {
		
		$labels = array(
			'name'              => _x( 'Product Types', 'taxonomy general name', 'md-woodward' ),
			'singular_name'     => _x( 'Product Type', 'taxonomy singular name', 'md-woodward' ),
			'search_items'      => __( 'Search Product Types', 'md-woodward' ),
			'all_items'         => __( 'All Product Types', 'md-woodward' ),
			'parent_item'       => __( 'Parent Product Type', 'md-woodward' ),
			'parent_item_colon' => __( 'Parent Product Type:', 'md-woodward' ),
			'edit_item'         => __( 'Edit Product Type', 'md-woodward' ),
			'update_item'       => __( 'Update Product Type', 'md-woodward' ),
			'add_new_item'      => __( 'Add New Product Type', 'md-woodward' ),
			'new_item_name'     => __( 'New Product Type Name', 'md-woodward' ),
			'menu_name'         => __( 'Product Type', 'md-woodward' ),
		);

		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'product-type' ),
		);

		register_taxonomy( 'md_product_type', array( 'md_product' ), $args );
	}
}

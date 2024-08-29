<?php
/**
 * Register Post Types
 *
 * @package md-sutherlandglobal
 */

namespace MD_SUTHERLANDGLOBAL\Includes;

use MD_SUTHERLANDGLOBAL\Includes\Traits\Singleton;

/**
 * Class for register post types.
 */
class Register_Post_Types {
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
		add_action( 'init', array( $this, 'register_services_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_industries_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_products_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_case_studies_cpt' ), 0 );
	}

	/**
	 * Register Custom Post Type Service.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_services_cpt() {

		$labels = array(
			'name'                  => _x( 'Services', 'Post Type General Name', 'md-sutherlandglobal' ),
			'singular_name'         => _x( 'Service', 'Post Type Singular Name', 'md-sutherlandglobal' ),
			'menu_name'             => _x( 'Services', 'Admin Menu text', 'md-sutherlandglobal' ),
			'name_admin_bar'        => _x( 'Service', 'Add New on Toolbar', 'md-sutherlandglobal' ),
			'archives'              => __( 'Service Archives', 'md-sutherlandglobal' ),
			'attributes'            => __( 'Service Attributes', 'md-sutherlandglobal' ),
			'parent_item_colon'     => __( 'Parent Service:', 'md-sutherlandglobal' ),
			'all_items'             => __( 'All Services', 'md-sutherlandglobal' ),
			'add_new_item'          => __( 'Add New Service', 'md-sutherlandglobal' ),
			'add_new'               => __( 'Add New', 'md-sutherlandglobal' ),
			'new_item'              => __( 'New Service', 'md-sutherlandglobal' ),
			'edit_item'             => __( 'Edit Service', 'md-sutherlandglobal' ),
			'update_item'           => __( 'Update Service', 'md-sutherlandglobal' ),
			'view_item'             => __( 'View Service', 'md-sutherlandglobal' ),
			'view_items'            => __( 'View Services', 'md-sutherlandglobal' ),
			'search_items'          => __( 'Search Service', 'md-sutherlandglobal' ),
			'not_found'             => __( 'Not found', 'md-sutherlandglobal' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-sutherlandglobal' ),
			'featured_image'        => __( 'Featured Image', 'md-sutherlandglobal' ),
			'set_featured_image'    => __( 'Set featured image', 'md-sutherlandglobal' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-sutherlandglobal' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-sutherlandglobal' ),
			'insert_into_item'      => __( 'Insert into Service', 'md-sutherlandglobal' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Service', 'md-sutherlandglobal' ),
			'items_list'            => __( 'Services list', 'md-sutherlandglobal' ),
			'items_list_navigation' => __( 'Services list navigation', 'md-sutherlandglobal' ),
			'filter_items_list'     => __( 'Filter Services list', 'md-sutherlandglobal' ),
		);
		$args   = array(
			'label'               => __( 'Service', 'md-sutherlandglobal' ),
			'description'         => __( 'The service', 'md-sutherlandglobal' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-admin-post',
			'supports'            => array(
				'title',
				'editor',
				'excerpt',
				'thumbnail',
				'revisions',
				'author',
				'comments',
				'trackbacks',
				'page-attributes',
				'custom-fields',
			),
			'taxonomies'          => array(),
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'hierarchical'        => false,
			'exclude_from_search' => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
		);

		register_post_type( 'service', $args );
	}

	/**
	 * Register Custom Post Type Industry.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_industries_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Industries', 'Post Type General Name', 'md-sutherlandglobal' ),
			'singular_name'         => _x( 'Industry', 'Post Type Singular Name', 'md-sutherlandglobal' ),
			'menu_name'             => _x( 'Industries', 'Admin Menu text', 'md-sutherlandglobal' ),
			'name_admin_bar'        => _x( 'Industry', 'Add New on Toolbar', 'md-sutherlandglobal' ),
			'archives'              => __( 'Industry Archives', 'md-sutherlandglobal' ),
			'attributes'            => __( 'Industry Attributes', 'md-sutherlandglobal' ),
			'parent_item_colon'     => __( 'Parent Industry:', 'md-sutherlandglobal' ),
			'all_items'             => __( 'All Industries', 'md-sutherlandglobal' ),
			'add_new_item'          => __( 'Add New Industry', 'md-sutherlandglobal' ),
			'add_new'               => __( 'Add New', 'md-sutherlandglobal' ),
			'new_item'              => __( 'New Industry', 'md-sutherlandglobal' ),
			'edit_item'             => __( 'Edit Industry', 'md-sutherlandglobal' ),
			'update_item'           => __( 'Update Industry', 'md-sutherlandglobal' ),
			'view_item'             => __( 'View Industry', 'md-sutherlandglobal' ),
			'view_items'            => __( 'View Industries', 'md-sutherlandglobal' ),
			'search_items'          => __( 'Search Industry', 'md-sutherlandglobal' ),
			'not_found'             => __( 'Not found', 'md-sutherlandglobal' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-sutherlandglobal' ),
			'featured_image'        => __( 'Featured Image', 'md-sutherlandglobal' ),
			'set_featured_image'    => __( 'Set featured image', 'md-sutherlandglobal' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-sutherlandglobal' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-sutherlandglobal' ),
			'insert_into_item'      => __( 'Insert into Industry', 'md-sutherlandglobal' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Industry', 'md-sutherlandglobal' ),
			'items_list'            => __( 'Industries list', 'md-sutherlandglobal' ),
			'items_list_navigation' => __( 'Industries list navigation', 'md-sutherlandglobal' ),
			'filter_items_list'     => __( 'Filter Industries list', 'md-sutherlandglobal' ),
		);

		$args = array(
			'label'               => __( 'Industry', 'md-sutherlandglobal' ),
			'description'         => __( 'The industry', 'md-sutherlandglobal' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-admin-post',
			'supports'            => array(
				'title',
				'editor',
				'excerpt',
				'thumbnail',
				'revisions',
				'author',
				'comments',
				'trackbacks',
				'page-attributes',
				'custom-fields',
			),
			'taxonomies'          => array(),
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'hierarchical'        => false,
			'exclude_from_search' => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
		);

		register_post_type( 'industry', $args );
	}

	/**
	 * Register Custom Post Type Product.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_products_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Products', 'Post Type General Name', 'md-sutherlandglobal' ),
			'singular_name'         => _x( 'Product', 'Post Type Singular Name', 'md-sutherlandglobal' ),
			'menu_name'             => _x( 'Products', 'Admin Menu text', 'md-sutherlandglobal' ),
			'name_admin_bar'        => _x( 'Product', 'Add New on Toolbar', 'md-sutherlandglobal' ),
			'archives'              => __( 'Product Archives', 'md-sutherlandglobal' ),
			'attributes'            => __( 'Product Attributes', 'md-sutherlandglobal' ),
			'parent_item_colon'     => __( 'Parent Product:', 'md-sutherlandglobal' ),
			'all_items'             => __( 'All Products', 'md-sutherlandglobal' ),
			'add_new_item'          => __( 'Add New Product', 'md-sutherlandglobal' ),
			'add_new'               => __( 'Add New', 'md-sutherlandglobal' ),
			'new_item'              => __( 'New Product', 'md-sutherlandglobal' ),
			'edit_item'             => __( 'Edit Product', 'md-sutherlandglobal' ),
			'update_item'           => __( 'Update Product', 'md-sutherlandglobal' ),
			'view_item'             => __( 'View Product', 'md-sutherlandglobal' ),
			'view_items'            => __( 'View Products', 'md-sutherlandglobal' ),
			'search_items'          => __( 'Search Product', 'md-sutherlandglobal' ),
			'not_found'             => __( 'Not found', 'md-sutherlandglobal' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-sutherlandglobal' ),
			'featured_image'        => __( 'Featured Image', 'md-sutherlandglobal' ),
			'set_featured_image'    => __( 'Set featured image', 'md-sutherlandglobal' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-sutherlandglobal' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-sutherlandglobal' ),
			'insert_into_item'      => __( 'Insert into Product', 'md-sutherlandglobal' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Product', 'md-sutherlandglobal' ),
			'items_list'            => __( 'Products list', 'md-sutherlandglobal' ),
			'items_list_navigation' => __( 'Products list navigation', 'md-sutherlandglobal' ),
			'filter_items_list'     => __( 'Filter Products list', 'md-sutherlandglobal' ),
		);

		$args = array(
			'label'               => __( 'Product', 'md-sutherlandglobal' ),
			'description'         => __( 'The product', 'md-sutherlandglobal' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-admin-post',
			'supports'            => array(
				'title',
				'editor',
				'excerpt',
				'thumbnail',
				'revisions',
				'author',
				'comments',
				'trackbacks',
				'page-attributes',
				'custom-fields',
			),
			'taxonomies'          => array(),
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'hierarchical'        => false,
			'exclude_from_search' => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
		);

		register_post_type( 'md_product', $args );
	}

	/**
	 * Register Custom Post Type Case Study.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_case_studies_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Case Studies', 'Post Type General Name', 'md-sutherlandglobal' ),
			'singular_name'         => _x( 'Case Study', 'Post Type Singular Name', 'md-sutherlandglobal' ),
			'menu_name'             => _x( 'Case Studies', 'Admin Menu text', 'md-sutherlandglobal' ),
			'name_admin_bar'        => _x( 'Case Study', 'Add New on Toolbar', 'md-sutherlandglobal' ),
			'archives'              => __( 'Case Study Archives', 'md-sutherlandglobal' ),
			'attributes'            => __( 'Case Study Attributes', 'md-sutherlandglobal' ),
			'parent_item_colon'     => __( 'Parent Case Study:', 'md-sutherlandglobal' ),
			'all_items'             => __( 'All Case Studies', 'md-sutherlandglobal' ),
			'add_new_item'          => __( 'Add New Case Study', 'md-sutherlandglobal' ),
			'add_new'               => __( 'Add New', 'md-sutherlandglobal' ),
			'new_item'              => __( 'New Case Study', 'md-sutherlandglobal' ),
			'edit_item'             => __( 'Edit Case Study', 'md-sutherlandglobal' ),
			'update_item'           => __( 'Update Case Study', 'md-sutherlandglobal' ),
			'view_item'             => __( 'View Case Study', 'md-sutherlandglobal' ),
			'view_items'            => __( 'View Case Studies', 'md-sutherlandglobal' ),
			'search_items'          => __( 'Search Case Study', 'md-sutherlandglobal' ),
			'not_found'             => __( 'Not found', 'md-sutherlandglobal' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-sutherlandglobal' ),
			'featured_image'        => __( 'Featured Image', 'md-sutherlandglobal' ),
			'set_featured_image'    => __( 'Set featured image', 'md-sutherlandglobal' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-sutherlandglobal' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-sutherlandglobal' ),
			'insert_into_item'      => __( 'Insert into Case Study', 'md-sutherlandglobal' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Case Study', 'md-sutherlandglobal' ),
			'items_list'            => __( 'Case Studies list', 'md-sutherlandglobal' ),
			'items_list_navigation' => __( 'Case Studies list navigation', 'md-sutherlandglobal' ),
			'filter_items_list'     => __( 'Filter Case Studies list', 'md-sutherlandglobal' ),
		);

		$args = array(
			'label'               => __( 'Case Study', 'md-sutherlandglobal' ),
			'description'         => __( 'The case study', 'md-sutherlandglobal' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-admin-post',
			'supports'            => array(
				'title',
				'editor',
				'excerpt',
				'thumbnail',
				'revisions',
				'author',
				'comments',
				'trackbacks',
				'page-attributes',
				'custom-fields',
			),
			'taxonomies'          => array(),
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'hierarchical'        => false,
			'exclude_from_search' => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => true,
			'capability_type'     => 'post',
		);

		register_post_type( 'case_study', $args );
	}
}

<?php
/**
 * Register Custom Taxonomies
 *
 * @package md-foursquare
 */

namespace MD_FOURSQUARE\Includes;

use MD_FOURSQUARE\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_product_taxonomy' ) );

		add_action( 'init', array( $this, 'register_report_type_taxonomy' ) );

		add_action( 'init', array( $this, 'register_events_type_taxonomy' ) );
		add_action( 'init', array( $this, 'register_events_topic_taxonomy' ) );
		
		add_action( 'init', array( $this, 'register_case_studies_topic_taxonomy' ) );

		add_action( 'init', array( $this, 'register_videos_and_demos_topic_taxonomy' ) );
	}

	/**
	 * Register Taxonomy product.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_product_taxonomy() {

		$labels = array(
			'name'              => _x( 'Products', 'taxonomy general name', 'md-foursquare' ),
			'singular_name'     => _x( 'Product', 'taxonomy singular name', 'md-foursquare' ),
			'search_items'      => __( 'Search Products', 'md-foursquare' ),
			'all_items'         => __( 'All Products', 'md-foursquare' ),
			'parent_item'       => __( 'Parent Product', 'md-foursquare' ),
			'parent_item_colon' => __( 'Parent Product:', 'md-foursquare' ),
			'edit_item'         => __( 'Edit Product', 'md-foursquare' ),
			'update_item'       => __( 'Update Product', 'md-foursquare' ),
			'add_new_item'      => __( 'Add New Product', 'md-foursquare' ),
			'new_item_name'     => __( 'New Product Name', 'md-foursquare' ),
			'menu_name'         => __( 'Products', 'md-foursquare' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Product', 'md-foursquare' ),
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
		register_taxonomy( 'product', array( 'post', 'reports-and-insights', 'events-and-webinars', 'case-studies', 'videos-and-demos' ), $args );
	}

	/**
	 * Register Taxonomy report type.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_report_type_taxonomy() {
		
		$labels = array(
			'name'              => _x( 'Types', 'taxonomy general name', 'md-foursquare' ),
			'singular_name'     => _x( 'Type', 'taxonomy singular name', 'md-foursquare' ),
			'search_items'      => __( 'Search Report Types', 'md-foursquare' ),
			'all_items'         => __( 'All Report Types', 'md-foursquare' ),
			'parent_item'       => __( 'Parent Report Type', 'md-foursquare' ),
			'parent_item_colon' => __( 'Parent Report Type:', 'md-foursquare' ),
			'edit_item'         => __( 'Edit Report Type', 'md-foursquare' ),
			'update_item'       => __( 'Update Report Type', 'md-foursquare' ),
			'add_new_item'      => __( 'Add New Report Type', 'md-foursquare' ),
			'new_item_name'     => __( 'New Report Type Name', 'md-foursquare' ),
			'menu_name'         => __( 'Report Types', 'md-foursquare' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Report Type', 'md-foursquare' ),
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
		register_taxonomy( 'report-type', array( 'reports-and-insights' ), $args );
	}

	/**
	 * Register Taxonomy events type.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_events_type_taxonomy() {
		
		$labels = array(
			'name'              => _x( 'Types', 'taxonomy general name', 'md-foursquare' ),
			'singular_name'     => _x( 'Type', 'taxonomy singular name', 'md-foursquare' ),
			'search_items'      => __( 'Search Event Types', 'md-foursquare' ),
			'all_items'         => __( 'All Event Types', 'md-foursquare' ),
			'parent_item'       => __( 'Parent Event Type', 'md-foursquare' ),
			'parent_item_colon' => __( 'Parent Event Type:', 'md-foursquare' ),
			'edit_item'         => __( 'Edit Event Type', 'md-foursquare' ),
			'update_item'       => __( 'Update Event Type', 'md-foursquare' ),
			'add_new_item'      => __( 'Add New Event Type', 'md-foursquare' ),
			'new_item_name'     => __( 'New Event Type Name', 'md-foursquare' ),
			'menu_name'         => __( 'Event Types', 'md-foursquare' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Event Type', 'md-foursquare' ),
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
		register_taxonomy( 'event-type', array( 'events-and-webinars' ), $args );
	}

	/**
	 * Register Taxonomy events topic.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_events_topic_taxonomy() {
		
		$labels = array(
			'name'              => _x( 'Topics', 'taxonomy general name', 'md-foursquare' ),
			'singular_name'     => _x( 'Topic', 'taxonomy singular name', 'md-foursquare' ),
			'search_items'      => __( 'Search Event Topics', 'md-foursquare' ),
			'all_items'         => __( 'All Event Topics', 'md-foursquare' ),
			'parent_item'       => __( 'Parent Event Topic', 'md-foursquare' ),
			'parent_item_colon' => __( 'Parent Event Topic:', 'md-foursquare' ),
			'edit_item'         => __( 'Edit Event Topic', 'md-foursquare' ),
			'update_item'       => __( 'Update Event Topic', 'md-foursquare' ),
			'add_new_item'      => __( 'Add New Event Topic', 'md-foursquare' ),
			'new_item_name'     => __( 'New Event Topic Name', 'md-foursquare' ),
			'menu_name'         => __( 'Event Topics', 'md-foursquare' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Event Topic', 'md-foursquare' ),
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
		register_taxonomy( 'event-topic', array( 'events-and-webinars' ), $args );
	}

	/**
	 * Register Taxonomy case studies topic.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_case_studies_topic_taxonomy() {
		
		$labels = array(
			'name'              => _x( 'Topics', 'taxonomy general name', 'md-foursquare' ),
			'singular_name'     => _x( 'Topic', 'taxonomy singular name', 'md-foursquare' ),
			'search_items'      => __( 'Search Case Studies Topics', 'md-foursquare' ),
			'all_items'         => __( 'All Case Studies Topics', 'md-foursquare' ),
			'parent_item'       => __( 'Parent Case Studies Topic', 'md-foursquare' ),
			'parent_item_colon' => __( 'Parent Case Studies Topic:', 'md-foursquare' ),
			'edit_item'         => __( 'Edit Case Studies Topic', 'md-foursquare' ),
			'update_item'       => __( 'Update Case Studies Topic', 'md-foursquare' ),
			'add_new_item'      => __( 'Add New Case Studies Topic', 'md-foursquare' ),
			'new_item_name'     => __( 'New Case Studies Topic Name', 'md-foursquare' ),
			'menu_name'         => __( 'Case Studies Topics', 'md-foursquare' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Case Studies Topic', 'md-foursquare' ),
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
		register_taxonomy( 'case-studies-topic', array( 'case-studies' ), $args );
	}

	/**
	 * Register Taxonomy videos and demos topic.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_videos_and_demos_topic_taxonomy() {
		
		$labels = array(
			'name'              => _x( 'Topics', 'taxonomy general name', 'md-foursquare' ),
			'singular_name'     => _x( 'Topic', 'taxonomy singular name', 'md-foursquare' ),
			'search_items'      => __( 'Search Videos and Demos Topics', 'md-foursquare' ),
			'all_items'         => __( 'All Videos and Demos Topics', 'md-foursquare' ),
			'parent_item'       => __( 'Parent Videos and Demos Topic', 'md-foursquare' ),
			'parent_item_colon' => __( 'Parent Videos and Demos Topic:', 'md-foursquare' ),
			'edit_item'         => __( 'Edit Videos and Demos Topic', 'md-foursquare' ),
			'update_item'       => __( 'Update Videos and Demos Topic', 'md-foursquare' ),
			'add_new_item'      => __( 'Add New Videos and Demos Topic', 'md-foursquare' ),
			'new_item_name'     => __( 'New Videos and Demos Topic Name', 'md-foursquare' ),
			'menu_name'         => __( 'Videos and Demos Topics', 'md-foursquare' ),
		);
		$args   = array(
			'labels'             => $labels,
			'description'        => __( 'Videos and Demos Topic', 'md-foursquare' ),
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
		register_taxonomy( 'videos-and-demos-topic', array( 'videos-and-demos' ), $args );
	}
	
}

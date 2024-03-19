<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    MD_Migrate_Resources
 * @subpackage MD_Migrate_Resources/admin
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Migrate_Resources\Inc;

use MD_Migrate_Resources\Inc\Traits\Singleton;

/**
 * Main class file.
 */
class Admin {

	use Singleton;

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'MD_MIGRATE_RESOURCES_VERSION' ) ) {
			$this->version = MD_MIGRATE_RESOURCES_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->setup_admin_hooks();
	}
	/**
	 * Function is used to define admin hooks.
	 *
	 * @since   1.0.0
	 */
	public function setup_admin_hooks() {
		add_action( 'init', array( $this, 'md_register_custom_posttype' ) );
		add_action( 'init', array( $this, 'md_register_custom_taxonomy' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}


	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'md-migrate-resources', MD_MIGRATE_RESOURCES_URL . 'assets/build/admin.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'md-migrate-resources', MD_MIGRATE_RESOURCES_URL . 'assets/build/admin.js', array( 'jquery' ), $this->version, false );

		wp_localize_script(
			'md-migrate-resources',
			'siteConfig',
			array(
				'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
				'ajax_nonce' => wp_create_nonce( 'loadmore_post_nonce' ),
			)
		);
	}

	/**
	 * Function is used to register custom post type
	 */
	public function md_register_custom_posttype() {
		$labels = array(
			'name'                  => _x( 'Resources', 'Resources General Name', 'md-migrate-resources' ),
			'singular_name'         => _x( 'Resources', 'Resources Singular Name', 'md-migrate-resources' ),
			'menu_name'             => __( 'Resources', 'md-migrate-resources' ),
			'name_admin_bar'        => __( 'Resources', 'md-migrate-resources' ),
			'archives'              => __( 'Item Archives', 'md-migrate-resources' ),
			'attributes'            => __( 'Item Attributes', 'md-migrate-resources' ),
			'parent_item_colon'     => __( 'Parent Item:', 'md-migrate-resources' ),
			'all_items'             => __( 'All Items', 'md-migrate-resources' ),
			'add_new_item'          => __( 'Add New Item', 'md-migrate-resources' ),
			'add_new'               => __( 'Add New', 'md-migrate-resources' ),
			'new_item'              => __( 'New Item', 'md-migrate-resources' ),
			'edit_item'             => __( 'Edit Item', 'md-migrate-resources' ),
			'update_item'           => __( 'Update Item', 'md-migrate-resources' ),
			'view_item'             => __( 'View Item', 'md-migrate-resources' ),
			'view_items'            => __( 'View Items', 'md-migrate-resources' ),
			'search_items'          => __( 'Search Item', 'md-migrate-resources' ),
			'not_found'             => __( 'Not found', 'md-migrate-resources' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-migrate-resources' ),
			'featured_image'        => __( 'Featured Image', 'md-migrate-resources' ),
			'set_featured_image'    => __( 'Set featured image', 'md-migrate-resources' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-migrate-resources' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-migrate-resources' ),
			'insert_into_item'      => __( 'Insert into item', 'md-migrate-resources' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'md-migrate-resources' ),
			'items_list'            => __( 'Items list', 'md-migrate-resources' ),
			'items_list_navigation' => __( 'Items list navigation', 'md-migrate-resources' ),
			'filter_items_list'     => __( 'Filter items list', 'md-migrate-resources' ),
		);
		$args   = array(
			'label'               => __( 'Resources', 'md-migrate-resources' ),
			'description'         => __( 'Sample Resources', 'md-migrate-resources' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'editor', 'thumbnail', 'author', 'excerpt' ),
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'menu_position'       => 5,
			'show_in_admin_bar'   => true,
			'show_in_nav_menus'   => true,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'page',
		);
		register_post_type( 'resource', $args );

	}
	/**
	 * Function is used register custom taxonomy
	 */
	public function md_register_custom_taxonomy() {

		$labels = array(
			'name'                       => _x( 'Resource Categories', 'Taxonomy General Name', 'md-migrate-resources' ),
			'singular_name'              => _x( 'Resource Category', 'Taxonomy Singular Name', 'md-migrate-resources' ),
			'menu_name'                  => __( 'Resource Categories', 'md-migrate-resources' ),
			'all_items'                  => __( 'All Items', 'md-migrate-resources' ),
			'parent_item'                => __( 'Parent Item', 'md-migrate-resources' ),
			'parent_item_colon'          => __( 'Parent Item:', 'md-migrate-resources' ),
			'new_item_name'              => __( 'New Item Name', 'md-migrate-resources' ),
			'add_new_item'               => __( 'Add New Item', 'md-migrate-resources' ),
			'edit_item'                  => __( 'Edit Item', 'md-migrate-resources' ),
			'update_item'                => __( 'Update Item', 'md-migrate-resources' ),
			'view_item'                  => __( 'View Item', 'md-migrate-resources' ),
			'separate_items_with_commas' => __( 'Separate items with commas', 'md-migrate-resources' ),
			'add_or_remove_items'        => __( 'Add or remove items', 'md-migrate-resources' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-migrate-resources' ),
			'popular_items'              => __( 'Popular Items', 'md-migrate-resources' ),
			'search_items'               => __( 'Search Items', 'md-migrate-resources' ),
			'not_found'                  => __( 'Not Found', 'md-migrate-resources' ),
			'no_terms'                   => __( 'No items', 'md-migrate-resources' ),
			'items_list'                 => __( 'Items list', 'md-migrate-resources' ),
			'items_list_navigation'      => __( 'Items list navigation', 'md-migrate-resources' ),
		);
		$args   = array(
			'labels'            => $labels,
			'hierarchical'      => false,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => true,
			'show_tagcloud'     => true,
		);
		register_taxonomy( 'resource-categories', array( 'resource' ), $args );

		$labels = array(
			'name'                       => _x( 'Resource Tags', 'Taxonomy General Name', 'md-migrate-resources' ),
			'singular_name'              => _x( 'Resource Tag', 'Taxonomy Singular Name', 'md-migrate-resources' ),
			'menu_name'                  => __( 'Resource Tags', 'md-migrate-resources' ),
			'all_items'                  => __( 'All Items', 'md-migrate-resources' ),
			'parent_item'                => __( 'Parent Item', 'md-migrate-resources' ),
			'parent_item_colon'          => __( 'Parent Item:', 'md-migrate-resources' ),
			'new_item_name'              => __( 'New Item Name', 'md-migrate-resources' ),
			'add_new_item'               => __( 'Add New Item', 'md-migrate-resources' ),
			'edit_item'                  => __( 'Edit Item', 'md-migrate-resources' ),
			'update_item'                => __( 'Update Item', 'md-migrate-resources' ),
			'view_item'                  => __( 'View Item', 'md-migrate-resources' ),
			'separate_items_with_commas' => __( 'Separate items with commas', 'md-migrate-resources' ),
			'add_or_remove_items'        => __( 'Add or remove items', 'md-migrate-resources' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-migrate-resources' ),
			'popular_items'              => __( 'Popular Items', 'md-migrate-resources' ),
			'search_items'               => __( 'Search Items', 'md-migrate-resources' ),
			'not_found'                  => __( 'Not Found', 'md-migrate-resources' ),
			'no_terms'                   => __( 'No items', 'md-migrate-resources' ),
			'items_list'                 => __( 'Items list', 'md-migrate-resources' ),
			'items_list_navigation'      => __( 'Items list navigation', 'md-migrate-resources' ),
		);
		$args   = array(
			'labels'            => $labels,
			'hierarchical'      => false,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => true,
			'show_tagcloud'     => true,
		);
		register_taxonomy( 'resource-tags', array( 'resource' ), $args );
	}
}

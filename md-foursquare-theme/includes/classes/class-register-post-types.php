<?php
/**
 * Register Post Types
 *
 * @package md-foursquare
 */

namespace MD_FOURSQUARE\Includes;

use MD_FOURSQUARE\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_reports_and_insights_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_events_and_webinars_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_case_studies_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_videos_and_demos_cpt' ), 0 );
		add_action( 'init', array( $this, 'register_podcasts_cpt' ), 0 );
	}

	/**
	 * Register Custom Post Type reports_and_insights.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_reports_and_insights_cpt() {

		$labels = array(
			'name'                  => _x( 'Reports & insights', 'Post Type General Name', 'md-foursquare' ),
			'singular_name'         => _x( 'Reports & insight', 'Post Type Singular Name', 'md-foursquare' ),
			'menu_name'             => _x( 'Reports & insights', 'Admin Menu text', 'md-foursquare' ),
			'name_admin_bar'        => _x( 'Reports & insight', 'Add New on Toolbar', 'md-foursquare' ),
			'archives'              => __( 'Reports & insight Archives', 'md-foursquare' ),
			'attributes'            => __( 'Reports & insight Attributes', 'md-foursquare' ),
			'parent_item_colon'     => __( 'Parent Reports & insight:', 'md-foursquare' ),
			'all_items'             => __( 'All Reports & insights', 'md-foursquare' ),
			'add_new_item'          => __( 'Add New Reports & insight', 'md-foursquare' ),
			'add_new'               => __( 'Add New', 'md-foursquare' ),
			'new_item'              => __( 'New Reports & insight', 'md-foursquare' ),
			'edit_item'             => __( 'Edit Reports & insight', 'md-foursquare' ),
			'update_item'           => __( 'Update Reports & insight', 'md-foursquare' ),
			'view_item'             => __( 'View Reports & insight', 'md-foursquare' ),
			'view_items'            => __( 'View Reports & insights', 'md-foursquare' ),
			'search_items'          => __( 'Search Reports & insight', 'md-foursquare' ),
			'not_found'             => __( 'Not found', 'md-foursquare' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-foursquare' ),
			'featured_image'        => __( 'Featured Image', 'md-foursquare' ),
			'set_featured_image'    => __( 'Set featured image', 'md-foursquare' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-foursquare' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-foursquare' ),
			'insert_into_item'      => __( 'Insert into Reports & insight', 'md-foursquare' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Reports & insight', 'md-foursquare' ),
			'items_list'            => __( 'Reports & insights list', 'md-foursquare' ),
			'items_list_navigation' => __( 'Reports & insights list navigation', 'md-foursquare' ),
			'filter_items_list'     => __( 'Filter Reports & insights list', 'md-foursquare' ),
		);
		$args   = array(
			'label'               => __( 'Reports & insight', 'md-foursquare' ),
			'description'         => __( 'The reports & insights', 'md-foursquare' ),
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

		register_post_type( 'reports-and-insights', $args );
	}

	/**
	 * Register Custom Post Type events_and_webinars.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_events_and_webinars_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Events & webinars', 'Post Type General Name', 'md-foursquare' ),
			'singular_name'         => _x( 'Events & webinar', 'Post Type Singular Name', 'md-foursquare' ),
			'menu_name'             => _x( 'Events & webinars', 'Admin Menu text', 'md-foursquare' ),
			'name_admin_bar'        => _x( 'Events & webinar', 'Add New on Toolbar', 'md-foursquare' ),
			'archives'              => __( 'Events & webinar Archives', 'md-foursquare' ),
			'attributes'            => __( 'Events & webinar Attributes', 'md-foursquare' ),
			'parent_item_colon'     => __( 'Parent Events & webinar:', 'md-foursquare' ),
			'all_items'             => __( 'All Events & webinars', 'md-foursquare' ),
			'add_new_item'          => __( 'Add New Events & webinar', 'md-foursquare' ),
			'add_new'               => __( 'Add New', 'md-foursquare' ),
			'new_item'              => __( 'New Events & webinar', 'md-foursquare' ),
			'edit_item'             => __( 'Edit Events & webinar', 'md-foursquare' ),
			'update_item'           => __( 'Update Events & webinar', 'md-foursquare' ),
			'view_item'             => __( 'View Events & webinar', 'md-foursquare' ),
			'view_items'            => __( 'View Events & webinars', 'md-foursquare' ),
			'search_items'          => __( 'Search Events & webinar', 'md-foursquare' ),
			'not_found'             => __( 'Not found', 'md-foursquare' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-foursquare' ),
			'featured_image'        => __( 'Featured Image', 'md-foursquare' ),
			'set_featured_image'    => __( 'Set featured image', 'md-foursquare' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-foursquare' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-foursquare' ),
			'insert_into_item'      => __( 'Insert into Events & webinar', 'md-foursquare' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Events & webinar', 'md-foursquare' ),
			'items_list'            => __( 'Events & webinars list', 'md-foursquare' ),
			'items_list_navigation' => __( 'Events & webinars list navigation', 'md-foursquare' ),
			'filter_items_list'     => __( 'Filter Events & webinars list', 'md-foursquare' ),
		);

		$args = array(
			'label'               => __( 'Events & webinar', 'md-foursquare' ),
			'description'         => __( 'The events & webinars', 'md-foursquare' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-calendar-alt',
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

		register_post_type( 'events-and-webinars', $args );
	}

	/**
	 * Register Custom Post Type case_studies.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_case_studies_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Case studies', 'Post Type General Name', 'md-foursquare' ),
			'singular_name'         => _x( 'Case study', 'Post Type Singular Name', 'md-foursquare' ),
			'menu_name'             => _x( 'Case studies', 'Admin Menu text', 'md-foursquare' ),
			'name_admin_bar'        => _x( 'Case study', 'Add New on Toolbar', 'md-foursquare' ),
			'archives'              => __( 'Case study Archives', 'md-foursquare' ),
			'attributes'            => __( 'Case study Attributes', 'md-foursquare' ),
			'parent_item_colon'     => __( 'Parent Case study:', 'md-foursquare' ),
			'all_items'             => __( 'All Case studies', 'md-foursquare' ),
			'add_new_item'          => __( 'Add New Case study', 'md-foursquare' ),
			'add_new'               => __( 'Add New', 'md-foursquare' ),
			'new_item'              => __( 'New Case study', 'md-foursquare' ),
			'edit_item'             => __( 'Edit Case study', 'md-foursquare' ),
			'update_item'           => __( 'Update Case study', 'md-foursquare' ),
			'view_item'             => __( 'View Case study', 'md-foursquare' ),
			'view_items'            => __( 'View Case studies', 'md-foursquare' ),
			'search_items'          => __( 'Search Case study', 'md-foursquare' ),
			'not_found'             => __( 'Not found', 'md-foursquare' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-foursquare' ),
			'featured_image'        => __( 'Featured Image', 'md-foursquare' ),
			'set_featured_image'    => __( 'Set featured image', 'md-foursquare' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-foursquare' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-foursquare' ),
			'insert_into_item'      => __( 'Insert into Case study', 'md-foursquare' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Case study', 'md-foursquare' ),
			'items_list'            => __( 'Case studies list', 'md-foursquare' ),
			'items_list_navigation' => __( 'Case studies list navigation', 'md-foursquare' ),
			'filter_items_list'     => __( 'Filter Case studies list', 'md-foursquare' ),
		);

		$args = array(
			'label'               => __( 'Case study', 'md-foursquare' ),
			'description'         => __( 'The case studies', 'md-foursquare' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-analytics',
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

		register_post_type( 'case-studies', $args );
	}

	/**
	 * Register Custom Post Type videos_and_demos.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_videos_and_demos_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Videos & demos', 'Post Type General Name', 'md-foursquare' ),
			'singular_name'         => _x( 'Video & demo', 'Post Type Singular Name', 'md-foursquare' ),
			'menu_name'             => _x( 'Videos & demos', 'Admin Menu text', 'md-foursquare' ),
			'name_admin_bar'        => _x( 'Video & demo', 'Add New on Toolbar', 'md-foursquare' ),
			'archives'              => __( 'Video & demo Archives', 'md-foursquare' ),
			'attributes'            => __( 'Video & demo Attributes', 'md-foursquare' ),
			'parent_item_colon'     => __( 'Parent Video & demo:', 'md-foursquare' ),
			'all_items'             => __( 'All Videos & demos', 'md-foursquare' ),
			'add_new_item'          => __( 'Add New Video & demo', 'md-foursquare' ),
			'add_new'               => __( 'Add New', 'md-foursquare' ),
			'new_item'              => __( 'New Video & demo', 'md-foursquare' ),
			'edit_item'             => __( 'Edit Video & demo', 'md-foursquare' ),
			'update_item'           => __( 'Update Video & demo', 'md-foursquare' ),
			'view_item'             => __( 'View Video & demo', 'md-foursquare' ),
			'view_items'            => __( 'View Videos & demos', 'md-foursquare' ),
			'search_items'          => __( 'Search Video & demo', 'md-foursquare' ),
			'not_found'             => __( 'Not found', 'md-foursquare' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-foursquare' ),
			'featured_image'        => __( 'Featured Image', 'md-foursquare' ),
			'set_featured_image'    => __( 'Set featured image', 'md-foursquare' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-foursquare' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-foursquare' ),
			'insert_into_item'      => __( 'Insert into Video & demo', 'md-foursquare' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Video & demo', 'md-foursquare' ),
			'items_list'            => __( 'Videos & demos list', 'md-foursquare' ),
			'items_list_navigation' => __( 'Videos & demos list navigation', 'md-foursquare' ),
			'filter_items_list'     => __( 'Filter Videos & demos list', 'md-foursquare' ),
		);

		$args = array(
			'label'               => __( 'Video & demo', 'md-foursquare' ),
			'description'         => __( 'The videos & demos', 'md-foursquare' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-video-alt3',
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

		register_post_type( 'videos-and-demos', $args );
	}

	/**
	 * Register Custom Post Type podcasts.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_podcasts_cpt() {
		
		$labels = array(
			'name'                  => _x( 'Podcasts', 'Post Type General Name', 'md-foursquare' ),
			'singular_name'         => _x( 'Podcast', 'Post Type Singular Name', 'md-foursquare' ),
			'menu_name'             => _x( 'Podcasts', 'Admin Menu text', 'md-foursquare' ),
			'name_admin_bar'        => _x( 'Podcast', 'Add New on Toolbar', 'md-foursquare' ),
			'archives'              => __( 'Podcast Archives', 'md-foursquare' ),
			'attributes'            => __( 'Podcast Attributes', 'md-foursquare' ),
			'parent_item_colon'     => __( 'Parent Podcast:', 'md-foursquare' ),
			'all_items'             => __( 'All Podcasts', 'md-foursquare' ),
			'add_new_item'          => __( 'Add New Podcast', 'md-foursquare' ),
			'add_new'               => __( 'Add New', 'md-foursquare' ),
			'new_item'              => __( 'New Podcast', 'md-foursquare' ),
			'edit_item'             => __( 'Edit Podcast', 'md-foursquare' ),
			'update_item'           => __( 'Update Podcast', 'md-foursquare' ),
			'view_item'             => __( 'View Podcast', 'md-foursquare' ),
			'view_items'            => __( 'View Podcasts', 'md-foursquare' ),
			'search_items'          => __( 'Search Podcast', 'md-foursquare' ),
			'not_found'             => __( 'Not found', 'md-foursquare' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-foursquare' ),
			'featured_image'        => __( 'Featured Image', 'md-foursquare' ),
			'set_featured_image'    => __( 'Set featured image', 'md-foursquare' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-foursquare' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-foursquare' ),
			'insert_into_item'      => __( 'Insert into Podcast', 'md-foursquare' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Podcast', 'md-foursquare' ),
			'items_list'            => __( 'Podcasts list', 'md-foursquare' ),
			'items_list_navigation' => __( 'Podcasts list navigation', 'md-foursquare' ),
			'filter_items_list'     => __( 'Filter Podcasts list', 'md-foursquare' ),
		);

		$args = array(
			'label'               => __( 'Podcast', 'md-foursquare' ),
			'description'         => __( 'The podcasts', 'md-foursquare' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-microphone',
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

		register_post_type( 'podcasts', $args );
	}
}

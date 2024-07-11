<?php
/**
 * Register Post Types
 *
 * @package md-anitian
 */

namespace MD_ANITIAN\Includes;

use MD_ANITIAN\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_movie_cpt' ), 0 );
	}

	/**
	 * Register Custom Post Type Movie.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_movie_cpt() {

		$labels = array(
			'name'                  => _x( 'Movies', 'Post Type General Name', 'md-anitian' ),
			'singular_name'         => _x( 'Movie', 'Post Type Singular Name', 'md-anitian' ),
			'menu_name'             => _x( 'Movies', 'Admin Menu text', 'md-anitian' ),
			'name_admin_bar'        => _x( 'Movie', 'Add New on Toolbar', 'md-anitian' ),
			'archives'              => __( 'Movie Archives', 'md-anitian' ),
			'attributes'            => __( 'Movie Attributes', 'md-anitian' ),
			'parent_item_colon'     => __( 'Parent Movie:', 'md-anitian' ),
			'all_items'             => __( 'All Movies', 'md-anitian' ),
			'add_new_item'          => __( 'Add New Movie', 'md-anitian' ),
			'add_new'               => __( 'Add New', 'md-anitian' ),
			'new_item'              => __( 'New Movie', 'md-anitian' ),
			'edit_item'             => __( 'Edit Movie', 'md-anitian' ),
			'update_item'           => __( 'Update Movie', 'md-anitian' ),
			'view_item'             => __( 'View Movie', 'md-anitian' ),
			'view_items'            => __( 'View Movies', 'md-anitian' ),
			'search_items'          => __( 'Search Movie', 'md-anitian' ),
			'not_found'             => __( 'Not found', 'md-anitian' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-anitian' ),
			'featured_image'        => __( 'Featured Image', 'md-anitian' ),
			'set_featured_image'    => __( 'Set featured image', 'md-anitian' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-anitian' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-anitian' ),
			'insert_into_item'      => __( 'Insert into Movie', 'md-anitian' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Movie', 'md-anitian' ),
			'items_list'            => __( 'Movies list', 'md-anitian' ),
			'items_list_navigation' => __( 'Movies list navigation', 'md-anitian' ),
			'filter_items_list'     => __( 'Filter Movies list', 'md-anitian' ),
		);
		$args   = array(
			'label'               => __( 'Movie', 'md-anitian' ),
			'description'         => __( 'The movies', 'md-anitian' ),
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

		register_post_type( 'movies', $args );
	}
}

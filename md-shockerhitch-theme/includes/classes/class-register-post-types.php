<?php
/**
 * Register Post Types
 *
 * @package md-shockerhitch
 */

namespace MD_SHOCKERHITCH\Includes;

use MD_SHOCKERHITCH\Includes\Traits\Singleton;

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
			'name'                  => _x( 'Movies', 'Post Type General Name', 'md-shockerhitch' ),
			'singular_name'         => _x( 'Movie', 'Post Type Singular Name', 'md-shockerhitch' ),
			'menu_name'             => _x( 'Movies', 'Admin Menu text', 'md-shockerhitch' ),
			'name_admin_bar'        => _x( 'Movie', 'Add New on Toolbar', 'md-shockerhitch' ),
			'archives'              => __( 'Movie Archives', 'md-shockerhitch' ),
			'attributes'            => __( 'Movie Attributes', 'md-shockerhitch' ),
			'parent_item_colon'     => __( 'Parent Movie:', 'md-shockerhitch' ),
			'all_items'             => __( 'All Movies', 'md-shockerhitch' ),
			'add_new_item'          => __( 'Add New Movie', 'md-shockerhitch' ),
			'add_new'               => __( 'Add New', 'md-shockerhitch' ),
			'new_item'              => __( 'New Movie', 'md-shockerhitch' ),
			'edit_item'             => __( 'Edit Movie', 'md-shockerhitch' ),
			'update_item'           => __( 'Update Movie', 'md-shockerhitch' ),
			'view_item'             => __( 'View Movie', 'md-shockerhitch' ),
			'view_items'            => __( 'View Movies', 'md-shockerhitch' ),
			'search_items'          => __( 'Search Movie', 'md-shockerhitch' ),
			'not_found'             => __( 'Not found', 'md-shockerhitch' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-shockerhitch' ),
			'featured_image'        => __( 'Featured Image', 'md-shockerhitch' ),
			'set_featured_image'    => __( 'Set featured image', 'md-shockerhitch' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-shockerhitch' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-shockerhitch' ),
			'insert_into_item'      => __( 'Insert into Movie', 'md-shockerhitch' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Movie', 'md-shockerhitch' ),
			'items_list'            => __( 'Movies list', 'md-shockerhitch' ),
			'items_list_navigation' => __( 'Movies list navigation', 'md-shockerhitch' ),
			'filter_items_list'     => __( 'Filter Movies list', 'md-shockerhitch' ),
		);
		$args   = array(
			'label'               => __( 'Movie', 'md-shockerhitch' ),
			'description'         => __( 'The movies', 'md-shockerhitch' ),
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

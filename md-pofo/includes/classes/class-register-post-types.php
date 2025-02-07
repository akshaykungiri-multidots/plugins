<?php
/**
 * Register Post Types
 *
 * @package md-pofo
 */

declare( strict_types = 1 );

namespace MD_POFO\Includes;

use MD_POFO\Includes\Traits\Singleton;

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
	protected function setup_hooks(): void {

		/**
		 * Actions.
		 */
		add_action( 'init', array( $this, 'register_movie_cpt' ), 0 );

		add_action( 'init', array( $this, 'register_menu_blocks' ), 0 );

		add_filter('render_block', array($this, 'md_pofo_render_block'), 10, 2);
	}

	/**
	 * Register Custom Post Type Movie.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_movie_cpt(): void {

		$labels = array(
			'name'                  => _x( 'Movies', 'Post Type General Name', 'md-pofo' ),
			'singular_name'         => _x( 'Movie', 'Post Type Singular Name', 'md-pofo' ),
			'menu_name'             => _x( 'Movies', 'Admin Menu text', 'md-pofo' ),
			'name_admin_bar'        => _x( 'Movie', 'Add New on Toolbar', 'md-pofo' ),
			'archives'              => __( 'Movie Archives', 'md-pofo' ),
			'attributes'            => __( 'Movie Attributes', 'md-pofo' ),
			'parent_item_colon'     => __( 'Parent Movie:', 'md-pofo' ),
			'all_items'             => __( 'All Movies', 'md-pofo' ),
			'add_new_item'          => __( 'Add New Movie', 'md-pofo' ),
			'add_new'               => __( 'Add New', 'md-pofo' ),
			'new_item'              => __( 'New Movie', 'md-pofo' ),
			'edit_item'             => __( 'Edit Movie', 'md-pofo' ),
			'update_item'           => __( 'Update Movie', 'md-pofo' ),
			'view_item'             => __( 'View Movie', 'md-pofo' ),
			'view_items'            => __( 'View Movies', 'md-pofo' ),
			'search_items'          => __( 'Search Movie', 'md-pofo' ),
			'not_found'             => __( 'Not found', 'md-pofo' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-pofo' ),
			'featured_image'        => __( 'Featured Image', 'md-pofo' ),
			'set_featured_image'    => __( 'Set featured image', 'md-pofo' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-pofo' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-pofo' ),
			'insert_into_item'      => __( 'Insert into Movie', 'md-pofo' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Movie', 'md-pofo' ),
			'items_list'            => __( 'Movies list', 'md-pofo' ),
			'items_list_navigation' => __( 'Movies list navigation', 'md-pofo' ),
			'filter_items_list'     => __( 'Filter Movies list', 'md-pofo' ),
		);
		$args   = array(
			'label'               => __( 'Movie', 'md-pofo' ),
			'description'         => __( 'The movies', 'md-pofo' ),
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

	/**
	 * Register Custom Post Type Menu Blocks.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_menu_blocks() {

		$labels = array(
			'name'                  => _x( 'MD Menu Blocks', 'Post Type General Name', 'md-pofo' ),
			'singular_name'         => _x( 'MD Menu Block', 'Post Type Singular Name', 'md-pofo' ),
			'menu_name'             => _x( 'MD Menu Blocks', 'Admin Menu text', 'md-pofo' ),
			'name_admin_bar'        => _x( 'MD Menu Block', 'Add New on Toolbar', 'md-pofo' ),
			'archives'              => __( 'MD Menu Block Archives', 'md-pofo' ),
			'attributes'            => __( 'MD Menu Block Attributes', 'md-pofo' ),
			'parent_item_colon'     => __( 'Parent MD Menu Block:', 'md-pofo' ),
			'all_items'             => __( 'All MD Menu Blocks', 'md-pofo' ),
			'add_new_item'          => __( 'Add New MD Menu Block', 'md-pofo' ),
			'add_new'               => __( 'Add New', 'md-pofo' ),
			'new_item'              => __( 'New MD Menu Block', 'md-pofo' ),
			'edit_item'             => __( 'Edit MD Menu Block', 'md-pofo' ),
			'update_item'           => __( 'Update MD Menu Block', 'md-pofo' ),
			'view_item'             => __( 'View MD Menu Block', 'md-pofo' ),
			'view_items'            => __( 'View MD Menu Blocks', 'md-pofo' ),
			'search_items'          => __( 'Search MD Menu Block', 'md-pofo' ),
			'not_found'             => __( 'Not found', 'md-pofo' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-pofo' ),
			'featured_image'        => __( 'Featured Image', 'md-pofo' ),
			'set_featured_image'    => __( 'Set featured image', 'md-pofo' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-pofo' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-pofo' ),
			'insert_into_item'      => __( 'Insert into MD Menu Block', 'md-pofo' ),
			'uploaded_to_this_item' => __( 'Uploaded to this MD Menu Block', 'md-pofo' ),
			'items_list'            => __( 'MD Menu Blocks list', 'md-pofo' ),
			'items_list_navigation' => __( 'MD Menu Blocks list navigation', 'md-pofo' ),
			'filter_items_list'     => __( 'Filter MD Menu Blocks list', 'md-pofo' ),
		);
		$args   = array(
			'label'               => __( 'MD Menu Block', 'md-pofo' ),
			'description'         => __( 'The MD Menu Block', 'md-pofo' ),
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

		register_post_type( 'md-menu-block', $args );
	}

	public function md_pofo_render_block( $block_content, $block ) {
		// Check if it's the `core/navigation-link` block and if `selectedPost` is set.
		if ($block['blockName'] === 'core/navigation-link' && !empty($block['attrs']['selectedPost'])) {
			$selected_post_id = $block['attrs']['selectedPost'];
	
			// Fetch the selected post content.
			$post_content = get_post_field('post_content', $selected_post_id);
			$post_content = apply_filters('the_content', $post_content); // Apply WordPress content filters.
	
			if ($post_content) {
				// Check if the block_content contains <li> and append submenu correctly.
				if (strpos($block_content, '<li') !== false) {
					$block_content = preg_replace(
						'/<\/li>$/', // Match the closing </li>.
						'<ul class="md_submenu">
							<li class="md_submenu-item">' . $post_content . '</li>
						</ul></li>',
						$block_content
					);
				}
			}
		}
	
		return $block_content;
	}
}

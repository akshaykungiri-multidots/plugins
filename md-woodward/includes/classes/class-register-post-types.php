<?php
/**
 * Register Post Types
 *
 * @package md-woodward
 */

namespace MD_WOODWARD\Includes;

use MD_WOODWARD\Includes\Traits\Singleton;

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
		add_action( 'init', array( $this, 'register_menu_blocks' ), 0 );
		add_filter('render_block', array($this, 'md_woodward_render_block'), 10, 2);

		add_action( 'init', array( $this, 'register_post_types' ) );
	}

	/**
	 * Register Custom Post Type Movie.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_menu_blocks() {

		$labels = array(
			'name'                  => _x( 'MD Menu Blocks', 'Post Type General Name', 'md-woodward' ),
			'singular_name'         => _x( 'MD Menu Block', 'Post Type Singular Name', 'md-woodward' ),
			'menu_name'             => _x( 'MD Menu Blocks', 'Admin Menu text', 'md-woodward' ),
			'name_admin_bar'        => _x( 'MD Menu Block', 'Add New on Toolbar', 'md-woodward' ),
			'archives'              => __( 'MD Menu Block Archives', 'md-woodward' ),
			'attributes'            => __( 'MD Menu Block Attributes', 'md-woodward' ),
			'parent_item_colon'     => __( 'Parent MD Menu Block:', 'md-woodward' ),
			'all_items'             => __( 'All MD Menu Blocks', 'md-woodward' ),
			'add_new_item'          => __( 'Add New MD Menu Block', 'md-woodward' ),
			'add_new'               => __( 'Add New', 'md-woodward' ),
			'new_item'              => __( 'New MD Menu Block', 'md-woodward' ),
			'edit_item'             => __( 'Edit MD Menu Block', 'md-woodward' ),
			'update_item'           => __( 'Update MD Menu Block', 'md-woodward' ),
			'view_item'             => __( 'View MD Menu Block', 'md-woodward' ),
			'view_items'            => __( 'View MD Menu Blocks', 'md-woodward' ),
			'search_items'          => __( 'Search MD Menu Block', 'md-woodward' ),
			'not_found'             => __( 'Not found', 'md-woodward' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-woodward' ),
			'featured_image'        => __( 'Featured Image', 'md-woodward' ),
			'set_featured_image'    => __( 'Set featured image', 'md-woodward' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-woodward' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-woodward' ),
			'insert_into_item'      => __( 'Insert into MD Menu Block', 'md-woodward' ),
			'uploaded_to_this_item' => __( 'Uploaded to this MD Menu Block', 'md-woodward' ),
			'items_list'            => __( 'MD Menu Blocks list', 'md-woodward' ),
			'items_list_navigation' => __( 'MD Menu Blocks list navigation', 'md-woodward' ),
			'filter_items_list'     => __( 'Filter MD Menu Blocks list', 'md-woodward' ),
		);
		$args   = array(
			'label'               => __( 'MD Menu Block', 'md-woodward' ),
			'description'         => __( 'The MD Menu Block', 'md-woodward' ),
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

	/**
	 * Register Custom Post Type Movie.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_post_types() {
		
		$labels = array(
			'name'                  => _x( 'Products', 'Post Type General Name', 'md-woodward' ),
			'singular_name'         => _x( 'Product', 'Post Type Singular Name', 'md-woodward' ),
			'menu_name'             => _x( 'Products', 'Admin Menu text', 'md-woodward' ),
			'name_admin_bar'        => _x( 'Product', 'Add New on Toolbar', 'md-woodward' ),
			'archives'              => __( 'Product Archives', 'md-woodward' ),
			'attributes'            => __( 'Product Attributes', 'md-woodward' ),
			'parent_item_colon'     => __( 'Parent Product:', 'md-woodward' ),
			'all_items'             => __( 'All Products', 'md-woodward' ),
			'add_new_item'          => __( 'Add New Product', 'md-woodward' ),
			'add_new'               => __( 'Add New', 'md-woodward' ),
			'new_item'              => __( 'New Product', 'md-woodward' ),
			'edit_item'             => __( 'Edit Product', 'md-woodward' ),
			'update_item'           => __( 'Update Product', 'md-woodward' ),
			'view_item'             => __( 'View Product', 'md-woodward' ),
			'view_items'            => __( 'View Products', 'md-woodward' ),
			'search_items'          => __( 'Search Product', 'md-woodward' ),
			'not_found'             => __( 'Not found', 'md-woodward' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-woodward' ),
			'featured_image'        => __( 'Featured Image', 'md-woodward' ),
			'set_featured_image'    => __( 'Set featured image', 'md-woodward' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-woodward' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-woodward' ),
			'insert_into_item'      => __( 'Insert into Product', 'md-woodward' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Product', 'md-woodward' ),
			'items_list'            => __( 'Products list', 'md-woodward' ),
			'items_list_navigation' => __( 'Products list navigation', 'md-woodward' ),
			'filter_items_list'     => __( 'Filter Products list', 'md-woodward' ),
		);

		$args   = array(
			'label'               => __( 'Product', 'md-woodward' ),
			'description'         => __( 'The Product', 'md-woodward' ),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-cart',
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
	 * Render block.
	 *
	 * @param string $block_content block content.
	 * @param array  $block block.
	 *
	 * @return string
	 */
	public function md_woodward_render_block( $block_content, $block ) {
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

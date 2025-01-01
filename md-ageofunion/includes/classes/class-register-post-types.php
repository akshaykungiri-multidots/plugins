<?php

/**
 * Register Post Types
 *
 * @package md-ageofunion
 */

declare(strict_types=1);

namespace MD_AGEOFUNION\Includes;

use MD_AGEOFUNION\Includes\Traits\Singleton;

use function ElementorDeps\DI\add;

/**
 * Class for register post types.
 */
class Register_Post_Types
{
	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct()
	{

		// load class.
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	protected function setup_hooks(): void
	{

		/**
		 * Actions.
		 */
		add_action('init', array($this, 'register_film_cpt'), 0);

		add_action('init', array($this, 'register_project_cpt'), 0);
	}

	/**
	 * Register Custom Post Type Film.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_film_cpt(): void
	{

		$labels = array(
			'name'                  => _x('Films', 'Post Type General Name', 'md-ageofunion'),
			'singular_name'         => _x('Film', 'Post Type Singular Name', 'md-ageofunion'),
			'menu_name'             => _x('Films', 'Admin Menu text', 'md-ageofunion'),
			'name_admin_bar'        => _x('Film', 'Add New on Toolbar', 'md-ageofunion'),
			'archives'              => __('Film Archives', 'md-ageofunion'),
			'attributes'            => __('Film Attributes', 'md-ageofunion'),
			'parent_item_colon'     => __('Parent Film:', 'md-ageofunion'),
			'all_items'             => __('All Films', 'md-ageofunion'),
			'add_new_item'          => __('Add New Film', 'md-ageofunion'),
			'add_new'               => __('Add New', 'md-ageofunion'),
			'new_item'              => __('New Film', 'md-ageofunion'),
			'edit_item'             => __('Edit Film', 'md-ageofunion'),
			'update_item'           => __('Update Film', 'md-ageofunion'),
			'view_item'             => __('View Film', 'md-ageofunion'),
			'view_items'            => __('View Films', 'md-ageofunion'),
			'search_items'          => __('Search Film', 'md-ageofunion'),
			'not_found'             => __('Not found', 'md-ageofunion'),
			'not_found_in_trash'    => __('Not found in Trash', 'md-ageofunion'),
			'featured_image'        => __('Featured Image', 'md-ageofunion'),
			'set_featured_image'    => __('Set featured image', 'md-ageofunion'),
			'remove_featured_image' => __('Remove featured image', 'md-ageofunion'),
			'use_featured_image'    => __('Use as featured image', 'md-ageofunion'),
			'insert_into_item'      => __('Insert into Film', 'md-ageofunion'),
			'uploaded_to_this_item' => __('Uploaded to this Film', 'md-ageofunion'),
			'items_list'            => __('Films list', 'md-ageofunion'),
			'items_list_navigation' => __('Films list navigation', 'md-ageofunion'),
			'filter_items_list'     => __('Filter Films list', 'md-ageofunion'),
		);
		$args   = array(
			'label'               => __('Film', 'md-ageofunion'),
			'description'         => __('The films', 'md-ageofunion'),
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

		register_post_type('films', $args);
	}

	/**
	 * Register Custom Post Type Project.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_project_cpt(): void
	{

		$labels = array(
			'name'                  => _x('Projects', 'Post Type General Name', 'md-ageofunion'),
			'singular_name'         => _x('Project', 'Post Type Singular Name', 'md-ageofunion'),
			'menu_name'             => _x('Projects', 'Admin Menu text', 'md-ageofunion'),
			'name_admin_bar'        => _x('Project', 'Add New on Toolbar', 'md-ageofunion'),
			'archives'              => __('Project Archives', 'md-ageofunion'),
			'attributes'            => __('Project Attributes', 'md-ageofunion'),
			'parent_item_colon'     => __('Parent Project:', 'md-ageofunion'),
			'all_items'             => __('All Projects', 'md-ageofunion'),
			'add_new_item'          => __('Add New Project', 'md-ageofunion'),
			'add_new'               => __('Add New', 'md-ageofunion'),
			'new_item'              => __('New Project', 'md-ageofunion'),
			'edit_item'             => __('Edit Project', 'md-ageofunion'),
			'update_item'           => __('Update Project', 'md-ageofunion'),
			'view_item'             => __('View Project', 'md-ageofunion'),
			'view_items'            => __('View Projects', 'md-ageofunion'),
			'search_items'          => __('Search Project', 'md-ageofunion'),
			'not_found'             => __('Not found', 'md-ageofunion'),
			'not_found_in_trash'    => __('Not found in Trash', 'md-ageofunion'),
			'featured_image'        => __('Featured Image', 'md-ageofunion'),
			'set_featured_image'    => __('Set featured image', 'md-ageofunion'),
			'remove_featured_image' => __('Remove featured image', 'md-ageofunion'),
			'use_featured_image'    => __('Use as featured image', 'md-ageofunion'),
			'insert_into_item'      => __('Insert into Project', 'md-ageofunion'),
			'uploaded_to_this_item' => __('Uploaded to this Project', 'md-ageofunion'),
			'items_list'            => __('Projects list', 'md-ageofunion'),
			'items_list_navigation' => __('Projects list navigation', 'md-ageofunion'),
			'filter_items_list'     => __('Filter Projects list', 'md-ageofunion'),
		);
		$args   = array(
			'label'               => __('Project', 'md-ageofunion'),
			'description'         => __('The projects', 'md-ageofunion'),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-portfolio',
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

		register_post_type('projects', $args);
	}
}

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

		add_action('init', array($this, 'register_exhibition_cpt'), 0);

		// Add meta box for film.
		add_action('add_meta_boxes', array($this, 'add_film_meta_box'));

		// Add meta box for exhibition.
		add_action('add_meta_boxes', array($this, 'add_exhibition_meta_box'));

		// Save meta box for film.
		add_action('save_post', array($this, 'save_film_meta_box'));

		// Save meta box for exhibition.
		add_action('save_post', array($this, 'save_exhibition_meta_box'));
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

	/**
	 * Register Custom Post Type Exhibition.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function register_exhibition_cpt(): void
	{

		$labels = array(
			'name'                  => _x('Exhibitions', 'Post Type General Name', 'md-ageofunion'),
			'singular_name'         => _x('Exhibition', 'Post Type Singular Name', 'md-ageofunion'),
			'menu_name'             => _x('Exhibitions', 'Admin Menu text', 'md-ageofunion'),
			'name_admin_bar'        => _x('Exhibition', 'Add New on Toolbar', 'md-ageofunion'),
			'archives'              => __('Exhibition Archives', 'md-ageofunion'),
			'attributes'            => __('Exhibition Attributes', 'md-ageofunion'),
			'parent_item_colon'     => __('Parent Exhibition:', 'md-ageofunion'),
			'all_items'             => __('All Exhibitions', 'md-ageofunion'),
			'add_new_item'          => __('Add New Exhibition', 'md-ageofunion'),
			'add_new'               => __('Add New', 'md-ageofunion'),
			'new_item'              => __('New Exhibition', 'md-ageofunion'),
			'edit_item'             => __('Edit Exhibition', 'md-ageofunion'),
			'update_item'           => __('Update Exhibition', 'md-ageofunion'),
			'view_item'             => __('View Exhibition', 'md-ageofunion'),
			'view_items'            => __('View Exhibitions', 'md-ageofunion'),
			'search_items'          => __('Search Exhibition', 'md-ageofunion'),
			'not_found'             => __('Not found', 'md-ageofunion'),
			'not_found_in_trash'    => __('Not found in Trash', 'md-ageofunion'),
			'featured_image'        => __('Featured Image', 'md-ageofunion'),
			'set_featured_image'    => __('Set featured image', 'md-ageofunion'),
			'remove_featured_image' => __('Remove featured image', 'md-ageofunion'),
			'use_featured_image'    => __('Use as featured image', 'md-ageofunion'),
			'insert_into_item'      => __('Insert into Exhibition', 'md-ageofunion'),
			'uploaded_to_this_item' => __('Uploaded to this Exhibition', 'md-ageofunion'),
			'items_list' 		    => __('Exhibitions list', 'md-ageofunion'),
			'items_list_navigation' => __('Exhibitions list navigation', 'md-ageofunion'),
			'filter_items_list'     => __('Filter Exhibitions list', 'md-ageofunion'),
		);
		$args   = array(
			'label'               => __('Exhibition', 'md-ageofunion'),
			'description'         => __('The exhibitions', 'md-ageofunion'),
			'labels'              => $labels,
			'menu_icon'           => 'dashicons-tickets-alt',
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

		register_post_type('exhibitions', $args);
	}

	/**
	 * Add meta box for film.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function add_film_meta_box(): void
	{
		add_meta_box(
			'film_meta_box',
			__('Film Details', 'md-ageofunion'),
			array($this, 'display_film_meta_box'),
			'films',
			'normal',
			'high'
		);
	}

	/**
	 * Display meta box for film.
	 *
	 * @param WP_Post $post The post object.
	 * @return void
	 * @since 1.0.0
	 */
	public function display_film_meta_box($post): void
	{
        $trailer_link = get_post_meta($post->ID, 'trailer_link', true);
        $movie_link = get_post_meta($post->ID, 'movie_link', true);
        $film_duration = get_post_meta($post->ID, 'film_duration', true);
        $film_release_date = get_post_meta($post->ID, 'film_release_date', true);

		// Create a nonce field.
		wp_nonce_field('film_meta_box', 'film_meta_box_nonce');
		?>
        <p>
            <label><strong><?php esc_html_e('Trailer Link:', 'md-ageofunion'); ?></strong></label><br>
            <input type="url" name="trailer_link" value="<?php echo esc_attr($trailer_link); ?>" style="width: 100%;">
        </p>
        <p>
            <label><strong><?php esc_html_e('Movie Link:', 'md-ageofunion'); ?></strong></label><br>
            <input type="url" name="movie_link" value="<?php echo esc_attr($movie_link); ?>" style="width: 100%;">
        </p>
        <p>
            <label><strong><?php esc_html_e('Film Duration:', 'md-ageofunion'); ?></strong></label><br>
            <input type="text" name="film_duration" value="<?php echo esc_attr($film_duration); ?>" style="width: 100%;">
        </p>
        <p>
            <label><strong><?php esc_html_e('Film Release Date:', 'md-ageofunion'); ?></strong></label><br>
            <input type="date" name="film_release_date" value="<?php echo esc_attr($film_release_date); ?>" style="width: 100%;">
        </p>
		<?php
	}

	/**
	 * Add meta box for exhibition.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function add_exhibition_meta_box(): void
	{
		add_meta_box(
			'exhibition_meta_box',
			__('Exhibition Details', 'md-ageofunion'),
			array($this, 'display_exhibition_meta_box'),
			'exhibitions',
			'normal',
			'high'
		);
	}

	/**
	 * Display meta box for exhibition.
	 *
	 * @param WP_Post $post The post object.
	 * @return void
	 * @since 1.0.0
	 */
	public function display_exhibition_meta_box($post): void
	{
		$exhibition_publish_date = get_post_meta($post->ID, 'exhibition_publish_date', true);
		// Create a nonce field.
		wp_nonce_field('film_meta_box', 'film_meta_box_nonce');
        ?>
        <p>
            <label><strong><?php esc_html_e('Exhibition Publish Date:', 'md-ageofunion'); ?></strong></label><br>
            <input type="text" name="exhibition_publish_date" value="<?php echo esc_attr($exhibition_publish_date); ?>" placeholder="e.g., Spring 2023" style="width: 100%;">
        </p>
        <?php
	}

	/**
	 * Save meta box for film.
	 *
	 * @param int $post_id The post ID.
	 * @return void
	 * @since 1.0.0
	 */
	public function save_film_meta_box($post_id): void
	{
		// Validate nonce.
		if (!isset($_POST['film_meta_box_nonce']) || !wp_verify_nonce(sanitize_key($_POST['film_meta_box_nonce']), 'film_meta_box')) {
			return;
		}

		// Check if this is an autosave.
		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
			return;
		}

		// Check the user's permissions.
		if (!current_user_can('edit_post', $post_id)) {
			return;
		}

		// Check if post type is film.
		if (get_post_type($post_id) !== 'films') {
			return;
		}

		// Save meta box fields.
		$trailer_link = isset($_POST['trailer_link']) ? sanitize_text_field($_POST['trailer_link']) : '';
		$movie_link = isset($_POST['movie_link']) ? sanitize_text_field($_POST['movie_link']) : '';
		$film_duration = isset($_POST['film_duration']) ? sanitize_text_field($_POST['film_duration']) : '';
		$film_release_date = isset($_POST['film_release_date']) ? sanitize_text_field($_POST['film_release_date']) : '';
		

		update_post_meta($post_id, 'trailer_link', $trailer_link);
		update_post_meta($post_id, 'movie_link', $movie_link);
		update_post_meta($post_id, 'film_duration', $film_duration);
		update_post_meta($post_id, 'film_release_date', $film_release_date);
		
	}

	/**
	 * Save meta box for exhibition.
	 *
	 * @param int $post_id The post ID.
	 * @return void
	 * @since 1.0.0
	 */
	public function save_exhibition_meta_box($post_id): void
	{
		// Validate nonce.
		if (!isset($_POST['film_meta_box_nonce']) || !wp_verify_nonce(sanitize_key($_POST['film_meta_box_nonce']), 'film_meta_box')) {
			return;
		}

		// Check if this is an autosave.
		if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
			return;
		}

		// Check the user's permissions.
		if (!current_user_can('edit_post', $post_id)) {
			return;
		}

		// Check if post type is exhibition.
		if (get_post_type($post_id) !== 'exhibitions') {
			return;
		}

		// Save meta box fields.
		$exhibition_publish_date = isset($_POST['exhibition_publish_date']) ? sanitize_text_field($_POST['exhibition_publish_date']) : '';

		update_post_meta($post_id, 'exhibition_publish_date', $exhibition_publish_date);
	}
}

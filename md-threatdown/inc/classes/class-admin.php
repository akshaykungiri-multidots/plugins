<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    MD_Threatdown
 * @subpackage MD_Threatdown/admin
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Threatdown\Inc;

use MD_Threatdown\Inc\Traits\Singleton;

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
		if ( defined( 'MD_THREATDOWN_VERSION' ) ) {
			$this->version = MD_THREATDOWN_VERSION;
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
		add_action( 'admin_menu', array( $this, 'md_threatdown_add_plugin_page' ) );
		add_action( 'admin_init', array( $this, 'md_threatdown_page_init' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}


	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'md-threatdown', MD_THREATDOWN_URL . 'assets/build/admin.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'md-threatdown', MD_THREATDOWN_URL . 'assets/build/admin.js', array( 'jquery' ), $this->version, false );

		wp_localize_script(
			'md-threatdown',
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
			'name'                  => _x( 'News', 'News General Name', 'md-threatdown' ),
			'singular_name'         => _x( 'News', 'News Singular Name', 'md-threatdown' ),
			'menu_name'             => __( 'News', 'md-threatdown' ),
			'name_admin_bar'        => __( 'News', 'md-threatdown' ),
			'archives'              => __( 'Item Archives', 'md-threatdown' ),
			'attributes'            => __( 'Item Attributes', 'md-threatdown' ),
			'parent_item_colon'     => __( 'Parent Item:', 'md-threatdown' ),
			'all_items'             => __( 'All Items', 'md-threatdown' ),
			'add_new_item'          => __( 'Add New Item', 'md-threatdown' ),
			'add_new'               => __( 'Add New', 'md-threatdown' ),
			'new_item'              => __( 'New Item', 'md-threatdown' ),
			'edit_item'             => __( 'Edit Item', 'md-threatdown' ),
			'update_item'           => __( 'Update Item', 'md-threatdown' ),
			'view_item'             => __( 'View Item', 'md-threatdown' ),
			'view_items'            => __( 'View Items', 'md-threatdown' ),
			'search_items'          => __( 'Search Item', 'md-threatdown' ),
			'not_found'             => __( 'Not found', 'md-threatdown' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-threatdown' ),
			'featured_image'        => __( 'Featured Image', 'md-threatdown' ),
			'set_featured_image'    => __( 'Set featured image', 'md-threatdown' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-threatdown' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-threatdown' ),
			'insert_into_item'      => __( 'Insert into item', 'md-threatdown' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'md-threatdown' ),
			'items_list'            => __( 'Items list', 'md-threatdown' ),
			'items_list_navigation' => __( 'Items list navigation', 'md-threatdown' ),
			'filter_items_list'     => __( 'Filter items list', 'md-threatdown' ),
		);
		$args   = array(
			'label'               => __( 'News', 'md-threatdown' ),
			'description'         => __( 'Sample News', 'md-threatdown' ),
			'labels'              => $labels,
			'supports'            => array( 'title', 'editor' ),
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
		register_post_type( 'news', $args );

	}
	/**
	 * Function is used register custom taxonomy
	 */
	public function md_register_custom_taxonomy() {

		$labels = array(
			'name'                       => _x( 'News Categories', 'Taxonomy General Name', 'md-threatdown' ),
			'singular_name'              => _x( 'News Category', 'Taxonomy Singular Name', 'md-threatdown' ),
			'menu_name'                  => __( 'Taxonomy', 'md-threatdown' ),
			'all_items'                  => __( 'All Items', 'md-threatdown' ),
			'parent_item'                => __( 'Parent Item', 'md-threatdown' ),
			'parent_item_colon'          => __( 'Parent Item:', 'md-threatdown' ),
			'new_item_name'              => __( 'New Item Name', 'md-threatdown' ),
			'add_new_item'               => __( 'Add New Item', 'md-threatdown' ),
			'edit_item'                  => __( 'Edit Item', 'md-threatdown' ),
			'update_item'                => __( 'Update Item', 'md-threatdown' ),
			'view_item'                  => __( 'View Item', 'md-threatdown' ),
			'separate_items_with_commas' => __( 'Separate items with commas', 'md-threatdown' ),
			'add_or_remove_items'        => __( 'Add or remove items', 'md-threatdown' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-threatdown' ),
			'popular_items'              => __( 'Popular Items', 'md-threatdown' ),
			'search_items'               => __( 'Search Items', 'md-threatdown' ),
			'not_found'                  => __( 'Not Found', 'md-threatdown' ),
			'no_terms'                   => __( 'No items', 'md-threatdown' ),
			'items_list'                 => __( 'Items list', 'md-threatdown' ),
			'items_list_navigation'      => __( 'Items list navigation', 'md-threatdown' ),
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
		register_taxonomy( 'mdnews', array( 'news' ), $args );

	}

	/**
	 * Function is used to create plugin page
	 */
	public function md_threatdown_add_plugin_page() {
		add_menu_page(
			__( 'MD Threatdown', 'md-threatdown' ), // page_title
			__( 'MD Threatdown', 'md-threatdown' ), // menu_title
			'manage_options', // capability
			'md-threatdown', // menu_slug
			array( $this, 'md_threatdown_create_admin_page' ), // function
			'dashicons-admin-generic', // icon_url
			2 // position
		);
	}

	/**
	 * Function is used to create admin page
	 */
	public function md_threatdown_create_admin_page() {
		$this->md_threatdown_options = get_option( 'md_threatdown_option_name' ); ?>

		<div class="wrap">
			<h2><?php esc_html_e( 'MD Threatdown', 'md-threatdown' ); ?></h2>
			<p></p>
			<?php settings_errors(); ?>

			<form method="post" action="options.php">
				<?php
					settings_fields( 'md_threatdown_option_group' );
					do_settings_sections( 'md-threatdown-admin' );
					submit_button();
				?>
			</form>
		</div>
		<?php
	}

	/**
	 * Function is used register settings.
	 */
	public function md_threatdown_page_init() {
		register_setting(
			'md_threatdown_option_group', // option_group
			'md_threatdown_option_name', // option_name
			array( $this, 'md_threatdown_sanitize' ) // sanitize_callback
		);

		add_settings_section(
			'md_threatdown_setting_section', // id
			__( 'Settings', 'md-threatdown' ), // title
			array( $this, 'md_threatdown_section_info' ), // callback
			'md-threatdown-admin' // page
		);

		add_settings_field(
			'sample_0', // id
			__( 'Sample', 'md-threatdown' ), // title
			array( $this, 'sample_0_callback' ), // callback
			'md-threatdown-admin', // page
			'md_threatdown_setting_section' // section
		);
	}

	/**
	 * Function is used to sanitise inputs.
	 */
	public function md_threatdown_sanitize( $input ) {
		$sanitary_values = array();
		if ( isset( $input['sample_0'] ) ) {
			$sanitary_values['sample_0'] = sanitize_text_field( $input['sample_0'] );
		}

		return $sanitary_values;
	}

	/**
	 * Used to show section info.
	 */
	public function md_threatdown_section_info() {

	}

	/**
	 * Settings field callback function.
	 */
	public function sample_0_callback() {
		printf(
			'<input class="regular-text" type="text" name="md_threatdown_option_name[sample_0]" id="sample_0" value="%s">',
			isset( $this->md_threatdown_options['sample_0'] ) ? esc_attr( $this->md_threatdown_options['sample_0'] ) : ''
		);
	}
}

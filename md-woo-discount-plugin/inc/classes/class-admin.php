<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    MD_Woo_Discount
 * @subpackage MD_Woo_Discount/admin
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Woo_Discount\Inc;

use MD_Woo_Discount\Inc\Traits\Singleton;

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
		if ( defined( 'MD_WOO_DISCOUNT_VERSION' ) ) {
			$this->version = MD_WOO_DISCOUNT_VERSION;
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
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
	}


	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'md-woo-discount', MD_WOO_DISCOUNT_URL . 'assets/build/admin.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'md-woo-discount', MD_WOO_DISCOUNT_URL . 'assets/build/admin.js', array( 'jquery' ), $this->version, false );

		wp_localize_script(
			'md-woo-discount',
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
			'name'                  => _x( 'News', 'News General Name', 'md-woo-discount' ),
			'singular_name'         => _x( 'News', 'News Singular Name', 'md-woo-discount' ),
			'menu_name'             => __( 'News', 'md-woo-discount' ),
			'name_admin_bar'        => __( 'News', 'md-woo-discount' ),
			'archives'              => __( 'Item Archives', 'md-woo-discount' ),
			'attributes'            => __( 'Item Attributes', 'md-woo-discount' ),
			'parent_item_colon'     => __( 'Parent Item:', 'md-woo-discount' ),
			'all_items'             => __( 'All Items', 'md-woo-discount' ),
			'add_new_item'          => __( 'Add New Item', 'md-woo-discount' ),
			'add_new'               => __( 'Add New', 'md-woo-discount' ),
			'new_item'              => __( 'New Item', 'md-woo-discount' ),
			'edit_item'             => __( 'Edit Item', 'md-woo-discount' ),
			'update_item'           => __( 'Update Item', 'md-woo-discount' ),
			'view_item'             => __( 'View Item', 'md-woo-discount' ),
			'view_items'            => __( 'View Items', 'md-woo-discount' ),
			'search_items'          => __( 'Search Item', 'md-woo-discount' ),
			'not_found'             => __( 'Not found', 'md-woo-discount' ),
			'not_found_in_trash'    => __( 'Not found in Trash', 'md-woo-discount' ),
			'featured_image'        => __( 'Featured Image', 'md-woo-discount' ),
			'set_featured_image'    => __( 'Set featured image', 'md-woo-discount' ),
			'remove_featured_image' => __( 'Remove featured image', 'md-woo-discount' ),
			'use_featured_image'    => __( 'Use as featured image', 'md-woo-discount' ),
			'insert_into_item'      => __( 'Insert into item', 'md-woo-discount' ),
			'uploaded_to_this_item' => __( 'Uploaded to this item', 'md-woo-discount' ),
			'items_list'            => __( 'Items list', 'md-woo-discount' ),
			'items_list_navigation' => __( 'Items list navigation', 'md-woo-discount' ),
			'filter_items_list'     => __( 'Filter items list', 'md-woo-discount' ),
		);
		$args   = array(
			'label'               => __( 'News', 'md-woo-discount' ),
			'description'         => __( 'Sample News', 'md-woo-discount' ),
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
			'name'                       => _x( 'News Categories', 'Taxonomy General Name', 'md-woo-discount' ),
			'singular_name'              => _x( 'News Category', 'Taxonomy Singular Name', 'md-woo-discount' ),
			'menu_name'                  => __( 'Taxonomy', 'md-woo-discount' ),
			'all_items'                  => __( 'All Items', 'md-woo-discount' ),
			'parent_item'                => __( 'Parent Item', 'md-woo-discount' ),
			'parent_item_colon'          => __( 'Parent Item:', 'md-woo-discount' ),
			'new_item_name'              => __( 'New Item Name', 'md-woo-discount' ),
			'add_new_item'               => __( 'Add New Item', 'md-woo-discount' ),
			'edit_item'                  => __( 'Edit Item', 'md-woo-discount' ),
			'update_item'                => __( 'Update Item', 'md-woo-discount' ),
			'view_item'                  => __( 'View Item', 'md-woo-discount' ),
			'separate_items_with_commas' => __( 'Separate items with commas', 'md-woo-discount' ),
			'add_or_remove_items'        => __( 'Add or remove items', 'md-woo-discount' ),
			'choose_from_most_used'      => __( 'Choose from the most used', 'md-woo-discount' ),
			'popular_items'              => __( 'Popular Items', 'md-woo-discount' ),
			'search_items'               => __( 'Search Items', 'md-woo-discount' ),
			'not_found'                  => __( 'Not Found', 'md-woo-discount' ),
			'no_terms'                   => __( 'No items', 'md-woo-discount' ),
			'items_list'                 => __( 'Items list', 'md-woo-discount' ),
			'items_list_navigation'      => __( 'Items list navigation', 'md-woo-discount' ),
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
	public function md_woo_discount_add_plugin_page() {
		add_menu_page(
			__( 'MD Woo Discount', 'md-woo-discount' ), // page_title
			__( 'MD Woo Discount', 'md-woo-discount' ), // menu_title
			'manage_options', // capability
			'md-woo-discount', // menu_slug
			array( $this, 'md_woo_discount_create_admin_page' ), // function
			'dashicons-admin-generic', // icon_url
			2 // position
		);
	}

	/**
	 * Function is used to create admin page
	 */
	public function md_woo_discount_create_admin_page() {
		$this->md_woo_discount_options = get_option( 'md_woo_discount_option_name' ); ?>

		<div class="wrap">
			<h2><?php esc_html_e( 'MD Woo Discount', 'md-woo-discount' ); ?></h2>
			<p></p>
			<?php settings_errors(); ?>

			<form method="post" action="options.php">
				<?php
					settings_fields( 'md_woo_discount_option_group' );
					do_settings_sections( 'md-woo-discount-admin' );
					submit_button();
				?>
			</form>
		</div>
		<?php
	}

	/**
	 * Function is used register settings.
	 */
	public function md_woo_discount_page_init() {
		register_setting(
			'md_woo_discount_option_group', // option_group
			'md_woo_discount_option_name', // option_name
			array( $this, 'md_woo_discount_sanitize' ) // sanitize_callback
		);

		add_settings_section(
			'md_woo_discount_setting_section', // id
			__( 'Settings', 'md-woo-discount' ), // title
			array( $this, 'md_woo_discount_section_info' ), // callback
			'md-woo-discount-admin' // page
		);

		add_settings_field(
			'sample_0', // id
			__( 'Sample', 'md-woo-discount' ), // title
			array( $this, 'sample_0_callback' ), // callback
			'md-woo-discount-admin', // page
			'md_woo_discount_setting_section' // section
		);
	}

	/**
	 * Function is used to sanitise inputs.
	 */
	public function md_woo_discount_sanitize( $input ) {
		$sanitary_values = array();
		if ( isset( $input['sample_0'] ) ) {
			$sanitary_values['sample_0'] = sanitize_text_field( $input['sample_0'] );
		}

		return $sanitary_values;
	}

	/**
	 * Used to show section info.
	 */
	public function md_woo_discount_section_info() {

	}

	/**
	 * Settings field callback function.
	 */
	public function sample_0_callback() {
		printf(
			'<input class="regular-text" type="text" name="md_woo_discount_option_name[sample_0]" id="sample_0" value="%s">',
			isset( $this->md_woo_discount_options['sample_0'] ) ? esc_attr( $this->md_woo_discount_options['sample_0'] ) : ''
		);
	}
}

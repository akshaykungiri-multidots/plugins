<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    MD_Shipping_Address
 * @subpackage MD_Shipping_Address/admin
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Shipping_Address\Inc;

use MD_Shipping_Address\Inc\Traits\Singleton;

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
		if ( defined( 'MD_SHIPPING_ADDRESS_VERSION' ) ) {
			$this->version = MD_SHIPPING_ADDRESS_VERSION;
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
		wp_enqueue_style( 'md-shipping-address', MD_SHIPPING_ADDRESS_URL . 'assets/build/admin.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'md-shipping-address', MD_SHIPPING_ADDRESS_URL . 'assets/build/admin.js', array( 'jquery' ), $this->version, false );

		wp_localize_script(
			'md-shipping-address',
			'siteConfig',
			array(
				'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
				'ajax_nonce' => wp_create_nonce( 'loadmore_post_nonce' ),
			)
		);
	}
}

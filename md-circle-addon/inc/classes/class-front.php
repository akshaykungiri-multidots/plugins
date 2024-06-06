<?php
/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    MD_Circle_Addon
 * @subpackage MD_Circle_Addon/public
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc;

use MD_Circle_Addon\Inc\Traits\Singleton;

/**
 * Frontend main class.
 */
class Front {


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
		if ( defined( 'MD_CIRCLE_ADDON_VERSION' ) ) {
			$this->version = MD_CIRCLE_ADDON_VERSION;
		} else {
			$this->version = '1.1.0';
		}
		$this->setup_front_hooks();
	}

	/**
	 * All public facing hook will be placed under this function.
	 */
	public function setup_front_hooks() {
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );

		add_action( 'enqueue_block_assets', array( $this, 'enqueue_editor_assets' ) );
		add_filter( 'script_loader_tag', array( $this, 'script_additional_attrs' ), 10, 2 );
		add_filter( 'should_load_separate_core_block_assets', '__return_true' );
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		// include font awesome 6 free css cdn.
		wp_enqueue_style( 'font-awesome-6', 'https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css', array(), '6.0.0', 'all' );

		wp_enqueue_style( 'md-circle-addon-front', MD_CIRCLE_ADDON_URL . 'assets/build/main.css', array(), $this->version, 'all' );
		wp_enqueue_style( 'slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css' );
	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		// include ityped js.
		wp_enqueue_script( 'ityped', 'https://unpkg.com/ityped@0.0.10/dist/ityped.min.js', array( 'jquery' ), $this->version, false );

		wp_enqueue_script( 'slick', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array( 'jquery' ), $this->version, false );
		
		wp_enqueue_script( 'md-circle-addon', MD_CIRCLE_ADDON_URL . 'assets/build/main.js', array( 'jquery' ), $this->version, false );

		wp_localize_script(
			'md-circle-addon',
			'siteConfig',
			array(
				'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
				'ajax_nonce' => wp_create_nonce( 'loadmore_post_nonce' ),
			)
		);
	}

	/**
	 * Enqueue editor scripts and styles.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function enqueue_editor_assets() {
		// Change block Priority to head.
		$blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();
		foreach ( $blocks as $block ) {
			if ( has_block( $block->name ) ) {
				wp_enqueue_style( $block->style );
			}
		}
	}

	/**
	 * Identify script and do the lazy load.
	 *
	 * @param string $tag Tags string.
	 * @param string $handle Handle name.
	 *
	 * @return string
	 * @since 1.0.0
	 */
	public function script_additional_attrs( $tag, $handle ) {
		if ( 'grs-ad' === $handle ) {
			return str_replace( ' src', ' data-type="lazy" data-src', $tag );
		}

		return $tag;
	}
}

<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    MD_Threatdown
 * @subpackage MD_Threatdown/addons
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Threatdown\Inc;

use MD_Threatdown\Inc\Elementors\Threatdown_Cross_BG;
use MD_Threatdown\Inc\Elementors\Threatdown_Get_Quote;
use MD_Threatdown\Inc\Elementors\Threatdown_Hero_Banner;
use MD_Threatdown\Inc\Elementors\Threatdown_Media_Box;
use MD_Threatdown\Inc\Elementors\Threatdown_Price_Box;
use MD_Threatdown\Inc\Traits\Singleton;

/**
 * MD_Threatdown_Addon class file.
 */
class MD_Threatdown_Addon {

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
		$this->setup_local_hooks();
	}

	/**
	 * Function is used to setup local hooks.
	 */
	public function setup_local_hooks() {
		add_action( 'elementor/elements/categories_registered', array( $this, 'add_elementor_widget_categories' ) );
		add_action( 'elementor/widgets/widgets_registered', array( $this, 'register_widgets' ) );
	}

	/**
	 * Add elementor widget categories.
	 *
	 * @since    1.0.0
	 */
	public function add_elementor_widget_categories( $elements_manager ) {
		$elements_manager->add_category(
			'md-threatdown-addons',
			[
				'title' => esc_html__( 'MD Threatdown Addons', 'md-threatdown' ),
				'icon'  => 'fa fa-plug',
			]
		);
	}

	/**
	 * Register widgets.
	 *
	 * @since    1.0.0
	 */
	public function register_widgets( $widgets_manager ) {

		$widgets_manager->register_widget_type( new Threatdown_Hero_Banner() );
		$widgets_manager->register_widget_type( new Threatdown_Media_Box() );
		$widgets_manager->register_widget_type( new Threatdown_Price_Box() );
		$widgets_manager->register_widget_type( new Threatdown_Get_Quote() );
		$widgets_manager->register_widget_type( new Threatdown_Cross_BG() );
		
	}

}

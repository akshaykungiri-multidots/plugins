<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Fiery_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Fiery_Addon\Inc;

use MD_Fiery_Addon\Inc\Elementors\Fiery_Case_Studies;
use MD_Fiery_Addon\Inc\Elementors\Fiery_Hero_Banner;
use MD_Fiery_Addon\Inc\Elementors\Fiery_Hero_Card_Banner;
use MD_Fiery_Addon\Inc\Elementors\Fiery_Hero_Partner;
use MD_Fiery_Addon\Inc\Elementors\Fiery_Hero_QNA;
use MD_Fiery_Addon\Inc\Elementors\Fiery_Hero_Slider;
use MD_Fiery_Addon\Inc\Elementors\Fiery_Hero_Subscribe;
use MD_Fiery_Addon\Inc\Traits\Singleton;

/**
 * ELEMENTOR_ADDON class file.
 */
class ELEMENTOR_ADDON {

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
		add_action( 'elementor/elements/categories_registered', array( $this, 'add_elementor_widget_categories' ) );
		add_action( 'elementor/widgets/widgets_registered', array( $this, 'register_widgets' ) );
	}

	/**
	 * Register widgets.
	 *
	 * @since    1.0.0
	 */
	public function register_widgets( $widgets_manager ) {
		$widgets_manager->register_widget_type( new Fiery_Hero_Banner() );
		$widgets_manager->register_widget_type( new Fiery_Hero_Slider() );
		$widgets_manager->register_widget_type( new Fiery_Hero_Card_Banner() );
		$widgets_manager->register_widget_type( new Fiery_Case_Studies() );
		$widgets_manager->register_widget_type( new Fiery_Hero_Partner() );
		$widgets_manager->register_widget_type( new Fiery_Hero_Subscribe() );
		$widgets_manager->register_widget_type( new Fiery_Hero_QNA() );
	}

	/**
	 * Add elementor widget categories.
	 *
	 * @since    1.0.0
	 */
	public function add_elementor_widget_categories( $elements_manager ) {
		$elements_manager->add_category(
			'md-fiery-addons',
			[
				'title' => esc_html__( 'MD Fiery Addons', 'md-fiery-addon' ),
				'icon'  => 'fa fa-plug',
			]
		);
	}
}

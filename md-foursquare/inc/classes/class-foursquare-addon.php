<?php
/**
 * The core plugin class.
 *
 * @since      1.0.0
 * @package    MD_Foursquare
 * @subpackage MD_Foursquare/includes
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Foursquare\Inc;

use MD_Foursquare\Inc\Elementors\Foursquare_Box;
use MD_Foursquare\Inc\Elementors\Foursquare_Hero_Banner;
use MD_Foursquare\Inc\Elementors\Foursquare_Logo_Slider;
use MD_Foursquare\Inc\Elementors\Foursquare_Media_Text;
use MD_Foursquare\Inc\Elementors\Foursquare_Multi_Image_Box;
use MD_Foursquare\Inc\Elementors\Foursquare_News;
use MD_Foursquare\Inc\Traits\Singleton;

/**
 * FOURSQUARE_ADDON class file.
 */
class FOURSQUARE_ADDON {

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
		$widgets_manager->register_widget_type( new Foursquare_Hero_Banner() );
		$widgets_manager->register_widget_type( new Foursquare_News() );
		$widgets_manager->register_widget_type( new Foursquare_Logo_Slider() );
		$widgets_manager->register_widget_type( new Foursquare_Box() );
		$widgets_manager->register_widget_type( new Foursquare_Media_Text() );
		$widgets_manager->register_widget_type( new Foursquare_Multi_Image_Box() );
	}

	/**
	 * Add elementor widget categories.
	 *
	 * @since    1.0.0
	 */
	public function add_elementor_widget_categories( $elements_manager ) {
		$elements_manager->add_category(
			'md-foursquare-addons',
			[
				'title' => esc_html__( 'MD Fiery Addons', 'md-foursquare' ),
				'icon'  => 'fa fa-plug',
			]
		);
	}
}

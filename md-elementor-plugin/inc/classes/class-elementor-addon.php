<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Elementor
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Elementor\Inc;

use MD_Elementor\Inc\Elementors\Elementor_Hero_Banner;
use MD_Elementor\Inc\Traits\Singleton;
use MD_Elementor\Inc\Elementors\ELEMENTOR_SAMPLE_BLOCKS;
use MD_Elementor\Inc\Elementors\Elementor_List_Widget;
use MD_Elementor\Inc\Elementors\Elementor_Image_Banner;
use MD_Elementor\Inc\Elementors\Elementor_Image_Box;
use MD_Elementor\Inc\Elementors\Elementor_Resource_Block;
use MD_Elementor\Inc\Elementors\Elementor_Toggle_Image_Box;
use MD_Elementor\Inc\Elementors\Elementor_Media_Content;
use MD_Elementor\Inc\Elementors\Elementor_Logo_Slider;
use MD_Elementor\Inc\Elementors\Elementor_Customer_Stories;

/**
 * I18 class file.
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
		$widgets_manager->register_widget_type( new ELEMENTOR_SAMPLE_BLOCKS() );
		$widgets_manager->register_widget_type( new Elementor_List_Widget() );
		$widgets_manager->register_widget_type( new Elementor_Hero_Banner() );
		$widgets_manager->register_widget_type( new Elementor_Image_Banner() );
		$widgets_manager->register_widget_type( new Elementor_Image_Box() );
		$widgets_manager->register_widget_type( new Elementor_Resource_Block() );
		$widgets_manager->register_widget_type( new Elementor_Toggle_Image_Box() );
		$widgets_manager->register_widget_type( new Elementor_Media_Content() );
		$widgets_manager->register_widget_type( new Elementor_Logo_Slider() );
		$widgets_manager->register_widget_type( new Elementor_Customer_Stories() );
	}

	/**
	 * Add elementor widget categories.
	 *
	 * @since    1.0.0
	 */
	public function add_elementor_widget_categories( $elements_manager ) {
		$elements_manager->add_category(
			'md-elements',
			[
				'title' => esc_html__( 'MD Elements', 'md-elementor' ),
				'icon'  => 'fa fa-plug',
			]
		);
	}
}

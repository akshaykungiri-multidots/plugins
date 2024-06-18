<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Plus
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Plus\Inc;

use Dompdf\FrameDecorator\Image;
use MD_Circle_Plus\Inc\Elementors\Banner_Card_Plus;
use MD_Circle_Plus\Inc\Elementors\Circle_Logo_Slider_Plus;
use MD_Circle_Plus\Inc\Elementors\Content_Banner_Plus;
use MD_Circle_Plus\Inc\Elementors\FAQ_Plus;
use MD_Circle_Plus\Inc\Elementors\Hero_Banner_Plus;
use MD_Circle_Plus\Inc\Elementors\Image_Box_Plus;
use MD_Circle_Plus\Inc\Elementors\Member_Experience;
use MD_Circle_Plus\Inc\Elementors\Single_Author_Box;
use MD_Circle_Plus\Inc\Traits\Singleton;

/**
 * CIRCLE_PLUS_ADDON class file.
 */
class CIRCLE_PLUS_ADDON {

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
		$widgets_manager->register_widget_type( new Hero_Banner_Plus() );
		$widgets_manager->register_widget_type( new Circle_Logo_Slider_Plus() );
		$widgets_manager->register_widget_type( new Content_Banner_Plus() );
		$widgets_manager->register_widget_type( new Image_Box_Plus() );
		$widgets_manager->register_widget_type( new Single_Author_Box() );
		$widgets_manager->register_widget_type( new Member_Experience() );
		$widgets_manager->register_widget_type( new Banner_Card_Plus() );
		$widgets_manager->register_widget_type( new FAQ_Plus() );
	}

	/**
	 * Add elementor widget categories.
	 *
	 * @since    1.0.0
	 */
	public function add_elementor_widget_categories( $elements_manager ) {
		$elements_manager->add_category(
			'md-circle-plus',
			[
				'title' => esc_html__( 'MD Circle Plus', 'md-circle-plus' ),
				'icon'  => 'fa fa-plug',
			]
		);
	}
}

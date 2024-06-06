<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc;

use MD_Circle_Addon\Inc\Elementors\Circle_Animated_Text_Banner;
use MD_Circle_Addon\Inc\Traits\Singleton;

use MD_Circle_Addon\Inc\Elementors\Circle_FAQ_Widget;
use MD_Circle_Addon\Inc\Elementors\Circle_Content_Banner;
use MD_Circle_Addon\Inc\Elementors\Circle_Courses_Block;
use MD_Circle_Addon\Inc\Elementors\Circle_Features_List;
use MD_Circle_Addon\Inc\Elementors\Circle_Get_Started;
use MD_Circle_Addon\Inc\Elementors\Circle_Image_Categories;
use MD_Circle_Addon\Inc\Elementors\Circle_Logo_Slider;
use MD_Circle_Addon\Inc\Elementors\Circle_Quote_Banner;
use MD_Circle_Addon\Inc\Elementors\Circle_Testimonials;
use MD_Circle_Addon\Inc\Elementors\Circle_Use_Cases;

/**
 * I18 class file.
 */
class CIRCLE_ADDON {

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
		$widgets_manager->register_widget_type( new Circle_FAQ_Widget() );
		$widgets_manager->register_widget_type( new Circle_Image_Categories() );
		$widgets_manager->register_widget_type( new Circle_Logo_Slider() );
		$widgets_manager->register_widget_type( new Circle_Use_Cases() );
		$widgets_manager->register_widget_type( new Circle_Features_List() );
		$widgets_manager->register_widget_type( new Circle_Courses_Block() );
		$widgets_manager->register_widget_type( new Circle_Content_Banner() );
		$widgets_manager->register_widget_type( new Circle_Quote_Banner() );
		$widgets_manager->register_widget_type( new Circle_Testimonials() );
		$widgets_manager->register_widget_type( new Circle_Get_Started() );
		$widgets_manager->register_widget_type( new Circle_Animated_Text_Banner() );
	}

	/**
	 * Add elementor widget categories.
	 *
	 * @since    1.0.0
	 */
	public function add_elementor_widget_categories( $elements_manager ) {
		$elements_manager->add_category(
			'md-circle-addon',
			[
				'title' => esc_html__( 'MD Circle Addons', 'md-circle-addon' ),
				'icon'  => 'fa fa-plug',
			]
		);
	}
}

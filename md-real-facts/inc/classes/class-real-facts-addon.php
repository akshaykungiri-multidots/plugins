<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Real_Facts
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Real_Facts\Inc;

use MD_Real_Facts\Inc\Traits\Singleton;

/**
 * Real_Facts_Addon class file.
 */
class Real_Facts_Addon {

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
			'md-real-facts-addons',
			[
				'title' => esc_html__( 'MD Real Facts Addons', 'md-real-facts' ),
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

		$widgets_manager->register_widget_type( new Elementors\Hero_Banner() );
		$widgets_manager->register_widget_type( new Elementors\Content_Banner() );
		$widgets_manager->register_widget_type( new Elementors\MD_Timeline() );
		$widgets_manager->register_widget_type( new Elementors\MD_More_Real_Facts() );
		
	}

}

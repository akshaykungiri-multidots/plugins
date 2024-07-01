<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_Bakery_Antian
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Bakery_Antian\Inc;

use MD_Bakery_Antian\Inc\Traits\Singleton;

/**
 * Bakery_ADDON class file.
 */
class Bakery_ADDON {

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
		$this->setup_bakery_hooks();
	}

	/**
	 * Function is used to setup bakery hooks.
	 */
	public function setup_bakery_hooks() {
		new Addons\Hero_Banner();
		new Addons\Image_Banner();
		new Addons\Slider_Image_Box();
		new Addons\Toggle_Image_Box();
		new Addons\Logo_Slider();
		new Addons\Image_Box();
		new Addons\Media_Content();
		new Addons\Customer_Stories();
		new Addons\Lets_Get_Started();
	}

}

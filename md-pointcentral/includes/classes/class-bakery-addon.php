<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_POINTCENTRAL
 * @author     Multidots <info@multidots.com>
 */

namespace MD_POINTCENTRAL\Includes;

use MD_POINTCENTRAL\Includes\Traits\Singleton;

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
		new Addons\Pointcentral_Image_Text();
		new Addons\Pointcentral_Video_Banner();
		new Addons\Pointcentral_Press_Listing();
		new Addons\Pointcentral_Image_Banner();
		new Addons\Pointcentral_Tab_Banner();
		new Addons\Pointcentral_Testimonials();
		new Addons\Pointcentral_Hero_Banner();
		new Addons\Pointcentral_Solution_Features();
		new Addons\Pointcentral_Image_Banner_List();
		new Addons\Pointcentral_Lets_Chat();
		new Addons\Pointcentral_Image_Box();
		new Addons\Pointcentral_Three_Column_Image();
		new Addons\Pointcentral_Case_Study();
		new Addons\Pointcentral_Image_Banner2();
		new Addons\Pointcentral_Quote_Image();
		new Addons\Pointcentral_Logo_Slider();
		new Addons\Pointcentral_Hero_Text_Banner();
		new Addons\Pointcentral_Partners();
	}
}

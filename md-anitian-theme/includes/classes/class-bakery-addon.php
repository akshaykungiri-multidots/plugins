<?php
/**
 * The bakery addon functionality of the plugin.
 *
 * @package    MD_ANITIAN
 * @author     Multidots <info@multidots.com>
 */

namespace MD_ANITIAN\Includes;

use MD_ANITIAN\Includes\Traits\Singleton;

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
		new Addons\Three_Column_Header();
		new Addons\Card_Block();
		new Addons\Cover_CTA();
		new Addons\Media_With_Content();
		new Addons\Company_Certification();
		new Addons\Header_Page_Title();
		new Addons\Leadership();
		new Addons\Lets_Get_Started();
		new Addons\Media_Content();
		new Addons\Image_Box();
		new Addons\Slider_Image_Box();
		new Addons\Image_Banner();
		new Addons\Text_Video();
		new Addons\Career_Parallex();
		new Addons\Menu_Comparision();
	}

}

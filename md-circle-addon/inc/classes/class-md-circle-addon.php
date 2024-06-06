<?php
/**
 * The core plugin class.
 *
 * @since      1.0.0
 * @package    MD_Circle_Addon
 * @subpackage MD_Circle_Addon/includes
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc;

use MD_Circle_Addon\Inc\Blocks;
use MD_Circle_Addon\Inc\Traits\Singleton;

/**
 * Main class File.
 */
class MD_Circle_Addon {


	use Singleton;

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      MD_Circle_Addon_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'MD_CIRCLE_ADDON_VERSION' ) ) {
			$this->version = MD_CIRCLE_ADDON_VERSION;
		} else {
			$this->version = '1.1.0';
		}
		$this->plugin_name = 'md-circle-addon';

		Front::get_instance();
		Admin::get_instance();
		Activator::get_instance();
		Deactivator::get_instance();
		I18::get_instance();
		Blocks::get_instance();
		CIRCLE_ADDON::get_instance();

	}
}

<?php
/**
 * The core plugin class.
 *
 * @since      1.0.0
 * @package    MD_Yoast_Migration
 * @subpackage MD_Yoast_Migration/includes
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Yoast_Migration\Inc;

use MD_Yoast_Migration\Inc\Blocks;
use MD_Yoast_Migration\Inc\Traits\Singleton;
use WP_CLI;

/**
 * Main class File.
 */
class MD_Yoast_Migration {


	use Singleton;

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      MD_Yoast_Migration_Loader    $loader    Maintains and registers all hooks for the plugin.
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
		if ( defined( 'MD_YOAST_MIGRATION_VERSION' ) ) {
			$this->version = MD_YOAST_MIGRATION_VERSION;
		} else {
			$this->version = '1.1.0';
		}
		$this->plugin_name = 'md-yoast-migration';

		Front::get_instance();
		Admin::get_instance();
		Activator::get_instance();
		Deactivator::get_instance();
		I18::get_instance();
		Blocks::get_instance();
		$instance = Md_Yoast_Command::get_instance();
		if (defined('WP_CLI') && WP_CLI) {
			# code...
			WP_CLI::add_command( 'md_yoast_migration', $instance );
		}
	}
}

<?php
/**
 * The core plugin class.
 *
 * @since      1.0.0
 * @package    MD_Migrate_Resources
 * @subpackage MD_Migrate_Resources/includes
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Migrate_Resources\Inc;

use MD_Migrate_Resources\Inc\Blocks;
use MD_Migrate_Resources\Inc\Traits\Singleton;
use WP_CLI;
/**
 * Main class File.
 */
class MD_Migrate_Resources {


	use Singleton;

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      MD_Migrate_Resources_Loader    $loader    Maintains and registers all hooks for the plugin.
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
		if ( defined( 'MD_MIGRATE_RESOURCES_VERSION' ) ) {
			$this->version = MD_MIGRATE_RESOURCES_VERSION;
		} else {
			$this->version = '1.1.0';
		}
		$this->plugin_name = 'md-migrate-resources';

		Front::get_instance();
		Admin::get_instance();
		Activator::get_instance();
		Deactivator::get_instance();
		I18::get_instance();
		Blocks::get_instance();
		$instance = Md_Custom_Command::get_instance();
		if (defined('WP_CLI') && WP_CLI) {
			# code...
			WP_CLI::add_command( 'md_sync_resources', $instance );
		}
	}
}

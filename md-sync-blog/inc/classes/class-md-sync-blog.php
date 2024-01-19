<?php
/**
 * The core plugin class.
 *
 * @since      1.0.0
 * @package    MD_Sync_Blog
 * @subpackage MD_Sync_Blog/includes
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Sync_Blog\Inc;

use MD_Sync_Blog\Inc\Blocks;
use MD_Sync_Blog\Inc\Traits\Singleton;
use WP_CLI;

/**
 * Main class File.
 */
class MD_Sync_Blog {


	use Singleton;

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      MD_Sync_Blog_Loader    $loader    Maintains and registers all hooks for the plugin.
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
		if ( defined( 'MD_SYNC_BLOG_VERSION' ) ) {
			$this->version = MD_SYNC_BLOG_VERSION;
		} else {
			$this->version = '1.1.0';
		}
		$this->plugin_name = 'md-sync-blog';

		Front::get_instance();
		Admin::get_instance();
		Activator::get_instance();
		Deactivator::get_instance();
		I18::get_instance();
		Blocks::get_instance();
		$instance = Md_Custom_Command::get_instance();
		if (defined('WP_CLI') && WP_CLI) {
			# code...
			WP_CLI::add_command( 'md_sync_blogs', $instance );
		}
	}
}

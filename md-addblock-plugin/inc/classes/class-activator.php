<?php
/**
 * The activation functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    MD_Addblock
 * @subpackage MD_Addblock/admin
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Addblock\Inc;

use MD_Addblock\Inc\Traits\Singleton;

/**
 * Activator class file.
 */
class Activator {

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
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		$version = 7;
		$theme   = wp_get_theme();
		if ( version_compare( $version, get_bloginfo( 'version' ), '>=' ) ) {
			return true;
		} else {
			wp_die( esc_html_e( 'Please activate Twenty two theme', 'md-addblock' ), 'Theme dependency check', array( 'back_link' => true ) );
		}

		if ( ! class_exists( 'WooCommerce' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
			deactivate_plugins( MD_ADDBLOCK_BASEPATH );
			wp_die( esc_html_e( 'Please install and Activate WooCommerce.', 'md-addblock' ), 'Plugin dependency check', array( 'back_link' => true ) );
		}
		if ( ! $theme->name === 'Twenty Twenty-Two' || ! $theme->parent_theme === 'Twenty Twenty-Two' ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
			deactivate_plugins( MD_ADDBLOCK_BASEPATH );
			wp_die( esc_html_e( 'Please activate Twenty two theme', 'md-addblock' ), 'Theme dependency check', array( 'back_link' => true ) );

		}

		self::create_custom_table();

	}

	/**
	 * Function to create custom table
	 */
	public static function create_custom_table() {
		global $wpdb;
		$charset_collate = $wpdb->get_charset_collate();
		global $md_addblock_db_version;
		$installed_ver = get_option( 'md_addblock_db_version' );

		if ( $installed_ver !== $md_addblock_db_version ) {

			$table_name = $wpdb->prefix . 'custom_table';

			$sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		time datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
		name tinytext NOT NULL,
		text text NOT NULL,
		url varchar(100) DEFAULT '' NOT NULL,
		PRIMARY KEY  (id)
		) $charset_collate;";

			require_once ABSPATH . 'wp-admin/includes/upgrade.php';
			dbDelta( $sql );

			update_option( 'md_addblock_db_version', $md_addblock_db_version );
		}

	}
}

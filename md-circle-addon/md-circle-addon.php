<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.multidots.com/
 * @since             1.0.0
 * @package           Md_Circle_Addon
 *
 * @wordpress-plugin
 * Plugin Name:       MD Circle Addon
 * Plugin URI:        https://www.multidots.com/
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.1.0
 * Author:            Multidots
 * Author URI:        https://www.multidots.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       md-circle-addon
 * Domain Path:       /languages
 */

namespace MD_Circle_Addon;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'MD_CIRCLE_ADDON_VERSION', '1.1.0' );
define( 'MD_CIRCLE_ADDON_URL', plugin_dir_url( __FILE__ ) );
define( 'MD_CIRCLE_ADDON_DIR', plugin_dir_path( __FILE__ ) );
define( 'MD_CIRCLE_ADDON_BASEPATH', plugin_basename( __FILE__ ) );
define( 'MD_CIRCLE_ADDON_SRC_BLOCK_DIR_PATH', untrailingslashit( MD_CIRCLE_ADDON_DIR . 'assets/build/js/blocks' ) );

if ( ! defined( 'MD_CIRCLE_ADDON_PATH' ) ) {
	define( 'MD_CIRCLE_ADDON_PATH', __DIR__ );
}

// Load the autoloader.
require_once plugin_dir_path( __FILE__ ) . '/inc/helpers/autoloader.php';


register_activation_hook( __FILE__, array( \MD_Circle_Addon\Inc\Activator::class, 'activate' ) );
register_deactivation_hook( __FILE__, array( \MD_Circle_Addon\Inc\Deactivator::class, 'deactivate' ) );

/**
 * Begins execution of the plugin.
 *
 * @since    1.0.0
 */
function run_md_scaffold() {
	$plugin = new \MD_Circle_Addon\Inc\MD_Circle_Addon();
}
run_md_scaffold();


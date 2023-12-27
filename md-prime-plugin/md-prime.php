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
 * @package           Md_Prime
 *
 * @wordpress-plugin
 * Plugin Name:       MD Prime
 * Plugin URI:        https://www.multidots.com/
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.0.0
 * Author:            Multidots
 * Author URI:        https://www.multidots.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       md-prime
 * Domain Path:       /languages
 */

namespace MD_Prime;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'MD_PRIME_VERSION', '1.0.0' );
define( 'MD_PRIME_URL', plugin_dir_url( __FILE__ ) );
define( 'MD_PRIME_DIR', plugin_dir_path( __FILE__ ) );
define( 'MD_PRIME_BASEPATH', plugin_basename( __FILE__ ) );

if ( ! defined( 'MD_PRIME_PATH' ) ) {
	define( 'MD_PRIME_PATH', __DIR__ );
}

// Load the autoloader.
require_once plugin_dir_path( __FILE__ ) . '/inc/helpers/autoloader.php';

// Load the mailchimp autoloader.
require_once plugin_dir_path( __FILE__ ) . '/inc/libraries/vendor/autoload.php';


register_activation_hook( __FILE__, array( \MD_Prime\Inc\Activator::class, 'activate' ) );
register_deactivation_hook( __FILE__, array( \MD_Prime\Inc\Deactivator::class, 'deactivate' ) );

/**
 * Begins execution of the plugin.
 *
 * @since    1.0.0
 */
function run_md_scaffold() {
	$plugin = new \MD_Prime\Inc\MD_Prime();
}
run_md_scaffold();


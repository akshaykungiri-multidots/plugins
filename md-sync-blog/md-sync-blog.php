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
 * @package           Md_Sync_Blog
 *
 * @wordpress-plugin
 * Plugin Name:       MD Sync Blog
 * Plugin URI:        https://www.multidots.com/
 * Description:       This is a short description of what the plugin does. It's displayed in the WordPress admin area.
 * Version:           1.1.0
 * Author:            Multidots
 * Author URI:        https://www.multidots.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       md-sync-blog
 * Domain Path:       /languages
 */

namespace MD_Sync_Blog;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'MD_SYNC_BLOG_VERSION', '1.1.0' );
define( 'MD_SYNC_BLOG_URL', plugin_dir_url( __FILE__ ) );
define( 'MD_SYNC_BLOG_DIR', plugin_dir_path( __FILE__ ) );
define( 'MD_SYNC_BLOG_BASEPATH', plugin_basename( __FILE__ ) );
define( 'MD_SYNC_BLOG_SRC_BLOCK_DIR_PATH', untrailingslashit( MD_SYNC_BLOG_DIR . 'assets/build/js/blocks' ) );

if ( ! defined( 'MD_SYNC_BLOG_PATH' ) ) {
	define( 'MD_SYNC_BLOG_PATH', __DIR__ );
}

// Load the autoloader.
require_once plugin_dir_path( __FILE__ ) . '/inc/helpers/autoloader.php';


register_activation_hook( __FILE__, array( \MD_Sync_Blog\Inc\Activator::class, 'activate' ) );
register_deactivation_hook( __FILE__, array( \MD_Sync_Blog\Inc\Deactivator::class, 'deactivate' ) );

/**
 * Begins execution of the plugin.
 *
 * @since    1.0.0
 */
function run_md_scaffold() {
	$plugin = new \MD_Sync_Blog\Inc\MD_Sync_Blog();
}
run_md_scaffold();


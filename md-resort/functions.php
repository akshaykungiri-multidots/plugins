<?php
/**
 * Theme Functions.
 *
 * @package md-resort
 */

if ( ! defined( 'MD_RESORT_THEME_VERSION' ) ) {
	define( 'MD_RESORT_THEME_VERSION', '1.0' );
}

if ( ! defined( 'MD_RESORT_THEME_PATH' ) ) {
	define( 'MD_RESORT_THEME_PATH', __DIR__ );
}

if ( ! defined( 'MD_RESORT_THEME_URL' ) ) {
	define( 'MD_RESORT_THEME_URL', get_template_directory_uri() );
}

if ( ! defined( 'MD_RESORT_BUILD_URI' ) ) {
	define( 'MD_RESORT_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if ( ! defined( 'MD_RESORT_BUILD_PATH' ) ) {
	define( 'MD_RESORT_BUILD_PATH', untrailingslashit( get_template_directory() ) . '/assets/build' );
}

if ( ! defined( 'MD_RESORT_SRC_BLOCK_DIR_PATH' ) ) {
	define( 'MD_RESORT_SRC_BLOCK_DIR_PATH', get_template_directory() . '/assets/build/blocks' );
}

/**
 * Load up the class autoloader.
 */
require_once MD_RESORT_THEME_PATH . '/includes/helpers/autoloader.php';

/**
 * Theme Init
 *
 * Sets up the theme.
 *
 * @return void
 * @since 1.0.0
 */
function md_resort_get_theme_instance() {
	\MD_RESORT\Includes\Md_Resort::get_instance();
}

md_resort_get_theme_instance();

<?php
/**
 * Theme Functions.
 *
 * @package md-healthstream
 */

declare( strict_types = 1 );

if ( ! defined( 'MD_HEALTHSTREAM_THEME_VERSION' ) ) {
	define( 'MD_HEALTHSTREAM_THEME_VERSION', '1.0' );
}

if ( ! defined( 'MD_HEALTHSTREAM_THEME_PATH' ) ) {
	define( 'MD_HEALTHSTREAM_THEME_PATH', __DIR__ );
}

if ( ! defined( 'MD_HEALTHSTREAM_THEME_URL' ) ) {
	define( 'MD_HEALTHSTREAM_THEME_URL', get_template_directory_uri() );
}

if ( ! defined( 'MD_HEALTHSTREAM_BUILD_URI' ) ) {
	define( 'MD_HEALTHSTREAM_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if ( ! defined( 'MD_HEALTHSTREAM_BUILD_PATH' ) ) {
	define( 'MD_HEALTHSTREAM_BUILD_PATH', untrailingslashit( get_template_directory() ) . '/assets/build' );
}

if ( ! defined( 'MD_HEALTHSTREAM_SRC_BLOCK_DIR_PATH' ) ) {
	define( 'MD_HEALTHSTREAM_SRC_BLOCK_DIR_PATH', get_template_directory() . '/assets/build/blocks' );
}

/**
 * Load up the class autoloader.
 */
require_once MD_HEALTHSTREAM_THEME_PATH . '/includes/helpers/autoloader.php';

/**
 * Theme Init
 *
 * Sets up the theme.
 *
 * @return void
 * @since 1.0.0
 */
function md_healthstream_get_theme_instance(): void {
	\MD_HEALTHSTREAM\Includes\Md_Healthstream::get_instance();
}

md_healthstream_get_theme_instance();

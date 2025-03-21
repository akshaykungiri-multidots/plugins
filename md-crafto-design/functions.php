<?php
/**
 * Theme Functions.
 *
 * @package md-crafto-design
 */

if ( ! defined( 'MD_CRAFTO_DESIGN_THEME_VERSION' ) ) {
	define( 'MD_CRAFTO_DESIGN_THEME_VERSION', '1.0' );
}

if ( ! defined( 'MD_CRAFTO_DESIGN_THEME_PATH' ) ) {
	define( 'MD_CRAFTO_DESIGN_THEME_PATH', __DIR__ );
}

if ( ! defined( 'MD_CRAFTO_DESIGN_THEME_URL' ) ) {
	define( 'MD_CRAFTO_DESIGN_THEME_URL', get_template_directory_uri() );
}

if ( ! defined( 'MD_CRAFTO_DESIGN_BUILD_URI' ) ) {
	define( 'MD_CRAFTO_DESIGN_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if ( ! defined( 'MD_CRAFTO_DESIGN_BUILD_PATH' ) ) {
	define( 'MD_CRAFTO_DESIGN_BUILD_PATH', untrailingslashit( get_template_directory() ) . '/assets/build' );
}

if ( ! defined( 'MD_CRAFTO_DESIGN_SRC_BLOCK_DIR_PATH' ) ) {
	define( 'MD_CRAFTO_DESIGN_SRC_BLOCK_DIR_PATH', get_template_directory() . '/assets/build/blocks' );
}

/**
 * Load up the class autoloader.
 */
require_once MD_CRAFTO_DESIGN_THEME_PATH . '/includes/helpers/autoloader.php';

/**
 * Theme Init
 *
 * Sets up the theme.
 *
 * @return void
 * @since 1.0.0
 */
function md_crafto_design_get_theme_instance() {
	\MD_CRAFTO_DESIGN\Includes\Md_Crafto_Design::get_instance();
}

md_crafto_design_get_theme_instance();

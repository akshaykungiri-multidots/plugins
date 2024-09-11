<?php
/**
 * Theme Functions.
 *
 * @package md-efi
 */

if ( ! defined( 'MD_EFI_THEME_VERSION' ) ) {
	define( 'MD_EFI_THEME_VERSION', '1.0' );
}

if ( ! defined( 'MD_EFI_THEME_PATH' ) ) {
	define( 'MD_EFI_THEME_PATH', __DIR__ );
}

if ( ! defined( 'MD_EFI_THEME_URL' ) ) {
	define( 'MD_EFI_THEME_URL', get_template_directory_uri() );
}

if ( ! defined( 'MD_EFI_BUILD_URI' ) ) {
	define( 'MD_EFI_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if ( ! defined( 'MD_EFI_BUILD_PATH' ) ) {
	define( 'MD_EFI_BUILD_PATH', untrailingslashit( get_template_directory() ) . '/assets/build' );
}

if ( ! defined( 'MD_EFI_SRC_BLOCK_DIR_PATH' ) ) {
	define( 'MD_EFI_SRC_BLOCK_DIR_PATH', get_template_directory() . '/assets/build/blocks' );
}

/**
 * Load up the class autoloader.
 */
require_once MD_EFI_THEME_PATH . '/includes/helpers/autoloader.php';

/**
 * Theme Init
 *
 * Sets up the theme.
 *
 * @return void
 * @since 1.0.0
 */
function md_efi_get_theme_instance() {
	\MD_EFI\Includes\Md_Efi::get_instance();
}

md_efi_get_theme_instance();

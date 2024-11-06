<?php
/**
 * Theme Functions.
 *
 * @package md-storyful-fse-full
 */

if ( ! defined( 'MD_STORYFUL_FSE_FULL_THEME_VERSION' ) ) {
	define( 'MD_STORYFUL_FSE_FULL_THEME_VERSION', '1.0' );
}

if ( ! defined( 'MD_STORYFUL_FSE_FULL_THEME_PATH' ) ) {
	define( 'MD_STORYFUL_FSE_FULL_THEME_PATH', __DIR__ );
}

if ( ! defined( 'MD_STORYFUL_FSE_FULL_THEME_URL' ) ) {
	define( 'MD_STORYFUL_FSE_FULL_THEME_URL', get_template_directory_uri() );
}

if ( ! defined( 'MD_STORYFUL_FSE_FULL_BUILD_LIBRARY_URI' ) ) {
	define( 'MD_STORYFUL_FSE_FULL_BUILD_LIBRARY_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/library' );
}

if ( ! defined( 'MD_STORYFUL_FSE_FULL_BUILD_LIBRARY_DIR_PATH' ) ) {
	define( 'MD_STORYFUL_FSE_FULL_BUILD_LIBRARY_DIR_PATH', untrailingslashit( get_template_directory() ) . '/assets/library' );
}

if ( ! defined( 'MD_STORYFUL_FSE_FULL_BUILD_URI' ) ) {
	define( 'MD_STORYFUL_FSE_FULL_BUILD_URI', untrailingslashit( get_template_directory_uri() ) . '/assets/build' );
}

if ( ! defined( 'MD_STORYFUL_FSE_FULL_BUILD_PATH' ) ) {
	define( 'MD_STORYFUL_FSE_FULL_BUILD_PATH', untrailingslashit( get_template_directory() ) . '/assets/build' );
}

if ( ! defined( 'MD_STORYFUL_FSE_FULL_SRC_BLOCK_DIR_PATH' ) ) {
	define( 'MD_STORYFUL_FSE_FULL_SRC_BLOCK_DIR_PATH', get_template_directory() . '/assets/build/blocks' );
}

/**
 * Load up the class autoloader.
 */
require_once MD_STORYFUL_FSE_FULL_THEME_PATH . '/includes/helpers/autoloader.php';

/**
 * Theme Init
 *
 * Sets up the theme.
 *
 * @return void
 * @since 1.0.0
 */
function md_storyful_fse_full_get_theme_instance() {
	\MD_STORYFUL_FSE_FULL\Includes\Md_Storyful_Fse_Full::get_instance();
}

md_storyful_fse_full_get_theme_instance();

// Enable SVG uploads in WordPress
function enable_svg_uploads($mimes) {
    // Allow SVG file type
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'enable_svg_uploads');

// Sanitize uploaded SVG files
function sanitize_svg($data, $file, $filename, $mimes) {
    $filetype = wp_check_filetype($filename, $mimes);
    if ($filetype['ext'] === 'svg') {
        $data['ext'] = 'svg';
        $data['type'] = 'image/svg+xml';
    }
    return $data;
}
add_filter('wp_check_filetype_and_ext', 'sanitize_svg', 10, 4);

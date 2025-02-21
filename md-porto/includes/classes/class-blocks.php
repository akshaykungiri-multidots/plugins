<?php
/**
 * Dynamic Blocks.
 *
 * @package md-porto
 */

declare( strict_types = 1 );

namespace MD_PORTO\Includes;

use MD_PORTO\Includes\Traits\Singleton;

/**
 * Class Blocks
 */
class Blocks {
	use Singleton;

	/**
	 * Construct method.
	 */
	protected function __construct() {

		// load class.
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	protected function setup_hooks(): void {

		/**
		 * Load blocks classes.
		 */
		add_action( 'init', array( $this, 'register_theme_blocks' ) );
		add_filter( 'block_categories_all', array( $this, 'md_porto_custom_block_category' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'localize_gutenberg_blocks_config' ) );
	}

	/**
	 * Automatically registers all blocks that are located within the includes/blocks directory
	 *
	 * @return void
	 */
	public function register_theme_blocks(): void {
		// Register all the blocks in the theme.
		if ( file_exists( MD_PORTO_SRC_BLOCK_DIR_PATH ) ) {
			$block_json_files = glob( MD_PORTO_SRC_BLOCK_DIR_PATH . '/*/block.json' );

			// auto register all blocks that were found.
			foreach ( $block_json_files as $filename ) {
				// Retrieve block meta data.
				$metadata = wp_json_file_decode( $filename, array( 'associative' => true ) );
				if ( empty( $metadata ) || empty( $metadata['name'] ) ) {
					continue;
				}

				$block_name = $metadata['name'];
				$class_name = $this->block_class_from_string( $block_name );

				if ( $class_name && class_exists( $class_name, true ) ) {
					$block = $class_name::get_instance();
					$block->init();
				}
			}
		}
	}

	/**
	 * Register Custom Block Category
	 *
	 * @param array $categories return categories array.
	 *
	 * @return array
	 * @since 1.0.0
	 */
	public function md_porto_custom_block_category( array $categories ): array {
		return array_merge(
			array(
				array(
					'slug'  => 'md-porto',
					'title' => __( 'MD Porto', 'md-porto' ),
					'icon'  => 'welcome-add-page',
				),
			),
			$categories
		);
	}

	/**
	 * Take a string with a block name, return the class name.
	 *
	 * @param string $string string to generate class name from.
	 *
	 * @return string|null class name with namespace
	 */
	public static function block_class_from_string( string $string ): ?string {
		// Force lowercase. Normalize.
		$string = strtolower( $string );

		// Default namespace for blocks.
		$namespace = 'MD_PORTO\Blocks\\';

		// Remove namespace from block name.
		if ( false !== strpos( $string, 'md-porto/' ) ) {
			$string = str_replace( 'md-porto/', '', $string );
		}

		// Blow up names on the hyphens.
		$split = explode( '-', $string );

		// Upper Case Words when we join things back together.
		// implode is used on the variable that is exploded above.
		return $namespace . implode( '_', array_map( 'ucfirst', (array) $split ) );
	}

	/**
	 * Localize all blocks configuration under one object
	 *
	 * @return void
	 */
	public function localize_gutenberg_blocks_config(): void {
		$blocks_config = apply_filters( 'md_porto_gutenberg_blocks_config', array() );

		wp_localize_script(
			'wp-edit-post',
			'md_porto_gutenberg_blocks_config',
			$blocks_config
		);
	}
}

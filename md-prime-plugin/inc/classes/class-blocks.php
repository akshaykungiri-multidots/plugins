<?php
/**
 * Dynamic Blocks.
 *
 * @package md-prime
 */

namespace MD_Prime\Inc;

use MD_Prime\Inc\Traits\Singleton;

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
	protected function setup_hooks() {

		/**
		 * Load blocks classes.
		 */
		Blocks\Block_Sample_Dynamic::get_instance();

		add_filter( 'block_categories_all', array( $this, 'mdprime_custom_block_category' ) );
	}

	/**
	 * Register Custom Block Category
	 *
	 * @param string $categories return categories array.
	 *
	 * @return string
	 * @since 1.0.0
	 */
	public function mdprime_custom_block_category( $categories ) {
		return array_merge(
			array(
				array(
					'slug'  => 'md-prime',
					'title' => __( 'MD Prime Block', 'md-prime' ),
					'icon'  => 'welcome-add-page',
				),
			),
			$categories
		);
	}
}

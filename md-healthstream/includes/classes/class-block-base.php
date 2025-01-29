<?php
/**
 * Abstract class for Block Registration
 *
 * @package md-healthstream
 */

declare( strict_types = 1 );

namespace MD_HEALTHSTREAM\Includes;

use MD_HEALTHSTREAM\Includes\Traits\Singleton;

/**
 * Base Block class for all of our blocks.
 */
abstract class Block_Base {
	use Singleton;

	/**
	 * Block arguments.
	 *
	 * @var array args passed to block.
	 */
	protected $_block_args = array();

	/**
	 * Block name.
	 *
	 * @var name of the block.
	 */
	protected $_block;

	/**
	 * Register Block. Called on `init`.
	 */
	final public function init(): void {
		$name            = "md-healthstream/{$this->_block}";
		$render_callback = 'render_callback';

		if ( method_exists( $this, $render_callback ) ) {
			$this->_block_args['render_callback'] = array( $this, $render_callback );
		}

		// Set default, assume no block registration to this point.
		$has_block = false;

		// Check the register and determine if we have a block already by name.
		if ( class_exists( '\WP_Block_Type_Registry', false ) ) {
			$registry  = \WP_Block_Type_Registry::get_instance();
			$has_block = $registry->is_registered( $name );
		}

		$block_directory = MD_HEALTHSTREAM_SRC_BLOCK_DIR_PATH . '/' . $this->_block;

		// If this is a custom block, and it's not yet registered.
		// Register.
		if ( ! $has_block ) {
			register_block_type(
				$block_directory,
				$this->_block_args
			);
		}
	}

	/**
	 * Get style string from style array.
	 *
	 * @param array $style_array The style array.
	 * @return string The style string.
	 */
	public function get_style_string( $style_array, $echo = false ) {
		if ( ! is_array( $style_array ) || empty( $style_array ) ) {
			return '';
		}

		$output = (
			implode(
				';',
				array_map(
					function ( $k, $v ) {
						return $k . ':' . $v;
					},
					array_keys( $style_array ),
					$style_array
				)
			)
		);

		if ( $echo ) {
			echo esc_attr( $output );
		} else {
			return esc_attr( $output );
		}
	}
}

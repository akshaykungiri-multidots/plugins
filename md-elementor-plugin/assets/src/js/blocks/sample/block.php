<?php
/**
 * Registers the md-elementor/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-elementor
 */

namespace MD_Elementor\Blocks;

use MD_Elementor\Inc\Block_Base;

/**
 *  Class for the md-elementor/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

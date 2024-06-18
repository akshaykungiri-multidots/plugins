<?php
/**
 * Registers the md-circle-plus/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-circle-plus
 */

namespace MD_Circle_Plus\Blocks;

use MD_Circle_Plus\Inc\Block_Base;

/**
 *  Class for the md-circle-plus/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

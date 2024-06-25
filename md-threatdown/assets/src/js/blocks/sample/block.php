<?php
/**
 * Registers the md-threatdown/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-threatdown
 */

namespace MD_Threatdown\Blocks;

use MD_Threatdown\Inc\Block_Base;

/**
 *  Class for the md-threatdown/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

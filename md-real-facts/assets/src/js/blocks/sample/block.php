<?php
/**
 * Registers the md-real-facts/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-real-facts
 */

namespace MD_Real_Facts\Blocks;

use MD_Real_Facts\Inc\Block_Base;

/**
 *  Class for the md-real-facts/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

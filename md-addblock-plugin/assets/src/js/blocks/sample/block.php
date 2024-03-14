<?php
/**
 * Registers the md-addblock/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-addblock
 */

namespace MD_Addblock\Blocks;

use MD_Addblock\Inc\Block_Base;

/**
 *  Class for the md-addblock/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

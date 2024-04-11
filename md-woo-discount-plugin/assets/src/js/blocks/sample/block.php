<?php
/**
 * Registers the md-woo-discount/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-woo-discount
 */

namespace MD_Woo_Discount\Blocks;

use MD_Woo_Discount\Inc\Block_Base;

/**
 *  Class for the md-woo-discount/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

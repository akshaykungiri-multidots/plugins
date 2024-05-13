<?php
/**
 * Registers the md-shipping-address/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-shipping-address
 */

namespace MD_Shipping_Address\Blocks;

use MD_Shipping_Address\Inc\Block_Base;

/**
 *  Class for the md-shipping-address/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

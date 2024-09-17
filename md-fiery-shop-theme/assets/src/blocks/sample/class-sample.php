<?php
/**
 * Registers the md-fiery-shop/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-fiery-shop
 */

namespace MD_FIERY_SHOP\Blocks;

use MD_FIERY_SHOP\Includes\Block_Base;

/**
 *  Class for the md-fiery-shop/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

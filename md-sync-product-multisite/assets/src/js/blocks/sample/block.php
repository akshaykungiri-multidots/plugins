<?php
/**
 * Registers the md-sync-product-multisite/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-sync-product-multisite
 */

namespace MD_Sync_Product_Multisite\Blocks;

use MD_Sync_Product_Multisite\Inc\Block_Base;

/**
 *  Class for the md-sync-product-multisite/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

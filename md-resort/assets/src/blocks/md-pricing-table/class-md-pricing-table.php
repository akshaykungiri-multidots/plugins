<?php
/**
 * Registers the md-resort/md-pricing-table block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-resort
 */

namespace MD_RESORT\Blocks;

use MD_RESORT\Includes\Block_Base;

/**
 *  Class for the md-resort/md-pricing-table block.
 */
class MD_Pricing_Table extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-pricing-table';
	}
}

<?php
/**
 * Registers the md-bakery-antian/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-bakery-antian
 */

namespace MD_Bakery_Antian\Blocks;

use MD_Bakery_Antian\Inc\Block_Base;

/**
 *  Class for the md-bakery-antian/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

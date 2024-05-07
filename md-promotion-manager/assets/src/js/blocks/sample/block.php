<?php
/**
 * Registers the md-promotion-manager/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-promotion-manager
 */

namespace MD_Promotion_Manager\Blocks;

use MD_Promotion_Manager\Inc\Block_Base;

/**
 *  Class for the md-promotion-manager/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

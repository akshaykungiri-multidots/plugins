<?php
/**
 * Registers the md-circle-addon/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-circle-addon
 */

namespace MD_Circle_Addon\Blocks;

use MD_Circle_Addon\Inc\Block_Base;

/**
 *  Class for the md-circle-addon/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

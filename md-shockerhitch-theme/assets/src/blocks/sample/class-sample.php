<?php
/**
 * Registers the md-shockerhitch/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-shockerhitch
 */

namespace MD_SHOCKERHITCH\Blocks;

use MD_SHOCKERHITCH\Includes\Block_Base;

/**
 *  Class for the md-shockerhitch/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

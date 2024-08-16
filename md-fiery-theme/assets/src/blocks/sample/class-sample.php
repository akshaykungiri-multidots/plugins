<?php
/**
 * Registers the md-fiery/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-fiery
 */

namespace MD_FIERY\Blocks;

use MD_FIERY\Includes\Block_Base;

/**
 *  Class for the md-fiery/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

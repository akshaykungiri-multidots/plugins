<?php
/**
 * Registers the md-anitian/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-anitian
 */

namespace MD_ANITIAN\Blocks;

use MD_ANITIAN\Includes\Block_Base;

/**
 *  Class for the md-anitian/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

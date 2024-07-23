<?php
/**
 * Registers the md-storyful/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-storyful
 */

namespace MD_STORYFUL\Blocks;

use MD_STORYFUL\Includes\Block_Base;

/**
 *  Class for the md-storyful/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

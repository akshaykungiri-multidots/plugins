<?php
/**
 * Registers the md-litho/md-portfolio block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-litho
 */

namespace MD_LITHO\Blocks;

use MD_LITHO\Includes\Block_Base;

/**
 *  Class for the md-litho/md-portfolio block.
 */
class MD_Portfolio extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-portfolio';
	}
}

<?php
/**
 * Registers the md-porto/md-counter block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-porto
 */

namespace MD_PORTO\Blocks;

use MD_PORTO\Includes\Block_Base;

/**
 *  Class for the md-porto/md-counter block.
 */
class MD_Counter extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-counter';
	}
}

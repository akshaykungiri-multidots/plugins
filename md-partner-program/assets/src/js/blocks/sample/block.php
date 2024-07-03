<?php
/**
 * Registers the md-partner-program/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-partner-program
 */

namespace MD_Partner_Program\Blocks;

use MD_Partner_Program\Inc\Block_Base;

/**
 *  Class for the md-partner-program/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

<?php
/**
 * Registers the md-foursquare/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-foursquare
 */

namespace MD_Foursquare\Blocks;

use MD_Foursquare\Inc\Block_Base;

/**
 *  Class for the md-foursquare/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

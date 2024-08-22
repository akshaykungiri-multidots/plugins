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

namespace MD_FOURSQUARE\Blocks;

use MD_FOURSQUARE\Includes\Block_Base;

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

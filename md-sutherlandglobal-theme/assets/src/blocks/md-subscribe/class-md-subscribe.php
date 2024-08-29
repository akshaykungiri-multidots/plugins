<?php
/**
 * Registers the md-sutherlandglobal/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-sutherlandglobal
 */

namespace MD_SUTHERLANDGLOBAL\Blocks;

use MD_SUTHERLANDGLOBAL\Includes\Block_Base;

/**
 *  Class for the md-sutherlandglobal/sample block.
 */
class MD_Subscribe extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-subscribe';
	}
}

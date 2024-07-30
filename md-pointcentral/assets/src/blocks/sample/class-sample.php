<?php
/**
 * Registers the md-pointcentral/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-pointcentral
 */

namespace MD_POINTCENTRAL\Blocks;

use MD_POINTCENTRAL\Includes\Block_Base;

/**
 *  Class for the md-pointcentral/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

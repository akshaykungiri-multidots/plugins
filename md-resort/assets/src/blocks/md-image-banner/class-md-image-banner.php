<?php
/**
 * Registers the md-resort/md-image-banner block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-resort
 */

namespace MD_RESORT\Blocks;

use MD_RESORT\Includes\Block_Base;

/**
 *  Class for the md-resort/md-image-banner block.
 */
class MD_Image_Banner extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-image-banner';
	}
}

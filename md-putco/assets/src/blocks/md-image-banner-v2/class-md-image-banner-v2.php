<?php
/**
 * Registers the md-putco/md-image-banner-v2 block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-putco
 */

namespace MD_PUTCO\Blocks;

use MD_PUTCO\Includes\Block_Base;

/**
 *  Class for the md-putco/md-image-banner-v2 block.
 */
class MD_Image_Banner_V2 extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-image-banner-v2';
	}
}

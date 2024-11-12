<?php
/**
 * Registers the md-pointcentral-fse/md-image-box-v2 block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-pointcentral-fse
 */

namespace MD_POINTCENTRAL_FSE\Blocks;

use MD_POINTCENTRAL_FSE\Includes\Block_Base;

/**
 *  Class for the md-pointcentral-fse/md-image-box-v2 block.
 */
class MD_Image_Box_V2 extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-image-box-v2';
	}
}

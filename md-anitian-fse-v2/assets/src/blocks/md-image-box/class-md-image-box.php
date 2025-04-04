<?php
/**
 * Registers the md-anitian-fse-v2/md-image-box block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-anitian-fse-v2
 */

namespace MD_ANITIAN_FSE_V2\Blocks;

use MD_ANITIAN_FSE_V2\Includes\Block_Base;

/**
 *  Class for the md-anitian-fse-v2/md-image-box block.
 */
class MD_Image_Box extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-image-box';
	}
}

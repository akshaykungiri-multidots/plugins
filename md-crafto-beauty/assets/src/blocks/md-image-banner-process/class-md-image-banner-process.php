<?php
/**
 * Registers the md-crafto-beauty/md-image-banner-process block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-crafto-beauty
 */

namespace MD_CRAFTO_BEAUTY\Blocks;

use MD_CRAFTO_BEAUTY\Includes\Block_Base;

/**
 *  Class for the md-crafto-beauty/md-image-banner-process block.
 */
class MD_Image_Banner_Process extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-image-banner-process';
	}
}

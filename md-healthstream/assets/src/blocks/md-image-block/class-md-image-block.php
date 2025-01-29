<?php
/**
 * Registers the md-healthstream/md-image-block block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-healthstream
 */

namespace MD_HEALTHSTREAM\Blocks;

use MD_HEALTHSTREAM\Includes\Block_Base;

/**
 *  Class for the md-healthstream/md-image-block block.
 */
class MD_Image_Block extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-image-block';
	}
}

<?php
/**
 * Registers the md-healthstream/md-testimonials block.
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
 *  Class for the md-healthstream/md-testimonials block.
 */
class MD_Testimonials extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-testimonials';
	}
}

<?php
/**
 * Registers the md-ageofunion/md-about-manifesto block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-ageofunion
 */

namespace MD_AGEOFUNION\Blocks;

use MD_AGEOFUNION\Includes\Block_Base;

/**
 *  Class for the md-ageofunion/md-about-manifesto block.
 */
class MD_About_Manifesto extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-about-manifesto';
	}
}

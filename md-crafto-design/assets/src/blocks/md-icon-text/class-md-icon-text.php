<?php
/**
 * Registers the md-crafto-design/md-icon-text block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-crafto-design
 */

namespace MD_CRAFTO_DESIGN\Blocks;

use MD_CRAFTO_DESIGN\Includes\Block_Base;

/**
 *  Class for the md-crafto-design/md-icon-text block.
 */
class MD_Icon_Text extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-icon-text';
	}
}

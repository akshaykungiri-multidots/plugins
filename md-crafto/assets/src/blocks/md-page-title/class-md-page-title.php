<?php
/**
 * Registers the md-crafto/md-page-title block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-crafto
 */

namespace MD_CRAFTO\Blocks;

use MD_CRAFTO\Includes\Block_Base;

/**
 *  Class for the md-crafto/md-page-title block.
 */
class MD_Page_Title extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-page-title';
	}
}

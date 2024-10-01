<?php
/**
 * Registers the md-anitian-fse-full/md-card-block block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-anitian-fse-full
 */

namespace MD_ANITIAN_FSE_FULL\Blocks;

use MD_ANITIAN_FSE_FULL\Includes\Block_Base;

/**
 *  Class for the md-anitian-fse-full/md-card-block block.
 */
class MD_Card_Block extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-card-block';
	}
}

<?php
/**
 * Registers the md-anitian-fse/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-anitian-fse
 */

namespace MD_ANITIAN_FSE\Blocks;

use MD_ANITIAN_FSE\Includes\Block_Base;

/**
 *  Class for the md-anitian-fse/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

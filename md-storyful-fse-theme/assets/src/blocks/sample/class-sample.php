<?php
/**
 * Registers the md-storyful-fse/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-storyful-fse
 */

namespace MD_STORYFUL_FSE\Blocks;

use MD_STORYFUL_FSE\Includes\Block_Base;

/**
 *  Class for the md-storyful-fse/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

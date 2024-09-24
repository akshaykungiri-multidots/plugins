<?php
/**
 * Registers the md-storyful-fse-full/md-video-licensing block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-storyful-fse-full
 */

namespace MD_STORYFUL_FSE_FULL\Blocks;

use MD_STORYFUL_FSE_FULL\Includes\Block_Base;

/**
 *  Class for the md-storyful-fse-full/md-video-licensing block.
 */
class MD_Video_Licensing extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-video-licensing';
	}
}

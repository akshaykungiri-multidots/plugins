<?php
/**
 * Registers the md-woodward/md-hero-banner block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-woodward
 */

namespace MD_WOODWARD\Blocks;

use MD_WOODWARD\Includes\Block_Base;

/**
 *  Class for the md-woodward/md-hero-banner block.
 */
class MD_Hero_Banner extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-hero-banner';
	}
}

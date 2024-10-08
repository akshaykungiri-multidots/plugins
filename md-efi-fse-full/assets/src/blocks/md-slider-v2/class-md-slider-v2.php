<?php
/**
 * Registers the md-efi-fse-full/md-slider-v2 block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-efi-fse-full
 */

namespace MD_EFI_FSE_FULL\Blocks;

use MD_EFI_FSE_FULL\Includes\Block_Base;

/**
 *  Class for the md-efi-fse-full/md-slider-v2 block.
 */
class MD_Slider_V2 extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-slider-v2';
	}
}

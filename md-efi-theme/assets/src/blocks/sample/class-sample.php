<?php
/**
 * Registers the md-efi/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-efi
 */

namespace MD_EFI\Blocks;

use MD_EFI\Includes\Block_Base;

/**
 *  Class for the md-efi/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

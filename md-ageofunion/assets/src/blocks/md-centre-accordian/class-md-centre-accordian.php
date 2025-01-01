<?php
/**
 * Registers the md-ageofunion/md-centre-accordian block.
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
 *  Class for the md-ageofunion/md-centre-accordian block.
 */
class MD_Centre_Accordian extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-centre-accordian';
	}
}

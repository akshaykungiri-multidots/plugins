<?php
/**
 * Registers the md-wallet/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-wallet
 */

namespace MD_Wallet\Blocks;

use MD_Wallet\Inc\Block_Base;

/**
 *  Class for the md-wallet/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

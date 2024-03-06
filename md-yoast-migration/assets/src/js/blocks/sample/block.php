<?php
/**
 * Registers the md-yoast-migration/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-yoast-migration
 */

namespace MD_Yoast_Migration\Blocks;

use MD_Yoast_Migration\Inc\Block_Base;

/**
 *  Class for the md-yoast-migration/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

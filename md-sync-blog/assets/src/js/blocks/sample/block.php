<?php
/**
 * Registers the md-sync-blog/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-sync-blog
 */

namespace MD_Sync_Blog\Blocks;

use MD_Sync_Blog\Inc\Block_Base;

/**
 *  Class for the md-sync-blog/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

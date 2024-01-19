<?php
/**
 * Registers the md-sync-post-multisite/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-sync-post-multisite
 */

namespace MD_Sync_Post_Multisite\Blocks;

use MD_Sync_Post_Multisite\Inc\Block_Base;

/**
 *  Class for the md-sync-post-multisite/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

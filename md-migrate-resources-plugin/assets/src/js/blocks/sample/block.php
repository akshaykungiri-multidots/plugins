<?php
/**
 * Registers the md-migrate-resources/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-migrate-resources
 */

namespace MD_Migrate_Resources\Blocks;

use MD_Migrate_Resources\Inc\Block_Base;

/**
 *  Class for the md-migrate-resources/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}

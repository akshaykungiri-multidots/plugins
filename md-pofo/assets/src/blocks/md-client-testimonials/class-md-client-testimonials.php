<?php

/**
 * Registers the md-prime/team-v2 block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-prime
 */

namespace MD_POFO\Blocks;

use MD_POFO\Includes\Block_Base;
use WP_Block;

/**
 * MD_Client_Testimonials class.
 */
class MD_Client_Testimonials extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-client-testimonials';
	}
}
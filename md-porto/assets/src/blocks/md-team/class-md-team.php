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

namespace MD_PORTO\Blocks;

use MD_PORTO\Includes\Block_Base;
use WP_Block;

/**
 * MD__Team class.
 */
class MD_Team extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-team';
	}
}
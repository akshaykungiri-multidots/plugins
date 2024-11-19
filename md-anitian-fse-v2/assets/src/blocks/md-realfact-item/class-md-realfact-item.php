<?php

/**
 * Registers the md-anitian-fse-v2/md-realfact-item block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-anitian-fse-v2
 */

namespace MD_ANITIAN_FSE_V2\Blocks;

use MD_ANITIAN_FSE_V2\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-anitian-fse-v2/md-realfact-item block.
 */
class MD_Realfact_Item extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-realfact-item';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks()
	{
		add_filter('md_anitian_fse_full_gutenberg_blocks_config', array($this, 'localize_block_data'));
	}

	/**
	 * Localize template data.
	 *
	 * @param array $blocks_config Block configuration.
	 * @return array Updated block configuration.
	 */
	public function localize_block_data(array $blocks_config): array
	{
		// Merge your block data into blocks_config.
		return array_merge(
			$blocks_config,
			array(
				'sample_dynamic_block_config' => array(
					'data_key' => 'data_value',
				),
			)
		);
	}

	/**
	 * Render block.
	 *
	 * @param array    $attributes   Block attributes.
	 * @param string   $content      Block content.
	 * @param WP_Block $block        Block object.
	 * @return string
	 */
	public function render_callback(
		// phpcs:disable VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
		array $attributes,
		string $content,
		WP_Block $block
		// phpcs:enable
	): string {

		// get string of attributes of the features that the block supports.
		$wrapper_attributes = get_block_wrapper_attributes();

		// attributes.
		$heading = isset($attributes['heading']) ? $attributes['heading'] : '';
		$contentText = isset($attributes['content']) ? $attributes['content'] : '';
		$enableHeading = isset($attributes['enableHeading']) ? $attributes['enableHeading'] : '';
		$enableContent = isset($attributes['enableContent']) ? $attributes['enableContent'] : '';
		$enableTopBorder = isset($attributes['enableTopBorder']) ? $attributes['enableTopBorder'] : '';
		$headingColor = isset($attributes['headingColor']) ? $attributes['headingColor'] : '';
		$contentColor = isset($attributes['contentColor']) ? $attributes['contentColor'] : '';
		$topBorderColor = isset($attributes['topBorderColor']) ? $attributes['topBorderColor'] : '';
		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<div class='md_real_facts_item'>
				<div class='container'>
					<?php if ($enableTopBorder) : ?>
						<div class='md_real_facts_line' style="border-color: <?php echo esc_attr($topBorderColor); ?>"></div>
					<?php endif; ?>
					<?php if ($enableHeading) : ?>
						<h3 style="color: <?php echo esc_attr($headingColor); ?>;" class="md_real_facts_heading">
							<?php echo wp_kses_post($heading); ?>
						</h3>
					<?php endif; ?>
					<?php if ($enableContent) : ?>
						<h4 style="color: <?php echo esc_attr($contentColor); ?>;" class="md_real_facts_desc">
							<?php echo wp_kses_post($contentText); ?>
						</h4>
					<?php endif; ?>
				</div>
			</div>
		</div>
<?php
		return ob_get_clean();
	}
}

<?php

/**
 * Registers the md-anitian-fse-v2/md-timeline block.
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
 *  Class for the md-anitian-fse-v2/md-timeline block.
 */
class MD_Timeline extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-timeline';
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
		$enableHeading = isset($attributes['enableHeading']) ? $attributes['enableHeading'] : false;
		$enableTimelineBorder = isset($attributes['enableTimelineBorder']) ? $attributes['enableTimelineBorder'] : false;
		$TimelineBorderColor = isset($attributes['TimelineBorderColor']) ? $attributes['TimelineBorderColor'] : '';
		$headingColor = isset($attributes['headingColor']) ? $attributes['headingColor'] : '';

		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<div class='container'>
				<div class='md_timeline_block' style="border-top: <?php echo esc_attr($enableTimelineBorder ? '20px solid ' . $TimelineBorderColor : 'none'); ?>">
					<div class="md_timeline__line">
						<div class="md_timeline__line-inner"></div>
					</div>
					<?php if ($enableHeading) : ?>
						<div class='timeline_heading_div'>
							<?php if (!empty($heading)) : ?>
								<h2 class="md_timeline_heading" style="color: <?php echo esc_attr($headingColor); ?>"><?php echo esc_html($heading); ?></h2>
							<?php endif; ?>
						</div>
					<?php endif; ?>
					<div class="md_timeline_container">
						<?php echo wp_kses_post($content); ?>
					</div>
				</div>
			</div>
		</div>
<?php
		return ob_get_clean();
	}
}

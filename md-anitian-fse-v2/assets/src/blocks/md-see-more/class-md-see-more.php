<?php

/**
 * Registers the md-anitian-fse-v2/md-see-more block.
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
 *  Class for the md-anitian-fse-v2/md-see-more block.
 */
class MD_See_More extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-see-more';
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
		$heading         = isset($attributes['heading']) ? $attributes['heading'] : '';
		$headingColor    = isset($attributes['headingColor']) ? $attributes['headingColor'] : '';
		$contentText     = isset($attributes['content']) ? $attributes['content'] : '';
		$contentColor    = isset($attributes['contentColor']) ? $attributes['contentColor'] : '';
		$buttonBGColor   = isset($attributes['buttonBGColor']) ? $attributes['buttonBGColor'] : '';
		$buttonColor     = isset($attributes['buttonColor']) ? $attributes['buttonColor'] : '';
		$buttonText      = isset($attributes['buttonText']) ? $attributes['buttonText'] : '';
		$showContent    = isset($attributes['showContent']) ? $attributes['showContent'] : '';

		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<div class='md_real_facts'>
				<div class='container'>
					<div class='md_real_facts_line'></div>
					<h2
						style="
						color: <?php echo esc_attr($headingColor); ?>;
						"
						class="md_real_facts_heading">
						<?php echo wp_kses_post($heading); ?>
					</h2>
					<?php if ($showContent) : ?>
						<h4
							style="
							color: <?php echo esc_attr($contentColor); ?>;
							"
							class="md_real_facts_desc">
							<?php echo wp_kses_post($contentText); ?>
						</h4>
					<?php endif; ?>
					<Button
						class="md_real_facts_btn"
						style="
						background-color: <?php echo esc_attr($buttonBGColor); ?>;
						color: <?php echo esc_attr($buttonColor); ?>;
						">
						<?php echo wp_kses_post($buttonText); ?>
					</Button>
				</div>
			</div>
			<div class='container md_real_facts__more_item'>
				<div className="md_block_inserter">
					<?php echo wp_kses_post($content); ?>
				</div>
			</div>
		</div>
<?php
		return ob_get_clean();
	}
}

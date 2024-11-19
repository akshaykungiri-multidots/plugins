<?php

/**
 * Registers the md-anitian-fse-v2/md-timeline-finish block.
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
 *  Class for the md-anitian-fse-v2/md-timeline-finish block.
 */
class MD_Timeline_Finish extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-timeline-finish';
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

		$timelineFinishIcon = isset($attributes['timelineFinishIcon']) ? $attributes['timelineFinishIcon'] : '';
		$heading = isset($attributes['heading']) ? $attributes['heading'] : '';
		$content = isset($attributes['content']) ? $attributes['content'] : '';
		$headingColor = isset($attributes['headingColor']) ? $attributes['headingColor'] : '';
		$contentColor = isset($attributes['contentColor']) ? $attributes['contentColor'] : '';
		$enableContent = isset($attributes['enableContent']) ? $attributes['enableContent'] : '';
		$enableBottomLine = isset($attributes['enableBottomLine']) ? $attributes['enableBottomLine'] : '';
		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<div class='md_timeline_finish'>
				<div class='md_timeline_finish_block ahead'>
					<div class='md_timeline_finish_wrapper'>
						<div class='md_timeline_finish_icon'>
							<?php if ($timelineFinishIcon !== '') { ?>
								<img src="<?php echo esc_url($timelineFinishIcon); ?>" alt="timeline finish icon" />
							<?php } ?>
						</div>
						<div class='md_timeline_finish_content'>
							<div class="timeline__finish-card <?php echo $enableBottomLine ? 'has_bottom_line' : ''; ?>">
								<h4 style="color: <?php echo esc_attr($headingColor); ?>" class="heading">
									<?php echo wp_kses_post($heading); ?>
								</h4>
								<?php if ($enableContent) { ?>
									<p style="color: <?php echo esc_attr($contentColor); ?>" class="content">
										<?php echo wp_kses_post($content); ?>
									</p>
								<?php } ?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
<?php
		return ob_get_clean();
	}
}

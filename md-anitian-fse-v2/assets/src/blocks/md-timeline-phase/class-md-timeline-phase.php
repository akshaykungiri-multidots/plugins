<?php

/**
 * Registers the md-anitian-fse-v2/md-timeline-phase block.
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
 *  Class for the md-anitian-fse-v2/md-timeline-phase block.
 */
class MD_Timeline_Phase extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-timeline-phase';
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
		$phaseIcon = isset($attributes['phaseIcon']) ? $attributes['phaseIcon'] : '';
		$aheadHeading = isset($attributes['aheadHeading']) ? $attributes['aheadHeading'] : '';
		$enableAheadContent = isset($attributes['enableAheadContent']) ? $attributes['enableAheadContent'] : '';
		$aheadContent = isset($attributes['aheadContent']) ? $attributes['aheadContent'] : '';
		$behindHeading = isset($attributes['behindHeading']) ? $attributes['behindHeading'] : '';
		$enableBehindContent = isset($attributes['enableBehindContent']) ? $attributes['enableBehindContent'] : '';
		$behindContent = isset($attributes['behindContent']) ? $attributes['behindContent'] : '';
		$enableAheadPhaseImage = isset($attributes['enableAheadPhaseImage']) ? $attributes['enableAheadPhaseImage'] : '';
		$aheadPhaseImage = isset($attributes['aheadPhaseImage']) ? $attributes['aheadPhaseImage'] : '';
		$enableBehindPhaseImage = isset($attributes['enableBehindPhaseImage']) ? $attributes['enableBehindPhaseImage'] : '';
		$behindPhaseImage = isset($attributes['behindPhaseImage']) ? $attributes['behindPhaseImage'] : '';
		$aheadHeadingColor = isset($attributes['aheadHeadingColor']) ? $attributes['aheadHeadingColor'] : '';
		$aheadContentColor = isset($attributes['aheadContentColor']) ? $attributes['aheadContentColor'] : '';
		$behindHeadingColor = isset($attributes['behindHeadingColor']) ? $attributes['behindHeadingColor'] : '';
		$behindContentColor = isset($attributes['behindContentColor']) ? $attributes['behindContentColor'] : '';
		$aheadPhaseImageBGColor = isset($attributes['aheadPhaseImageBGColor']) ? $attributes['aheadPhaseImageBGColor'] : '';
		$behindPhaseImageBGColor = isset($attributes['behindPhaseImageBGColor']) ? $attributes['behindPhaseImageBGColor'] : '';
		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<div class='md_timeline_phase'>
				<div class='md_timeline_phase_block ahead'>
					<div class='md_timeline_phase_wrapper'>
						<div class='md_timeline_phase_icon'>
							<?php if (! empty($phaseIcon)) : ?>
								<img src="<?php echo esc_url($phaseIcon); ?>" />
							<?php endif; ?>
						</div>
						<div class='md_timeline_phase_content'>
							<div class="timeline__phase-card" style="<?php echo esc_attr($enableAheadPhaseImage ? "background: linear-gradient(90deg, #f7f7f7 75%, $aheadPhaseImageBGColor 25%)" : ''); ?>">
								<h4 style="color: <?php echo esc_attr($aheadHeadingColor); ?>;" class="heading">
									<?php echo esc_html($aheadHeading); ?>
								</h4>
								<?php if ($enableAheadPhaseImage) { ?>
									<div class="timeline__phase-image">
										<img src="<?php echo esc_url($aheadPhaseImage); ?>" />
									</div>
								<?php } ?>
							</div>
							<?php if ($enableAheadContent) : ?>
								<p style="color: <?php echo esc_attr($aheadContentColor); ?>;" class="content">
									<?php echo wp_kses_post($aheadContent); ?>
								</p>
							<?php endif; ?>
						</div>
					</div>
				</div>
				<div class='md_timeline_phase_block behind'>
					<div class='md_timeline_phase_wrapper'>
						<div class='md_timeline_phase_icon'>
							<div class='md_timeline__phase-caution'>
								<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
							</div>
						</div>
						<div class='md_timeline_phase_content'>
							<div class="timeline__phase-card" style="<?php echo esc_attr($enableBehindPhaseImage ? "background: linear-gradient(270deg, #f7f7f7 75%, $behindPhaseImageBGColor 25%)" : ''); ?>">
								<h4 style="color: <?php echo esc_attr($behindHeadingColor); ?>;" class="heading">
									<?php echo wp_kses_post($behindHeading); ?>
								</h4>
								<?php if ($enableBehindPhaseImage) { ?>
									<div class="timeline__phase-image">
										<img src="<?php echo esc_url($behindPhaseImage); ?>" />
									</div>
								<?php } ?>
							</div>
							<?php if ($enableBehindContent) : ?>
								<p style="color: <?php echo esc_attr($behindContentColor); ?>;" class="content">
									<?php echo wp_kses_post($behindContent); ?>
								</p>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
<?php
		return ob_get_clean();
	}
}

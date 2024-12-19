<?php

/**
 * Registers the md-litho/md-video-contact-us block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-litho
 */

namespace MD_LITHO\Blocks;

use MD_LITHO\Includes\Block_Base;
use WP_Block;

use function ElementorDeps\DI\value;

/**
 *  Class for the md-litho/md-video-contact-us block.
 */
class MD_Video_Contact_Us extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-video-contact-us';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks()
	{
		add_filter('md_litho_gutenberg_blocks_config', array($this, 'localize_block_data'));
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
		$backgroundImage = isset($attributes['backgroundImage']) ? $attributes['backgroundImage'] : '';
		$enableOverlay = isset($attributes['enableOverlay']) ? $attributes['enableOverlay'] : false;
		$overlayColor = isset($attributes['overlayColor']) ? $attributes['overlayColor'] : '';
		$showVideoText = isset($attributes['showVideoText']) ? $attributes['showVideoText'] : false;
		$showForm = isset($attributes['showForm']) ? $attributes['showForm'] : false;
		$formShortcode = isset($attributes['formShortcode']) ? $attributes['formShortcode'] : '';
		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<div class="md_litho_video_contact_us_section">

				<div
					class="md_litho_video_contact_us_wrap"
					style="background-image: url(<?php echo esc_url($backgroundImage); ?>)">
					<?php if ($enableOverlay) : ?>
						<div
							class="md_litho_video_contact_us_overlay"
							style="background: <?php echo esc_attr($overlayColor); ?>; opacity: 0.8;"></div>
					<?php endif; ?>
					<div class="md_litho_video_contact_us">
						<div class="md_litho_video_contact_us__inner">
							<div class="md_litho_video_contact_us__youtube">
								<div class="md_litho_video_contact_us__youtube_icon">
									<button
										class="play-button">
										<div class="play-button__icon">
											<i class="dashicons dashicons-controls-play"></i>
										</div>
										<span class="video-icon-sonar">
											<span class="video-icon-sonar-bfr"></span>
										</span>
									</button>
									<div class="md_litho_video_contact_us__text">
										<?php if ($showVideoText) : ?>
											<p class="md_litho_video_contact_us__text_content" style="color: <?php echo esc_attr($attributes['videoTextColor']); ?>">
												<?php echo esc_html($attributes['videoText']); ?>
											</p>
										<?php endif; ?>
									</div>
								</div>
								<div class="litho_video_popup__wrap">
									<div class="litho_video_popup__inner">
										<div class="litho_video_popup__inner-header">
											<i
												class="dashicons dashicons-no-alt close-popup"
												role="button"
												aria-label="Close popup">
											</i>
										</div>
										<div class="litho_video_popup__inner-content">
											<div class="text_video__youtube">
												<div class="video_section_wrapper" id="MdYTplayer">
													<div class="wrapper__box-inner">
														<div
															class="video-details-wrapper"
															style="text-align: center;">
															<div class="video-data-edit">
																<?php if ($attributes['videotype'] === 'youtube') : ?>
																	<?php if ($attributes['youtubeurl']) : ?>
																		<iframe
																			src="<?php echo esc_url(str_replace('watch?v=', 'embed/', $attributes['youtubeurl']) . '?controls=0'); ?>"
																			data-src="<?php echo esc_url($attributes['youtubeurl'] . '?enablejsapi=1&controls=0&rel=0'); ?>"
																			title="video">
																		</iframe>
																	<?php endif; ?>
																<?php endif; ?>
															</div>
															<?php if ($attributes['videotype'] === 'media-upload' && $attributes['mediaurl']) : ?>
																<div class="image-preview image-controle-visible-hover">
																	<video
																		muted=""
																		loop=""
																		class="self-media"
																		id="video"
																		controls>
																		<source src="<?php echo esc_url($attributes['mediaurl']); ?>" type="video/mp4" />
																	</video>
																</div>
															<?php endif; ?>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<?php if ($showForm) : ?>
					<div class="container">
						<div
							class="md_litho_contact_form"
							style="background-color: <?php echo esc_attr($attributes['formBgColor']); ?>">
							<div class="md_litho_contact_form__inner">
								<?php if ($attributes['showFormSubtitle']) : ?>
									<p
										class="md_litho_contact_form__subtitle"
										style="color: <?php echo esc_attr($attributes['formSubtitleColor']); ?>">
										<?php echo esc_html($attributes['formSubtitle']); ?>
									</p>
								<?php endif; ?>
								<?php if ($attributes['showFormTitle']) : ?>
									<h2
										class="md_litho_contact_form__title"
										style="color: <?php echo esc_attr($attributes['formTitleColor']); ?>">
										<?php echo esc_html($attributes['formTitle']); ?>
									</h2>
								<?php endif; ?>
								<div class="md_litho_contact_form__shortcode">
									<div class="md_litho_contact_form__form_shortcode">
										<?php echo do_shortcode($formShortcode); ?>
									</div>
								</div>
							</div>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</div>
<?php
		return ob_get_clean();
	}
}

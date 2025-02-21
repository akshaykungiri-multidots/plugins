<?php

/**
 * Registers the md-porto/md-quote block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-porto
 */

namespace MD_PORTO\Blocks;

use MD_PORTO\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-porto/md-quote block.
 */
class MD_Quote extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-quote';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks()
	{
		add_filter('md_porto_gutenberg_blocks_config', array($this, 'localize_block_data'));
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
		$subTitle = isset($attributes['subTitle']) ? $attributes['subTitle'] : '';
		$title = isset($attributes['title']) ? $attributes['title'] : '';
		$headingContent = isset($attributes['headingContent']) ? $attributes['headingContent'] : '';
		$phoneText = isset($attributes['phoneText']) ? $attributes['phoneText'] : '';
		$phoneHeadingText = isset($attributes['phoneHeadingText']) ? $attributes['phoneHeadingText'] : '';
		$emailText = isset($attributes['emailText']) ? $attributes['emailText'] : '';
		$emailHeadingText = isset($attributes['emailHeadingText']) ? $attributes['emailHeadingText'] : '';
		$mediaPosition = isset($attributes['mediaPosition']) ? $attributes['mediaPosition'] : '';
		$backgroundColor = isset($attributes['backgroundColor']) ? $attributes['backgroundColor'] : '';
		$subTitleColor = isset($attributes['subTitleColor']) ? $attributes['subTitleColor'] : '';
		$titleColor = isset($attributes['titleColor']) ? $attributes['titleColor'] : '';
		$headingContentColor = isset($attributes['headingContentColor']) ? $attributes['headingContentColor'] : '';
		$showSubTitle = isset($attributes['showSubTitle']) ? $attributes['showSubTitle'] : false;
		$showTitle = isset($attributes['showTitle']) ? $attributes['showTitle'] : false;
		$showHeadingContent = isset($attributes['showHeadingContent']) ? $attributes['showHeadingContent'] : false;
		$showPhone = isset($attributes['showPhone']) ? $attributes['showPhone'] : false;
		$showEmail = isset($attributes['showEmail']) ? $attributes['showEmail'] : false;
		$phoneTextColor = isset($attributes['phoneTextColor']) ? $attributes['phoneTextColor'] : '';
		$phoneHeadingTextColor = isset($attributes['phoneHeadingTextColor']) ? $attributes['phoneHeadingTextColor'] : '';
		$emailTextColor = isset($attributes['emailTextColor']) ? $attributes['emailTextColor'] : '';
		$emailHeadingTextColor = isset($attributes['emailHeadingTextColor']) ? $attributes['emailHeadingTextColor'] : '';
		$workinHoursTitle = isset($attributes['workinHoursTitle']) ? $attributes['workinHoursTitle'] : '';
		$workinHoursContent = isset($attributes['workinHoursContent']) ? $attributes['workinHoursContent'] : '';
		$showWorkinHours = isset($attributes['showWorkinHours']) ? $attributes['showWorkinHours'] : false;
		$workinHoursTitleColor = isset($attributes['workinHoursTitleColor']) ? $attributes['workinHoursTitleColor'] : '';
		$workinHoursContentColor = isset($attributes['workinHoursContentColor']) ? $attributes['workinHoursContentColor'] : '';
		$workinHoursTitleBackgroundColor = isset($attributes['workinHoursTitleBackgroundColor']) ? $attributes['workinHoursTitleBackgroundColor'] : '';
		$privacyText = isset($attributes['privacyText']) ? $attributes['privacyText'] : '';
		$showPrivacy = isset($attributes['showPrivacy']) ? $attributes['showPrivacy'] : false;
		$privacyTextColor = isset($attributes['privacyTextColor']) ? $attributes['privacyTextColor'] : '';
		$contactForm = isset($attributes['contactForm']) ? $attributes['contactForm'] : '';
		$showContactForm = isset($attributes['showContactForm']) ? $attributes['showContactForm'] : false;

		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<div class="md_porto_video_header_section">
				<div class="md_porto_quote_wrap">
					<div class="md_porto_quote" style="background-color: <?php echo esc_attr($backgroundColor); ?>">
						<div class="container">
							<div class="md_porto_quote__inner" style="<?php echo esc_attr("flex-direction: " . ($mediaPosition === "left" ? "row-reverse" : "row")); ?>">
								<div class="md_porto_quote__heading">
									<?php if ($showSubTitle) : ?>
										<h4 style="color: <?php echo esc_attr($subTitleColor); ?>">
											<?php echo esc_html($subTitle); ?>
										</h4>
									<?php endif; ?>
									<?php if ($showTitle) : ?>
										<h2 style="color: <?php echo esc_attr($titleColor); ?>">
											<?php echo esc_html($title); ?>
										</h2>
									<?php endif; ?>
									<?php if ($showHeadingContent) : ?>
										<p
											class="md_porto_quote__content"
											style="color: <?php echo esc_attr($headingContentColor); ?>">
											<?php echo esc_html($headingContent); ?>
										</p>
									<?php endif; ?>
									<?php if ($showWorkinHours) : ?>
										<div class="md_porto_quote__working_hours">
											<h5
												style="
										color: <?php echo esc_attr($workinHoursTitleColor); ?>;
										background-color: <?php echo esc_attr($workinHoursTitleBackgroundColor); ?>;
									">
												<?php echo esc_html($workinHoursTitle); ?>
											</h5>
											<p style="color: <?php echo esc_attr($workinHoursContentColor); ?>">
												<?php echo esc_html($workinHoursContent); ?>
											</p>
										</div>
									<?php endif; ?>
									<div class="md_btn__wrapper md_porto_quote__btn">
										<?php if ($showPhone) : ?>
											<div class="md_porto_quote__link_wrapper">
												<i class="fa fa-phone"></i>
												<div class="md_porto_quote__link_heading">
													<h5 style="color: <?php echo esc_attr($phoneHeadingTextColor); ?>">
														<?php echo wp_kses_post($phoneHeadingText); ?>
													</h5>
													<span
														class="md_porto_quote__link"
														style="color: <?php echo esc_attr($phoneTextColor); ?>">
														<?php echo wp_kses_post($phoneText); ?>
													</span>
												</div>
											</div>
										<?php endif; ?>
										<?php if ($showEmail) : ?>
											<div class="md_porto_quote__link_wrapper">
												<i class="fa fa-envelope"></i>
												<div class="md_porto_quote__link_heading">
													<h5 style="color: <?php echo esc_attr($emailHeadingTextColor); ?>">
														<?php echo wp_kses_post($emailHeadingText); ?>
													</h5>
													<span
														class="md_porto_quote__link"
														style="color: <?php echo esc_attr($emailTextColor); ?>">
														<?php echo wp_kses_post($emailText); ?>
													</span>
												</div>
											</div>
										<?php endif; ?>
									</div>
									<?php if ($showPrivacy) : ?>
										<p
											class="md_porto_quote__privacy"
											style="color: <?php echo esc_attr($privacyTextColor); ?>">
											<?php echo wp_kses_post($privacyText); ?>
										</p>
									<?php endif; ?>
								</div>
								<div class="md_porto_quote__contact_form">
									<?php if ($showContactForm) : ?>
										<?php echo do_shortcode($contactForm); ?>
									<?php endif; ?>
								</div>
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

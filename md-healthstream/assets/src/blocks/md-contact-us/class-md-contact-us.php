<?php

/**
 * Registers the md-healthstream/md-contact-us block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-healthstream
 */

namespace MD_HEALTHSTREAM\Blocks;

use MD_HEALTHSTREAM\Includes\Block_Base;
use WP_Block;

use function ElementorDeps\DI\value;

/**
 *  Class for the md-healthstream/md-contact-us block.
 */
class MD_Contact_Us extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-contact-us';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks()
	{
		add_filter('md_healthstream_gutenberg_blocks_config', array($this, 'localize_block_data'));
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
		$showHeading = isset($attributes['showHeading']) ? $attributes['showHeading'] : false;
		$heading = isset($attributes['heading']) ? $attributes['heading'] : '';
		$headingColor = isset($attributes['headingColor']) ? $attributes['headingColor'] : '';
		$showDescription = isset($attributes['showDescription']) ? $attributes['showDescription'] : false;
		$description = isset($attributes['description']) ? $attributes['description'] : '';
		$descriptionColor = isset($attributes['descriptionColor']) ? $attributes['descriptionColor'] : '';
		$showFormSubtitle = isset($attributes['showFormSubtitle']) ? $attributes['showFormSubtitle'] : false;
		$formSubtitle = isset($attributes['formSubtitle']) ? $attributes['formSubtitle'] : '';
		$formSubtitleColor = isset($attributes['formSubtitleColor']) ? $attributes['formSubtitleColor'] : '';
		$showFormTitle = isset($attributes['showFormTitle']) ? $attributes['showFormTitle'] : false;
		$formTitle = isset($attributes['formTitle']) ? $attributes['formTitle'] : '';
		$formTitleColor = isset($attributes['formTitleColor']) ? $attributes['formTitleColor'] : '';
		$showForm = isset($attributes['showForm']) ? $attributes['showForm'] : false;
		$formShortcode = isset($attributes['formShortcode']) ? $attributes['formShortcode'] : '';
		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<div class="md_healthstream_contact_us_section">

				<div
					class="md_healthstream_contact_us_wrap"
					style="background-image: url(<?php echo esc_url($backgroundImage); ?>)">
					<?php if ($enableOverlay) : ?>
						<div
							class="md_healthstream_contact_us_overlay"
							style="background: <?php echo esc_attr($overlayColor); ?>; opacity: 0.8;"></div>
					<?php endif; ?>
					<div class="container">
						<div class="wrapper-inner">
							<div class="md_healthstream_contact_us_inner">
								<div class="md_healthstream_contact_us__heading">
									<?php if ($showHeading) : ?>
										<h2
											style="color: <?php echo esc_attr($headingColor); ?>"
											class="md_healthstream_contact_us__title">
											<?php echo esc_html($heading); ?>
										</h2>
									<?php endif; ?>
									<?php if ($showDescription) : ?>
										<p
											style="color: <?php echo esc_attr($descriptionColor); ?>"
											class="md_healthstream_contact_us__description">
											<?php echo esc_html($description); ?>
										</p>
									<?php endif; ?>
								</div>
								<?php if ($showForm) : ?>
									<div class="md_healthstream_contact_form">
										<div class="md_healthstream_contact_form__inner">
											<?php if ($showFormSubtitle) : ?>
												<p
													style="color: <?php echo esc_attr($formSubtitleColor); ?>"
													class="md_healthstream_contact_form__subtitle">
													<?php echo esc_html($formSubtitle); ?>
												</p>
											<?php endif; ?>
											<?php if ($showFormTitle) : ?>
												<h2
													style="color: <?php echo esc_attr($formTitleColor); ?>"
													class="md_healthstream_contact_form__title">
													<?php echo esc_html($formTitle); ?>
												</h2>
											<?php endif; ?>
											<div class="md_healthstream_contact_form__shortcode">
												<div class="md_healthstream_contact_form__form_shortcode">
													<?php echo do_shortcode($formShortcode); ?>
												</div>
											</div>
										</div>
									</div>
								<?php endif; ?>
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

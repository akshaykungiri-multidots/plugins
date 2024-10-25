<?php
/**
 * Registers the md-storyful-fse-full/md-testimonials block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-storyful-fse-full
 */

namespace MD_STORYFUL_FSE_FULL\Blocks;

use MD_STORYFUL_FSE_FULL\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-storyful-fse-full/md-testimonials block.
 */
class MD_Testimonials extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-testimonials';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'md_storyful_fse_full_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );
	}

	/**
	 * Localize template data.
	 *
	 * @param array $blocks_config Block configuration.
	 * @return array Updated block configuration.
	 */
	public function localize_block_data( array $blocks_config ): array {
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
		$heading = isset( $attributes['heading'] ) ? $attributes['heading'] : '';
		$themeStyle = isset( $attributes['themeStyle'] ) ? $attributes['themeStyle'] : 'style1';
		$headingFontSize = isset( $attributes['headingFontSize'] ) ? $attributes['headingFontSize'] : '';
		$headingFontColor = isset( $attributes['headingFontColor'] ) ? $attributes['headingFontColor'] : '';
		$testimonialTitleFontSize = isset( $attributes['testimonialTitleFontSize'] ) ? $attributes['testimonialTitleFontSize'] : '';
		$testimonialTitleFontColor = isset( $attributes['testimonialTitleFontColor'] ) ? $attributes['testimonialTitleFontColor'] : '';
		$testimonialDescriptionFontSize = isset( $attributes['testimonialDescriptionFontSize'] ) ? $attributes['testimonialDescriptionFontSize'] : '';
		$testimonialDescriptionFontColor = isset( $attributes['testimonialDescriptionFontColor'] ) ? $attributes['testimonialDescriptionFontColor'] : '';

		$args = array(
            'post_type' => 'md_testimonials',
            'posts_per_page' => -1,
            'orderby' => 'date',
            'order' => 'DESC',
            'paged' => 1,
        );
        $client_testimonials =  new \WP_Query($args);

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="storyful-client-testimonials <?php echo esc_attr($themeStyle); ?>">
				<div class="container">
					<?php if (!empty($heading)) { ?>
						<div class="theme-title">
							<h2 class="section-title" style="font-size: <?php echo esc_attr($headingFontSize); ?>; color: <?php echo esc_attr($headingFontColor); ?>"><?php echo esc_html($heading); ?></h2>
						</div>
					<?php } ?>
					<div class="client-testimonials">
						<?php if ($client_testimonials->have_posts()) { ?>
							<?php while ($client_testimonials->have_posts()) {
								$client_testimonials->the_post();
								$client_testimonial_text = get_the_content();
								$client_testimonial_title = get_the_title();
								$client_logo = get_post_thumbnail_id();
								?>
								<div class="client-testimonial">
									<?php if (!empty($client_testimonial_text)) { ?>
										<div class="client-testimonial-text" style="font-size: <?php echo esc_attr($testimonialDescriptionFontSize); ?>; color: <?php echo esc_attr($testimonialDescriptionFontColor); ?>">
											<?php echo wp_kses_post($client_testimonial_text); ?>
										</div>
									<?php } ?>
									<?php if (!empty($client_testimonial_title) && $themeStyle === 'style2') { ?>
										<div class="client-testimonial-title" style="font-size: <?php echo esc_attr($testimonialTitleFontSize); ?>; color: <?php echo esc_attr($testimonialTitleFontColor); ?>">
											<?php echo wp_kses_post($client_testimonial_title); ?>
										</div>
									<?php } ?>
									<?php if (!empty($client_logo) && $themeStyle === 'style1') { ?>
										<div class="client-logo">
											<?php echo wp_get_attachment_image($client_logo, 'full'); ?>
										</div>
									<?php } ?>
								</div>
							<?php } ?>
						<?php } ?>
					</div>
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

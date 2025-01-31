<?php

/**
 * Registers the md-ageofunion/md-past-exhibition block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-ageofunion
 */

namespace MD_AGEOFUNION\Blocks;

use MD_AGEOFUNION\Includes\Block_Base;
use WP_Block;
use WP_Query;

/**
 *  Class for the md-ageofunion/md-past-exhibition block.
 */
class MD_Past_Exhibition extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-past-exhibition';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks()
	{
		add_filter('md_ageofunion_gutenberg_blocks_config', array($this, 'localize_block_data'));

		add_action('rest_api_init', array($this, 'register_rest_fields'));
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
		$exhibitionHeading = isset($attributes['exhibitionHeading']) ? $attributes['exhibitionHeading'] : '';
		$numberOfExhibitions = isset($attributes['numberOfExhibitions']) ? $attributes['numberOfExhibitions'] : '';

		$showExhibitionHeading = isset($attributes['showExhibitionHeading']) ? $attributes['showExhibitionHeading'] : '';

		$exhibitionHeadingColor = isset($attributes['exhibitionHeadingColor']) ? $attributes['exhibitionHeadingColor'] : '';
		$showExhibitionFeatureImage = isset($attributes['showExhibitionFeatureImage']) ? $attributes['showExhibitionFeatureImage'] : '';
		$showExhibitionCategory = isset($attributes['showExhibitionCategory']) ? $attributes['showExhibitionCategory'] : '';
		$showViewMoreButton = isset($attributes['showViewMoreButton']) ? $attributes['showViewMoreButton'] : '';
		$viewMoreButtonText = isset($attributes['viewMoreButtonText']) ? $attributes['viewMoreButtonText'] : '';
		$exhibitionTitleColor = isset($attributes['exhibitionTitleColor']) ? $attributes['exhibitionTitleColor'] : '';
		$exhibitionCategoryColor = isset($attributes['exhibitionCategoryColor']) ? $attributes['exhibitionCategoryColor'] : '';
		$viewMoreButtonColor = isset($attributes['viewMoreButtonColor']) ? $attributes['viewMoreButtonColor'] : '';
		$viewMoreButtonBackgroundColor = isset($attributes['viewMoreButtonBackgroundColor']) ? $attributes['viewMoreButtonBackgroundColor'] : '';
		$viewMoreButtonHoverColor = isset($attributes['viewMoreButtonHoverColor']) ? $attributes['viewMoreButtonHoverColor'] : '';
		$viewMoreButtonHoverBackgroundColor = isset($attributes['viewMoreButtonHoverBackgroundColor']) ? $attributes['viewMoreButtonHoverBackgroundColor'] : '';

		// Query to get the exhibitions.
		$args = array(
			'post_type'      => 'exhibitions',
			'posts_per_page' => $numberOfExhibitions,
		);

		$exhibitions = new WP_Query($args);
		
		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<style>
				.md_past_exhibition__listing__button span {
					color: <?php echo esc_attr($viewMoreButtonColor); ?>;
					background-color: <?php echo esc_attr($viewMoreButtonBackgroundColor); ?>;
				}

				.md_past_exhibition__listing__button span:hover {
					color: <?php echo esc_attr($viewMoreButtonHoverColor); ?> !important;
					background-color: <?php echo esc_attr($viewMoreButtonHoverBackgroundColor); ?> !important;
				}
			</style>
			<div class="md_past_exhibition">
				<section>
					<div class="md_past_exhibition__listing container">
						<?php if ($showExhibitionHeading) : ?>
							<h2 class="md_past_exhibition__exhibition_heading" style="color: <?php echo esc_attr($exhibitionHeadingColor); ?>"><?php echo wp_kses_post($exhibitionHeading); ?></h2>
						<?php endif; ?>
						<div class="md_past_exhibition__listing__grid">
							<?php if ($exhibitions->have_posts()) : ?>
								<?php while ($exhibitions->have_posts()) : $exhibitions->the_post(); ?>
									<div class="md_past_exhibition__listing__grid__item">
										<div class="md_past_exhibition__listing__grid__item__tile">
											<?php if ($showExhibitionCategory) : ?>
												<div class="md_past_exhibition__listing__grid__item__tile__category" style="color: <?php echo esc_attr($exhibitionCategoryColor); ?>">
													<?php
													$terms = get_the_terms(get_the_ID(), 'exhibition-category');
													if (! empty($terms)) {
														$categories = wp_list_pluck($terms, 'name');
														echo esc_html(implode(', ', $categories));
													}
													?>
												</div>
											<?php endif; ?>
											<?php if ($showExhibitionFeatureImage && has_post_thumbnail()) : ?>
												<figure class="md_past_exhibition__listing__grid__item__tile__image">
													<div class="md_past_exhibition__listing__grid__item__tile__image__lazy">
														<?php the_post_thumbnail(); ?>
													</div>
												</figure>
											<?php endif; ?>
											<h2 class="md_past_exhibition__listing__grid__item__tile__title" style="color: <?php echo esc_attr($exhibitionTitleColor); ?>"><?php the_title(); ?></h2>
											<?php
											$exhibition_publish_date = get_post_meta(get_the_ID(), 'exhibition_publish_date', true);
											if ($exhibition_publish_date) {
												?>
												<div class="md_past_exhibition__listing__grid__item__tile__date">
													<?php echo esc_html($exhibition_publish_date); ?>
												</div>
												<?php
											}
											?>
										</div>
									</div>
								<?php endwhile; ?>
							<?php endif; ?>
						</div>
						<?php if ($showViewMoreButton) : ?>
							<div class="md_past_exhibition__listing__button">
								<span class="md_past_exhibition__listing__button__text" style="color: <?php echo esc_attr($viewMoreButtonColor); ?>; background-color: <?php echo esc_attr($viewMoreButtonBackgroundColor); ?>">
									<?php echo wp_kses_post($viewMoreButtonText); ?>
								</span>
							</div>
						<?php endif; ?>
					</div>
					<?php wp_reset_postdata(); ?>
				</section>
			</div>
		</div>
<?php
		return ob_get_clean();
	}

	/**
	 * Register rest fields.
	 */
	public function register_rest_fields()
	{
		register_rest_field(
			'exhibitions',
			'categories',
			array(
				'get_callback' => function ($object) {
					$terms = get_the_terms($object['id'], 'exhibition-category');
					if (! empty($terms)) {
						return wp_list_pluck($terms, 'name');
					}
					return array();
				},
			)
		);
		register_rest_field(
			'exhibitions',
			'featured_image_url',
			array(
				'get_callback' => function ($post) {
					// Get the featured image URL
					$image_id = get_post_thumbnail_id($post['id']);
					if ($image_id) {
						return wp_get_attachment_image_url($image_id, 'full');
					}
					return null; // Return null if no featured image exists
				},
				'update_callback' => null,
				'schema'          => null,
			)
		);
		register_rest_field(
			'exhibitions',
			'exhibition_publish_date',
			array(
				'get_callback' => function ($object) {
					return get_post_meta($object['id'], 'exhibition_publish_date', true);
				},
			)
		);
	}
}

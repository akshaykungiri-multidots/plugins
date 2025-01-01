<?php

/**
 * Registers the md-ageofunion/md-articles-listing block.
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

/**
 *  Class for the md-ageofunion/md-articles-listing block.
 */
class MD_Articles_Listing extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-articles-listing';
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
		$showFeaturedImage = isset($attributes['showFeaturedImage']) ? $attributes['showFeaturedImage'] : false;
		$showTitle = isset($attributes['showTitle']) ? $attributes['showTitle'] : false;
		$showExcerpt = isset($attributes['showExcerpt']) ? $attributes['showExcerpt'] : false;
		$showTags = isset($attributes['showTags']) ? $attributes['showTags'] : false;
		$showDate = isset($attributes['showDate']) ? $attributes['showDate'] : false;
		$titleColor = isset($attributes['titleColor']) ? $attributes['titleColor'] : "";
		$excerptColor = isset($attributes['excerptColor']) ? $attributes['excerptColor'] : "";
		$tagsColor = isset($attributes['tagsColor']) ? $attributes['tagsColor'] : "";
		$dateColor = isset($attributes['dateColor']) ? $attributes['dateColor'] : "";
		$titleHoverColor = isset($attributes['titleHoverColor']) ? $attributes['titleHoverColor'] : "";
		$selectedArticles = isset($attributes['selectedArticles']) ? $attributes['selectedArticles'] : array();

		$selectedArticlesIds = array_column($selectedArticles, 'value');

		// Get the selected articles.
		$articles = array();
		if (! empty($selectedArticles)) {
			$articles = new \WP_Query(
				array(
					'post_type' => 'post',
					'post__in' => $selectedArticlesIds,
					'orderby' => 'post__in',
				)
			);
		}

		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<style>
				.md_articles_listing__item__title:hover {
					color: <?php echo esc_attr($titleHoverColor); ?>;
				}
			</style>
			<div class="md_articles_listing">
				<div class="md_articles_listing__list">
					<?php if ($articles->have_posts()) : ?>
						<?php while ($articles->have_posts()) : $articles->the_post(); ?>
							<div class="md_articles_listing__item">
								<div class="md_articles_listing__item--article">
									<?php if ($showFeaturedImage && has_post_thumbnail()) : ?>
										<figure class="md_articles_listing__item__image">
											<?php the_post_thumbnail(); ?>
										</figure>
									<?php endif; ?>
									<div class="md_articles_listing__item--content">
										<div class="md_articles_listing__item--content__info">
											<?php if ($showTags) : ?>
												<div class="md_articles_listing__item__tags" style="color: <?php echo esc_attr($tagsColor); ?>"><?php echo wp_kses_post(get_the_tag_list('', ', ')); ?></div>
											<?php endif; ?>
											<?php if ($showDate) : ?>
												<div class="md_articles_listing__item__date" style="color: <?php echo esc_attr($dateColor); ?>"><?php the_date(); ?></div>
											<?php endif; ?>
										</div>
										<div class="md_articles_listing__item--content__heading">
											<?php if ($showTitle) : ?>
												<h2 class="md_articles_listing__item__title" style="color: <?php echo esc_attr($titleColor); ?>;"><?php the_title(); ?></h2>
											<?php endif; ?>
											<?php if ($showExcerpt) : ?>
												<div class="md_articles_listing__item__excerpt" style="color: <?php echo esc_attr($excerptColor); ?>;"><?php the_excerpt(); ?></div>
											<?php endif; ?>
										</div>
									</div>
								</div>
							</div>
						<?php endwhile; ?>
						<?php wp_reset_postdata(); ?>
						<?php if (! empty($heading)) : ?>
							<div class="md_articles_listing__item -text">
								<div class="md_articles_listing__border_box">
									<h3 class="md_articles_listing__heading" style="color: <?php echo esc_attr($titleColor); ?>">
										<?php echo wp_kses_post($heading); ?>
									</h3>
								</div>
							</div>
						<?php endif; ?>
					<?php else : ?>
						<p><?php esc_html_e('No articles found.', 'md-ageofunion'); ?></p>
					<?php endif; ?>
				</div>
			</div>
		</div>
<?php
		return ob_get_clean();
	}
}

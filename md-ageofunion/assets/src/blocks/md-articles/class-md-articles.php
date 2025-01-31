<?php

/**
 * Registers the md-ageofunion/md-articles block.
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

use function ElementorDeps\DI\get;

/**
 *  Class for the md-ageofunion/md-articles block.
 */
class MD_Articles extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-articles';
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
		$headingLogo = isset($attributes['headingLogo']) ? $attributes['headingLogo'] : '';
		$featuredArticle = isset($attributes['featuredArticle']) ? $attributes['featuredArticle'] : '';
		$numberOfArticles = isset($attributes['numberOfArticles']) ? $attributes['numberOfArticles'] : '';
		$showHeading = isset($attributes['showHeading']) ? $attributes['showHeading'] : '';
		$showFeaturedArticle = isset($attributes['showFeaturedArticle']) ? $attributes['showFeaturedArticle'] : '';
		$showSidebarArticles = isset($attributes['showSidebarArticles']) ? $attributes['showSidebarArticles'] : '';
		$showFeaturedArticleImage = isset($attributes['showFeaturedArticleImage']) ? $attributes['showFeaturedArticleImage'] : '';
		$showFeaturedArticleTitle = isset($attributes['showFeaturedArticleTitle']) ? $attributes['showFeaturedArticleTitle'] : '';
		$showFeaturedArticleExcerpt = isset($attributes['showFeaturedArticleExcerpt']) ? $attributes['showFeaturedArticleExcerpt'] : '';
		$showFeaturedArticleTags = isset($attributes['showFeaturedArticleTags']) ? $attributes['showFeaturedArticleTags'] : '';
		$showFeaturedArticleDate = isset($attributes['showFeaturedArticleDate']) ? $attributes['showFeaturedArticleDate'] : '';
		$showSidebarArticleImage = isset($attributes['showSidebarArticleImage']) ? $attributes['showSidebarArticleImage'] : '';
		$showSidebarArticleTitle = isset($attributes['showSidebarArticleTitle']) ? $attributes['showSidebarArticleTitle'] : '';
		$showSidebarArticleExcerpt = isset($attributes['showSidebarArticleExcerpt']) ? $attributes['showSidebarArticleExcerpt'] : '';
		$showSidebarArticleTags = isset($attributes['showSidebarArticleTags']) ? $attributes['showSidebarArticleTags'] : '';
		$showSidebarArticleDate = isset($attributes['showSidebarArticleDate']) ? $attributes['showSidebarArticleDate'] : '';
		$viewMoreText = isset($attributes['viewMoreText']) ? $attributes['viewMoreText'] : '';
		$showViewMore = isset($attributes['showViewMore']) ? $attributes['showViewMore'] : '';
		$featuredArticleTitleColor = isset($attributes['featuredArticleTitleColor']) ? $attributes['featuredArticleTitleColor'] : '';
		$featuredArticleTitleHoverColor = isset($attributes['featuredArticleTitleHoverColor']) ? $attributes['featuredArticleTitleHoverColor'] : '';
		$featuredArticleExcerptColor = isset($attributes['featuredArticleExcerptColor']) ? $attributes['featuredArticleExcerptColor'] : '';
		$featuredArticleTagsColor = isset($attributes['featuredArticleTagsColor']) ? $attributes['featuredArticleTagsColor'] : '';
		$featuredArticleDateColor = isset($attributes['featuredArticleDateColor']) ? $attributes['featuredArticleDateColor'] : '';
		$sidebarArticleHeadingColor = isset($attributes['sidebarArticleHeadingColor']) ? $attributes['sidebarArticleHeadingColor'] : '';
		$sidebarArticleTitleColor = isset($attributes['sidebarArticleTitleColor']) ? $attributes['sidebarArticleTitleColor'] : '';
		$sidebarArticleTitleHoverColor = isset($attributes['sidebarArticleTitleHoverColor']) ? $attributes['sidebarArticleTitleHoverColor'] : '';
		$sidebarArticleExcerptColor = isset($attributes['sidebarArticleExcerptColor']) ? $attributes['sidebarArticleExcerptColor'] : '';
		$sidebarArticleTagsColor = isset($attributes['sidebarArticleTagsColor']) ? $attributes['sidebarArticleTagsColor'] : '';
		$sidebarArticleDateColor = isset($attributes['sidebarArticleDateColor']) ? $attributes['sidebarArticleDateColor'] : '';
		$sidebarArticleBackgroundColor = isset($attributes['sidebarArticleBackgroundColor']) ? $attributes['sidebarArticleBackgroundColor'] : '';
		$sidebarArticleBackgroundHoverColor = isset($attributes['sidebarArticleBackgroundHoverColor']) ? $attributes['sidebarArticleBackgroundHoverColor'] : '';
		$viewMoreTextColor = isset($attributes['viewMoreTextColor']) ? $attributes['viewMoreTextColor'] : '';

		// Get the featured article.
		$featured_article_id = isset($featuredArticle['value']) ? $featuredArticle['value'] : '';
		$featured_article = get_post($featured_article_id);

		// Get the sidebar articles.
		$sidebar_articles = new WP_Query(
			array(
				'post_type'      => 'post',
				'posts_per_page' => $numberOfArticles,
				'post__not_in'   => array($featured_article_id),
			)
		);

		$total_sidebar_articles = $sidebar_articles->found_posts;
		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<style>
				.md_ageofunion_articles__inner .md_ageofunion_articles__featured-article .md_ageofunion_articles__featured-article__title {
					color: <?php echo esc_attr($featuredArticleTitleColor); ?>;
				}
				.md_ageofunion_articles__inner .md_ageofunion_articles__featured-article .md_ageofunion_articles__featured-article__title:hover {
					color: <?php echo esc_attr($featuredArticleTitleHoverColor); ?> !important;
				}
					.md_ageofunion_articles__sidebar__articles .md_ageofunion_articles__article {
					background-color: <?php echo esc_attr($sidebarArticleBackgroundColor); ?>;
				}
				.md_ageofunion_articles__sidebar__articles .md_ageofunion_articles__article:hover {
					background-color: <?php echo esc_attr($sidebarArticleBackgroundHoverColor); ?>;
				}
					.md_ageofunion_articles__sidebar__articles .md_ageofunion_articles__article .md_ageofunion_articles__article__title {
					color: <?php echo esc_attr($sidebarArticleTitleColor); ?>;
				}
				.md_ageofunion_articles__sidebar__articles .md_ageofunion_articles__article:hover .md_ageofunion_articles__article__title {
					color: <?php echo esc_attr($sidebarArticleTitleHoverColor); ?>;
				}
			</style>
			<div class="md_ageofunion_articles">
				<div class="md_ageofunion_articles__inner">
					<div class="md_ageofunion_articles__content">
						<div class="md_ageofunion_articles__heading">
							<?php if ($showHeading && $headingLogo) : ?>
								<div class="md_litho_image_banner__media">
									<div class="md-prime-block-control image-preview image-controle-visible-hover md_litho_image_banner__media1">
										<img src="<?php echo esc_url($headingLogo); ?>" alt="Age of Union" />
									</div>
								</div>
							<?php endif; ?>
						</div>
						<?php if ($showFeaturedArticle && !empty($featured_article)) : ?>
							<div class="md_ageofunion_articles__featured-article">
								<?php if ($showFeaturedArticleImage) {
									$featured_image_url = get_the_post_thumbnail_url($featured_article_id, 'full');
									if ($featured_image_url) {
										echo '<img src="' . esc_url($featured_image_url) . '" alt="' . esc_attr($featured_article->post_title) . '" />';
									}
								}
								?>
								<div class="md_ageofunion_articles__featured-article__content">
									<?php if ($showFeaturedArticleTitle) : ?>
										<h2 style="color: <?php echo esc_attr($featuredArticleTitleColor); ?>" class="md_ageofunion_articles__featured-article__title">
											<?php echo esc_html($featured_article->post_title); ?>
										</h2>
									<?php endif; ?>
									<?php if ($showFeaturedArticleExcerpt) : ?>
										<div style="color: <?php echo esc_attr($featuredArticleExcerptColor); ?>" class="md_ageofunion_articles__featured-article__excerpt">
											<?php echo wp_kses_post($featured_article->post_excerpt); ?>
										</div>
									<?php endif; ?>
									<div class="md_ageofunion_articles__featured-article__footer">
										<?php if ($showFeaturedArticleTags) : ?>
											<ul style="color: <?php echo esc_attr($featuredArticleTagsColor); ?>" class="md_ageofunion_articles__featured-article__tags">
												<?php
												$tags = get_the_tags($featured_article_id);
												if ($tags) {
													foreach ($tags as $tag) {
														echo '<li>' . esc_html($tag->name) . '</li>';
													}
												}
												?>
											</ul>
										<?php endif; ?>
										<?php if ($showFeaturedArticleDate) : ?>
											<p style="color: <?php echo esc_attr($featuredArticleDateColor); ?>" class="md_ageofunion_articles__featured-article__date">
												<?php echo get_the_date(get_option('date_format'), $featured_article_id); ?>
											</p>
										<?php endif; ?>
									</div>
								</div>
							</div>
						<?php endif; ?>
					</div>
					<div class="md_ageofunion_articles__sidebar">
						<h2 class="md_ageofunion_articles__sidebar__heading" style="color: <?php echo esc_attr($sidebarArticleHeadingColor); ?>">
							<?php esc_html_e('Articles', 'md-ageofunion'); ?>
							<br />
							<?php echo esc_html($total_sidebar_articles); ?>
						</h2>
						<div class="md_ageofunion_articles__sidebar__articles">
							<?php if ($showSidebarArticles && $sidebar_articles->have_posts()) :
								while ($sidebar_articles->have_posts()) :
									$sidebar_articles->the_post();
							?>
									<div class="md_ageofunion_articles__article" style="background-color: <?php echo esc_attr($sidebarArticleBackgroundColor); ?>">
										<?php if ($showSidebarArticleImage) :
											$featured_image_url = get_the_post_thumbnail_url(get_the_ID(), 'full');
											if ($featured_image_url) {
												echo '<div class="md_ageofunion_articles__article__image"><img src="' . esc_url($featured_image_url) . '" alt="' . esc_attr(get_the_title()) . '" /></div>';
											}
										endif; ?>
										<div class="md_ageofunion_articles__article__content">
											<?php if ($showSidebarArticleTitle) : ?>
												<h3 style="color: <?php echo esc_attr($sidebarArticleTitleColor); ?>" class="md_ageofunion_articles__article__title">
													<?php the_title(); ?>
												</h3>
											<?php endif; ?>
											<?php if ($showSidebarArticleExcerpt) : ?>
												<div style="color: <?php echo esc_attr($sidebarArticleExcerptColor); ?>" class="md_ageofunion_articles__article__excerpt">
													<?php the_excerpt(); ?>
												</div>
											<?php endif; ?>
											<?php if ($showSidebarArticleTags) : ?>
												<ul style="color: <?php echo esc_attr($sidebarArticleTagsColor); ?>" class="md_ageofunion_articles__article__tags">
													<?php
													$tags = get_the_tags();
													if ($tags) {
														foreach ($tags as $tag) {
															echo '<li>' . esc_html($tag->name) . '</li>';
														}
													}
													?>
												</ul>
											<?php endif; ?>
											<?php if ($showSidebarArticleDate) : ?>
												<p style="color: <?php echo esc_attr($sidebarArticleDateColor); ?>" class="md_ageofunion_articles__article__date">
													<?php echo get_the_date(get_option('date_format')); ?>
												</p>
											<?php endif; ?>
										</div>
									</div>
							<?php endwhile;
								wp_reset_postdata();
							endif; ?>
						</div>
						<div class="md_ageofunion_articles__view-more">
							<?php if ($showViewMore) : ?>
								<p style="color: <?php echo esc_attr($viewMoreTextColor); ?>"><?php echo wp_kses_post($viewMoreText); ?></p>
							<?php endif; ?>
						</div>
					</div>
				</div>
			</div>
		</div>
<?php
		return ob_get_clean();
	}

	/**
	 * Register REST fields.
	 *
	 * @return void
	 */
	public function register_rest_fields()
	{
		register_rest_field(
			'post',
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
			'post',
			'post_tags',
			array(
				'get_callback' => function ($post) {
					// Get the post tags
					$tags = get_the_tags($post['id']);
					if ($tags) {
						return $tags;
					}
					return null; // Return null if no tags exist
				},
				'update_callback' => null,
				'schema'          => null,
			)
		);
		register_rest_field(
			'post',
			'post_date',
			array(
				'get_callback' => function ($post) {
					// Get the post date set in date format
					return get_the_date(get_option('date_format'), $post['id']);
				},
				'update_callback' => null,
				'schema'          => null,
			)
		);
	}
}

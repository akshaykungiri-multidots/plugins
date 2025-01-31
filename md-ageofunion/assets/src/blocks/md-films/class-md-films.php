<?php

/**
 * Registers the md-ageofunion/md-films block.
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
 *  Class for the md-ageofunion/md-films block.
 */
class MD_Films extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-films';
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
		$featuredFilm = isset($attributes['featuredFilm']) ? $attributes['featuredFilm'] : '';
		$showFilmImage = isset($attributes['showFilmImage']) ? $attributes['showFilmImage'] : '';
		$showFilmTitle = isset($attributes['showFilmTitle']) ? $attributes['showFilmTitle'] : '';
		$showFilmExcerpt = isset($attributes['showFilmExcerpt']) ? $attributes['showFilmExcerpt'] : '';
		$viewMoreText = isset($attributes['viewMoreText']) ? $attributes['viewMoreText'] : '';
		$showViewMore = isset($attributes['showViewMore']) ? $attributes['showViewMore'] : '';
		$showTotalFilms = isset($attributes['showTotalFilms']) ? $attributes['showTotalFilms'] : '';
		$filmTitleColor = isset($attributes['filmTitleColor']) ? $attributes['filmTitleColor'] : '';
		$filmTitleHoverColor = isset($attributes['filmTitleHoverColor']) ? $attributes['filmTitleHoverColor'] : '';
		$filmExcerptColor = isset($attributes['filmExcerptColor']) ? $attributes['filmExcerptColor'] : '';
		$viewMoreTextColor = isset($attributes['viewMoreTextColor']) ? $attributes['viewMoreTextColor'] : '';

		// Get the featured article.
		$featured_article_id = isset($featuredFilm['value']) ? $featuredFilm['value'] : '';
		$featured_article = new WP_Query(
			array(
				'post_type' => 'films',
				'p'         => $featured_article_id,
			)
		);
		$total_sidebar_articles = $featured_article->found_posts;
		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<style>
				.md_ageofunion_films .md_ageofunion_films__featured-film__title h3:hover {
					color: <?php echo esc_attr($filmTitleHoverColor); ?>;
				}
			</style>
			<div class="md_ageofunion_films">
				<div class="md_ageofunion_films__inner">
					<div class="md_ageofunion_films__content">
						<?php 
						if ($featured_article->have_posts()) : $featured_article->the_post(); 

						$video_url = get_metadata('post', get_the_ID(), 'movie_link', true);
						?>
							<div class="md_ageofunion_films__featured-film">
								<div class="md_ageofunion_films__featured-film__heading">
									<?php if ($showTotalFilms) : ?>
										<h2 class="md_ageofunion_films__featured-film__total-films">
											<?php esc_html_e('Total Films (', 'md-ageofunion'); ?>
											<?php echo esc_html($total_sidebar_articles); ?>
											<?php esc_html_e(')', 'md-ageofunion'); ?>
										</h2>
									<?php endif; ?>
									<?php if ($showFilmTitle) : ?>
										<div class="md_ageofunion_films__featured-film__title">
											<h3 style="color: <?php echo esc_attr($filmTitleColor); ?>" class="md_ageofunion_films__featured-film__title">
												<?php the_title(); ?>
											</h3>
										</div>
									<?php endif; ?>
								</div>
								<div class="md_ageofunion_films__featured-film__box">
									<div class="md_ageofunion_films__featured-film__box__inner">
										<figure class="md_ageofunion_films__featured-film__box__image">
											<?php if ($showFilmImage) {
												$featured_image_url = get_the_post_thumbnail_url($featured_article_id, 'full');
												if ($featured_image_url) {
													echo '<img src="' . esc_url($featured_image_url) . '" alt="' . esc_attr($featured_article->post_title) . '" />';
												}
											} ?>
											<a class="md_ageofunion_films__featured-film__box__video" data-fancybox="video" href="<?php echo esc_url($video_url); ?>">
												<span class="md_ageofunion_films__featured-film__box__video__rendered_text">
													<?php esc_html_e('Play Video', 'md-ageofunion'); ?>
												</span>
												<span class="md_ageofunion_films__featured-film__box__video__button">
													<span class="md_ageofunion_films__featured-film__box__video__button__circle"></span>
												</span>
											</a>
										</figure>
									</div>
								</div>
								<?php if ($showFilmExcerpt) : ?>
									<div class="md_ageofunion_films__featured-film__excerpt" style="color: <?php echo esc_attr($filmExcerptColor); ?>">
										<?php the_excerpt(); ?>
									</div>
								<?php endif; ?>
							</div>
						<?php endif; ?>
					</div>
					<div class="md_ageofunion_films__view-more">
						<?php if ($showViewMore) : ?>
							<p style="color: <?php echo esc_attr($viewMoreTextColor); ?>"><?php echo wp_kses_post($viewMoreText); ?></p>
						<?php endif; ?>
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
			'films',
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
			'films',
			'total_posts',
			array(
				'get_callback' => function () {
					// Get the total number of posts
					$posts = new WP_Query(
						array(
							'post_type'      => 'films',
							'posts_per_page' => -1,
						)
					);
					return $posts->found_posts;
				},
				'update_callback' => null,
				'schema'          => null,
			)
		);
	}
}

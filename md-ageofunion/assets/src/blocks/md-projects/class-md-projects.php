<?php

/**
 * Registers the md-ageofunion/md-projects block.
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
 *  Class for the md-ageofunion/md-projects block.
 */
class MD_Projects extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-projects';
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
		$heading = isset($attributes['heading']) ? $attributes['heading'] : '';
		$enableBackgroundVideo = isset($attributes['enableBackgroundVideo']) ? $attributes['enableBackgroundVideo'] : '';
		$mediaurl = isset($attributes['mediaurl']) ? $attributes['mediaurl'] : '';
		$youtubeurl = isset($attributes['youtubeurl']) ? $attributes['youtubeurl'] : '';
		$videotype = isset($attributes['videotype']) ? $attributes['videotype'] : '';
		$projectHeading = isset($attributes['projectHeading']) ? $attributes['projectHeading'] : '';
		$numberOfProjects = isset($attributes['numberOfProjects']) ? $attributes['numberOfProjects'] : '';
		$showHeading = isset($attributes['showHeading']) ? $attributes['showHeading'] : '';
		$showProjectHeading = isset($attributes['showProjectHeading']) ? $attributes['showProjectHeading'] : '';
		$headingColor = isset($attributes['headingColor']) ? $attributes['headingColor'] : '';
		$projectHeadingColor = isset($attributes['projectHeadingColor']) ? $attributes['projectHeadingColor'] : '';
		$showProjectFeatureImage = isset($attributes['showProjectFeatureImage']) ? $attributes['showProjectFeatureImage'] : '';
		$showProjectRegion = isset($attributes['showProjectRegion']) ? $attributes['showProjectRegion'] : '';
		$showViewMoreButton = isset($attributes['showProjectRegion']) ? $attributes['showProjectRegion'] : '';
		$viewMoreButtonText = isset($attributes['viewMoreButtonText']) ? $attributes['viewMoreButtonText'] : '';
		$projectTitleColor = isset($attributes['projectTitleColor']) ? $attributes['projectTitleColor'] : '';
		$projectRegionColor = isset($attributes['projectRegionColor']) ? $attributes['projectRegionColor'] : '';
		$viewMoreButtonColor = isset($attributes['viewMoreButtonColor']) ? $attributes['viewMoreButtonColor'] : '';
		$viewMoreButtonBackgroundColor = isset($attributes['viewMoreButtonBackgroundColor']) ? $attributes['viewMoreButtonBackgroundColor'] : '';
		$viewMoreButtonHoverColor = isset($attributes['viewMoreButtonHoverColor']) ? $attributes['viewMoreButtonHoverColor'] : '';
		$viewMoreButtonHoverBackgroundColor = isset($attributes['viewMoreButtonHoverBackgroundColor']) ? $attributes['viewMoreButtonHoverBackgroundColor'] : '';

		// Query to get the projects.
		$args = array(
			'post_type'      => 'projects',
			'posts_per_page' => $numberOfProjects,
		);

		$projects = new WP_Query($args);

		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<style>
				.md_projects__listing__button span {
					color: <?php echo esc_attr($viewMoreButtonColor); ?>;
					background-color: <?php echo esc_attr($viewMoreButtonBackgroundColor); ?>;
				}

				.md_projects__listing__button span:hover {
					color: <?php echo esc_attr($viewMoreButtonHoverColor); ?> !important;
					background-color: <?php echo esc_attr($viewMoreButtonHoverBackgroundColor); ?> !important;
				}
			</style>
			<div class="md_projects">
				<section>
					<figure class="md_projects__video_box">
						<?php if ($enableBackgroundVideo) : ?>
							<div class="text_video__youtube">
								<div class="video_section_wrapper" id="MdYTplayer">
									<div class="wrapper__box-inner">
										<div class="video-details-wrapper" style="text-align: center;">
											<div class="video-data-edit">
												<?php if ('youtube' === $videotype) : ?>
													<?php if ($youtubeurl) : ?>
														<iframe src="<?php echo esc_url(str_replace('watch?v=', 'embed/', $youtubeurl) . '?controls=0'); ?>" data-src="<?php echo esc_url($youtubeurl . '?enablejsapi=1&controls=0&rel=0'); ?>" title="video"></iframe>
													<?php endif; ?>
												<?php endif; ?>
											</div>
											<?php if ('media-upload' === $videotype && $mediaurl) : ?>
												<div class="image-preview image-controle-visible-hover">
													<video muted="" loop="" class="self-media" id="video" autoplay>
														<source src="<?php echo esc_url($mediaurl); ?>" type="video/mp4">
													</video>
												</div>
											<?php endif; ?>
										</div>
									</div>
								</div>
							</div>
						<?php endif; ?>
						<?php if ($showHeading) : ?>
							<?php if ($heading) : ?>
								<h2 class="md_projects__video_heading" style="color: <?php echo esc_attr($headingColor); ?>"><?php echo esc_html($heading); ?></h2>
							<?php endif; ?>
						<?php endif; ?>
					</figure>
				</section>
				<section>
					<div class="md_projects__listing container">
						<?php if ($showProjectHeading) : ?>
							<h2 class="md_projects__project_heading" style="color: <?php echo esc_attr($projectHeadingColor); ?>"><?php echo esc_html($projectHeading); ?></h2>
						<?php endif; ?>
						<div class="md_projects__listing__grid">
							<div class="md_projects__listing__grid__item -no-border">
								<div class="md_projects__listing__grid__item__tile md_projects__listing__grid__item__tile__heading">
									<div class="md_projects__listing__grid__header">
										<?php esc_html_e('Name', 'md-ageofunion'); ?>
									</div>
									<?php if ($showProjectRegion) : ?>
										<div class="md_projects__listing__grid__header">
											<?php esc_html_e('Region', 'md-ageofunion'); ?>
										</div>
									<?php endif; ?>
									<div class="md_projects__listing__grid__header"></div>
								</div>
							</div>
							<?php if ($projects->have_posts()) : ?>
								<?php while ($projects->have_posts()) : $projects->the_post(); ?>
									<div class="md_projects__listing__grid__item">
										<div class="md_projects__listing__grid__item__tile">
											<h2 class="md_projects__listing__grid__item__tile__title" style="color: <?php echo esc_attr($projectTitleColor); ?>"><?php the_title(); ?></h2>
											<?php if ($showProjectFeatureImage && has_post_thumbnail()) : ?>
												<figure class="md_projects__listing__grid__item__tile__image">
													<div class="md_projects__listing__grid__item__tile__image__lazy">
														<?php the_post_thumbnail(); ?>
													</div>
												</figure>
											<?php endif; ?>
											<?php if ($showProjectRegion) : ?>
												<div class="md_projects__listing__grid__item__tile__region" style="color: <?php echo esc_attr($projectRegionColor); ?>">
													<?php
													$terms = get_the_terms(get_the_ID(), 'region');
													if (! empty($terms)) {
														$regions = wp_list_pluck($terms, 'name');
														echo esc_html(implode(', ', $regions));
													}
													?>
												</div>
											<?php endif; ?>
										</div>
									</div>
								<?php endwhile; ?>
							<?php endif; ?>
						</div>
						<?php if ($showViewMoreButton) : ?>
							<div class="md_projects__listing__button">
								<span class="md_projects__listing__button__text" style="color: <?php echo esc_attr($viewMoreButtonColor); ?>; background-color: <?php echo esc_attr($viewMoreButtonBackgroundColor); ?>">
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
			'projects',
			'regions',
			array(
				'get_callback' => function ($object) {
					$terms = get_the_terms($object['id'], 'region');
					if (! empty($terms)) {
						return wp_list_pluck($terms, 'name');
					}
					return array();
				},
			)
		);
		register_rest_field(
			'projects',
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
	}
}

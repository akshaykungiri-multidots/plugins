<?php

/**
 * Registers the md-porto/md-hero-banner block.
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
 *  Class for the md-porto/md-hero-banner block.
 */
class MD_Hero_Banner extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-hero-banner';
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
		$subTitle = isset($attributes['subTitle']) ? $attributes['subTitle'] : '';
		$title = isset($attributes['title']) ? $attributes['title'] : '';
		$mediaPosition = isset($attributes['mediaPosition']) ? $attributes['mediaPosition'] : '';
		$backgroundColor = isset($attributes['backgroundColor']) ? $attributes['backgroundColor'] : '';
		$subTitleColor = isset($attributes['subTitleColor']) ? $attributes['subTitleColor'] : '';
		$subTitleBackgroundColor = isset($attributes['subTitleBackgroundColor']) ? $attributes['subTitleBackgroundColor'] : '';
		$titleColor = isset($attributes['titleColor']) ? $attributes['titleColor'] : '';
		$showSubTitle = isset($attributes['showSubTitle']) ? $attributes['showSubTitle'] : '';
		$showTitle = isset($attributes['showTitle']) ? $attributes['showTitle'] : '';
		$showMedia = isset($attributes['showMedia']) ? $attributes['showMedia'] : '';
		$mediaImage = isset($attributes['mediaImage']) ? $attributes['mediaImage'] : '';
		$showBreadcrumb = isset($attributes['showBreadcrumb']) ? $attributes['showBreadcrumb'] : '';

		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<style>
				.md_porto_hero_banner__media1 {
					mask-image: url(<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/mask-image.png'); ?>);
				}
			</style>
			<div class="md_porto_hero_banner_wrap">
				<div class="md_porto_hero_banner" style="background-color: <?php echo esc_attr($backgroundColor); ?>">
					<div class="container">
						<div class="md_porto_hero_banner__background__cover">
							<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/waves.svg'); ?>" alt="hero-banner-bg" />
						</div>
						<div
							class="md_porto_hero_banner__inner"
							style="flex-direction: <?php echo esc_attr($mediaPosition === 'left' ? 'row-reverse' : 'row'); ?>">
							<div class="md_porto_hero_banner__heading">
								<?php if ($showSubTitle) { ?>
									<h4 style="color: <?php echo esc_attr($subTitleColor); ?>; background-color: <?php echo esc_attr($subTitleBackgroundColor); ?>"><?php echo esc_html($subTitle); ?></h4>
								<?php } ?>
								<?php if ($showTitle) { ?>
									<h2 style="color: <?php echo esc_attr($titleColor); ?>"><?php echo esc_html($title); ?></h2>
								<?php } ?>
								<?php if ($showBreadcrumb) { ?>
									<div class="md_porto_hero_banner__breadcrumb">
										<a href="<?php echo esc_url(home_url()); ?>"><?php echo esc_html__('Home', 'md-porto'); ?></a>
										<span> > </span>
										<a href="#"><?php echo esc_html($title); ?></a>
									</div>
								<?php } ?>
							</div>
							<?php if ($showMedia) { ?>
								<div class="md_porto_hero_banner__media">
									<div class="md_porto_hero_banner__background">
										<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/polygon.svg'); ?>" alt="hero-banner-bg" />
									</div>
									<div class="md-prime-block-control image-preview image-controle-visible-hover md_porto_hero_banner__media1">
										<img src="<?php echo esc_url($mediaImage); ?>" alt="slider" />
									</div>
								</div>
							<?php } ?>
						</div>
					</div>
				</div>
			</div>
		</div>
<?php
		return ob_get_clean();
	}
}

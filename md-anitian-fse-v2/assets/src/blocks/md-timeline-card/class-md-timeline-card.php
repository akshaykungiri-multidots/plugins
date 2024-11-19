<?php

/**
 * Registers the md-anitian-fse-v2/md-timeline-card block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-anitian-fse-v2
 */

namespace MD_ANITIAN_FSE_V2\Blocks;

use MD_ANITIAN_FSE_V2\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-anitian-fse-v2/md-timeline-card block.
 */
class MD_Timeline_Card extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-timeline-card';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks()
	{
		add_filter('md_anitian_fse_full_gutenberg_blocks_config', array($this, 'localize_block_data'));
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
		$headingColor = isset($attributes['headingColor']) ? $attributes['headingColor'] : '';
		$backHeadingColor = isset($attributes['backHeadingColor']) ? $attributes['backHeadingColor'] : '';
		$aheadcontent = isset($attributes['content']) ? $attributes['content'] : '';
		$contentColor = isset($attributes['contentColor']) ? $attributes['contentColor'] : '';
		$backContentColor = isset($attributes['backContentColor']) ? $attributes['backContentColor'] : '';
		$enableSliderImage = isset($attributes['enableSliderImage']) ? $attributes['enableSliderImage'] : '';
		$sliderImage = isset($attributes['sliderImage']) ? $attributes['sliderImage'] : '';
		$sliderImageBGColor = isset($attributes['sliderImageBGColor']) ? $attributes['sliderImageBGColor'] : '';
		$sliderBorderColor = isset($attributes['sliderBorderColor']) ? $attributes['sliderBorderColor'] : '';
		$enableClickHere = isset($attributes['enableClickHere']) ? $attributes['enableClickHere'] : '';
		$backgroundMediaType = isset($attributes['backgroundMediaType']) ? $attributes['backgroundMediaType'] : '';
		$backgroundMediaColor = isset($attributes['backgroundMediaColor']) ? $attributes['backgroundMediaColor'] : '';
		$backgroundMediaImage = isset($attributes['backgroundMediaImage']) ? $attributes['backgroundMediaImage'] : '';
		$innerHeading = isset($attributes['innerHeading']) ? $attributes['innerHeading'] : '';
		$innerContent = isset($attributes['innerContent']) ? $attributes['innerContent'] : '';
		$showCardTitle = isset($attributes['showCardTitle']) ? $attributes['showCardTitle'] : '';
		$showCardContent = isset($attributes['showCardContent']) ? $attributes['showCardContent'] : '';
		$showInnerCardTitle = isset($attributes['showInnerCardTitle']) ? $attributes['showInnerCardTitle'] : '';
		$showInnerCardContent = isset($attributes['showInnerCardContent']) ? $attributes['showInnerCardContent'] : '';

		ob_start();
?>
		<div <?php echo wp_kses_post($wrapper_attributes); ?>>
			<div class="md_timeline_slider_wrapper front">
				<div class="md_timeline_slider_inner mdTimelineSlide">
					<div class="md_slider_card mdSlideNext" style="background: <?php echo esc_attr($backgroundMediaType ? ($backgroundMediaImage === '' ? "#fff" : 'url(' . $backgroundMediaImage . ')') : $backgroundMediaColor); ?>">
						<?php if ($enableSliderImage) { ?>
							<div class="md_timeline_slider_image" style="background: <?php echo esc_attr($sliderImageBGColor); ?>">
								<?php if ($sliderImage !== '') { ?>
									<img src=<?php echo esc_url($sliderImage); ?> />
								<?php } ?>
							</div>
						<?php } ?>
						<div class="md_timeline_slider_content">
							<?php if (! empty($heading) && $showCardTitle) : ?>
								<h2
									style="color: <?php echo esc_attr($headingColor); ?>;"
									class="heading">
									<?php echo wp_kses_post($heading); ?>
								</h2>
							<?php endif; ?>
							<?php if (! empty($aheadcontent) && $showCardContent) : ?>
								<p
									style="color: <?php echo esc_attr($contentColor); ?>"
									class="content">
									<?php echo wp_kses_post($aheadcontent); ?>
								</p>
							<?php endif; ?>
						</div>
						<div class="click-here">
							<?php if ($enableClickHere) { ?>
								<svg
									version="1.0"
									xmlns="http://www.w3.org/2000/svg"
									width="137px"
									height="64px"
									viewBox="0 0 305.000000 144.000000"
									preserveAspectRatio="xMidYMid meet">
									<g
										transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)"
										fill="currentColor"
										stroke="none">
										<path d="M1251 1097 c-5 -12 -15 -58 -22 -102 -7 -44 -19 -90 -26 -102 -8 -12 -12 -30 -9 -41 5 -15 -5 -22 -55 -40 -47 -17 -65 -19 -75 -11 -23 19 -16 47 21 75 40 30 45 54 12 54 -52 0 -108 -98 -86 -152 15 -36 48 -42 111 -18 63 24 68 24 68 6 0 -18 30 -29 35 -13 2 6 6 24 9 40 4 15 11 27 16 27 6 0 38 -14 71 -31 48 -24 64 -28 75 -18 21 17 9 28 -74 66 -87 39 -86 50 11 77 55 16 71 31 44 42 -8 3 -35 -2 -61 -11 -26 -9 -50 -14 -53 -11 -3 2 0 28 6 56 14 64 14 130 1 130 -6 0 -14 -10 -19 -23z"></path>
										<path d="M594 1086 c-72 -32 -154 -130 -169 -202 -9 -45 16 -99 57 -120 72 -39 183 -15 281 60 l47 36 0 -49 c0 -30 5 -53 14 -60 23 -19 36 17 36 96 0 37 7 103 15 145 14 74 12 108 -5 108 -17 0 -30 -30 -41 -98 -12 -72 -12 -73 -73 -121 -84 -66 -116 -81 -179 -81 -44 0 -59 5 -81 25 -31 29 -32 44 -6 95 24 47 66 81 144 115 42 19 57 30 54 43 -4 22 -53 26 -94 8z"></path>
										<path d="M1674 1054 c-17 -41 -54 -228 -54 -275 0 -15 6 -29 14 -32 16 -6 32 10 67 68 l24 40 7 -43 c9 -55 14 -62 44 -62 27 0 29 3 12 33 -6 12 -14 51 -17 87 -5 56 -9 65 -26 65 -13 0 -28 -15 -45 -45 -34 -62 -38 -33 -10 87 16 68 19 98 11 106 -7 7 -15 -1 -27 -29z"></path>
										<path d="M953 1023 c-23 -9 -15 -35 10 -31 12 2 22 9 22 17 0 16 -14 22 -32 14z"></path>
										<path d="M937 933 c-12 -21 -30 -174 -21 -183 18 -18 35 7 44 66 14 86 13 124 -4 124 -8 0 -17 -3 -19 -7z"></path>
										<path d="M1873 930 c-29 -12 -43 -40 -43 -87 0 -51 44 -97 93 -97 39 0 91 34 117 77 l18 30 7 -46 c11 -74 29 -78 60 -13 15 31 45 72 71 94 24 22 44 42 44 46 0 3 -12 6 -27 6 -18 0 -38 -13 -64 -40 l-39 -40 -6 25 c-8 31 -30 33 -38 3 -9 -30 -104 -108 -132 -108 -12 0 -27 6 -33 14 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path>
										<path d="M2293 930 c-29 -12 -43 -40 -43 -87 0 -52 44 -97 94 -97 40 0 99 41 121 85 21 39 12 37 -42 -11 -48 -42 -82 -50 -102 -26 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path>
										<path d="M2088 609 c-14 -6 -29 -16 -32 -24 -10 -27 21 -42 101 -49 91 -7 142 -19 126 -29 -18 -11 -250 -64 -343 -79 -113 -17 -526 -17 -640 0 -141 22 -307 61 -454 108 -141 45 -184 47 -131 6 60 -47 310 -124 530 -163 301 -53 768 -28 1028 54 42 14 77 23 77 21 0 -14 -355 -204 -381 -204 -23 0 -31 -26 -13 -41 22 -18 70 -6 177 44 123 58 357 196 364 215 10 24 -10 45 -71 75 -104 51 -284 86 -338 66z"></path>
									</g>
								</svg>
							<?php } ?>
							<i class="fa fa-plus-circle"></i>
						</div>
					</div>
					<div style="border-color: <?php echo esc_attr($sliderBorderColor); ?>" class="mdSlidePrev md_slider_card md_no_image md_back_card">
						<div class="md_timeline_slider_content">
							<?php if (! empty($innerHeading) && $showInnerCardTitle) : ?>
								<h2
									style="color: <?php echo esc_attr($backHeadingColor); ?>;"
									class="heading">
									<?php echo esc_html($innerHeading); ?>
								</h2>
							<?php endif; ?>
							<?php if (! empty($innerContent) && $showInnerCardContent) : ?>
								<p
									style="color: <?php echo esc_attr($backContentColor); ?>"
									class="content">
									<?php echo wp_kses_post($innerContent); ?>
								</p>
							<?php endif; ?>
							<?php echo wp_kses_post($content); ?>
							<div class="click-here">
								<i class="fa fa-times-circle "></i>
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

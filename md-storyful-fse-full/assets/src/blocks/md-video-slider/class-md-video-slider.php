<?php
/**
 * Registers the md-storyful-fse-full/md-video-slider block.
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
 *  Class for the md-storyful-fse-full/md-video-slider block.
 */
class MD_Video_Slider extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-video-slider';
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
		$autoplay = isset( $attributes['autoplay'] ) ? $attributes['autoplay'] : false;
		$arrows = isset( $attributes['arrows'] ) ? $attributes['arrows'] : false;
		$dots = isset( $attributes['dots'] ) ? $attributes['dots'] : false;
		$slideInfinite = isset( $attributes['slideInfinite'] ) ? $attributes['slideInfinite'] : false;
		$slideSlidesToShow = isset( $attributes['slideSlidesToShow'] ) ? $attributes['slideSlidesToShow'] : 1;
		$slideSlidesToScroll = isset( $attributes['slideSlidesToScroll'] ) ? $attributes['slideSlidesToScroll'] : 1;
		$slideItems = isset( $attributes['slideItems'] ) ? $attributes['slideItems'] : array();

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="storyful-video-slider video-section">
				<div class="video-container">
					<div class="video-wrapper" data-slider-to-show="<?php echo esc_attr( $slideSlidesToShow ); ?>" data-slider-to-scroll="<?php echo esc_attr( $slideSlidesToScroll ); ?>" data-slider-infinite="<?php echo esc_attr( $slideInfinite ); ?>" data-slider-autoplay="<?php echo esc_attr( $autoplay ); ?>" data-slider-arrows="<?php echo esc_attr( $arrows ); ?>" data-slider-dots="<?php echo esc_attr( $dots ); ?>">
						<?php
						if (!empty($slideItems)) {
							foreach ($slideItems as $video_url) {
								if (isset($video_url['videoURL']) && !empty($video_url['videoURL'])) {
								?>
								<div class="wrapper__item">
									<div class="wrapper__box-inner">
										<div class="video-details-wrapper">
											<iframe width="560" height="315" src="<?php echo esc_url($video_url['videoURL']); ?>" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
											<div class="video-overlay"></div>
										</div>
									</div>
								</div>
								<?php
								}
							}
						}
						?>
					</div>
				</div> 
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

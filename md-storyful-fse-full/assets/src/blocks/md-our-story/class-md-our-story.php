<?php
/**
 * Registers the md-storyful-fse-full/md-our-story block.
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
 *  Class for the md-storyful-fse-full/md-our-story block.
 */
class MD_Our_Story extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-our-story';
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
		$our_story_title = isset( $attributes['our_story_title'] ) ? $attributes['our_story_title'] : '';
		$our_story_video_image = isset( $attributes['our_story_video_image'] ) ? $attributes['our_story_video_image'] : '';
		$our_story_video_link = isset( $attributes['our_story_video_link'] ) ? $attributes['our_story_video_link'] : '';
		$our_story_title_font_size = isset( $attributes['our_story_title_font_size'] ) ? $attributes['our_story_title_font_size'] : '';
		$our_story_title_font_color = isset( $attributes['our_story_title_font_color'] ) ? $attributes['our_story_title_font_color'] : '';
		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="our-story-section">
				<div class="our-story-section__right">
					<div class="media-section">
						<div class="our-story-text-wrapper wow bounceIn">
							<h3 class="our-story-title" style="font-size: <?php echo esc_attr($our_story_title_font_size); ?>; color: <?php echo esc_attr($our_story_title_font_color); ?>">
								<?php echo wp_kses_post($our_story_title); ?>
							</h3>
						</div>
						<div class="media-video-wrapper">
							<div class="media-video wow fadeInRight">
								<button class="media-video__playbtn">
									<img src="<?php echo esc_url(get_template_directory_uri().'/assets/src/images/playbtn.svg'); ?>" alt="play button">
								</button>
								<img class="self-media" src="<?php echo esc_url($our_story_video_image); ?>" alt="video image">
							</div>
						</div>
					</div>
				</div>
				<div class="video-popups-wrap">
					<div class="video-popup">
						<div class="close-popup-section">
							<div class="close-btn">
								<?php esc_html_e('Close', 'md-bakery-antian'); ?>
							</div>
							<video controls="" autoplay="" muted="" loop="" class="video-one hidden video-div">
								<source src="<?php echo esc_url($our_story_video_link); ?>" type="video/mp4">
							</video>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

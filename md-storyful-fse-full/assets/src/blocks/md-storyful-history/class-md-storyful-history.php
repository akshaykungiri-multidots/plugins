<?php
/**
 * Registers the md-storyful-fse-full/md-storyful-history block.
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
 *  Class for the md-storyful-fse-full/md-storyful-history block.
 */
class MD_Storyful_History extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-storyful-history';
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

		// Get storyful_history post list.
		$args = array(
			'post_type'      => 'storyful_history',
			'posts_per_page' => -1,
			'post_status'    => 'publish',
		);

		$storyful_history = new \WP_Query( $args );

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="storyful-timeline">
				<div class="storyful-timeline-items">
					<?php
					if ( $storyful_history->have_posts() ) {
					$activeClass = 'active';
					?>
					<div class="wrapper__box-inner">
						<?php 
						$key = 0;
						while ( $storyful_history->have_posts() ) {
							$storyful_history->the_post();
							$timeline_item_title = get_the_title();
							$timeline_item_description = get_the_content();
							// Get featured image.
							$timeline_item_image = get_post_thumbnail_id();
							?>
							<div class="storyful-timeline-item <?php echo esc_attr($activeClass); ?>" data-key="<?php echo esc_attr($key); ?>">
								<?php if ( !empty($timeline_item_image) ) { ?>
									<div class="storyful-timeline-item-image">
										<?php echo wp_get_attachment_image($timeline_item_image, 'full'); ?>
									</div>
								<?php } ?>
								<div class="storyful-timeline-content">
									<h3 class="storyful-timeline-title"><?php echo esc_html($heading); ?></h3>
									<h4 class="storyful-timeline-item-title"><?php echo esc_html($timeline_item_title); ?></h4>
									<p class="storyful-timeline-item-description"><?php echo wp_kses_post($timeline_item_description); ?></p>
								</div>
							</div>
						<?php 
						$activeClass = '';
						$key++;
						} 
						?>
					</div>
					<div class="storyful-timeline-years">
                        <?php 
                        $activeClass = 'active';
						$key = 0;
                        while ( $storyful_history->have_posts() ) {
							$storyful_history->the_post();
                            $timeline_item_year = get_post_meta( get_the_ID(), 'storyful_history_year', true );
                        ?>
                            <div class="storyful-timeline-year <?php echo esc_attr($activeClass); ?>" data-key="<?php echo esc_attr($key); ?>">
                                <h4><?php echo esc_html($timeline_item_year); ?></h4>
                            </div>
                        <?php 
                        $activeClass = '';
						$key++;
                        } 
                        ?>
                    </div>
					<?php } ?>
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

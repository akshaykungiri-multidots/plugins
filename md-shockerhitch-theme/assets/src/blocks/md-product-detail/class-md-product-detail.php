<?php
/**
 * Registers the md-shockerhitch/md-product-detail block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-shockerhitch
 */

namespace MD_SHOCKERHITCH\Blocks;

use MD_SHOCKERHITCH\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-shockerhitch/md-product-detail block.
 */
class MD_Product_Detail extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-product-detail';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'md_shockerhitch_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );
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

		global $product;
		// get string of attributes of the features that the block supports.
		$wrapper_attributes = get_block_wrapper_attributes();

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="md-product-detail-accordion">
				<?php 
				// check if the product is not set.
				if ( ! $product ) {
					echo esc_html__( 'Product Details', 'md-shockerhitch' );
				} else {
				?>
				<?php if ( ! empty( $attributes['showDescription'] ) ) : ?>
					<div class="wc-accordion-item">
						<h3 class="wc-accordion-header"><?php esc_html_e( 'Description', 'md-shockerhitch' ); ?></h3>
						<div class="wc-accordion-content">
							<?php echo wp_kses_post( $product->get_description() ); ?>
						</div>
					</div>
				<?php endif; ?>
				<?php if ( ! empty( $attributes['showAdditionalInfo'] ) ) : ?>
					<div class="wc-accordion-item">
						<h3 class="wc-accordion-header"><?php esc_html_e( 'Additional information', 'md-shockerhitch' ); ?></h3>
						<div class="wc-accordion-content">
							<?php wc_display_product_attributes( $product ); ?>
						</div>
					</div>
				<?php endif; ?>
				<?php if ( ! empty( $attributes['showReviews'] ) ) : ?>
					<div class="wc-accordion-item">
						<h3 class="wc-accordion-header"><?php esc_html_e( 'Reviews', 'md-shockerhitch' ); ?></h3>
						<div class="wc-accordion-content">
							<?php
							$reviews = comments_template( '/single-product/reviews.php' );
							echo wp_kses_post( $reviews );
							?>
						</div>
					</div>
				<?php endif; ?>
				<?php } ?>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

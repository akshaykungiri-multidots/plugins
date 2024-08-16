<?php
/**
 * Registers the md-fiery/md-brands block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-fiery
 */

namespace MD_FIERY\Blocks;

use MD_FIERY\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-fiery/md-brands block.
 */
class Md_Brands extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-brands';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'md_fiery_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );
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
				'md_brands_block_config' => array(
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

		// Get brands taxonomy terms.
		$brands = get_terms(
			array(
				'taxonomy'   => 'brands',
				'hide_empty' => false,
			)
		);
		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<?php if ( ! empty( $brands ) ) : ?>
				<div class="brands">
					<?php foreach ( $brands as $brand ) : 
					// get brand image
					$brand_image_id = get_term_meta( $brand->term_id, 'brand-image-id', true );
					if ( $brand_image_id ) {
						$brand_image = wp_get_attachment_image( $brand_image_id, 'full' );
						?>
						<div class="brand">
							<a class="brand-inner" href="<?php echo esc_url( get_term_link( $brand ) ); ?>">
								<?php echo $brand_image; ?>
							</a>
						</div>
					<?php
					}
					endforeach;
					?>
				</div>
			<?php endif; ?>
		</div>
		<?php
		return ob_get_clean();
	}
}

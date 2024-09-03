<?php
/**
 * Registers the md-shockerhitch/md-category-banner block.
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
 *  Class for the md-shockerhitch/md-category-banner block.
 */
class MD_Category_Banner extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-category-banner';
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

		// get string of attributes of the features that the block supports.
		$wrapper_attributes = get_block_wrapper_attributes();

		// Get current category from archive page.
		$current_category = get_queried_object();

		// Check if current category is null.
		if ( is_null( $current_category ) ) {
			return '';
		}

		// Get product_cat_thumbnail.
		$category_image = get_term_meta( $current_category->term_id, 'thumbnail_id', true );
		$category_image = wp_get_attachment_url( $category_image );
		

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="md-category-banner" style="background-image: url(<?php echo esc_url( $category_image ); ?>);">
				<div class="md-category-banner__content container">
					<h1 class="md-category-banner__title"><?php echo esc_html( $current_category->name ); ?></h1>
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

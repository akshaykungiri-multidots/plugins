<?php
/**
 * Registers the md-shockerhitch/md-prod-cat block.
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
 *  Class for the md-shockerhitch/md-prod-cat block.
 */
class MD_Prod_Cat extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-prod-cat';
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

		// attributes.
		$heading = isset( $attributes['heading'] ) ? $attributes['heading'] : '';

		// Get Product Categories.
		$terms = get_terms(
			array(
				'taxonomy'   => 'product_cat',
				'hide_empty' => false,
			)
		);

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<?php if ( ! empty( $heading ) ) : ?>
				<h2><?php echo esc_html( $heading ); ?></h2>
			<?php endif; ?>
			<div class="md-prod-cat">
				<?php
				foreach ( $terms as $term ) {
					$term_link    = isset( $term->term_id ) ? get_term_link( $term->term_id ) : '';
					?>
					<div class="md-prod-cat__item">
						<a href="<?php echo esc_url( $term_link ); ?>">
							<p><?php echo esc_html( $term->name ); ?></p>
						</a>
					</div>
					<?php
				}
				?>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

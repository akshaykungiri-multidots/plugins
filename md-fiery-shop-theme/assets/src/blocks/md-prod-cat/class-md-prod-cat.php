<?php
/**
 * Registers the md-fiery-shop/md-prod-cat block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-fiery-shop
 */

namespace MD_FIERY_SHOP\Blocks;

use MD_FIERY_SHOP\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-fiery-shop/md-prod-cat block.
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
		add_filter( 'md_fiery_shop_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );
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

		// Display Product Categories in heirarchical order.
		$terms = get_terms(
			array(
				'taxonomy'   => 'product_cat',
				'hide_empty' => false,
				'parent'     => 0,
			)
		);

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<?php if ( ! empty( $heading ) ) : ?>
				<h2><?php echo esc_html( $heading ); ?></h2>
			<?php endif; ?>
			<div class="md-prod-cat">
				<ul class="md-prod-cat__list">
					<?php
					// Display Product Categories in heirarchical order.
					foreach ( $terms as $term ) {
						$term_name    = isset( $term->name ) ? $term->name : '';
						// display in ul li format.
						if ($term_name === 'Uncategorized') {
							continue;
						}
						?>
							<li class="md-prod-cat__item">
								<a href="javascript:void(0);">
									<span class="category_image">
										<?php
										$thumbnail_id = get_term_meta( $term->term_id, 'thumbnail_id', true );
										if ( $thumbnail_id ) {
											$image = wp_get_attachment_image_src( $thumbnail_id, 'thumbnail' );
											if ( $image ) {
												echo '<img src="' . esc_url( $image[0] ) . '" alt="' . esc_attr( $term_name ) . '" />';
											}
										}
										?>
									</span>
									<?php echo esc_html( $term_name ); ?>
									<span class="dashicons dashicons-plus"></span>
								</a>
								<?php
								// Display child categories.
								$child_terms = get_terms(
									array(
										'taxonomy'   => 'product_cat',
										'hide_empty' => false,
										'parent'     => $term->term_id,
									)
								);
								if ( ! empty( $child_terms ) ) {
									?>
									<ul class="md-prod-cat__sub-list">
										<?php
										foreach ( $child_terms as $child_term ) {
											$child_term_link = isset( $child_term->term_id ) ? get_term_link( $child_term->term_id ) : '';
											$child_term_name = isset( $child_term->name ) ? $child_term->name : '';
											?>
											<li class="md-prod-cat__sub-item">
												<a href="<?php echo esc_url( $child_term_link ); ?>">
													<span class="category_image">
														<?php
														$thumbnail_id = get_term_meta( $child_term->term_id, 'thumbnail_id', true );
														if ( $thumbnail_id ) {
															$image = wp_get_attachment_image_src( $thumbnail_id, 'thumbnail' );
															if ( $image ) {
																echo '<img src="' . esc_url( $image[0] ) . '" alt="' . esc_attr( $child_term_name ) . '" />';
															}
														}
														?>
													</span>
													<?php echo esc_html( $child_term_name ); ?>
												</a>
											</li>
											<?php
										}
										?>
									</ul>
									<?php
								}
								?>
							</li>
						<?php
					}
					?>
				</ul>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

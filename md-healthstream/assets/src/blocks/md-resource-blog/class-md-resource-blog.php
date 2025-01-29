<?php
/**
 * Registers the md-healthstream/md-resource-blog block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-healthstream
 */

namespace MD_HEALTHSTREAM\Blocks;

use MD_HEALTHSTREAM\Includes\Block_Base;
use WP_Block;
use WP_Query;

/**
 *  Class for the md-healthstream/md-resource-blog block.
 */
class MD_Resource_Blog extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-resource-blog';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'md_healthstream_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );
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
		$numberOfPosts = isset( $attributes['numberOfPosts'] ) ? $attributes['numberOfPosts'] : "3";
		$showHeading = isset( $attributes['showHeading'] ) ? $attributes['showHeading'] : false;
		$showTitle = isset( $attributes['showTitle'] ) ? $attributes['showTitle'] : false;
		$showExcerpt = isset( $attributes['showExcerpt'] ) ? $attributes['showExcerpt'] : false;
		$showFeaturedImage = isset( $attributes['showFeaturedImage'] ) ? $attributes['showFeaturedImage'] : false;
		$headingColor = isset( $attributes['headingColor'] ) ? $attributes['headingColor'] : "";
		$titleColor = isset( $attributes['titleColor'] ) ? $attributes['titleColor'] : "";
		$excerptColor = isset( $attributes['excerptColor'] ) ? $attributes['excerptColor'] : "";

		// Query to get the posts.
		$args = array(
			'post_type' => 'resources',
			'posts_per_page' => -1,
		);

		$query = new WP_Query( $args );

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<?php if ( ! empty( $heading ) ) : ?>
				<h2><?php echo esc_html( $heading ); ?></h2>
			<?php endif; ?>
			<div class="md-resource-blog">
				<?php
				if ( $query->have_posts() ) :
					while ( $query->have_posts() ) :
						$query->the_post();
						?>
						<div class="md-resource-blog__item">
							<?php if ( $showFeaturedImage ) : ?>
								<div class="md-resource-blog__item__image">
									<?php the_post_thumbnail(); ?>
								</div>
							<?php endif; ?>
							<?php if ( $showTitle ) : ?>
								<h4 style="color: <?php echo esc_attr( $titleColor ); ?>"><?php the_title(); ?></h4>
							<?php endif; ?>
							<?php if ( $showExcerpt ) : ?>
								<p style="color: <?php echo esc_attr( $excerptColor ); ?>"><?php the_excerpt(); ?></p>
							<?php endif; ?>
						</div>
						<?php
					endwhile;
				endif;
				?>
				<?php wp_reset_postdata(); ?>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

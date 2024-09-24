<?php
/**
 * Registers the md-storyful-fse-full/md-case-studies block.
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
 *  Class for the md-storyful-fse-full/md-case-studies block.
 */
class MD_Case_Studies extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-case-studies';
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
		$section_title = isset( $attributes['section_title'] ) ? $attributes['section_title'] : '';
		$background_color = isset( $attributes['background_color'] ) ? $attributes['background_color'] : '';
		$number_of_case_studies = isset( $attributes['number_of_case_studies'] ) ? $attributes['number_of_case_studies'] : 3;
		$case_studies_ids = isset( $attributes['case_studies_ids'] ) ? $attributes['case_studies_ids'] : '';
		$case_studies_style = isset( $attributes['case_studies_style'] ) ? $attributes['case_studies_style'] : 'style_1';

		$args = array(
            'post_type' => 'resources',
            'posts_per_page' => $number_of_case_studies,
            'orderby' => 'date',
            'order' => 'DESC',
            'tax_query' => array(
                array(
                    'taxonomy' => 'resource-type',
                    'field' => 'slug',
                    'terms' => 'case-studies',
                ),
            ),
            'post__in' => $case_studies_ids,
            'paged' => 1,
        );
        $case_studies =  new \WP_Query($args);

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="storyful-case-studies <?php echo esc_attr($attributes['case_studies_style']); ?>" >
				<div class="overlay" style="background: <?php echo esc_attr($background_color); ?>"></div>
				<div class="container">
					<div class="section-title">
						<h1><?php echo wp_kses_post($section_title); ?></h1>
					</div>
					<div class="case-studies">
						<div class="case-studies__list">
							<?php
							if ($case_studies->have_posts()) :
								$active = 'active';
								while ($case_studies->have_posts()) : $case_studies->the_post();
									?>
									<div class="case-studies__item <?php echo esc_attr($active); ?>" data-post-id="<?php echo esc_attr(get_the_ID()); ?>" >
										<h3><?php the_title(); ?></h3>
										<?php if ( $case_studies_style === 'style_1' ) : ?>
											<div class="case-studies__excerpt"><?php the_excerpt(); ?></div>
										<?php endif; ?>
									</div>
								<?php
								$active = '';
								endwhile;
								wp_reset_postdata();
							endif;
							?>
						</div>
						<div class="case-studies__feature-post fadeInRight">
							<?php
							if ($case_studies->have_posts()) :
								$active = 'active';
								while ($case_studies->have_posts()) : $case_studies->the_post();
									?>
									<div class="item <?php echo esc_attr($active); ?>" data-post-id="<?php echo esc_attr(get_the_ID()); ?>">
										<?php if ( $case_studies_style === 'style_2' ) : ?>
											<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
										<?php endif; ?>
										<?php if ( $case_studies_style === 'style_1' ) : ?>
											<div class="item__image-wrapper">
												<?php the_post_thumbnail(); ?>
											</div>
										<?php endif; ?>
										<div class="item__details">
											<?php if ( $case_studies_style === 'style_1' ) : ?>
												<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
												<div class="item__publish-details">
													<p><?php echo get_the_author(); ?></p>
													<span>-</span>
													<p><?php echo get_the_date(); ?></p>
												</div>
												<div class="item__excerpt"><?php the_excerpt(); ?></div>
											<?php endif; ?>
											<?php if ( $case_studies_style === 'style_2' ) : ?>
												<?php the_post_thumbnail(); ?>
											<?php endif; ?>
											<div class="btn btn-arrow">
												<a class="sbtn sbtn-arrow-secondary" href="<?php the_permalink(); ?>"><?php esc_html_e('Full Case Study', 'md-bakery-antian'); ?></a>
											</div>
										</div>
									</div>
								<?php
								$active = '';
								endwhile;
								wp_reset_postdata();
							endif;
							?>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

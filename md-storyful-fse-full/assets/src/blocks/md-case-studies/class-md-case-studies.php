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

		// Create custom endpoint for case studies.
		add_action( 'rest_api_init', array( $this, 'register_case_studies_endpoint' ) );
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
		$show_section_title = isset( $attributes['show_section_title'] ) ? $attributes['show_section_title'] : false;
		$section_title = isset( $attributes['section_title'] ) ? $attributes['section_title'] : '';
		$background_color = isset( $attributes['background_color'] ) ? $attributes['background_color'] : '';
		$number_of_case_studies = isset( $attributes['number_of_case_studies'] ) ? $attributes['number_of_case_studies'] : 3;
		$case_studies_style = isset( $attributes['case_studies_style'] ) ? $attributes['case_studies_style'] : 'style_1';
		$section_title_font_color = isset( $attributes['section_title_font_color'] ) ? $attributes['section_title_font_color'] : 36;
		$case_studies_title_font_color = isset( $attributes['case_studies_title_font_color'] ) ? $attributes['case_studies_title_font_color'] : 36;
		$case_studies_description_font_color = isset( $attributes['case_studies_description_font_color'] ) ? $attributes['case_studies_description_font_color'] : 36;
		$main_case_study_title_font_color = isset( $attributes['main_case_study_title_font_color'] ) ? $attributes['main_case_study_title_font_color'] : 36;
		$main_case_study_description_font_color = isset( $attributes['main_case_study_description_font_color'] ) ? $attributes['main_case_study_description_font_color'] : 36;
		$main_case_study_author_date_font_color = isset( $attributes['main_case_study_author_date_font_color'] ) ? $attributes['main_case_study_author_date_font_color'] : 36;
		$show_button = isset( $attributes['show_button'] ) ? $attributes['show_button'] : false;
		$button_style = isset( $attributes['button_style'] ) ? $attributes['button_style'] : 'primary';
		$orderBy = isset( $attributes['orderBy'] ) ? $attributes['orderBy'] : 'date'; // date, title, rand
		$order = isset( $attributes['order'] ) ? $attributes['order'] : 'DESC'; // ASC, DESC
		$show_excerpt = isset( $attributes['show_excerpt'] ) ? $attributes['show_excerpt'] : true;
		$show_featured_image = isset( $attributes['show_featured_image'] ) ? $attributes['show_featured_image'] : true;
		$show_author_date = isset( $attributes['show_author_date'] ) ? $attributes['show_author_date'] : true;

		$args = array(
            'post_type' => 'resources',
            'posts_per_page' => $number_of_case_studies,
            'orderby' => $orderBy,
            'order' => $order,
            'tax_query' => array(
                array(
                    'taxonomy' => 'resource-type',
                    'field' => 'slug',
                    'terms' => 'case-studies',
                ),
            ),
            'paged' => 1,
        );

		
        $case_studies =  new \WP_Query($args);

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="storyful-case-studies <?php echo esc_attr($attributes['case_studies_style']); ?>" >
				<div class="overlay" style="background: <?php echo esc_attr($background_color); ?>"></div>
				<div class="container">
					<?php if ( $show_section_title ) : ?>
						<div class="section-title">
							<h1 style="color: <?php echo esc_attr($section_title_font_color); ?>"><?php echo wp_kses_post($section_title); ?></h1>
						</div>
					<?php endif; ?>
					<div class="case-studies">
						<div class="case-studies__list">
							<?php
							if ($case_studies->have_posts()) :
								$active = 'active';
								while ($case_studies->have_posts()) : $case_studies->the_post();
									?>
									<div class="case-studies__item <?php echo esc_attr($active); ?>" data-post-id="<?php echo esc_attr(get_the_ID()); ?>" >
										<h3 class="case-studies__title" style="color: <?php echo esc_attr($case_studies_title_font_color); ?>"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
										<?php if ( $case_studies_style === 'style_1' ) : ?>
											<div class="case-studies__excerpt" style="color: <?php echo esc_attr($case_studies_description_font_color); ?>"><?php the_excerpt(); ?></div>
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
											<h3 class="item__title" style="color: <?php echo esc_attr($main_case_study_title_font_color); ?>"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
										<?php endif; ?>
										<?php if ( $case_studies_style === 'style_1' && $show_featured_image ) : ?>
											<div class="item__image-wrapper">
												<?php the_post_thumbnail(); ?>
											</div>
										<?php endif; ?>
										<div class="item__details">
											<?php if ( $case_studies_style === 'style_1' ) : ?>
												<h3 class="item__title" style="color: <?php echo esc_attr($main_case_study_title_font_color); ?>"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
											<?php endif; ?>
											<?php if ( $show_author_date ) : ?>
												<div class="item__publish-details" style="color: <?php echo esc_attr($main_case_study_author_date_font_color); ?>">
													<p><?php echo get_the_author(); ?></p>
													<span>-</span>
													<p><?php echo get_the_date(); ?></p>
												</div>
											<?php endif; ?>
											<?php if ( $show_excerpt ) : ?>
												<div class="item__excerpt" style="color: <?php echo esc_attr($main_case_study_description_font_color); ?>"><?php the_excerpt(); ?></div>
											<?php endif; ?>
											<?php if ( $case_studies_style === 'style_2' && $show_featured_image ) : ?>
												<?php the_post_thumbnail(); ?>
											<?php endif; ?>
											<?php if ( $show_button ) : ?>
												<div class="sbtn sbtn-arrow-<?php echo esc_attr($button_style); ?>">
													<span class="btn-text">
														<a href="<?php the_permalink(); ?>"><?php esc_html_e('Full Case Study', 'md-bakery-antian'); ?></a>
													</span>
												</div>
											<?php endif; ?>
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

	/**
	 * Register custom endpoint for case studies.
	 *
	 * @return void
	 */
	public function register_case_studies_endpoint() {
		register_rest_route(
			'md-storyful-fse-full/v1',
			'/case-studies',
			array(
				'methods'  => 'GET',
				'callback' => array( $this, 'get_case_studies' ),
				'permission_callback' => '__return_true'
			),
		);
	}

	/**
	 * Get case studies.
	 *
	 * @param \WP_REST_Request $request Request object.
	 * @return \WP_REST_Response
	 */
	public function get_case_studies( \WP_REST_Request $request ): \WP_REST_Response {

		$args = array(
			'post_type'      => 'resources',
			'posts_per_page' => -1,
			'orderby'        => 'date',
			'order'          => 'DESC',
			'tax_query'      => array(
				array(
					'taxonomy' => 'resource-type',
					'field'    => 'slug',
					'terms'    => 'case-studies',
				),
			),
		);

		$case_studies = new \WP_Query( $args );

		$case_studies_data = array();

		if ( $case_studies->have_posts() ) {
			while ( $case_studies->have_posts() ) {
				$case_studies->the_post();

				$case_studies_data[] = array(
					'id'          => get_the_ID(),
					'title'       => get_the_title()
				);
			}
			wp_reset_postdata();
		}

		return rest_ensure_response( $case_studies_data );
	}
}

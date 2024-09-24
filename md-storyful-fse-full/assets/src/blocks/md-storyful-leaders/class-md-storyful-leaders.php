<?php
/**
 * Registers the md-storyful-fse-full/md-storyful-leaders block.
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
 *  Class for the md-storyful-fse-full/md-storyful-leaders block.
 */
class MD_Storyful_Leaders extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-storyful-leaders';
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

		// Get storyful_leaders post list.
		$args = array(
			'post_type'      => 'storyful_leaders',
			'posts_per_page' => -1,
			'post_status'    => 'publish',
		);

		$storyful_leaders = new \WP_Query( $args );

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="leadership-author-box">
				<div class="container">
					<div class="box-item-main leadership__author__box">
						<?php while ($storyful_leaders->have_posts()) { 
							$storyful_leaders->the_post();
							$leadership_author_box_image = get_the_post_thumbnail_url();
							$linkedin_link = get_post_meta(get_the_ID(), 'storyful_leader_linked_in', true);
							$author_name = get_the_title();
							$author_designation = get_post_meta(get_the_ID(), 'storyful_leader_designation', true);
							$author_description = get_the_content();
							?>
							<div class="leadership__author__box-item">
								<div class="leadership__author__box-item-inner">
									<div class="leadership__author__box-item-inner-img">
										<?php if (!empty($leadership_author_box_image)) { ?>
											<img class="author-img wow fadeInDown" src="<?php echo esc_url($leadership_author_box_image); ?>" alt="Leadership Author Image">
										<?php } ?>
										<div class="linked-in-icon wow bounceIn">
											<a href="<?php echo esc_url($linkedin_link); ?>" target="_blank">
												<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/linkedin-icon-orange.svg'); ?>" alt="Linked In Icon">
											</a>
										</div>
									</div>
									<div class="leadership__author__box-item-inner-content">
										<h3 class="leadershipName wow fadeInUp">
											<?php echo wp_kses_post($author_name); ?>
										</h3>
										<p class="leadershipTitle wow fadeInUp">
											<?php echo wp_kses_post($author_designation); ?>
										</p>
									</div>
								</div>
								<div class="leadership__popup-model">
									<div class="leadership__popup-model-content">
										<div class="leadership__popup-model-header">
											<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
										</div>
										<div class="leadership__popup-model-body">
											<div class="leadership__popup-model-author-details-main">
												<div class="leadership__popup-model-author-details-main-img-section">
													<?php if (!empty($leadership_author_box_image)) { ?>
														<img class="author-img" src="<?php echo esc_url($leadership_author_box_image); ?>" alt="Leadership Author Image">
													<?php } ?>
													<div class="linked-in-icon wow bounceIn">
														<a href="<?php echo esc_url($linkedin_link); ?>" target="_blank">
															<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/linkedin-icon-orange.svg'); ?>" alt="Linked In Icon">
														</a>
													</div>
												</div>
												<div class="leadership__popup-model-author-details-box">
													<h3 class="leadershipName">
														<?php echo wp_kses_post($author_name); ?>
													</h3>
													<p class="leadershipTitle">
														<?php echo wp_kses_post($author_designation); ?>
													</p>
												</div>
											</div>
											<div class="col-md-8 bio-text leadership__popup-model-about-author-box">
												<div class="about-author">
													<span class="about-head"><?php esc_html_e('About', 'md-bakery-antian'); ?></span>
												</div>
												<p class="leadershipBio">
													<?php echo wp_kses_post($author_description); ?>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						<?php } ?>
					</div>
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

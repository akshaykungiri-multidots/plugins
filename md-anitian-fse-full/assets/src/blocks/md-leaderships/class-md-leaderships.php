<?php
/**
 * Registers the md-anitian-fse-full/md-leaderships block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-anitian-fse-full
 */

namespace MD_ANITIAN_FSE_FULL\Blocks;

use MD_ANITIAN_FSE_FULL\Includes\Block_Base;
use WP_Block;

/**
 *  Class for the md-anitian-fse-full/md-leaderships block.
 */
class MD_Leaderships extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-leaderships';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {
		add_filter( 'md_anitian_fse_full_gutenberg_blocks_config', array( $this, 'localize_block_data' ) );
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
		$headingFontSize = isset( $attributes['headingFontSize'] ) ? $attributes['headingFontSize'] : '';
		$headingColor = isset( $attributes['headingColor'] ) ? $attributes['headingColor'] : '';
		$leaderTitleFontSize = isset( $attributes['leaderTitleFontSize'] ) ? $attributes['leaderTitleFontSize'] : '';
		$leaderTitleFontColor = isset( $attributes['leaderTitleFontColor'] ) ? $attributes['leaderTitleFontColor'] : '';
		$leaderDesignationFontSize = isset( $attributes['leaderDesignationFontSize'] ) ? $attributes['leaderDesignationFontSize'] : '';
		$leaderDesignationFontColor = isset( $attributes['leaderDesignationFontColor'] ) ? $attributes['leaderDesignationFontColor'] : '';
		$leaderDescriptionFontSize = isset( $attributes['leaderDescriptionFontSize'] ) ? $attributes['leaderDescriptionFontSize'] : '';
		$leaderDescriptionFontColor = isset( $attributes['leaderDescriptionFontColor'] ) ? $attributes['leaderDescriptionFontColor'] : '';

		$leadership_tabs = get_terms(
			array(
				'taxonomy'   => 'leadership-type',
				'hide_empty' => true,
				'orderby'    => 'date',
				'order'      => 'DESC',
			)
		);

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<div class="md_anitian_leadership">
				<div class="container">
					<div class="md_anitian_leadership__inner">
						<div class="md_anitian_leadership__heading">
							<h2 style="font-size: <?php echo esc_attr( $headingFontSize ); ?>; color: <?php echo esc_attr( $headingColor ); ?>"><?php echo esc_html( $heading ); ?></h2>
						</div>
						<div class="md_anitian_leadership__tabs">
							<ul class="nav nav-tabs" id="myTab" role="tablist">
								<?php
								$i = 0;
								foreach ($leadership_tabs as $leadership_tab) {
									$active = ($i === 0) ? 'active' : '';
									?>
									<li class="nav-item <?php echo esc_attr($active); ?>">
										<a class="nav-link" id="tab-<?php echo esc_attr($i); ?>" data-toggle="tab" href="#tab-<?php echo esc_attr($i); ?>" role="tab" aria-controls="tab-<?php echo esc_attr($i); ?>" aria-selected="true">
											<?php echo esc_html($leadership_tab->name); ?>
										</a>
									</li>
									<?php
									$i++;
								}
								?>
							</ul>
							<div class="tab-content" id="myTabContent">
								<?php
								$i = 0;
								foreach ($leadership_tabs as $leadership_tab) {
									$active = ($i === 0) ? 'show active' : '';
									?>
									<div class="tab-pane fade <?php echo esc_attr($active); ?>" id="tab-<?php echo esc_attr($i); ?>" role="tabpanel" aria-labelledby="tab-<?php echo esc_attr($i); ?>">
										<div class="md_anitian_leadership__leaders">
											<?php
											$leaders = get_posts(
												array(
													'post_type' => 'leaderships',
													'posts_per_page' => -1,
													'tax_query' => array(
														array(
															'taxonomy' => 'leadership-type',
															'field' => 'slug',
															'terms' => $leadership_tab->slug,
														),
													),
												)
											);
											foreach ($leaders as $leader) {
												$leader_image = get_the_post_thumbnail_url($leader->ID, 'full');
												$leader_name = get_the_title($leader->ID);
												$leader_designation = get_post_meta($leader->ID, 'post_designation', true);
												$leader_description = get_the_content(null, false, $leader->ID);
												?>
												<div class="md_anitian_leadership__leader">
                                                    <div class="md_anitian_leadership__leader__image">
                                                        <?php if (isset($leader_image) && !empty($leader_image)) { ?>
															<img src="<?php echo esc_url($leader_image); ?>" alt="<?php echo esc_attr($leader_name); ?>">
														<?php } ?>
                                                    </div>
                                                    <div class="md_anitian_leadership__leader__content">
                                                        <h3 class="md_anitian_leadership__leader__name" style="font-size: <?php echo esc_attr($leaderTitleFontSize); ?>; color: <?php echo esc_attr($leaderTitleFontColor); ?>"><?php echo esc_html($leader_name); ?></h3>
														<?php if (isset($leader_designation) && !empty($leader_designation)) { ?>
															<p class="md_anitian_leadership__leader__designation" style="font-size: <?php echo esc_attr($leaderDesignationFontSize); ?>; color: <?php echo esc_attr($leaderDesignationFontColor); ?>"><?php echo esc_html($leader_designation); ?></p>
														<?php } ?>
														<?php if (isset($leader_description) && !empty($leader_description)) {
                                                            $visible_length = 300;
                                                            $description_length = strlen($leader_description);
                                                            $visible_description = substr($leader_description, 0, $visible_length);
                                                            $hidden_description = substr($leader_description, $visible_length, $description_length);
                                                            ?>
                                                            <div class="leadership__member-description" style="font-size: <?php echo esc_attr($leaderDescriptionFontSize); ?>; color: <?php echo esc_attr($leaderDescriptionFontColor); ?>">
                                                                <span><?php echo wp_kses_post($visible_description); ?></span>
																<span class="ellipsis">... </span>
																<a href="javascript:void(0)" class="read-more">Read More</a>
																<span class="hidden-description">
																	<?php echo wp_kses_post($hidden_description); ?>
																</span>
																<a href="javascript:void(0)" class="read-less">Read Less</a>
                                                            </div>
                                                        <?php } ?>
                                                    </div>
                                                </div>
												<?php
											}
											?>
										</div>
									</div>
									<?php
									$i++;
								}
								?>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<?php
		return ob_get_clean();
	}
}

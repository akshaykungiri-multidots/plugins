<?php
/**
 * Registers the md-prime/team-v2 block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-prime
 */

namespace MD_HEALTHSTREAM\Blocks;

use MD_HEALTHSTREAM\Includes\Block_Base;
use WP_Block;

/**
 * MD_Team class.
 */
class MD_Team extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'md-team';
	}

	/**
	 * Render block.
	 *
	 * @param array $attributes   Block attributes.
	 * @return string
	 */
	public function render_callback(
		array $attributes
	): string {

		$attributes = wp_parse_args(
			$attributes,
			array(
				'products'           => array(),
				'heading'            => 'Leadership',
				'bgcolor'            => '',
				'headingcolor'       => '',
				'authornamecolor'    => '',
				'authortitlecolor'   => '',
				'teamheading'        => 'Want to work with us',
				'teamheadinginner'   => 'Join our growing team!',
				'button'             => 'Request a Demo',
				'callToAction'       => true,
				'displayAuthorname'  => true,
				'displayAuthortitle' => true,
				'displayTeamHeading' => true,
				'displayLinkedin'    => true,
			)
		);

		$products           = $attributes['products'];
		$heading            = $attributes['heading'];
		$bgcolor            = $attributes['bgcolor'];
		$headingcolor       = $attributes['headingcolor'];
		$authornamecolor    = $attributes['authornamecolor'];
		$authortitlecolor   = $attributes['authortitlecolor'];
		$teamheading        = $attributes['teamheading'];
		$teamheadinginner   = $attributes['teamheadinginner'];
		$button             = $attributes['button'];
		$call_to_action     = $attributes['callToAction'];
		$displayauthorname  = $attributes['displayAuthorname'];
		$displayauthortitle = $attributes['displayAuthortitle'];
		$displayteamheading = $attributes['displayTeamHeading'];
		$displaylinkedin    = $attributes['displayLinkedin'];

		$classes = 'leadership';

		$block_attributes = array(
			'class' => esc_attr( $classes ),
		);

		$heading_styles = $this->get_style_string(
			array(
				'color' => sanitize_hex_color( $headingcolor ),
			)
		);

		$authorname_styles = $this->get_style_string(
			array(
				'color' => sanitize_hex_color( $authornamecolor ),
			)
		);

		$authortitle_styles = $this->get_style_string(
			array(
				'color' => sanitize_hex_color( $authortitlecolor ),
			)
		);

		$box_bg_styles = $this->get_style_string(
			array(
				'background-color' => $bgcolor ? sanitize_hex_color( $bgcolor ) : '#fff',
			)
		);

		ob_start();
		?>
		<div <?php echo wp_kses_post( get_block_wrapper_attributes( $block_attributes ) ); ?>>
	<div class="leadership__header" style="<?php echo esc_attr( $box_bg_styles ); ?>">
		<?php if ( $heading ) : ?>
			<h2 class="leadership__header-heading wow" style="<?php echo esc_attr( $heading_styles ); ?>"><?php echo wp_kses_post( $heading ); ?></h2>
		<?php endif; ?>
	</div>
	<div class="container">
		<div class="box-item-main leadership__author__box">
			<?php foreach ( $products as $index => $product ) : ?>
				<div class="leadership__author__box-item" key="<?php echo esc_attr( $index ); ?>">
					<div class="leadership__author__box-item-inner">
						<div class="leadership__author__box-item-inner-img">
							<?php if ( ! empty( $product['leadershipHeadshot'] ) ) : ?>
								<img src="<?php echo esc_url( $product['leadershipHeadshot'] ); ?>" alt="Leadership" class="author-img wow" />
							<?php else : ?>
								<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/src/images/placeholder-image.jpeg' ); ?>" alt="placeholder img" class="author-img wow" />
							<?php endif; ?>
							<?php if ( $displaylinkedin ) : ?>
								<div class="linked-in-icon wow">
									<a href="<?php echo esc_url( $product['leaderlink'] ); ?>">
										<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/src/images/linkedin-icon-orange.svg' ); ?>" alt="linkedin-icon"></img>
									</a>
								</div>
							<?php endif; ?>
						</div>
						<div class="leadership__author__box-item-inner-content">
							<?php if ( $displayauthorname ) : ?>
								<h3 class="leadershipName wow" style="<?php echo esc_attr( $authorname_styles ); ?>"><?php echo wp_kses_post( $product['leadershipName'] ); ?></h3>
							<?php endif; ?>
							<?php if ( $displayauthortitle ) : ?>
								<h4 class="leadershipTitle wow" style="<?php echo esc_attr( $authortitle_styles ); ?>"><?php echo wp_kses_post( $product['leadershipTitle'] ); ?></h4>
							<?php endif; ?>
							<?php if ( $product['leadershipBio'] ) : 
								$bio = wp_kses_post( $product['leadershipBio'] );
								$bio = strip_tags( $bio );
								$bio = substr( $bio, 0, 100 );
								$bio = $bio . '...';
								?>
								<p class="leadershipBio wow"><?php echo wp_kses_post( $bio ); ?></p>
							<?php endif; ?>
							<div class="leadership__author__box-item-inner-content-btn">
								<span class="viewpopup wow" data-toggle="modal" data-target="#leadershipPopup<?php echo esc_attr( $index ); ?>"><?php esc_html_e( 'View Bio', 'md-healthstream' ); ?></span>
							</div>
						</div>
					</div>
					<!-- Leadership Popup Model -->
					<div class="leadership__popup-model">
						<div class="leadership__popup-model-content">
							<!-- Popup Header -->
							<div class="leadership__popup-model-header">
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">X</span>
								</button>
							</div>
							<!-- Popup Body -->
							<div class="leadership__popup-model-body">
								<div class="leadership__popup-model-author-details-main">
									<div class="leadership__popup-model-author-details-main-img-section">
										<?php if ( ! empty( $product['leadershipHeadshot'] ) ) : ?>
											<img src="<?php echo esc_url( $product['leadershipHeadshot'] ); ?>" alt="Leadership" class="author-img" />
										<?php else : ?>
											<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/src/images/placeholder-image.jpeg' ); ?>" alt="placeholder img" class="author-img" />
										<?php endif; ?>
										<?php if ( $displaylinkedin ) : ?>
											<div class="linked-in-icon wow">
												<a href="<?php echo esc_url( $product['leaderlink'] ); ?>">
													<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/src/images/linkedin-icon-orange.svg' ); ?>" alt="linkedin-icon"></img>
												</a>
											</div>
										<?php endif; ?>
									</div>
									<div class="leadership__popup-model-author-details-box">
										<?php if ( $displayauthorname ) : ?>
											<h3 class="leadershipName" style="<?php echo esc_attr( $authorname_styles ); ?>"><?php echo wp_kses_post( $product['leadershipName'] ); ?></h3>
										<?php endif; ?>
										<?php if ( $displayauthortitle ) : ?>
											<p class="leadershipTitle" style="<?php echo esc_attr( $authortitle_styles ); ?>"><?php echo wp_kses_post( $product['leadershipTitle'] ); ?></p>
										<?php endif; ?>
									</div>
								</div>
								<div class="col-md-8 bio-text leadership__popup-model-about-author-box">
									<div class="about-author">
										<span class="about-head">About</span>
									</div>
									<p class="leadershipBio"><?php echo wp_kses_post( $product['leadershipBio'] ); ?></p>
								</div>
							</div>
						</div>
						<div class="bg_overlay"></div>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
		<div class="leadership__join-team wow">
			<?php if ( $displayteamheading ) : ?>
				<h4 class="leadership__join-team__heading"><?php echo wp_kses_post( $teamheading ); ?></h4>
			<?php endif; ?>
			<?php if ( $displayteamheading ) : ?>
				<span class="leadership__join-team__heading-span"><?php echo wp_kses_post( $teamheadinginner ); ?></span>
			<?php endif; ?>
			<?php if ( $call_to_action ) : ?>
				<div class="sbtn sbtn-arrow-primary wow">
					<span class="btn-main"><?php echo wp_kses_post( $button ); ?></span>
				</div>
			<?php endif; ?>
		</div>
	</div>
</div>
		<?php
		$html = ob_get_clean();
		return $html;
	}
}

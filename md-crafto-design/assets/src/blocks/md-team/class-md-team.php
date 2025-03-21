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

namespace MD_CRAFTO_DESIGN\Blocks;

use MD_CRAFTO_DESIGN\Includes\Block_Base;
use WP_Block;

/**
 * MD_Team class.
 */
class MD_Team extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
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
				'displaySocialIcon'    => true,
			)
		);

		$products           = $attributes['products'];
		$heading            = $attributes['heading'];
		$subheading         = $attributes['subheading'];
		$bgcolor            = $attributes['bgcolor'];
		$headingcolor       = $attributes['headingcolor'];
		$subheadingcolor	= !empty($attributes['subheadingcolor']) ? $attributes['subheadingcolor'] : '';
		$authornamecolor    = $attributes['authornamecolor'];
		$authortitlecolor   = $attributes['authortitlecolor'];
		$teamheading        = $attributes['teamheading'];
		$teamheadinginner   = $attributes['teamheadinginner'];
		$button             = $attributes['button'];
		$call_to_action     = $attributes['callToAction'];
		$displayauthorname  = $attributes['displayAuthorname'];
		$displayauthortitle = $attributes['displayAuthortitle'];
		$displayteamheading = $attributes['displayTeamHeading'];
		$displaysocialIcon    = $attributes['displaySocialIcon'];

		$classes = 'leadership';

		$block_attributes = array(
			'class' => esc_attr($classes),
		);

		$heading_styles = $this->get_style_string(
			array(
				'color' => sanitize_hex_color($headingcolor),
			)
		);

		$subheading_styles = $this->get_style_string(
			array(
				'color' => sanitize_hex_color($subheadingcolor),
			)
		);

		$authorname_styles = $this->get_style_string(
			array(
				'color' => sanitize_hex_color($authornamecolor),
			)
		);

		$authortitle_styles = $this->get_style_string(
			array(
				'color' => sanitize_hex_color($authortitlecolor),
			)
		);

		$box_bg_styles = $this->get_style_string(
			array(
				'background-color' => $bgcolor ? sanitize_hex_color($bgcolor) : '#fff',
			)
		);

		ob_start();
?>
		<div <?php echo wp_kses_post(get_block_wrapper_attributes($block_attributes)); ?>>
			<div class="leadership__header" style="<?php echo esc_attr($box_bg_styles); ?>">
				<?php if ($subheading) : ?>
					<p class="leadership__header-subheading wow <?php echo (!$subheadingcolor ? 'transparent': ''); ?>" style="<?php echo esc_attr($subheading_styles); ?>"><?php echo wp_kses_post($subheading); ?></p>
				<?php endif; ?>
				<?php if ($heading) : ?>
					<h2 class="leadership__header-heading wow" style="<?php echo esc_attr($heading_styles); ?>"><?php echo wp_kses_post($heading); ?></h2>
				<?php endif; ?>
			</div>
			<div class="container">
				<div class="box-item-main leadership__author__box">
					<?php foreach ($products as $index => $product) : ?>
						<div class="leadership__author__box-item front" key="<?php echo esc_attr($index); ?>">
							<div class="leadership__author__box-item-inner">
								<div class="leadership__author__box-item-inner-img">
									<?php if (! empty($product['leadershipHeadshot'])) : ?>
										<img src="<?php echo esc_url($product['leadershipHeadshot']); ?>" alt="Leadership" class="author-img wow" />
									<?php else : ?>
										<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/placeholder-image.jpeg'); ?>" alt="placeholder img" class="author-img wow" />
									<?php endif; ?>
									<?php if ($displaysocialIcon) : ?>
										<div class="authorLink wow">
											<?php if (! empty($product['facebookLink'])) : ?>
												<a href="<?php echo esc_url($product['facebookLink']); ?>" target="_blank" rel="noopener noreferrer">
													<i class="fa fa-facebook" aria-hidden="true"></i>
												</a>
											<?php endif; ?>
											<?php if (! empty($product['instagramLink'])) : ?>
												<a href="<?php echo esc_url($product['instagramLink']); ?>" target="_blank" rel="noopener noreferrer">
													<i class="fa fa-instagram" aria-hidden="true"></i>
												</a>
											<?php endif; ?>
											<?php if (! empty($product['twitterLink'])) : ?>
												<a href="<?php echo esc_url($product['twitterLink']); ?>" target="_blank" rel="noopener noreferrer">
													<i class="fa fa-twitter" aria-hidden="true"></i>
												</a>
											<?php endif; ?>
											<?php if (! empty($product['dribbleLink'])) : ?>
												<a href="<?php echo esc_url($product['dribbleLink']); ?>" target="_blank" rel="noopener noreferrer">
													<i class="fa fa-dribbble" aria-hidden="true"></i>
												</a>
											<?php endif; ?>
										</div>
									<?php endif; ?>
								</div>
								<div class="leadership__author__box-item-inner-content leadership__author__box-item-inner-content__front">
									<div class="leadership__author__box-item-inner-content__left">
										<?php if ($displayauthorname) : ?>
											<h3 class="leadershipName wow" style="<?php echo esc_attr($authorname_styles); ?>"><?php echo wp_kses_post($product['leadershipName']); ?></h3>
										<?php endif; ?>
										<?php if ($displayauthortitle) : ?>
											<p class="leadershipTitle wow" style="<?php echo esc_attr($authortitle_styles); ?>"><?php echo wp_kses_post($product['leadershipTitle']); ?></p>
										<?php endif; ?>
									</div>
								</div>
							</div>
						</div>
					<?php endforeach; ?>
				</div>
				<div class="leadership__join-team wow">
					<?php if ($displayteamheading) : ?>
						<h4 class="leadership__join-team__heading"><?php echo wp_kses_post($teamheading); ?></h4>
					<?php endif; ?>
					<?php if ($displayteamheading) : ?>
						<span class="leadership__join-team__heading-span"><?php echo wp_kses_post($teamheadinginner); ?></span>
					<?php endif; ?>
					<?php if ($call_to_action) : ?>
						<div class="sbtn sbtn-arrow-primary wow">
							<span class="btn-main"><?php echo wp_kses_post($button); ?></span>
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

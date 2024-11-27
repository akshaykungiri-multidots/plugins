<?php

/**
 * Registers the md-prime/md-leadership block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package md-prime
 */

namespace MD_WOODWARD\Blocks;

use MD_WOODWARD\Includes\Block_Base;

/**
 * MD_Team class.
 */
class MD_Leadership extends Block_Base
{

	/**
	 * Constructor.
	 */
	public function __construct()
	{
		$this->_block = 'md-leadership';
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
				'leaders'           => array(),
				'heading'            => 'Leadership',
				'leadersRoles'       => array(),
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

		$heading            = $attributes['heading'];
		$leadersRoles 	    = $attributes['leadersRoles'];
		$bgcolor            = $attributes['bgcolor'];
		$headingcolor       = $attributes['headingcolor'];
		$authornamecolor    = $attributes['authornamecolor'];
		$authortitlecolor   = $attributes['authortitlecolor'];
		$displayauthorname  = $attributes['displayAuthorname'];
		$displayauthortitle = $attributes['displayAuthortitle'];

		$classes = 'leadership';

		$block_attributes = array(
			'class' => esc_attr($classes),
		);

		$heading_styles = $this->get_style_string(
			array(
				'color' => sanitize_hex_color($headingcolor),
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
				<?php if ($heading) : ?>
					<h2 class="leadership__header-heading wow" style="<?php echo esc_attr($heading_styles); ?>"><?php echo wp_kses_post($heading); ?></h2>
				<?php endif; ?>
			</div>
			<div class="container">
				<div class="leadership__roles">
					<?php
					$roleActive = "active";
					foreach ($leadersRoles as $index => $role) : ?>
						<div class="leadership__roles__box-item  <?php echo esc_attr($roleActive); ?>" key="<?php echo esc_attr($index); ?>" data-role="<?php echo esc_attr($index); ?>">
							<div class="leadership__roles__box-item-inner">
								<?php if ($role['leadershipRole']) : ?>
									<h3 class="leadershipRole"><?php echo wp_kses_post($role['leadershipRole']); ?></h3>
								<?php endif; ?>
							</div>
						</div>
					<?php
						$roleActive = "";
					endforeach; ?>
				</div>
			</div>
			<div class="container">
				<div class="box-item-main leadership__author__box">
					<?php foreach ($leadersRoles as $key => $roleObj) : ?>
						<?php foreach ($roleObj['leaders'] as $index => $product) : ?>
							<div class="leadership__author__box-item" key="<?php echo esc_attr($index); ?>" data-id="<?php echo esc_attr($key); ?>__role__<?php echo esc_attr($index); ?>" data-role="<?php echo esc_attr($key); ?>">
								<div class="leadership__author__box-item-inner">
									<div class="leadership__author__box-item-inner-img">
										<?php if (! empty($product['leadershipHeadshot'])) : ?>
											<img src="<?php echo esc_url($product['leadershipHeadshot']); ?>" alt="Leadership" class="author-img wow" />
										<?php else : ?>
											<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/placeholder-image.jpeg'); ?>" alt="placeholder img" class="author-img wow" />
										<?php endif; ?>
									</div>
									<div class="leadership__author__box-item-inner-content">
										<?php if ($displayauthorname) : ?>
											<h3 class="leadershipName" style="<?php echo esc_attr($authorname_styles); ?>"><?php echo wp_kses_post($product['leadershipName']); ?></h3>
										<?php endif; ?>
										<?php if ($displayauthortitle) : ?>
											<p class="leadershipTitle" style="<?php echo esc_attr($authortitle_styles); ?>"><?php echo wp_kses_post($product['leadershipTitle']); ?></p>
										<?php endif; ?>
										<div class="leadership__author__box-item-inner-button">
											<button class="leadership__author__box-item-inner-button-btn md-btn-main btn-link-right-arrow" data-toggle="modal" data-target=".leadership__popup-model"><?php esc_html_e('Read More', 'md-woodward'); ?></button>
										</div>
									</div>
								</div>
							</div>
						<?php endforeach; ?>
					<?php endforeach; ?>
				</div>
				<div class="leader_role_popup">
					<?php foreach ($leadersRoles as $key => $roleObj) : ?>
						<?php foreach ($roleObj['leaders'] as $index => $product) : ?>
							<div class="leader_role_popup__wrap" data-target="<?php echo esc_attr($key); ?>__role__<?php echo esc_attr($index); ?>">
								<div class="leader_role_popup__inner">
									<div class="leader_role_popup__inner-header">
										<i class="dashicons dashicons-no-alt close-popup" role="button" aria-label="close popup"></i>
									</div>
									<div class="leader_role_popup__inner-content">
										<div class="leader_role_popup__inner-content-heading">
											<div class="leader_role_popup__inner-content-img-wrap">
												<?php if (! empty($product['leadershipHeadshot'])) : ?>
													<img src="<?php echo esc_url($product['leadershipHeadshot']); ?>" alt="Leadership" class="author-img wow" />
												<?php else : ?>
													<img src="<?php echo esc_url(get_template_directory_uri() . '/assets/src/images/placeholder-image.jpeg'); ?>" alt="placeholder img" class="author-img wow" />
												<?php endif; ?>
											</div>
											<div class="leader_role_popup__inner-content-heading-text">
												<h3 class="leadershipName" style="<?php echo esc_attr($authorname_styles); ?>"><?php echo wp_kses_post($product['leadershipName']); ?></h3>
												<p class="leadershipTitle" style="<?php echo esc_attr($authortitle_styles); ?>"><?php echo wp_kses_post($product['leadershipTitle']); ?></p>
											</div>
										</div>
										<div class="leader_role_popup__inner-content-text">
											<p><?php echo wp_kses_post($product['leadershipBio']); ?></p>
										</div>
									</div>
								</div>
							</div>
						<?php endforeach; ?>
					<?php endforeach; ?>
				</div>
			</div>
		</div>
<?php
		$html = ob_get_clean();
		return $html;
	}
}

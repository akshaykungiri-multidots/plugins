<?php
/**
 * Elementor Widgets.
 *
 * @package    MD_Threatdown
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Threatdown\Inc\Elementors;


/**
 * Threatdown_Hero_Banner class
 * 
 * @since 1.0.0
 */
class Threatdown_Hero_Banner extends \Elementor\Widget_Base {

	/**
	 * Get widget name.
	 *
	 * Retrieve list widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name() {
		return 'threatdown-hero-banner';
	}

	/**
	 * Get widget title.
	 *
	 * Retrieve list widget title.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget title.
	 */
	public function get_title() {
		return esc_html__( 'Threatdown Hero Banner', 'md-threatdown' );
	}

	/**
	 * Get widget icon.
	 *
	 * Retrieve list widget icon.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget icon.
	 */
	public function get_icon() {
		return 'eicon-call-to-action';
	}

	/**
	 * Get widget categories.
	 *
	 * Retrieve the list of categories the list widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget categories.
	 */
	public function get_categories() {
		return [ 'md-threatdown-addons' ];
	}

	/**
	 * Get widget keywords.
	 *
	 * Retrieve the list of keywords the list widget belongs to.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return array Widget keywords.
	 */
	public function get_keywords() {
		return [ 'hero', 'threatdown', 'banner' ];
	}

	/**
	 * Get custom help URL.
	 *
	 * Retrieve a URL where the user can get more information about the widget.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget help URL.
	 */
	public function get_custom_help_url() {
		return 'https://developers.elementor.com/docs/widgets/';
	}

	/**
	 * Register faq widget controls.
	 *
	 * Add input fields to allow the user to customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls() {

		// Content Section
		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'md-threatdown' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your title', 'md-threatdown' ),
				'label_block' => true,
			]
		);

		// Sub Heading
		$this->add_control(
			'sub_heading',
			[
				'label'       => esc_html__( 'Sub Heading', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your sub title', 'md-threatdown' ),
				'label_block' => true,
			]
		);

		// Description
		$this->add_control(
			'description',
			[
				'label'       => esc_html__( 'Description', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Enter your description', 'md-threatdown' ),
				'label_block' => true,
			]
		);

		// Button Text and Link
		$this->add_control(
			'button_text',
			[
				'label'       => esc_html__( 'Button Text', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your button text', 'md-threatdown' ),
				'label_block' => true,
			]
		);

		$this->add_control(
			'button_link',
			[
				'label'       => esc_html__( 'Button Link', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-threatdown' ),
				'label_block' => true,
			]
		);

		// Banner Image
		$this->add_control(
			'banner_image',
			[
				'label'   => esc_html__( 'Banner Image', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->end_controls_section();

		// Style Section
		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'md-threatdown' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Alignment
		$this->add_control(
			'alignment',
			[
				'label'   => esc_html__( 'Alignment', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left'   => [
						'title' => esc_html__( 'Left', 'md-threatdown' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'md-threatdown' ),
						'icon'  => 'eicon-text-align-center',
					],
					'right'  => [
						'title' => esc_html__( 'Right', 'md-threatdown' ),
						'icon'  => 'eicon-text-align-right',
					],
				],
				'default' => 'left',
				'selectors' => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content' => 'text-align: {{VALUE}};',
				],
			]
		);

		// Heading Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-threatdown' ),
				'selector' => 
				'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h1,
				{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h2,
				{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h3,
				{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h4,
				{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h5,
				{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h6,
				{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading p',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__heading h6' => 'color: {{VALUE}}',
				],
			]
		);

		// Sub Heading Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'sub_heading_typography',
				'label'    => esc_html__( 'Sub Heading Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__subheading',
			]
		);

		$this->add_control(
			'sub_heading_color',
			[
				'label'     => esc_html__( 'Sub Heading Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content p' => 'color: {{VALUE}}',
				],
			]
		);

		// Description Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'description_typography',
				'label'    => esc_html__( 'Description Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__description',
			]
		);

		$this->add_control(
			'description_color',
			[
				'label'     => esc_html__( 'Description Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-content__description' => 'color: {{VALUE}}',
				],
			]
		);

		// Button Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'button_typography',
				'label'    => esc_html__( 'Button Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-btn',
			]
		);

		// Button Padding
		$this->add_control(
			'button_padding',
			[
				'label'      => esc_html__( 'Button Padding', 'md-threatdown' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-btn' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button Border Group Control.
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'button_hero_banner_border',
				'label'    => esc_html__( 'Border', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-btn',
			]
		);

		$this->add_control(
			'button_hero_banner_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'md-threatdown' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-btn' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button Normal and Hover Tabs.
		$this->start_controls_tabs( 'button_tabs' );

		$this->start_controls_tab(
			'normal',
			[
				'label' => esc_html__( 'Normal', 'md-threatdown' ),
			]
		);

		$this->add_control(
			'button_color',
			[
				'label'     => esc_html__( 'Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-btn' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_bg_color',
			[
				'label'     => esc_html__( 'Background Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-btn' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_hero_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-btn' => 'border-color: {{VALUE}}',
				],
			]
		);
		
		$this->end_controls_tab();

		$this->start_controls_tab(
			'hover',
			[
				'label' => esc_html__( 'Hover', 'md-threatdown' ),
			]
		);

		$this->add_control(
			'button_hover_color',
			[
				'label'     => esc_html__( 'Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-btn:hover' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_hover_bg_color',
			[
				'label'     => esc_html__( 'Background Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-btn:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_hover_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content .threatdown-hero-banner-btn:hover' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		// Banner Content Width.
		$this->add_responsive_control(
			'banner_content_width',
			[
				'label'           => esc_html__( 'Content Width', 'md-threatdown' ),
				'type'            => \Elementor\Controls_Manager::SLIDER,
				'size_units'      => [ 'px', '%' ],
				'range'           => [
					'px' => [
						'min'  => 0,
						'max'  => 1200,
						'step' => 1,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
				],
				'default'         => [
					'size' => 100,
					'unit' => '%',
				],
				'selectors'       => [
					'{{WRAPPER}} .threatdown-hero-banner' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Banner Content Gap.
		$this->add_responsive_control(
			'banner_content_gap',
			[
				'label'           => esc_html__( 'Content Gap', 'md-threatdown' ),
				'type'            => \Elementor\Controls_Manager::SLIDER,
				'size_units'      => [ 'px', 'em', '%' ],
				'range'           => [
					'px' => [
						'min'  => 0,
						'max'  => 1200,
						'step' => 1,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
				],
				'default'         => [
					'size' => 20,
					'unit' => 'px',
				],
				'selectors'       => [
					'{{WRAPPER}} .threatdown-hero-banner .threatdown-hero-banner-content' => 'gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Banner Image Size, Position and Overlay.
		$this->add_control(
			'banner_image_size',
			[
				'label'   => esc_html__( 'Image Size', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'cover'   => esc_html__( 'Cover', 'md-threatdown' ),
					'contain' => esc_html__( 'Contain', 'md-threatdown' ),
				],
				'default' => 'cover',
			]
		);

		$this->add_control(
			'banner_image_position',
			[
				'label'   => esc_html__( 'Image Position', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'center center' => esc_html__( 'Center Center', 'md-threatdown' ),
					'center top'    => esc_html__( 'Center Top', 'md-threatdown' ),
					'center bottom' => esc_html__( 'Center Bottom', 'md-threatdown' ),
					'left top'      => esc_html__( 'Left Top', 'md-threatdown' ),
					'left center'   => esc_html__( 'Left Center', 'md-threatdown' ),
					'left bottom'   => esc_html__( 'Left Bottom', 'md-threatdown' ),
					'right top'     => esc_html__( 'Right Top', 'md-threatdown' ),
					'right center'  => esc_html__( 'Right Center', 'md-threatdown' ),
					'right bottom'  => esc_html__( 'Right Bottom', 'md-threatdown' ),
				],
				'default' => 'center center',
			]
		);

		$this->add_control(
			'banner_image_overlay',
			[
				'label'   => esc_html__( 'Image Overlay', 'md-threatdown' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'none'    => esc_html__( 'None', 'md-threatdown' ),
					'color'   => esc_html__( 'Color', 'md-threatdown' ),
					'gradient' => esc_html__( 'Gradient', 'md-threatdown' ),
				],
				'default' => 'none',
			]
		);

		$this->end_controls_section();

	}

	/**
	 * Render faq widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
		<div class="threatdown-hero-banner-container">
			<div class="threatdown-container">
				<div class="threatdown-hero-banner-absolute">
					<div class="threatdown-hero-banner-absolute___background"></div>
				</div>
				<div class="threatdown-hero-banner">
					<div class="threatdown-hero-banner-content">
						<div class="threatdown-hero-banner-content__heading"><?php echo wp_kses_post( $settings['heading'] ); ?></div>
						<h3 class="threatdown-hero-banner-content__subheading"><?php echo esc_html( $settings['sub_heading'] ); ?></h3>
						<p class="threatdown-hero-banner-content__description"><?php echo esc_html( $settings['description'] ); ?></p>
						<div class="threatdown-hero-banner-btn-group">
							<a href="<?php echo esc_url( $settings['button_link']['url'] ); ?>" class="threatdown-hero-banner-btn"><?php echo esc_html( $settings['button_text'] ); ?></a>
						</div>
					</div>
					<?php if ( ! empty( $settings['banner_image']['url'] ) ) : ?>
						<div class="threatdown-hero-banner-image">
							<img src="<?php echo esc_url( $settings['banner_image']['url'] ); ?>" alt="<?php echo esc_attr( $settings['heading'] ); ?>">
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>

        <?php
	}

	/**
	 * Render faq widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function content_template() {
        ?>
		<div class="threatdown-hero-banner-container">
			<div class="threatdown-container">
				<div class="threatdown-hero-banner-absolute">
					<div class="threatdown-hero-banner-absolute___background"></div>
				</div>
				<div class="threatdown-hero-banner">
					<div class="threatdown-hero-banner-content">
						<div class="threatdown-hero-banner-content__heading">{{{ settings.heading }}}</div>
						<h3 class="threatdown-hero-banner-content__subheading">{{{ settings.sub_heading }}}</h3>
						<p class="threatdown-hero-banner-content__description">{{{ settings.description }}}</p>
						<div class="threatdown-hero-banner-btn-group">
							<a href="{{{ settings.button_link.url }}}" class="threatdown-hero-banner-btn">{{{ settings.button_text }}}</a>
						</div>
					</div>
					<# if ( settings.banner_image.url ) { #>
						<div class="threatdown-hero-banner-image">
							<img src="{{{ settings.banner_image.url }}}" alt="{{{ settings.heading }}}">
						</div>
					<# } #>
				</div>
			</div>
		</div>
        <?php
	}

}
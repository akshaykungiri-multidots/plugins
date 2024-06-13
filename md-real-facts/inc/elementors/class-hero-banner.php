<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Real_Facts
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Real_Facts\Inc\Elementors;


/**
 * Hero_Banner class
 * 
 * @since 1.0.0
 */
class Hero_Banner extends \Elementor\Widget_Base {

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
		return 'hero-banner';
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
		return esc_html__( 'Hero Banner', 'md-real-facts' );
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
		return [ 'md-real-facts-addons' ];
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
		return [ 'hero', 'real', 'banner' ];
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
				'label' => esc_html__( 'Content', 'md-real-facts' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your title', 'md-real-facts' ),
				'label_block' => true,
			]
		);

		// Sub Heading
		$this->add_control(
			'sub_heading',
			[
				'label'       => esc_html__( 'Sub Heading', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your sub title', 'md-real-facts' ),
				'label_block' => true,
			]
		);

		// Button Text and Link
		$this->add_control(
			'button_text',
			[
				'label'       => esc_html__( 'Button Text', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your button text', 'md-real-facts' ),
				'label_block' => true,
			]
		);

		$this->add_control(
			'button_link',
			[
				'label'       => esc_html__( 'Button Link', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-real-facts' ),
				'label_block' => true,
			]
		);

		// Banner Image
		$this->add_control(
			'banner_image',
			[
				'label'   => esc_html__( 'Banner Image', 'md-real-facts' ),
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
				'label' => esc_html__( 'Style', 'md-real-facts' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Alignment
		$this->add_control(
			'alignment',
			[
				'label'   => esc_html__( 'Alignment', 'md-real-facts' ),
				'type'    => \Elementor\Controls_Manager::CHOOSE,
				'options' => [
					'left'   => [
						'title' => esc_html__( 'Left', 'md-real-facts' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'md-real-facts' ),
						'icon'  => 'eicon-text-align-center',
					],
					'right'  => [
						'title' => esc_html__( 'Right', 'md-real-facts' ),
						'icon'  => 'eicon-text-align-right',
					],
				],
				'default' => 'left',
				'selectors' => [
					'{{WRAPPER}} .hero-banner .hero-banner-content' => 'text-align: {{VALUE}};',
				],
			]
		);

		// Heading Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-real-facts' ),
				'selector' => 
				'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h1,
				{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h2,
				{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h3,
				{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h4,
				{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h5,
				{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h6,
				{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading p',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__heading h6' => 'color: {{VALUE}}',
				],
			]
		);

		// Sub Heading Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'sub_heading_typography',
				'label'    => esc_html__( 'Sub Heading Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-content__subheading',
			]
		);

		$this->add_control(
			'sub_heading_color',
			[
				'label'     => esc_html__( 'Sub Heading Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-banner .hero-banner-content p' => 'color: {{VALUE}}',
				],
			]
		);

		// Button Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'button_typography',
				'label'    => esc_html__( 'Button Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-btn',
			]
		);

		// Button Padding
		$this->add_control(
			'button_padding',
			[
				'label'      => esc_html__( 'Button Padding', 'md-real-facts' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-btn' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button Border Group Control.
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'button_border',
				'label'    => esc_html__( 'Border', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-btn',
			]
		);

		$this->add_control(
			'button_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'md-real-facts' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-btn' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button Normal and Hover Tabs.
		$this->start_controls_tabs( 'button_tabs' );

		$this->start_controls_tab(
			'normal',
			[
				'label' => esc_html__( 'Normal', 'md-real-facts' ),
			]
		);

		$this->add_control(
			'button_color',
			[
				'label'     => esc_html__( 'Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-btn' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_bg_color',
			[
				'label'     => esc_html__( 'Background Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-btn' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-btn' => 'border-color: {{VALUE}}',
				],
			]
		);
		
		$this->end_controls_tab();

		$this->start_controls_tab(
			'hover',
			[
				'label' => esc_html__( 'Hover', 'md-real-facts' ),
			]
		);

		$this->add_control(
			'button_hover_color',
			[
				'label'     => esc_html__( 'Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-btn:hover' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_hover_bg_color',
			[
				'label'     => esc_html__( 'Background Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-btn:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_hover_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-banner .hero-banner-content .hero-banner-btn:hover' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		// Banner Image Size, Position and Overlay.
		$this->add_control(
			'banner_image_size',
			[
				'label'   => esc_html__( 'Image Size', 'md-real-facts' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'cover'   => esc_html__( 'Cover', 'md-real-facts' ),
					'contain' => esc_html__( 'Contain', 'md-real-facts' ),
				],
				'default' => 'cover',
			]
		);

		$this->add_control(
			'banner_image_position',
			[
				'label'   => esc_html__( 'Image Position', 'md-real-facts' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'center center' => esc_html__( 'Center Center', 'md-real-facts' ),
					'center top'    => esc_html__( 'Center Top', 'md-real-facts' ),
					'center bottom' => esc_html__( 'Center Bottom', 'md-real-facts' ),
					'left top'      => esc_html__( 'Left Top', 'md-real-facts' ),
					'left center'   => esc_html__( 'Left Center', 'md-real-facts' ),
					'left bottom'   => esc_html__( 'Left Bottom', 'md-real-facts' ),
					'right top'     => esc_html__( 'Right Top', 'md-real-facts' ),
					'right center'  => esc_html__( 'Right Center', 'md-real-facts' ),
					'right bottom'  => esc_html__( 'Right Bottom', 'md-real-facts' ),
				],
				'default' => 'center center',
			]
		);

		$this->add_control(
			'banner_image_overlay',
			[
				'label'   => esc_html__( 'Image Overlay', 'md-real-facts' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'none'    => esc_html__( 'None', 'md-real-facts' ),
					'color'   => esc_html__( 'Color', 'md-real-facts' ),
					'gradient' => esc_html__( 'Gradient', 'md-real-facts' ),
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

		<div class="hero-banner">
			<div class="hero-banner-content">
				<div class="hero-banner-content__heading"><?php echo wp_kses_post( $settings['heading'] ); ?></div>
				<p class="hero-banner-content__subheading"><?php echo esc_html( $settings['sub_heading'] ); ?></p>
				<div class="hero-banner-btn-group">
					<a href="<?php echo esc_url( $settings['button_link']['url'] ); ?>" class="hero-banner-btn"><?php echo esc_html( $settings['button_text'] ); ?></a>
				</div>
			</div>
			<?php if ( ! empty( $settings['banner_image']['url'] ) ) : ?>
				<div class="hero-banner-image">
					<img src="<?php echo esc_url( $settings['banner_image']['url'] ); ?>" alt="<?php echo esc_attr( $settings['heading'] ); ?>">
				</div>
			<?php endif; ?>
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

		<div class="hero-banner">
			<div class="hero-banner-content">
				<div class="hero-banner-content__heading">{{{ settings.heading }}}</div>
				<p class="hero-banner-content__subheading">{{{ settings.sub_heading }}}</p>
				<div class="hero-banner-btn-group">
					<a href="{{{ settings.button_link.url }}}" class="hero-banner-btn">{{{ settings.button_text }}}</a>
				</div>
			</div>
			<# if ( settings.banner_image.url ) { #>
				<div class="hero-banner-image">
					<img src="{{{ settings.banner_image.url }}}" alt="{{{ settings.heading }}}">
				</div>
			<# } #>
		</div>

        <?php
	}

}
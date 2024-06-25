<?php
/**
 * Elementor Widgets.
 *
 * @package    MD_Threatdown
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Threatdown\Inc\Elementors;


/**
 * Threatdown_Get_Quote class
 * 
 * @since 1.0.0
 */
class Threatdown_Get_Quote extends \Elementor\Widget_Base {

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
		return 'threatdown-get-quote';
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
		return esc_html__( 'Threatdown Get Quote', 'md-threatdown' );
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
		return [ 'threatdown', 'get', 'quote', 'button', 'cta' ];
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
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your title', 'md-threatdown' ),
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
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content' => 'text-align: {{VALUE}};',
				],
			]
		);

		// Heading Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-content__heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-content__heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Description Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'description_typography',
				'label'    => esc_html__( 'Description Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-content__description',
			]
		);

		$this->add_control(
			'description_color',
			[
				'label'     => esc_html__( 'Description Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-content__description' => 'color: {{VALUE}}',
				],
			]
		);

		// Button Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'button_typography',
				'label'    => esc_html__( 'Button Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-btn',
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
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-btn' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button Border Group Control.
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'button_hero_banner_border',
				'label'    => esc_html__( 'Border', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-btn',
			]
		);

		$this->add_control(
			'button_hero_banner_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'md-threatdown' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-btn' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-btn' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_bg_color',
			[
				'label'     => esc_html__( 'Background Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-btn' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_hero_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-btn' => 'border-color: {{VALUE}}',
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
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-btn:hover' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_hover_bg_color',
			[
				'label'     => esc_html__( 'Background Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-btn:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_hover_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content .threatdown-get-quote-btn:hover' => 'border-color: {{VALUE}}',
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
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content' => 'width: {{SIZE}}{{UNIT}};',
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
					'{{WRAPPER}} .threatdown-get-quote .threatdown-get-quote-content' => 'gap: {{SIZE}}{{UNIT}};',
				],
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
		$alignment = "flex-start;";
		if ( 'center' === $settings['alignment'] ) {
			$alignment = "center;";
		} elseif ( 'right' === $settings['alignment'] ) {
			$alignment = "flex-end;";
		}
        ?>
		<div class="threatdown-get-quote-container">
			<div class="threatdown-get-quote" style="justify-content: <?php echo esc_attr( $alignment ); ?>;">
				<div class="threatdown-get-quote-content">
					<h2 class="threatdown-get-quote-content__heading"><?php echo wp_kses_post( $settings['heading'] ); ?></h2>
					<p class="threatdown-get-quote-content__description"><?php echo esc_html( $settings['description'] ); ?></p>
					<div class="threatdown-get-quote-btn-group">
						<a href="<?php echo esc_url( $settings['button_link']['url'] ); ?>" class="threatdown-get-quote-btn"><?php echo esc_html( $settings['button_text'] ); ?></a>
					</div>
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
		<# 
		var alignment = 'flex-start;';
		if ( 'center' === settings.alignment ) {
			alignment = 'center;';
		} else if ( 'right' === settings.alignment ) {
			alignment = 'flex-end;';
		} 
		#>
		<div class="threatdown-get-quote-container">
			<div class="threatdown-get-quote" style="justify-content: {{ alignment }};">
				<div class="threatdown-get-quote-content">
					<h2 class="threatdown-get-quote-content__heading">{{{ settings.heading }}}</h2>
					<p class="threatdown-get-quote-content__description">{{{ settings.description }}}</p>
					<div class="threatdown-get-quote-btn-group">
						<a href="{{{ settings.button_link.url }}}" class="threatdown-get-quote-btn">{{{ settings.button_text }}}</a>
					</div>
				</div>
			</div>
		</div>
        <?php
	}

}
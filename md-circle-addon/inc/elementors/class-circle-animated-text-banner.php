<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_Animated_Text_Banner class
 * 
 * @since 1.0.0
 */
class Circle_Animated_Text_Banner extends \Elementor\Widget_Base {

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
		return 'circle-animated-text-banner';
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
		return esc_html__( 'Animated Text Banner', 'circle-addon' );
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
		return 'eicon-form-horizontal';
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
		return [ 'md-circle-addon' ];
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
		return [ 'circle', 'animated', 'banner' ];
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

        // Content Section.

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Normal Title.
		$this->add_control(
			'normal_title',
			[
				'label' => esc_html__( 'Normal Title', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'The all-in-one community platform for ', 'circle-addon' ),
			]
		);

		// Animated Title as Repeater.

		$repeaters = new \Elementor\Repeater();

		$repeaters->add_control(
			'animated_title',
			[
				'label' => esc_html__( 'Animated Title', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Communities', 'circle-addon' ),
			]
		);

		$this->add_control(
			'animated_titles',
			[
				'label' => esc_html__( 'Animated Titles', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeaters->get_controls(),
				'default' => [
					[
						'animated_title' => esc_html__( 'Communities', 'circle-addon' ),
					],
					[
						'animated_title' => esc_html__( 'Creators', 'circle-addon' ),
					],
					[
						'animated_title' => esc_html__( 'Brands', 'circle-addon' ),
					],
				],
				'title_field' => '{{{ animated_title }}}',
			]
		);

		// Sub Title Field.
		$this->add_control(
			'sub_title',
			[
				'label' => esc_html__( 'Sub Title', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Build a home for your community, events, and courses — all under your own brand.', 'circle-addon' ),
			]
		);

		// Get Started Email Place Holder.
		$this->add_control(
			'get_started_email_placeholder',
			[
				'label' => esc_html__( 'Get Started Email Placeholder', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Enter your email address', 'circle-addon' ),
			]
		);

		// Get Started Button Text.
		$this->add_control(
			'get_started_button_text',
			[
				'label' => esc_html__( 'Get Started Button Text', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Get Started', 'circle-addon' ),
			]
		);

		// Get Started Form Action.
		$this->add_control(
			'get_started_form_action',
			[
				'label' => esc_html__( 'Get Started Form Action', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_url( '#' ),
			]
		);

		$this->end_controls_section();

		// Style Section.

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Background Group Control.

		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'background',
				'label' => esc_html__( 'Background', 'circle-addon' ),
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}}',
			]
		);

		// Title Typography.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'title_typography',
				'label' => esc_html__( 'Title Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__title',
			]
		);

		// Title Color.

		$this->add_control(
			'title_color',
			[
				'label' => esc_html__( 'Title Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__title' => 'color: {{VALUE}}',
				],
			]
		);

		// Animated Title Color.

		$this->add_control(
			'animated_title_color',
			[
				'label' => esc_html__( 'Animated Title Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__title .animated-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Sub Title Typography.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'sub_title_typography',
				'label' => esc_html__( 'Sub Title Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__sub-title',
			]
		);

		// Sub Title Color.

		$this->add_control(
			'sub_title_color',
			[
				'label' => esc_html__( 'Sub Title Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__sub-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Get Started Email Placeholder Typography.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'get_started_email_placeholder_typography',
				'label' => esc_html__( 'Get Started Email Placeholder Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__get-started-form .get-started-email',
			]
		);

		// Get Started Email Placeholder Color.

		$this->add_control(
			'get_started_email_placeholder_color',
			[
				'label' => esc_html__( 'Get Started Email Placeholder Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__get-started-form .get-started-email' => 'color: {{VALUE}}',
				],
			]
		);

		// Get Started Button Typography.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'get_started_button_typography',
				'label' => esc_html__( 'Get Started Button Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__get-started-form .get-started-button',
			]
		);

		// Get Started Button Padding.

		$this->add_control(
			'get_started_button_padding',
			[
				'label' => esc_html__( 'Get Started Button Padding', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__get-started-form .get-started-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				],
			]
		);

		// Get Started Button Normal and Hover Tabs.

		$this->start_controls_tabs( 'get_started_button_tabs' );

		// Get Started Button Normal Tab.

		$this->start_controls_tab(
			'get_started_button_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'circle-addon' ),
			]
		);

		// Get Started Button Normal Color.

		$this->add_control(
			'get_started_button_normal_color',
			[
				'label' => esc_html__( 'Button Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__get-started-form .get-started-button' => 'color: {{VALUE}}',
				],
			]
		);

		// Get Started Button Normal Background Group Control.

		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'get_started_button_normal_background',
				'label' => esc_html__( 'Button Background', 'circle-addon' ),
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__get-started-form .get-started-button',
			]
		);

		$this->end_controls_tab();

		// Get Started Button Hover Tab.

		$this->start_controls_tab(
			'get_started_button_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'circle-addon' ),
			]
		);

		// Get Started Button Hover Color.

		$this->add_control(
			'get_started_button_hover_color',
			[
				'label' => esc_html__( 'Button Hover Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__get-started-form .get-started-button:hover' => 'color: {{VALUE}}',
				],
			]
		);

		// Get Started Button Hover Background Group Control.

		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name' => 'get_started_button_hover_background',
				'label' => esc_html__( 'Button Hover Background', 'circle-addon' ),
				'types' => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .circle-animated-text-banner .circle-animated-text-banner__get-started-form .get-started-button:hover',
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();


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

		<div class="circle-animated-text-banner">
			<h2 class="circle-animated-text-banner__title">
				<span class="normal-title"><?php echo esc_html( $settings['normal_title'] ); ?></span>
				<span class="animated-title" data-animated-titles="<?php echo esc_attr( wp_json_encode( $settings['animated_titles'] ) ); ?>"></span>
			</h2>

			<p class="circle-animated-text-banner__sub-title"><?php echo esc_html( $settings['sub_title'] ); ?></p>

			<form class="circle-animated-text-banner__get-started-form" action="<?php echo esc_url( $settings['get_started_form_action'] ); ?>">
				<input type="email" class="get-started-email" placeholder="<?php echo esc_attr( $settings['get_started_email_placeholder'] ); ?>">
				<button class="get-started-button"><?php echo esc_html( $settings['get_started_button_text'] ); ?></button>
			</form>
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

		<div class="circle-animated-text-banner">
			<h2 class="circle-animated-text-banner__title">
				<span class="normal-title">{{{ settings.normal_title }}}</span>
				<span class="animated-title" data-animated-titles="{{{ settings.animated_titles }}}"></span>
			</h2>

			<p class="circle-animated-text-banner__sub-title">{{{ settings.sub_title }}}</p>

			<form class="circle-animated-text-banner__get-started-form" action="{{{ settings.get_started_form_action }}}">
				<input type="email" class="get-started-email" placeholder="{{{ settings.get_started_email_placeholder }}}">
				<button class="get-started-button">{{{ settings.get_started_button_text }}}</button>
			</form>

		</div>

        <?php
	}

}
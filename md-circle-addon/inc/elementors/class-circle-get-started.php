<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_Get_Started class
 * 
 * @since 1.0.0
 */
class Circle_Get_Started extends \Elementor\Widget_Base {

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
		return 'circle_get_started';
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
		return esc_html__( 'Circle Get Started', 'circle-addon' );
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
		return 'eicon-email-field';
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
		return [ 'circle', 'get', 'started' ];
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

		// Content Section including Heading, email text, button text, form link, info text.

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'circle-addon' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'circle-addon' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your heading', 'circle-addon' ),
			]
		);

		$this->add_control(
			'email_text',
			[
				'label'       => esc_html__( 'Email Text', 'circle-addon' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your email text', 'circle-addon' ),
			]
		);

		$this->add_control(
			'button_text',
			[
				'label'       => esc_html__( 'Button Text', 'circle-addon' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your button text', 'circle-addon' ),
			]
		);

		$this->add_control(
			'form_link',
			[
				'label'       => esc_html__( 'Form Link', 'circle-addon' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'Enter your form link', 'circle-addon' ),
			]
		);

		$this->add_control(
			'info_text',
			[
				'label'       => esc_html__( 'Info Text', 'circle-addon' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Enter your info text', 'circle-addon' ),
			]
		);

		$this->end_controls_section();

		// Style Section.

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'circle-addon' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Heading Tpypgraphy.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-get-started-heading',
			]
		);

		// Heading Color.

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Heading Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-get-started-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Email Text Tpypgraphy.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'email_text_typography',
				'label'    => esc_html__( 'Email Text Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} input[type="email"]',
			]
		);

		// Email Text Color.

		$this->add_control(
			'email_text_color',
			[
				'label'     => esc_html__( 'Email Text Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-get-started-email-text' => 'color: {{VALUE}}',
				],
			]
		);

		// Button Text Tpypgraphy.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'button_text_typography',
				'label'    => esc_html__( 'Button Text Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-get-started-button-text',
			]
		);

		// Tabs for Normal and Hover for Button Text and Button Background.
		
		$this->start_controls_tabs( 'button_style_tabs' );

		// Normal Tab.

		$this->start_controls_tab(
			'button_style_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'circle-addon' ),
			]
		);

		// Button Text Color.

		$this->add_control(
			'button_text_color',
			[
				'label'     => esc_html__( 'Button Text Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-get-started-button-text' => 'color: {{VALUE}}',
				],
			]
		);

		// Button Background Color.

		$this->add_control(
			'button_background_color',
			[
				'label'     => esc_html__( 'Button Background Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-get-started-button' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		// Hover Tab.

		$this->start_controls_tab(
			'button_style_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'circle-addon' ),
			]
		);

		// Button Text Hover Color.
		
		$this->add_control(
			'button_text_hover_color',
			[
				'label'     => esc_html__( 'Button Text Hover Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-get-started-button:hover .circle-get-started-button-text' => 'color: {{VALUE}}',
				],
			]
		);

		// Button Background Hover Color.

		$this->add_control(
			'button_background_hover_color',
			[
				'label'     => esc_html__( 'Button Background Hover Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-get-started-button:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();
		
		// Info Text Tpypgraphy.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'info_text_typography',
				'label'    => esc_html__( 'Info Text Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-get-started-info-text',
			]
		);

		// Info Text Color.

		$this->add_control(
			'info_text_color',
			[
				'label'     => esc_html__( 'Info Text Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-get-started-info-text' => 'color: {{VALUE}}',
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
        ?>

		<div class="circle-get-started">
			<h2 class="circle-get-started-heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
			<form action="<?php echo esc_url( $settings['form_link']['url'] ); ?>" method="post">
				<input type="email" name="email" placeholder="<?php echo esc_html( $settings['email_text'] ); ?>" required  autocomplete="false" />
				<button type="submit" class="circle-get-started-button">
					<span class="circle-get-started-button-text"><?php echo esc_html( $settings['button_text'] ); ?></span>
				</button>
			</form>
			<p class="circle-get-started-info-text"><?php echo esc_html( $settings['info_text'] ); ?></p>
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

		<div class="circle-get-started">
			<h2 class="circle-get-started-heading">{{{ settings.heading }}}</h2>
			<form action="{{{ settings.form_link.url }}}" method="post">
				<input autocomplete="false" type="email" name="email" placeholder="{{{ settings.email_text }}}" required />
				<button type="submit" class="circle-get-started-button">
					<span class="circle-get-started-button-text">{{{ settings.button_text }}}</span>
				</button>
			</form>
			<p class="circle-get-started-info-text">{{{ settings.info_text }}}</p>
		</div>

        <?php
	}

}
<?php
/**
 * Elementor Widgets.
 *
 * @package    MD_Threatdown
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Threatdown\Inc\Elementors;


/**
 * Threatdown_Cross_BG class
 * 
 * @since 1.0.0
 */
class Threatdown_Cross_BG extends \Elementor\Widget_Base {

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
		return 'threatdown-cross-bg';
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
		return esc_html__( 'Threatdown Cross Background', 'md-threatdown' );
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
		return [ 'threatdown', 'cross', 'background' ];
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

		// Layout Section
		$this->start_controls_section(
			'layout_section',
			[
				'label' => esc_html__( 'Layout', 'md-threatdown' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Width and Height
		$this->add_responsive_control(
			'width',
			[
				'label' => esc_html__( 'Width', 'md-threatdown' ),
				'type'  => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1920,
						'step' => 1,
					],
					'em' => [
						'min' => 0,
						'max' => 120,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
						'step' => 1,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => '%',
				],
				'selectors' => [
					'{{WRAPPER}} .threatdown-cross-bg' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'height',
			[
				'label' => esc_html__( 'Height', 'md-threatdown' ),
				'type'  => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1920,
						'step' => 1,
					],
					'em' => [
						'min' => 0,
						'max' => 120,
						'step' => 1,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
						'step' => 1,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => '%',
				],
				'selectors' => [
					'{{WRAPPER}} .threatdown-cross-bg' => 'height: {{SIZE}}{{UNIT}};',
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

		// Background Group Control.
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'background',
				'label'    => esc_html__( 'Background', 'md-threatdown' ),
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}}::before',
			]
		);

		// margin
		$this->add_responsive_control(
			'margin',
			[
				'label' => esc_html__( 'Margin', 'md-threatdown' ),
				'type'  => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}}' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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

		<div class="threatdown-cross-bg">
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
		<div class="threatdown-cross-bg">
		</div>
        <?php
	}

}
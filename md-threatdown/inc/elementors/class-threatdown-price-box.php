<?php
/**
 * Elementor Widgets.
 *
 * @package    MD_Threatdown
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Threatdown\Inc\Elementors;


/**
 * Threatdown_Price_Box class
 * 
 * @since 1.0.0
 */
class Threatdown_Price_Box extends \Elementor\Widget_Base {

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
		return 'threatdown-price-box';
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
		return esc_html__( 'Threatdown Price Box', 'md-threatdown' );
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
		return [ 'threatdown', 'price', 'box' ];
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

		// Content tab
		$this->start_controls_section(
			'section_content',
			[
				'label' => esc_html__( 'Content', 'md-threatdown' ),
			]
		);

		// Price Box Title.
		$this->add_control(
			'price_box_title',
			[
				'label'       => esc_html__( 'Title', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your title', 'md-threatdown' ),
				'default'     => 'Basic Plan',
			]
		);

		// Price Box best Value.
		$this->add_control(
			'price_box_best_value',
			[
				'label'        => esc_html__( 'Best Value', 'md-threatdown' ),
				'type'         => \Elementor\Controls_Manager::SWITCHER,
				'label_on'     => esc_html__( 'Yes', 'md-threatdown' ),
				'label_off'    => esc_html__( 'No', 'md-threatdown' ),
				'return_value' => 'yes',
				'default'      => 'no',
			]
		);

		// Price Box Best Value Text.
		$this->add_control(
			'price_box_best_value_text',
			[
				'label'       => esc_html__( 'Best Value Text', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your best value text', 'md-threatdown' ),
				'default'     => esc_html__( 'Best Value', 'md-threatdown' ),
				'condition'   => [
					'price_box_best_value' => 'yes',
				],
			]
		);

		// Price Box Description.
		$this->add_control(
			'price_box_description',
			[
				'label'       => esc_html__( 'Description', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Enter your description', 'md-threatdown' ),
				'default'     => 'This is a basic plan for your website.',
			]
		);

		// Price Box Price.
		$this->add_control(
			'price_box_price',
			[
				'label'       => esc_html__( 'Price', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your price', 'md-threatdown' ),
				'default'     => '$00.00',
			]
		);

		// Price Box Endpoint Per Year Text.
		$this->add_control(
			'price_box_endpoint_per_year_text',
			[
				'label'       => esc_html__( 'Endpoint Per Year Text', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your endpoint per year text', 'md-threatdown' ),
				'default'     => esc_html__( 'Per endpoint/year', 'md-threatdown' ),
			]
		);

		// Price Box Minimum Endpoint Text.
		$this->add_control(
			'price_box_minimum_endpoint_text',
			[
				'label'       => esc_html__( 'Minimum Endpoint Text', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your minimum endpoint text', 'md-threatdown' ),
				'default'     => esc_html__( 'Minimum 10 endpoints', 'md-threatdown' ),
			]
		);

		// Price Box Button Text.
		$this->add_control(
			'price_box_button_text',
			[
				'label'       => esc_html__( 'Button Text', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your button text', 'md-threatdown' ),
				'default'     => esc_html__( 'Buy Now', 'md-threatdown' ),
			]
		);

		// Price Box Button Link.
		$this->add_control(
			'price_box_button_link',
			[
				'label'       => esc_html__( 'Button Link', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-threatdown' ),
				'default'     => [
					'url' => '#',
				],
			]
		);

		// Price Box Contact Link Text.
		$this->add_control(
			'price_box_contact_link_text',
			[
				'label'       => esc_html__( 'Contact Link Text', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your contact link text', 'md-threatdown' ),
				'default'     => esc_html__( 'Contact sales', 'md-threatdown' ),
			]
		);

		// Price Box Contact Link.
		$this->add_control(
			'price_box_contact_link',
			[
				'label'       => esc_html__( 'Contact Link', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-threatdown' ),
				'default'     => [
					'url' => '#',
				],
			]
		);

		// Price Box Features Title.
		$this->add_control(
			'price_box_features_title',
			[
				'label'       => esc_html__( 'Features Title', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your features title', 'md-threatdown' ),
				'default'     => esc_html__( 'What you get:', 'md-threatdown' ),
			]
		);

		// Price Box Features.
		$price_box_features = new \Elementor\Repeater();

		$price_box_features->add_control(
			'price_box_feature',
			[
				'label'       => esc_html__( 'Feature', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your feature', 'md-threatdown' ),
				'default'     => esc_html__( 'Feature 1', 'md-threatdown' ),
			]
		);

		$this->add_control(
			'price_box_features',
			[
				'label'  => esc_html__( 'Features', 'md-threatdown' ),
				'type'   => \Elementor\Controls_Manager::REPEATER,
				'fields' => $price_box_features->get_controls(),
				'title_field' => '{{{ price_box_feature }}}',
				'default' => [
					[
						'price_box_feature' => esc_html__( 'Feature 1', 'md-threatdown' ),
					],
					[
						'price_box_feature' => esc_html__( 'Feature 2', 'md-threatdown' ),
					],
					[
						'price_box_feature' => esc_html__( 'Feature 3', 'md-threatdown' ),
					],
				],
			]
		);

		// Price Box addons Title.
		$this->add_control(
			'price_box_addons_title',
			[
				'label'       => esc_html__( 'Addons Title', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your addons title', 'md-threatdown' ),
				'default'     => esc_html__( 'Optional add-ons:', 'md-threatdown' ),
			]
		);

		// Price Box Addons.
		$price_box_addons = new \Elementor\Repeater();

		$price_box_addons->add_control(
			'price_box_addon',
			[
				'label'       => esc_html__( 'Addon', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your addon', 'md-threatdown' ),
				'default'     => esc_html__( 'Addon 1', 'md-threatdown' ),
			]
		);

		// Price Box Addons Price.
		$price_box_addons->add_control(
			'price_box_addon_price',
			[
				'label'       => esc_html__( 'Price', 'md-threatdown' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your price', 'md-threatdown' ),
				'default'     => '$00.00',
			]
		);

		$this->add_control(
			'price_box_addons',
			[
				'label'  => esc_html__( 'Addons', 'md-threatdown' ),
				'type'   => \Elementor\Controls_Manager::REPEATER,
				'fields' => $price_box_addons->get_controls(),
				'title_field' => '{{{ price_box_addon }}}',
				'default' => [
					[
						'price_box_addon' => esc_html__( 'Addon 1', 'md-threatdown' ),
						'price_box_addon_price' => '$00.00',
					],
					[
						'price_box_addon' => esc_html__( 'Addon 2', 'md-threatdown' ),
						'price_box_addon_price' => '$00.00',
					],
				],
			]
		);
		
		$this->end_controls_section();

		// Style tab
		$this->start_controls_section(
			'section_style',
			[
				'label' => esc_html__( 'Style', 'md-threatdown' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Price Box Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_title_typography',
				'label'    => esc_html__( 'Title Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-title',
			]
		);

		$this->add_control(
			'price_box_title_color',
			[
				'label'     => esc_html__( 'Title Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Best Value Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_best_value_typography',
				'label'    => esc_html__( 'Best Value Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-best-value',
				'condition' => [
					'price_box_best_value' => 'yes',
				],
			]
		);

		$this->add_control(
			'price_box_best_value_color',
			[
				'label'     => esc_html__( 'Best Value Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-best-value' => 'color: {{VALUE}}',
				],
				'condition' => [
					'price_box_best_value' => 'yes',
				],
			]
		);

		// Price Box Best Value Background Color.
		$this->add_control(
			'price_box_best_value_background_color',
			[
				'label'     => esc_html__( 'Best Value Background Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-best-value' => 'background-color: {{VALUE}}',
				],
				'condition' => [
					'price_box_best_value' => 'yes',
				],
			]
		);

		// Price Box Description Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_description_typography',
				'label'    => esc_html__( 'Description Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-description',
			]
		);

		$this->add_control(
			'price_box_description_color',
			[
				'label'     => esc_html__( 'Description Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-description' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Price Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_price_typography',
				'label'    => esc_html__( 'Price Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-price',
			]
		);

		$this->add_control(
			'price_box_price_color',
			[
				'label'     => esc_html__( 'Price Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-price' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Endpoint Per Year Text Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_endpoint_per_year_text_typography',
				'label'    => esc_html__( 'Endpoint Per Year Text Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-endpoint-per-year-text',
			]
		);

		$this->add_control(
			'price_box_endpoint_per_year_text_color',
			[
				'label'     => esc_html__( 'Endpoint Per Year Text Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-endpoint-per-year-text' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Minimum Endpoint Text Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_minimum_endpoint_text_typography',
				'label'    => esc_html__( 'Minimum Endpoint Text Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-minimum-endpoint-text',
			]
		);

		$this->add_control(
			'price_box_minimum_endpoint_text_color',
			[
				'label'     => esc_html__( 'Minimum Endpoint Text Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-minimum-endpoint-text' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Button Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_button_typography',
				'label'    => esc_html__( 'Button Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-button',
			]
		);

		// Price Box Button Padding.
		$this->add_responsive_control(
			'price_box_button_padding',
			[
				'label'      => esc_html__( 'Button Padding', 'md-threatdown' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .price-box-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Price Box Button Border Control.
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'price_box_button_border',
				'label'    => esc_html__( 'Border', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-button',
			]
		);

		// Price Box Button Border Radius Control.
		$this->add_control(
			'price_box_button_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'md-threatdown' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .price-box-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Price Box Button Normal and Hover Tabs.
		$this->start_controls_tabs( 'price_box_button_tabs' );

		// Price Box Button Normal Tab.
		$this->start_controls_tab(
			'price_box_button_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'md-threatdown' ),
			]
		);

		// Price Box Button Color.
		$this->add_control(
			'price_box_button_color',
			[
				'label'     => esc_html__( 'Text Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-button' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Button Background Color.
		$this->add_control(
			'price_box_button_background_color',
			[
				'label'     => esc_html__( 'Background Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-button' => 'background-color: {{VALUE}}',
				],
			]
		);

		// Price Box Button Border Color.
		$this->add_control(
			'price_box_price_button_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-button' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		// Price Box Button Hover Tab.
		$this->start_controls_tab(
			'price_box_button_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'md-threatdown' ),
			]
		);

		// Price Box Button Hover Color.
		$this->add_control(
			'price_box_button_hover_color',
			[
				'label'     => esc_html__( 'Text Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-button:hover' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Button Hover Background Color.
		$this->add_control(
			'price_box_button_hover_background_color',
			[
				'label'     => esc_html__( 'Background Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-button:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		// Price Box Button Hover Border Color.
		$this->add_control(
			'price_box_button_hover_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-button:hover' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		// Price Box Contact Link Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_contact_link_typography',
				'label'    => esc_html__( 'Contact Link Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-contact-link',
			]
		);

		// Price Box Contact Color.
		$this->add_control(
			'price_box_contact_link_color',
			[
				'label'     => esc_html__( 'Contact Link Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-contact-link' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Features minimum height.
		$this->add_responsive_control(
			'price_box_features_min_height',
			[
				'label'      => esc_html__( 'Features Minimum Height', 'md-threatdown' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', '%' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 500,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .price-box-features' => 'min-height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Price Box Features Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_features_title_typography',
				'label'    => esc_html__( 'Features Title Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-features-title',
			]
		);

		$this->add_control(
			'price_box_features_title_color',
			[
				'label'     => esc_html__( 'Features Title Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-features-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Features Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_features_typography',
				'label'    => esc_html__( 'Features Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-features',
			]
		);

		$this->add_control(
			'price_box_features_color',
			[
				'label'     => esc_html__( 'Features Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-features' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Addons Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_addons_title_typography',
				'label'    => esc_html__( 'Addons Title Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-addons-title',
			]
		);

		$this->add_control(
			'price_box_addons_title_color',
			[
				'label'     => esc_html__( 'Addons Title Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-addons-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Addons Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_addons_typography',
				'label'    => esc_html__( 'Addons Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-addon',
			]
		);

		$this->add_control(
			'price_box_addons_color',
			[
				'label'     => esc_html__( 'Addons Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-addon' => 'color: {{VALUE}}',
				],
			]
		);

		// Price Box Addons Price Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'price_box_addons_price_typography',
				'label'    => esc_html__( 'Addons Price Typography', 'md-threatdown' ),
				'selector' => '{{WRAPPER}} .price-box-addon-price',
			]
		);

		$this->add_control(
			'price_box_addons_price_color',
			[
				'label'     => esc_html__( 'Addons Price Color', 'md-threatdown' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .price-box-addon-price' => 'color: {{VALUE}}',
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

		<div class="price-box">
			<div class="price-box-inner">
				<h2 class="price-box-title"><?php echo esc_html( $settings['price_box_title'] ); ?></h2>
				<?php if ( 'yes' === $settings['price_box_best_value'] ) : ?>
					<div class="price-box-best-value"><?php echo esc_html( $settings['price_box_best_value_text'] ); ?></div>
				<?php endif; ?>
				<p class="price-box-description"><?php echo esc_html( $settings['price_box_description'] ); ?></p>
				<div class="price-box-price-section">
					<div class="price-box-price"><?php echo esc_html( $settings['price_box_price'] ); ?></div>
					<div class="price-box-endpoint-per-year-text"><?php echo esc_html( $settings['price_box_endpoint_per_year_text'] ); ?></div>
					<div class="price-box-minimum-endpoint-text"><?php echo esc_html( $settings['price_box_minimum_endpoint_text'] ); ?></div>
					<a href="<?php echo esc_url( $settings['price_box_button_link']['url'] ); ?>" class="price-box-button"><?php echo esc_html( $settings['price_box_button_text'] ); ?></a>
					<a href="<?php echo esc_url( $settings['price_box_contact_link']['url'] ); ?>" class="price-box-contact-link"><?php echo esc_html( $settings['price_box_contact_link_text'] ); ?></a>
				</div>
				<div class="price-box-features-section">
					<div class="price-box-features-title"><?php echo esc_html( $settings['price_box_features_title'] ); ?></div>
					<ul class="price-box-features">
						<?php
						foreach ( $settings['price_box_features'] as $feature ) {
							?>
							<li>
								<i class="fas fa-check"></i>
								<span><?php echo esc_html( $feature['price_box_feature'] ); ?></span>
							</li>
							<?php
						}
						?>
					</ul>
				</div>
				<div class="price-box-addons-section">
					<div class="price-box-addons-title"><?php echo esc_html( $settings['price_box_addons_title'] ); ?></div>
					<ul class="price-box-addons">
						<?php
						foreach ( $settings['price_box_addons'] as $addon ) {
							?>
							<li>
								<i class="fa-regular fa-circle-check"></i>
								<div>
									<span class="price-box-addon"><?php echo esc_html( $addon['price_box_addon'] ); ?></span>
									/ <span class="price-box-addon-price"><?php echo esc_html( $addon['price_box_addon_price'] ); ?></span>
								</div>
							</li>
							<?php
						}
						?>
					</ul>
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

		<div class="price-box">
			<div class="price-box-inner">
				<h2 class="price-box-title">{{{ settings.price_box_title }}}</h2>
				<# if ( 'yes' === settings.price_box_best_value ) { #>
					<div class="price-box-best-value">{{{ settings.price_box_best_value_text }}}</div>
				<# } #>
				<p class="price-box-description">{{{ settings.price_box_description }}}</p>
				<div class="price-box-price-section">
					<div class="price-box-price">{{{ settings.price_box_price }}}</div>
					<div class="price-box-endpoint-per-year-text">{{{ settings.price_box_endpoint_per_year_text }}}</div>
					<div class="price-box-minimum-endpoint-text">{{{ settings.price_box_minimum_endpoint_text }}}</div>
					<a href="{{{ settings.price_box_button_link.url }}}" class="price-box-button">{{{ settings.price_box_button_text }}}</a>
					<a href="{{{ settings.price_box_contact_link.url }}}" class="price-box-contact-link">{{{ settings.price_box_contact_link_text }}}</a>
				</div>
				<div class="price-box-features-section">
					<div class="price-box-features-title">{{{ settings.price_box_features_title }}}</div>
					<ul class="price-box-features">
						<# _.each( settings.price_box_features, function( feature ) { #>
							<li>
								<i class="fas fa-check"></i>
								<span>{{{ feature.price_box_feature }}}</span>
							</li>
						<# } ); #>
					</ul>
				</div>
				<div class="price-box-addons-section">
					<div class="price-box-addons-title">{{{ settings.price_box_addons_title }}}</div>
					<ul class="price-box-addons">
						<# _.each( settings.price_box_addons, function( addon ) { #>
							<li>
								<i class="fa-regular fa-circle-check"></i>
								<div>
									<span class="price-box-addon">{{{ addon.price_box_addon }}}</span>
									/ <span class="price-box-addon-price">{{{ addon.price_box_addon_price }}}</span>
								</div>
							</li>
						<# } ); #>
					</ul>
				</div>
			</div>
		</div>
		
        <?php
	}

}
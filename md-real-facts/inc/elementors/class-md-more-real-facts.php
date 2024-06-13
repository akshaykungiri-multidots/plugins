<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Real_Facts
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Real_Facts\Inc\Elementors;


/**
 * MD_More_Real_Facts class
 * 
 * @since 1.0.0
 */
class MD_More_Real_Facts extends \Elementor\Widget_Base {

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
		return 'md_more_real_facts';
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
		return esc_html__( 'More Real Facts', 'md-real-facts' );
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
		return [ 'more', 'real', 'facts' ];
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

		// Heading Section
		$this->start_controls_section(
			'heading_section',
			[
				'label' => esc_html__( 'Heading', 'md-real-facts' ),
			]
		);

		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter heading', 'md-real-facts' ),
				'default'     => esc_html__( 'WANT TO SEE MORE REAL FACTS?', 'md-real-facts' ),
			]
		);

		// Sub Heading
		$this->add_control(
			'sub_heading',
			[
				'label'       => esc_html__( 'Sub Heading', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter sub heading', 'md-real-facts' ),
				'default'     => esc_html__( 'Click the button below to learn even more facts you need to know.', 'md-real-facts' ),
			]
		);

		// Button Text and Link
		$this->add_control(
			'button_text',
			[
				'label'       => esc_html__( 'Button Text', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter button text', 'md-real-facts' ),
				'default'     => esc_html__( 'CLICK TO SEE MORE', 'md-real-facts' ),
			]
		);

		$this->add_control(
			'button_link',
			[
				'label'       => esc_html__( 'Button Link', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-real-facts' ),
				'default'     => [
					'url' => '#',
				],
			]
		);

		$this->end_controls_section();

		// Real Facts Section.

		$this->start_controls_section(
			'real_facts_section',
			[
				'label' => esc_html__( 'Real Facts', 'md-real-facts' ),
			]
		);

		// Repeatable Real Facts.
		$repeater = new \Elementor\Repeater();

		// Title as WYSIWYG.
		$repeater->add_control(
			'title',
			[
				'label'       => esc_html__( 'Title', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter title', 'md-real-facts' ),
				'default'     => esc_html__( 'Real Fact Title', 'md-real-facts' ),
			]
		);

		// Sub Title.
		$repeater->add_control(
			'sub_title',
			[
				'label'       => esc_html__( 'Sub Title', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter sub title', 'md-real-facts' ),
				'default'     => esc_html__( 'Real Fact Sub Title', 'md-real-facts' ),
			]
		);

		// Option Select for Slider, Card and Video.
		$repeater->add_control(
			'option_select',
			[
				'label'   => esc_html__( 'Select Option', 'md-real-facts' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'slider' => esc_html__( 'Slider', 'md-real-facts' ),
					'card'   => esc_html__( 'Card', 'md-real-facts' ),
					'multicard'   => esc_html__( 'Multiple Card', 'md-real-facts' ),
					'video'  => esc_html__( 'Video', 'md-real-facts' ),
				],
				'default' => 'slider',
			]
		);

		// Card Front Title.
		$repeater->add_control(
			'card_front_title',
			[
				'label'       => esc_html__( 'Front Title', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your front title', 'md-real-facts' ),
				'default'     => 'FACT: Claiming “automation” is easy. Delivering it is hard.',
				'label_block' => true,
				'condition'   => [
					'option_select' => 'card',
				],
			]
		);

		// Card Front Description.
		$repeater->add_control(
			'card_front_description',
			[
				'label'       => esc_html__( 'Front Description', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your front description', 'md-real-facts' ),
				'default'     => 'Anitian’s pre-engineered Secure Cloud for Compliance Automation weaves thousands of automations together to build, configure, and secure an entire FedRAMP cloud environment. Scripts on a consultant’s laptop are simply not a pre-engineered, automated platform.',
				'label_block' => true,
				'condition'   => [
					'option_select' => 'card',
				],
			]
		);

		// Card Front Icon.
		$repeater->add_control(
			'card_front_icon',
			[
				'label'       => esc_html__( 'Front Icon', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::MEDIA,
				'label_block' => true,
				'default'     => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
				'condition'   => [
					'option_select' => 'card',
				],
			]
		);

		// Card Back Title.
		$repeater->add_control(
			'card_back_title',
			[
				'label'       => esc_html__( 'Back Title', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your back title', 'md-real-facts' ),
				'label_block' => true,
				'condition'   => [
					'option_select' => 'card',
				],
			]
		);

		// Card Back Description.
		$repeater->add_control(
			'card_back_description',
			[
				'label'       => esc_html__( 'Back Description', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your back description', 'md-real-facts' ),
				'label_block' => true,
				'condition'   => [
					'option_select' => 'card',
				],
			]
		);

		// Multiple Card as Repeater.
		$multicard_repeater = new \Elementor\Repeater();

		// Multiple Card front title.
		$multicard_repeater->add_control(
			'multicard_front_title',
			[
				'label'       => esc_html__( 'Front Title', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your front title', 'md-real-facts' ),
				'default'     => 'Front Title',
				'label_block' => true,
			]
		);

		// Multiple Card front description.
		$multicard_repeater->add_control(
			'multicard_front_description',
			[
				'label'       => esc_html__( 'Front Description', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your front description', 'md-real-facts' ),
				'default'     => 'Front Description',
				'label_block' => true,
			]
		);

		// Multiple Card Back Title.
		$multicard_repeater->add_control(
			'multicard_back_title',
			[
				'label'       => esc_html__( 'Back Title', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your back title', 'md-real-facts' ),
				'label_block' => true,
				'default'     => 'Back Title',
			]
		);

		// Multiple Card Back Description.
		$multicard_repeater->add_control(
			'multicard_back_description',
			[
				'label'       => esc_html__( 'Back Description', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your back description', 'md-real-facts' ),
				'label_block' => true,
				'default'     => 'Back Description',
			]
		);

		// Multiple Card Back Quote.
		$multicard_repeater->add_control(
			'multicard_back_quote',
			[
				'label'       => esc_html__( 'Back Quote', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__( 'Enter your back quote', 'md-real-facts' ),
				'label_block' => true,
				'default'     => 'Back Quote',
			]
		);

		// Multiple Card Back Hint.
		$multicard_repeater->add_control(
			'multicard_back_hint',
			[
				'label'       => esc_html__( 'Back Hint', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your back hint', 'md-real-facts' ),
				'label_block' => true,
				'default'     => 'Back Hint',
			]
		);

		// Add to repeater.
		$repeater->add_control(
			'multicard_repeater',
			[
				'type'        => \Elementor\Controls_Manager::REPEATER,
				'fields'      => $multicard_repeater->get_controls(),
				'title_field' => '{{{ multicard_front_title }}}',
				'condition'   => [
					'option_select' => 'multicard',
				],
			]
		);

		// Slider as Repeater.
		$slider_repeater = new \Elementor\Repeater();

		$slider_repeater->add_control(
			'slider_sub_title',
			[
				'label'       => esc_html__( 'Sub Title', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter sub title', 'md-real-facts' ),
				'default'     => esc_html__( 'Real Fact Sub Title', 'md-real-facts' ),
			]
		);

		// Slider Title.
		$slider_repeater->add_control(
			'slider_title',
			[
				'label'       => esc_html__( 'Title', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter title', 'md-real-facts' ),
				'default'     => esc_html__( 'Real Fact Title', 'md-real-facts' ),
			]
		);

		// Slider Content.
		$slider_repeater->add_control(
			'slider_content',
			[
				'label'       => esc_html__( 'Content', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Enter content', 'md-real-facts' ),
				'default'     => esc_html__( 'Real Fact Content', 'md-real-facts' ),
			]
		);

		// Add to repeater.
		$repeater->add_control(
			'slider_repeater',
			[
				'type'        => \Elementor\Controls_Manager::REPEATER,
				'fields'      => $slider_repeater->get_controls(),
				'title_field' => '{{{ slider_title }}}',
				'condition'   => [
					'option_select' => 'slider',
				],
				'default'     => [
					[
						'slider_title'   => esc_html__( 'Real Fact Title', 'md-real-facts' ),
						'slider_content' => esc_html__( 'Real Fact Content', 'md-real-facts' ),
					],
				],
			]
		);

		// Video URL.
		$repeater->add_control(
			'video_url',
			[
				'label'       => esc_html__( 'Video URL', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-real-facts' ),
				'default'     => [
					'url' => '#',
				],
				'condition'   => [
					'option_select' => 'video',
				],
			]
		);

		// Video Play Button Text.
		$repeater->add_control(
			'video_play_button_text',
			[
				'label'       => esc_html__( 'Play Button Text', 'md-real-facts' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter play button text', 'md-real-facts' ),
				'default'     => esc_html__( 'Play Video', 'md-real-facts' ),
				'condition'   => [
					'option_select' => 'video',
				],
			]
		);

		// Add Repeater.
		$this->add_control(
			'real_facts',
			[
				'label'  => esc_html__( 'Real Facts', 'md-real-facts' ),
				'type'   => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
			]
		);

		$this->end_controls_section();

		// Heading Style Section.
		$this->start_controls_section(
			'heading_style_section',
			[
				'label' => esc_html__( 'Heading', 'md-real-facts' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Heading Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-real-facts' ),
				'selector' => '
				{{WRAPPER}} .md-more-real-facts__heading-text h1,
				{{WRAPPER}} .md-more-real-facts__heading-text h2,
				{{WRAPPER}} .md-more-real-facts__heading-text h3,
				{{WRAPPER}} .md-more-real-facts__heading-text h4,
				{{WRAPPER}} .md-more-real-facts__heading-text h5,
				{{WRAPPER}} .md-more-real-facts__heading-text h6,
				{{WRAPPER}} .md-more-real-facts__heading-text p
				',
			]
		);

		// Heading Color.
		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Heading Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts__heading-text h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts__heading-text h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts__heading-text h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts__heading-text h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts__heading-text h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts__heading-text h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts__heading-text p'  => 'color: {{VALUE}}',
				],
			]
		);

		// Sub Heading Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'sub_heading_typography',
				'label'    => esc_html__( 'Sub Heading Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts__sub-heading',
			]
		);

		// Sub Heading Color.
		$this->add_control(
			'sub_heading_color',
			[
				'label'     => esc_html__( 'Sub Heading Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts__sub-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Button Padding.
		$this->add_control(
			'button_padding',
			[
				'label'      => esc_html__( 'Button Padding', 'md-real-facts' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .md-more-real-facts__button-link' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'button_typography',
				'label'    => esc_html__( 'Button Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts__button-link',
			]
		);

		// Button Border Group.
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'button_border',
				'label'    => esc_html__( 'Border', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts__button-link',
			]
		);

		// Button Border Radius.
		$this->add_control(
			'button_border_radius',
			[
				'label'      => esc_html__( 'Border Radius', 'md-real-facts' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .md-more-real-facts__button-link' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button Normal and Hover Tabs.
		$this->start_controls_tabs( 'button_tabs' );

		// Button Normal Tab.
		$this->start_controls_tab(
			'button_normal_tab',
			[
				'label' => esc_html__( 'Normal', 'md-real-facts' ),
			]
		);

		// Button Color.
		$this->add_control(
			'button_color',
			[
				'label'     => esc_html__( 'Button Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts__button-link' => 'color: {{VALUE}}',
				],
			]
		);

		// Button Background Color.
		$this->add_control(
			'button_background_color',
			[
				'label'     => esc_html__( 'Background Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts__button' => 'background-color: {{VALUE}}',
				],
			]
		);

		// Button Border Color.
		$this->add_control(
			'button_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts__button' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		// Button Hover Tab.
		$this->start_controls_tab(
			'button_hover_tab',
			[
				'label' => esc_html__( 'Hover', 'md-real-facts' ),
			]
		);

		// Button Hover Color.
		$this->add_control(
			'button_hover_color',
			[
				'label'     => esc_html__( 'Button Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts__button-link:hover' => 'color: {{VALUE}}',
				],
			]
		);

		// Button Hover Background Color.
		$this->add_control(
			'button_hover_background_color',
			[
				'label'     => esc_html__( 'Background Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts__button:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		// Button Hover Border Color.
		$this->add_control(
			'button_hover_border_color',
			[
				'label'     => esc_html__( 'Border Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts__button:hover' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		// Real Facts Card Style Section.
		$this->start_controls_section(
			'real_facts_card_style_section',
			[
				'label' => esc_html__( 'Real Facts Card', 'md-real-facts' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Card Front Title Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'card_front_title_typography',
				'label'    => esc_html__( 'Front Title Typography', 'md-real-facts' ),
				'selector' => '
				{{WRAPPER}} .md-timeline__card-front-title h1,
				{{WRAPPER}} .md-timeline__card-front-title h2,
				{{WRAPPER}} .md-timeline__card-front-title h3,
				{{WRAPPER}} .md-timeline__card-front-title h4,
				{{WRAPPER}} .md-timeline__card-front-title h5,
				{{WRAPPER}} .md-timeline__card-front-title h6,
				{{WRAPPER}} .md-timeline__card-front-title p
				',
			]
		);

		// Card Front Title Color.
		$this->add_control(
			'card_front_title_color',
			[
				'label'     => esc_html__( 'Front Title Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__card-front-title h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-front-title h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-front-title h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-front-title h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-front-title h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-front-title h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-front-title p'  => 'color: {{VALUE}}',
				],
			]
		);

		// Card Front Description Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'card_front_description_typography',
				'label'    => esc_html__( 'Front Description Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-timeline__card-front-description',
			]
		);

		// Card Front Description Color.
		$this->add_control(
			'card_front_description_color',
			[
				'label'     => esc_html__( 'Front Description Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__card-front-description' => 'color: {{VALUE}}',
				],
			]
		);

		// Card Back Title Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'card_back_title_typography',
				'label'    => esc_html__( 'Back Title Typography', 'md-real-facts' ),
				'selector' => '
				{{WRAPPER}} .md-timeline__card-back-title h1,
				{{WRAPPER}} .md-timeline__card-back-title h2,
				{{WRAPPER}} .md-timeline__card-back-title h3,
				{{WRAPPER}} .md-timeline__card-back-title h4,
				{{WRAPPER}} .md-timeline__card-back-title h5,
				{{WRAPPER}} .md-timeline__card-back-title h6,
				{{WRAPPER}} .md-timeline__card-back-title p
				',
			]
		);

		// Card Back Title Color.
		$this->add_control(
			'card_back_title_color',
			[
				'label'     => esc_html__( 'Back Title Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__card-back-title h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-back-title h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-back-title h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-back-title h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-back-title h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-back-title h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-timeline__card-back-title p'  => 'color: {{VALUE}}',
				],
			]
		);

		// Card Back Description Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'card_back_description_typography',
				'label'    => esc_html__( 'Back Description Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-timeline__card-back-description',
			]
		);

		// Card Back Description Color.
		$this->add_control(
			'card_back_description_color',
			[
				'label'     => esc_html__( 'Back Description Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__card-back-description' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_section();

		// Real Facts Slider Style Section.
		$this->start_controls_section(
			'real_facts_slider_style_section',
			[
				'label' => esc_html__( 'Real Facts Slider', 'md-real-facts' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Slider sub title Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'slider_sub_title_typography',
				'label'    => esc_html__( 'Sub Title Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .slider-content-inner__sub-title',
			]
		);

		// Slider sub title Color.
		$this->add_control(
			'slider_sub_title_color',
			[
				'label'     => esc_html__( 'Sub Title Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .slider-content-inner__sub-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Slider Title Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'slider_title_typography',
				'label'    => esc_html__( 'Title Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .slider-content-inner__title',
			]
		);

		// Slider Title Color.
		$this->add_control(
			'slider_title_color',
			[
				'label'     => esc_html__( 'Title Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .slider-content-inner__title' => 'color: {{VALUE}}',
				],
			]
		);

		// Slider Content Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'slider_content_typography',
				'label'    => esc_html__( 'Content Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .slider-content-inner__content',
			]
		);

		// Slider Content Color.
		$this->add_control(
			'slider_content_color',
			[
				'label'     => esc_html__( 'Content Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .slider-content-inner__content' => 'color: {{VALUE}}',
				],
			]
		);

		// End Controls Section.
		$this->end_controls_section();

		// Real Facts Multiple Card Style Section.
		$this->start_controls_section(
			'real_facts_multicard_style_section',
			[
				'label' => esc_html__( 'Real Facts Multiple Card 1', 'md-real-facts' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Multiple Card 1 Background Group Control.
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'multicard_background',
				'label'    => esc_html__( 'Background', 'md-real-facts' ),
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline_card__slide1',
			]
		);

		// Multiple Card 1 Front Title Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard_front_title_typography',
				'label'    => esc_html__( 'Front Title Typography', 'md-real-facts' ),
				'selector' => '
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h1,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h2,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h3,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h4,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h5,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h6,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title p',
			]
		);

		// Multiple Card 1 Front Title Color.
		$this->add_control(
			'multicard_front_title_color',
			[
				'label'     => esc_html__( 'Front Title Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-title p'  => 'color: {{VALUE}}',
				],
			]
		);

		// Multiple Card 1 Front Description Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard_front_description_typography',
				'label'    => esc_html__( 'Front Description Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-description',
			]
		);

		// Multiple Card 1 Front Description Color.
		$this->add_control(
			'multicard_front_description_color',
			[
				'label'     => esc_html__( 'Front Description Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-front-description' => 'color: {{VALUE}}',
				],
			]
		);

		// Multiple Card 1 Back Title Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard_back_title_typography',
				'label'    => esc_html__( 'Back Title Typography', 'md-real-facts' ),
				'selector' => '
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h1,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h2,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h3,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h4,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h5,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h6,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title p',
			]
		);

		// Multiple Card 1 Back Title Color.
		$this->add_control(
			'multicard_back_title_color',
			[
				'label'     => esc_html__( 'Back Title Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-title p'  => 'color: {{VALUE}}',
				],
			]
		);

		// Multiple Card 1 Back Description Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard_back_description_typography',
				'label'    => esc_html__( 'Back Description Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h1,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h2,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h3,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h4,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h5,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h6,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description p',
			]
		);

		// Multiple Card 1 Back Description Color.
		$this->add_control(
			'multicard_back_description_color',
			[
				'label'     => esc_html__( 'Back Description Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-description p' => 'color: {{VALUE}}',
				],
			]
		);

		// Multiple Card 1 Back Quote Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard_back_quote_typography',
				'label'    => esc_html__( 'Back quote Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h1,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h2,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h3,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h4,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h5,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h6,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote p',
			]
		);

		// Multiple Card 1 Back Quote Color.
		$this->add_control(
			'multicard_back_quote_color',
			[
				'label'     => esc_html__( 'Back Quote Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-quote p' => 'color: {{VALUE}}',
				],
			]
		);

		// Multiple Card 1 Back Hint Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard_back_hint_typography',
				'label'    => esc_html__( 'Back Hint Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-hint',
			]
		);

		// Multiple Card 1 Back Hint Color.
		$this->add_control(
			'multicard_back_hint_color',
			[
				'label'     => esc_html__( 'Back Hint Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n+1) .md-timeline__card-back-hint' => 'color: {{VALUE}}',
				],
			]
		);


		$this->end_controls_section();

		// Real Facts Multiple Card 2 Style Section.
		$this->start_controls_section(
			'real_facts_multicard2_style_section',
			[
				'label' => esc_html__( 'Real Facts Multiple Card 2', 'md-real-facts' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Multiple Card 2 Background Group Control.
		$this->add_group_control(
			\Elementor\Group_Control_Background::get_type(),
			[
				'name'     => 'multicard2_background',
				'label'    => esc_html__( 'Background', 'md-real-facts' ),
				'types'    => [ 'classic', 'gradient' ],
				'selector' => '{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline_card__slide1',
			]
		);

		// Multiple Card 2 Front Title Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard2_front_title_typography',
				'label'    => esc_html__( 'Front Title Typography', 'md-real-facts' ),
				'selector' => '
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h1,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h2,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h3,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h4,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h5,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h6,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title p',
			]
		);

		// Multiple Card 2 Front Title Color.
		$this->add_control(
			'multicard2_front_title_color',
			[
				'label'     => esc_html__( 'Front Title Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-title p'  => 'color: {{VALUE}}',
				],
			]
		);

		// Multiple Card 2 Front Description Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard2_front_description_typography',
				'label'    => esc_html__( 'Front Description Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h1,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h2,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h3,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h4,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h5,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h6,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description p',
			]
		);

		// Multiple Card 2 Front Description Color.
		$this->add_control(
			'multicard2_front_description_color',
			[
				'label'     => esc_html__( 'Front Description Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-front-description p'  => 'color: {{VALUE}}',
				],
			]
		);

		// Multiple Card 2 Back Title Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard2_back_title_typography',
				'label'    => esc_html__( 'Back Title Typography', 'md-real-facts' ),
				'selector' => '
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h1,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h2,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h3,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h4,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h5,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h6,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title p',
			]
		);

		// Multiple Card 2 Back Title Color.
		$this->add_control(
			'multicard2_back_title_color',
			[
				'label'     => esc_html__( 'Back Title Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-title p'  => 'color: {{VALUE}}',
				],
			]
		);

		// Multiple Card 2 Back Description Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard2_back_description_typography',
				'label'    => esc_html__( 'Back Description Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h1,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h2,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h3,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h4,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h5,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h6,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description p',
			]
		);

		// Multiple Card 2 Back Description Color.
		$this->add_control(
			'multicard2_back_description_color',
			[
				'label'     => esc_html__( 'Back Description Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-description p'  => 'color: {{VALUE}}',
				],
			]
		);
		
		// Multiple Card 2 Back Quote Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard2_back_quote_typography',
				'label'    => esc_html__( 'Back quote Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h1,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h2,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h3,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h4,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h5,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h6,
				{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote p',
			]
		);

		// Multiple Card 2 Back Quote Color.
		$this->add_control(
			'multicard2_back_quote_color',
			[
				'label'     => esc_html__( 'Back Quote Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h1' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h2' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h3' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h4' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h5' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote h6' => 'color: {{VALUE}}',
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-quote p' => 'color: {{VALUE}}',
				],
			]
		);

		// Multiple Card 2 Back Hint Typography.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'multicard2_back_hint_typography',
				'label'    => esc_html__( 'Back Hint Typography', 'md-real-facts' ),
				'selector' => '{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-hint',
			]
		);

		// Multiple Card 2 Back Hint Color.
		$this->add_control(
			'multicard2_back_hint_color',
			[
				'label'     => esc_html__( 'Back Hint Color', 'md-real-facts' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-more-real-facts_multiple_cards .md-timeline__cards:nth-child(2n) .md-timeline__card-back-hint' => 'color: {{VALUE}}',
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

		<div class="md-more-real-facts">
			<div class="md-more-real-facts__line"></div>
			<div class="md-more-real-facts__heading">
				<div class="md-more-real-facts__heading-text">
					<?php echo wp_kses_post( $settings['heading'] ); ?>
				</div>
				<p class="md-more-real-facts__sub-heading">
					<?php echo esc_html( $settings['sub_heading'] ); ?>
				</p>
				<div class="md-more-real-facts__button">
					<a href="<?php echo esc_url( $settings['button_link']['url'] ); ?>" class="md-more-real-facts__button-link">
						<?php echo esc_html( $settings['button_text'] ); ?>
					</a>
				</div>
			</div>
			<div class="md-more-real-facts__repeater">
				<div class="md-more-real-facts__repeater-inner">
					<?php foreach ( $settings['real_facts'] as $index => $item ) : ?>
						<div class="md-more-real-facts__repeater-item">
							<div class="md-more-real-facts__repeater-item-inner">
								<?php if ( !empty($item['title']) ) { ?>
									<div class="md-more-real-facts__repeater-item-title">
										<?php echo wp_kses_post( $item['title'] ); ?>
									</div>
								<?php } ?>
								<div class="md-more-real-facts__repeater-item-sub-title">
									<?php echo esc_html( $item['sub_title'] ); ?>
								</div>
								<?php if ( 'card' === $item['option_select'] ) : ?>
									<div class="md-timeline__cards">
										<div class="md-timeline__card mdTimelineSlide">
											<div class="md-timeline_card__slide1">
												<div class="md-timeline__card-front mdSlideNext">
													<div class="md-timeline__card-front-icon">
														<img src="<?php echo esc_url( $item['card_front_icon']['url'] ); ?>" alt="<?php echo esc_attr( $item['card_front_title'] ); ?>">
													</div>
													<div class="md-timeline__card-front-content">
														<div class="md-timeline__card-front-title"><?php echo wp_kses_post( $item['card_front_title'] ); ?></div>
														<div class="md-timeline__card-front-description"><?php echo wp_kses_post( $item['card_front_description'] ); ?></div>
													</div>
													<div class="md-click-here">
														<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="305.000000pt" height="144.000000pt" viewBox="0 0 305.000000 144.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path d="M1251 1097 c-5 -12 -15 -58 -22 -102 -7 -44 -19 -90 -26 -102 -8 -12 -12 -30 -9 -41 5 -15 -5 -22 -55 -40 -47 -17 -65 -19 -75 -11 -23 19 -16 47 21 75 40 30 45 54 12 54 -52 0 -108 -98 -86 -152 15 -36 48 -42 111 -18 63 24 68 24 68 6 0 -18 30 -29 35 -13 2 6 6 24 9 40 4 15 11 27 16 27 6 0 38 -14 71 -31 48 -24 64 -28 75 -18 21 17 9 28 -74 66 -87 39 -86 50 11 77 55 16 71 31 44 42 -8 3 -35 -2 -61 -11 -26 -9 -50 -14 -53 -11 -3 2 0 28 6 56 14 64 14 130 1 130 -6 0 -14 -10 -19 -23z"></path><path d="M594 1086 c-72 -32 -154 -130 -169 -202 -9 -45 16 -99 57 -120 72 -39 183 -15 281 60 l47 36 0 -49 c0 -30 5 -53 14 -60 23 -19 36 17 36 96 0 37 7 103 15 145 14 74 12 108 -5 108 -17 0 -30 -30 -41 -98 -12 -72 -12 -73 -73 -121 -84 -66 -116 -81 -179 -81 -44 0 -59 5 -81 25 -31 29 -32 44 -6 95 24 47 66 81 144 115 42 19 57 30 54 43 -4 22 -53 26 -94 8z"></path><path d="M1674 1054 c-17 -41 -54 -228 -54 -275 0 -15 6 -29 14 -32 16 -6 32 10 67 68 l24 40 7 -43 c9 -55 14 -62 44 -62 27 0 29 3 12 33 -6 12 -14 51 -17 87 -5 56 -9 65 -26 65 -13 0 -28 -15 -45 -45 -34 -62 -38 -33 -10 87 16 68 19 98 11 106 -7 7 -15 -1 -27 -29z"></path><path d="M953 1023 c-23 -9 -15 -35 10 -31 12 2 22 9 22 17 0 16 -14 22 -32 14z"></path><path d="M937 933 c-12 -21 -30 -174 -21 -183 18 -18 35 7 44 66 14 86 13 124 -4 124 -8 0 -17 -3 -19 -7z"></path><path d="M1873 930 c-29 -12 -43 -40 -43 -87 0 -51 44 -97 93 -97 39 0 91 34 117 77 l18 30 7 -46 c11 -74 29 -78 60 -13 15 31 45 72 71 94 24 22 44 42 44 46 0 3 -12 6 -27 6 -18 0 -38 -13 -64 -40 l-39 -40 -6 25 c-8 31 -30 33 -38 3 -9 -30 -104 -108 -132 -108 -12 0 -27 6 -33 14 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path><path d="M2293 930 c-29 -12 -43 -40 -43 -87 0 -52 44 -97 94 -97 40 0 99 41 121 85 21 39 12 37 -42 -11 -48 -42 -82 -50 -102 -26 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path><path d="M2088 609 c-14 -6 -29 -16 -32 -24 -10 -27 21 -42 101 -49 91 -7 142 -19 126 -29 -18 -11 -250 -64 -343 -79 -113 -17 -526 -17 -640 0 -141 22 -307 61 -454 108 -141 45 -184 47 -131 6 60 -47 310 -124 530 -163 301 -53 768 -28 1028 54 42 14 77 23 77 21 0 -14 -355 -204 -381 -204 -23 0 -31 -26 -13 -41 22 -18 70 -6 177 44 123 58 357 196 364 215 10 24 -10 45 -71 75 -104 51 -284 86 -338 66z"></path></g></svg>
													</div>
													<span class="timeline__slide-icon eicon-plus-circle"></span>
												</div>
											</div>
											<div class="md-timeline_card__slide2">
												<div class="md-timeline__card-back mdSlidePrev">
													<h3 class="md-timeline__card-back-title"><?php echo wp_kses_post( $item['card_back_title'] ); ?></h3>
													<div class="md-timeline__card-back-description"><?php echo wp_kses_post( $item['card_back_description'] ); ?></div>
													<span class="timeline__slide-icon eicon-close-circle"></span>
												</div>
											</div>
										</div>
									</div>
								<?php elseif ( 'multicard' === $item['option_select'] ) : ?>
									<div class="md-more-real-facts_multiple_cards">
										<?php foreach ( $item['multicard_repeater'] as $multicard ) : ?>
											<div class="md-timeline__cards">
												<div class="md-timeline__card mdTimelineSlide">
													<div class="md-timeline_card__slide1">
														<div class="md-timeline__card-front mdSlideNext">
															<div class="md-timeline__card-front-content">
																<div class="md-timeline__card-front-title"><?php echo wp_kses_post( $multicard['multicard_front_title'] ); ?></div>
																<div class="md-timeline__card-front-description"><?php echo wp_kses_post( $multicard['multicard_front_description'] ); ?></div>
															</div>
															<span class="timeline__slide-icon eicon-plus-circle"></span>
														</div>
													</div>
													<div class="md-timeline_card__slide2">
														<div class="md-timeline__card-back mdSlidePrev">
															<div class="md-timeline__card-back-title"><?php echo wp_kses_post( $multicard['multicard_back_title'] ); ?></div>
															<div class="md-timeline__card-back-description"><?php echo wp_kses_post( $multicard['multicard_back_description'] ); ?></div>
															<div class="md-timeline__card-back-quote"><?php echo wp_kses_post( $multicard['multicard_back_quote'] ); ?></div>
															<div class="md-timeline__card-back-hint"><?php echo esc_html( $multicard['multicard_back_hint'] ); ?></div>
															<span class="timeline__slide-icon eicon-close-circle"></span>
														</div>
													</div>
												</div>
											</div>
										<?php endforeach; ?>
									</div>
								<?php elseif ( 'slider' === $item['option_select'] ) : ?>
									<div class="md-more-real-facts__repeater-item-slider">
										<div class="mdRealFactSlider">
											<?php foreach ( $item['slider_repeater'] as $slider ) :
												// Get Slide ID.
												$slider_id = $slider['_id'];
												?>
												<div class="slider-content id_<?php echo esc_attr( $slider_id ); ?>">
													<div class="slider-content-inner">
														<h4 class="slider-content-inner__sub-title">
															<?php echo esc_html( $slider['slider_sub_title'] ); ?>
														</h4>
														<h2 class="slider-content-inner__title">
															<?php echo esc_html( $slider['slider_title'] ); ?>
														</h2>
														<p class="slider-content-inner__content">
															<?php echo esc_html( $slider['slider_content'] ); ?>
														</p>
													</div>
												</div>
											<?php endforeach; ?>
										</div>
									</div>
								<?php elseif ( 'video' === $item['option_select'] ) : ?>
									<div class="md-more-real-facts__repeater-item-video">
									<div class="area-video-box">
										<a data-fancybox rel="noopener noreferrer" href="<?php echo esc_url( $item['video_url']['url'] ); ?>" class="area2071-video-play-button">
											<!-- Display play-btn-purpule.svg -->
											<div class="play-btn-purpule"></div>
											<?php if ( ! empty( $item['video_play_button_text'] ) ) : ?>
												<p><?php echo esc_html( $item['video_play_button_text'] ); ?></p>
											<?php endif; ?>
											<div class="circle" style="animation-delay: -3s"></div>
											<div class="circle" style="animation-delay: -2s"></div>
											<div class="circle" style="animation-delay: -3s"></div>
											<div class="circle" style="animation-delay: 0s"></div>
										</a>
										<div class="area2071-video-play-button-box">
											<div class="area2071-video-play-button-box-inner"></div>
										</div>
									</div>
									</div>
								<?php endif; ?>
							</div>
						</div>
					<?php endforeach; ?>
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

		<div class="md-more-real-facts">
			<div class="md-more-real-facts__line"></div>
			<div class="md-more-real-facts__heading">
				<div class="md-more-real-facts__heading-text">
					{{{ settings.heading }}}
				</div>
				<p class="md-more-real-facts__sub-heading">
					{{{ settings.sub_heading }}}
				</p>
				<div class="md-more-real-facts__button">
					<a href="{{{ settings.button_link.url }}}" class="md-more-real-facts__button-link">
						{{{ settings.button_text }}}
					</a>
				</div>
			</div>
			<div class="md-more-real-facts__repeater">
				<div class="md-more-real-facts__repeater-inner">
					<# _.each( settings.real_facts, function( item, index ) { #>
						<div class="md-more-real-facts__repeater-item">
							<div class="md-more-real-facts__repeater-item-inner">
								<# if ( item.title ) { #>
									<div class="md-more-real-facts__repeater-item-title">
										{{{ item.title }}}
									</div>
								<# } #>
								<div class="md-more-real-facts__repeater-item-sub-title">
									{{{ item.sub_title }}}
								</div>
								<# if ( 'card' === item.option_select ) { #>
									<div class="md-timeline__cards">
										<div class="md-timeline__card mdTimelineSlide">
											<div class="md-timeline_card__slide1">
												<div class="md-timeline__card-front mdSlideNext">
													<div class="md-timeline__card-front-icon">
														<img src="{{{ item.card_front_icon.url }}}" alt="{{{ item.card_front_title }}}">
													</div>
													<div class="md-timeline__card-front-content">
														<div class="md-timeline__card-front-title">{{{ item.card_front_title }}}</div>
														<div class="md-timeline__card-front-description">{{{ item.card_front_description }}}</div>
													</div>
													<div class="md-click-here">
														<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="305.000000pt" height="144.000000pt" viewBox="0 0 305.000000 144.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path d="M1251 1097 c-5 -12 -15 -58 -22 -102 -7 -44 -19 -90 -26 -102 -8 -12 -12 -30 -9 -41 5 -15 -5 -22 -55 -40 -47 -17 -65 -19 -75 -11 -23 19 -16 47 21 75 40 30 45 54 12 54 -52 0 -108 -98 -86 -152 15 -36 48 -42 111 -18 63 24 68 24 68 6 0 -18 30 -29 35 -13 2 6 6 24 9 40 4 15 11 27 16 27 6 0 38 -14 71 -31 48 -24 64 -28 75 -18 21 17 9 28 -74 66 -87 39 -86 50 11 77 55 16 71 31 44 42 -8 3 -35 -2 -61 -11 -26 -9 -50 -14 -53 -11 -3 2 0 28 6 56 14 64 14 130 1 130 -6 0 -14 -10 -19 -23z"></path><path d="M594 1086 c-72 -32 -154 -130 -169 -202 -9 -45 16 -99 57 -120 72 -39 183 -15 281 60 l47 36 0 -49 c0 -30 5 -53 14 -60 23 -19 36 17 36 96 0 37 7 103 15 145 14 74 12 108 -5 108 -17 0 -30 -30 -41 -98 -12 -72 -12 -73 -73 -121 -84 -66 -116 -81 -179 -81 -44 0 -59 5 -81 25 -31 29 -32 44 -6 95 24 47 66 81 144 115 42 19 57 30 54 43 -4 22 -53 26 -94 8z"></path><path d="M1674 1054 c-17 -41 -54 -228 -54 -275 0 -15 6 -29 14 -32 16 -6 32 10 67 68 l24 40 7 -43 c9 -55 14 -62 44 -62 27 0 29 3 12 33 -6 12 -14 51 -17 87 -5 56 -9 65 -26 65 -13 0 -28 -15 -45 -45 -34 -62 -38 -33 -10 87 16 68 19 98 11 106 -7 7 -15 -1 -27 -29z"></path><path d="M953 1023 c-23 -9 -15 -35 10 -31 12 2 22 9 22 17 0 16 -14 22 -32 14z"></path><path d="M937 933 c-12 -21 -30 -174 -21 -183 18 -18 35 7 44 66 14 86 13 124 -4 124 -8 0 -17 -3 -19 -7z"></path><path d="M1873 930 c-29 -12 -43 -40 -43 -87 0 -51 44 -97 93 -97 39 0 91 34 117 77 l18 30 7 -46 c11 -74 29 -78 60 -13 15 31 45 72 71 94 24 22 44 42 44 46 0 3 -12 6 -27 6 -18 0 -38 -13 -64 -40 l-39 -40 -6 25 c-8 31 -30 33 -38 3 -9 -30 -104 -108 -132 -108 -12 0 -27 6 -33 14 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path><path d="M2293 930 c-29 -12 -43 -40 -43 -87 0 -52 44 -97 94 -97 40 0 99 41 121 85 21 39 12 37 -42 -11 -48 -42 -82 -50 -102 -26 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path><path d="M2088 609 c-14 -6 -29 -16 -32 -24 -10 -27 21 -42 101 -49 91 -7 142 -19 126 -29 -18 -11 -250 -64 -343 -79 -113 -17 -526 -17 -640 0 -141 22 -307 61 -454 108 -141 45 -184 47 -131 6 60 -47 310 -124 530 -163 301 -53 768 -28 1028 54 42 14 77 23 77 21 0 -14 -355 -204 -381 -204 -23 0 -31 -26 -13 -41 22 -18 70 -6 177 44 123 58 357 196 364 215 10 24 -10 45 -71 75 -104 51 -284 86 -338 66z"></path></g></svg>
													</div>
													<span class="timeline__slide-icon eicon-plus-circle"></span>
												</div>
											</div>
											<div class="md-timeline_card__slide2">
												<div class="md-timeline__card-back mdSlidePrev">
													<h3 class="md-timeline__card-back-title">{{{ item.card_back_title }}}</h3>
													<div class="md-timeline__card-back-description">{{{ item.card_back_description }}}</div>
													<span class="timeline__slide-icon eicon-close-circle"></span>
												</div>
											</div>
										</div>
									</div>
								<# } else if ( 'multicard' === item.option_select ) { #>
									<div class="md-more-real-facts_multiple_cards">
									<# _.each( item.multicard_repeater, function( multicard ) { #>
										<div class="md-timeline__cards">
											<div class="md-timeline__card mdTimelineSlide">
												<div class="md-timeline_card__slide1">
													<div class="md-timeline__card-front mdSlideNext">
														<div class="md-timeline__card-front-content">
															<div class="md-timeline__card-front-title">{{{ multicard.multicard_front_title }}}</div>
															<div class="md-timeline__card-front-description">{{{ multicard.multicard_front_description }}}</div>
														</div>
														<span class="timeline__slide-icon eicon-plus-circle"></span>
													</div>
												</div>
												<div class="md-timeline_card__slide2">
													<div class="md-timeline__card-back mdSlidePrev">
														<div class="md-timeline__card-back-title">{{{ multicard.multicard_back_title }}}</div>
														<div class="md-timeline__card-back-description">{{{ multicard.multicard_back_description }}}</div>
														<div class="md-timeline__card-back-quote">{{{ multicard.multicard_back_quote }}}</div>
														<div class="md-timeline__card-back-hint">{{{ multicard.multicard_back_hint }}}</div>
														<span class="timeline__slide-icon eicon-close-circle"></span>
													</div>
												</div>
											</div>
										</div>
									<# }); #>
									</div>
								<# } else if ( 'slider' === item.option_select ) { #>
									<div class="md-more-real-facts__repeater-item-slider">
										<div class="mdRealFactSlider">
											<# _.each( item.slider_repeater, function( slider ) { #>
												<div class="slider-content">
													<div class="slider-content-inner">
														<h4 class="slider-content-inner__sub-title">
															{{{ slider.slider_sub_title }}}
														</h4>
														<h2 class="slider-content-inner__title">
															{{{ slider.slider_title }}}
														</h2>
														<p class="slider-content-inner__content">
															{{{ slider.slider_content }}}
														</p>
													</div>
												</div>
											<# }); #>
										</div>
									</div>
								<# } else if ( 'video' === item.option_select ) { #>
									<div class="md-more-real-facts__repeater-item-video">
									<div class="area-video-box">
										<a data-fancybox rel="noopener noreferrer" href="{{{ item.video_url.url }}}" class="area2071-video-play-button">
											<!-- Display play-btn-purpule.svg -->
											<div class="play-btn-purpule"></div>
											<# if ( item.video_play_button_text ) { #>
												<p>{{{ item.video_play_button_text }}}</p>
											<# } #>
											<div class="circle" style="animation-delay: -3s"></div>
											<div class="circle" style="animation-delay: -2s"></div>
											<div class="circle" style="animation-delay: -3s"></div>
											<div class="circle" style="animation-delay: 0s"></div>
										</a>
										<div class="area2071-video-play-button-box">
											<div class="area2071-video-play-button-box-inner"></div>
										</div>
									</div>
									</div>
								<# } #>
							</div>
						</div>
					<# }); #>
				</div>
			</div>
		</div>

        <?php
	}

}
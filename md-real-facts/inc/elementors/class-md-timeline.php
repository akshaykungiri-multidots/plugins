<?php

/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Real_Facts
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Real_Facts\Inc\Elementors;


/**
 * MD_Timeline class
 * 
 * @since 1.0.0
 */
class MD_Timeline extends \Elementor\Widget_Base
{

	/**
	 * Get widget name.
	 *
	 * Retrieve list widget name.
	 *
	 * @since 1.0.0
	 * @access public
	 * @return string Widget name.
	 */
	public function get_name()
	{
		return 'md-timeline';
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
	public function get_title()
	{
		return esc_html__('Timeline', 'md-real-facts');
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
	public function get_icon()
	{
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
	public function get_categories()
	{
		return ['md-real-facts-addons'];
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
	public function get_keywords()
	{
		return ['md', 'real', 'timeline'];
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
	public function get_custom_help_url()
	{
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
	protected function register_controls()
	{

		// Heading Section.
		$this->start_controls_section(
			'heading_section',
			[
				'label' => esc_html__('Heading', 'md-real-facts'),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'title',
			[
				'label'       => esc_html__('Title', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__('Enter your title', 'md-real-facts'),
				'default'     => esc_html__('The FedRAMP Journey with Anitian', 'md-real-facts'),
				'label_block' => true,
			]
		);

		// End Content Section.
		$this->end_controls_section();

		// Timeline Section.
		$this->start_controls_section(
			'timeline_section',
			[
				'label' => esc_html__('Timeline', 'md-real-facts'),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Repeatable Timeline.
		$repeater = new \Elementor\Repeater();

		// Card Or Phase Section as Select Box.
		$repeater->add_control(
			'card_or_phase',
			[
				'label'   => esc_html__('Card or Phase', 'md-real-facts'),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'card'  => esc_html__('Card', 'md-real-facts'),
					'phase' => esc_html__('Phase', 'md-real-facts'),
				],
				'default' => 'card',
			]
		);

		// If Card then Display Below Fields.
		// Card Front Title.
		$repeater->add_control(
			'card_front_title',
			[
				'label'       => esc_html__('Front Title', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__('Enter your front title', 'md-real-facts'),
				'default'     => '<h3><mark>FACT:</mark> Claiming “automation” is easy. Delivering it is hard.</h3>',
				'label_block' => true,
				'condition'   => [
					'card_or_phase' => 'card',
				],
			]
		);

		// Card Front Description.
		$repeater->add_control(
			'card_front_description',
			[
				'label'       => esc_html__('Front Description', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__('Enter your front description', 'md-real-facts'),
				'default'     => 'Anitian’s pre-engineered Secure Cloud for Compliance Automation weaves thousands of automations together to build, configure, and secure an entire FedRAMP cloud environment. Scripts on a consultant’s laptop are simply not a pre-engineered, automated platform.',
				'label_block' => true,
				'condition'   => [
					'card_or_phase' => 'card',
				],
			]
		);

		// Card Front Icon.
		$repeater->add_control(
			'card_front_icon',
			[
				'label'       => esc_html__('Front Icon', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::MEDIA,
				'label_block' => true,
				'default'     => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
				'condition'   => [
					'card_or_phase' => 'card',
				],
			]
		);

		// Card Back Title.
		$repeater->add_control(
			'card_back_title',
			[
				'label'       => esc_html__('Back Title', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__('Enter your back title', 'md-real-facts'),
				'label_block' => true,
				'condition'   => [
					'card_or_phase' => 'card',
				],
				'default'     => '<h3>Anitian’s approach to FedRAMP is all about speed.</h3>',
			]
		);

		// Card Back Description.
		$repeater->add_control(
			'card_back_description',
			[
				'label'       => esc_html__('Back Description', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__('Enter your back description', 'md-real-facts'),
				'label_block' => true,
				'condition'   => [
					'card_or_phase' => 'card',
				],
				'default'    => '<p>Anitian’s Secure<strong>Coud</strong> for Compliance Automation is a comprehensive cloud security product. Managed, maintained, and optimized to deliver security and compliance with the speed, consistency, and scale that only a cloud platform can deliver.</p>',
			]
		);


		// Timeline Tabs: Ahead and Behind.
		$repeater->start_controls_tabs(
			'timeline_tabs',
			[
				'condition' => [
					'card_or_phase' => 'phase',
				],
			]
		);

		// Timeline Tab: Ahead.
		$repeater->start_controls_tab(
			'timeline_tab_ahead',
			[
				'label' => esc_html__('Ahead', 'md-real-facts'),
			]
		);

		// Timeline Ahead Phase Icon Selector.
		$repeater->add_control(
			'timeline_ahead_phase_icon',
			[
				'label'       => esc_html__('Phase Icon', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::MEDIA,
				'label_block' => true,
				'default'     => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		// Timeline Ahead Card Title.
		$repeater->add_control(
			'timeline_ahead_card_title',
			[
				'label'       => esc_html__('Card Title', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__('Enter your card title', 'md-real-facts'),
				'label_block' => true,
			]
		);

		// Timeline Ahead Card Image.
		$repeater->add_control(
			'timeline_ahead_card_image',
			[
				'label'       => esc_html__('Card Image', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::MEDIA,
				'label_block' => true,
				'default'     => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		// Timeline Why You are Ahead Content.
		$repeater->add_control(
			'timeline_ahead_why_content',
			[
				'label'       => esc_html__('Why You are Ahead Content', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__('Enter your why you are ahead content', 'md-real-facts'),
				'label_block' => true,
				'default'     => 'Our pre-engineered platform deploys a complete FedRAMP security environment – including over 15+ different security tools – in one day.',
			]
		);

		// End Timeline Tab: Ahead.
		$repeater->end_controls_tab();

		// Timeline Tab: Behind.
		$repeater->start_controls_tab(
			'timeline_tab_behind',
			[
				'label' => esc_html__('Behind', 'md-real-facts'),
			]
		);

		// Timeline Behind Phase Icon.
		$repeater->add_control(
			'timeline_behind_phase_icon',
			[
				'label'       => esc_html__('Phase Icon', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::ICONS,
				'label_block' => true,
				'default'     => [
					'value'   => 'fas fa-exclamation-triangle',
					'library' => 'solid',
				],
			]
		);

		// Timeline Behind Card Title.
		$repeater->add_control(
			'timeline_behind_card_title',
			[
				'label'       => esc_html__('Card Title', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__('Enter your card title', 'md-real-facts'),
				'label_block' => true,
				'default'     => 'Behind',
			]
		);

		// Timeline Behind Card Image.
		$repeater->add_control(
			'timeline_behind_card_image',
			[
				'label'       => esc_html__('Card Image', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::MEDIA,
				'label_block' => true,
				'default'     => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		// Timeline Why You are Behind Content.
		$repeater->add_control(
			'timeline_behind_why_content',
			[
				'label'       => esc_html__('Why You are Behind Content', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__('Enter your why you are behind content', 'md-real-facts'),
				'label_block' => true,
				'default'     => 'Traditional consulting firms take 6-12 months to deliver a FedRAMP ATO. Anitian delivers in 3-6 months.',
			]
		);

		// End Timeline Tab: Behind.
		$repeater->end_controls_tab();

		// End Timeline Tabs: Ahead and Behind.
		$repeater->end_controls_tabs();

		// Add Repeater.
		$this->add_control(
			'timeline',
			[
				'label'  => esc_html__('Timeline', 'md-real-facts'),
				'type'   => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'timeline_ahead_card_title' => esc_html__('Card Title', 'md-real-facts'),
						'timeline_behind_card_title' => esc_html__('Card Title', 'md-real-facts'),
					],
				],
			]
		);

		// End Content Section.
		$this->end_controls_section();

		// Timline Finish Section.
		$this->start_controls_section(
			'timeline_finish_section',
			[
				'label' => esc_html__('Timeline Finish', 'md-real-facts'),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Timeline Finish Icon.
		$this->add_control(
			'timeline_finish_icon',
			[
				'label'       => esc_html__('Finish Icon', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::MEDIA,
				'label_block' => true,
				'default'     => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		// Timeline Finish Card Title.
		$this->add_control(
			'timeline_finish_card_title',
			[
				'label'       => esc_html__('Card Title', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__('Enter your card title', 'md-real-facts'),
				'label_block' => true,
				'default'     => 'AUDIT-READY UP TO 80% FASTER',
			]
		);

		// Timeline Finish Card Content.
		$this->add_control(
			'timeline_finish_card_content',
			[
				'label'       => esc_html__('Card Content', 'md-real-facts'),
				'type'        => \Elementor\Controls_Manager::WYSIWYG,
				'placeholder' => esc_html__('Enter your card content', 'md-real-facts'),
				'label_block' => true,
				'default'     => 'Your application is ready for your FedRAMP 3PAO audit. You’re now well on your way to your Authority to Operate (ATO).',
			]
		);

		// End Content Section.
		$this->end_controls_section();

		// Heading Style Section.
		$this->start_controls_section(
			'heading_style_section',
			[
				'label' => esc_html__('Heading', 'md-real-facts'),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Heading Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__('Typography', 'md-real-facts'),
				'selector' => '{{WRAPPER}} .md-timeline__title',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__('Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__title' => 'color: {{VALUE}}',
				],
			]
		);

		// End Content Section.
		$this->end_controls_section();

		// Timeline Style Section.
		$this->start_controls_section(
			'timeline_style_section',
			[
				'label' => esc_html__('Timeline', 'md-real-facts'),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Timeline Front Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'timeline_front_title_typography',
				'label'    => esc_html__('Front Title Typography', 'md-real-facts'),
				'selector' => '{{WRAPPER}} .md-timeline__card-front-title',
			]
		);

		$this->add_control(
			'timeline_front_title_color',
			[
				'label'     => esc_html__('Front Title Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__card-front-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Timeline Front Description Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'timeline_front_description_typography',
				'label'    => esc_html__('Front Description Typography', 'md-real-facts'),
				'selector' => '{{WRAPPER}} .md-timeline__card-front-description',
			]
		);

		$this->add_control(
			'timeline_front_description_color',
			[
				'label'     => esc_html__('Front Description Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__card-front-description' => 'color: {{VALUE}}',
				],
			]
		);

		// Timeline Back Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'timeline_back_title_typography',
				'label'    => esc_html__('Back Title Typography', 'md-real-facts'),
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

		$this->add_control(
			'timeline_back_title_color',
			[
				'label'     => esc_html__('Back Title Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__card-back-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Timeline Back Description Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'timeline_back_description_typography',
				'label'    => esc_html__('Back Description Typography', 'md-real-facts'),
				'selector' => '
				{{WRAPPER}} .md-timeline__card-back-description h1,
				{{WRAPPER}} .md-timeline__card-back-description h2,
				{{WRAPPER}} .md-timeline__card-back-description h3,
				{{WRAPPER}} .md-timeline__card-back-description h4,
				{{WRAPPER}} .md-timeline__card-back-description h5,
				{{WRAPPER}} .md-timeline__card-back-description h6,
				{{WRAPPER}} .md-timeline__card-back-description p
				',
			]
		);

		$this->add_control(
			'timeline_back_description_color',
			[
				'label'     => esc_html__('Back Description Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__card-back-description' => 'color: {{VALUE}}',
				],
			]
		);

		// Timeline Ahead Card Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'timeline_ahead_card_title_typography',
				'label'    => esc_html__('Ahead Card Title Typography', 'md-real-facts'),
				'selector' => '{{WRAPPER}} .md-timeline__timeline-phase-card-title',
			]
		);

		$this->add_control(
			'timeline_ahead_card_title_color',
			[
				'label'     => esc_html__('Ahead Card Title Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__timeline-phase-card-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Timeline Ahead Why Content Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'timeline_ahead_why_content_typography',
				'label'    => esc_html__('Ahead Why Content Typography', 'md-real-facts'),
				'selector' => '{{WRAPPER}} .md-timeline__timeline-phase-why-content',
			]
		);

		$this->add_control(
			'timeline_ahead_why_content_color',
			[
				'label'     => esc_html__('Ahead Why Content Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__timeline-phase-why-content' => 'color: {{VALUE}}',
				],
			]
		);

		// Timeline Behind Card Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'timeline_behind_card_title_typography',
				'label'    => esc_html__('Behind Card Title Typography', 'md-real-facts'),
				'selector' => '{{WRAPPER}} .md-timeline__timeline-phase-card-title',
			]
		);

		$this->add_control(
			'timeline_behind_card_title_color',
			[
				'label'     => esc_html__('Behind Card Title Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__timeline-phase-card-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Timeline Behind Why Content Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'timeline_behind_why_content_typography',
				'label'    => esc_html__('Behind Why Content Typography', 'md-real-facts'),
				'selector' => '{{WRAPPER}} .md-timeline__timeline-phase-why-content',
			]
		);

		$this->add_control(
			'timeline_behind_why_content_color',
			[
				'label'     => esc_html__('Behind Why Content Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__timeline-phase-why-content' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_section();

		// Timeline Finish Style Section.
		$this->start_controls_section(
			'timeline_finish_style_section',
			[
				'label' => esc_html__('Timeline Finish', 'md-real-facts'),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Timeline Finish Card Title Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'timeline_finish_card_title_typography',
				'label'    => esc_html__('Card Title Typography', 'md-real-facts'),
				'selector' => '{{WRAPPER}} .md-timeline__timeline-finish-title',
			]
		);

		$this->add_control(
			'timeline_finish_card_title_color',
			[
				'label'     => esc_html__('Card Title Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__timeline-finish-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Timeline Finish Card Content Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'timeline_finish_card_content_typography',
				'label'    => esc_html__('Card Content Typography', 'md-real-facts'),
				'selector' => '{{WRAPPER}} .md-timeline__timeline-finish-content',
			]
		);

		$this->add_control(
			'timeline_finish_card_content_color',
			[
				'label'     => esc_html__('Card Content Color', 'md-real-facts'),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .md-timeline__timeline-finish-content' => 'color: {{VALUE}}',
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
	protected function render()
	{
		$settings = $this->get_settings_for_display();
?>

		<div class="md-timeline">
			<div class="md-timeline_line"></div>
			<div class="md-timeline__heading">
				<h2 class="md-timeline__title"><?php echo esc_html($settings['title']); ?></h2>
			</div>
			<div class="md-timeline__timeline-phase__wrapper">
				<?php
				foreach ($settings['timeline'] as $index => $item) {
					if ('card' === $item['card_or_phase']) {
				?>
						<div class="md-timeline__cards">
							<div class="md-timeline__card mdTimelineSlide">
								<div class="md-timeline_card__slide1">
									<div class="md-timeline__card-front mdSlideNext">
										<div class="md-timeline__card-front-icon">
											<img src="<?php echo esc_url($item['card_front_icon']['url']); ?>" alt="<?php echo esc_attr($item['card_front_title']); ?>">
										</div>
										<div class="md-timeline__card-front-content">
											<h3 class="md-timeline__card-front-title"><?php echo wp_kses_post($item['card_front_title']); ?></h3>
											<div class="md-timeline__card-front-description"><?php echo wp_kses_post($item['card_front_description']); ?></div>
										</div>
										<div class="md-click-here">
											<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="305.000000pt" height="144.000000pt" viewBox="0 0 305.000000 144.000000" preserveAspectRatio="xMidYMid meet">
												<g transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
													<path d="M1251 1097 c-5 -12 -15 -58 -22 -102 -7 -44 -19 -90 -26 -102 -8 -12 -12 -30 -9 -41 5 -15 -5 -22 -55 -40 -47 -17 -65 -19 -75 -11 -23 19 -16 47 21 75 40 30 45 54 12 54 -52 0 -108 -98 -86 -152 15 -36 48 -42 111 -18 63 24 68 24 68 6 0 -18 30 -29 35 -13 2 6 6 24 9 40 4 15 11 27 16 27 6 0 38 -14 71 -31 48 -24 64 -28 75 -18 21 17 9 28 -74 66 -87 39 -86 50 11 77 55 16 71 31 44 42 -8 3 -35 -2 -61 -11 -26 -9 -50 -14 -53 -11 -3 2 0 28 6 56 14 64 14 130 1 130 -6 0 -14 -10 -19 -23z"></path>
													<path d="M594 1086 c-72 -32 -154 -130 -169 -202 -9 -45 16 -99 57 -120 72 -39 183 -15 281 60 l47 36 0 -49 c0 -30 5 -53 14 -60 23 -19 36 17 36 96 0 37 7 103 15 145 14 74 12 108 -5 108 -17 0 -30 -30 -41 -98 -12 -72 -12 -73 -73 -121 -84 -66 -116 -81 -179 -81 -44 0 -59 5 -81 25 -31 29 -32 44 -6 95 24 47 66 81 144 115 42 19 57 30 54 43 -4 22 -53 26 -94 8z"></path>
													<path d="M1674 1054 c-17 -41 -54 -228 -54 -275 0 -15 6 -29 14 -32 16 -6 32 10 67 68 l24 40 7 -43 c9 -55 14 -62 44 -62 27 0 29 3 12 33 -6 12 -14 51 -17 87 -5 56 -9 65 -26 65 -13 0 -28 -15 -45 -45 -34 -62 -38 -33 -10 87 16 68 19 98 11 106 -7 7 -15 -1 -27 -29z"></path>
													<path d="M953 1023 c-23 -9 -15 -35 10 -31 12 2 22 9 22 17 0 16 -14 22 -32 14z"></path>
													<path d="M937 933 c-12 -21 -30 -174 -21 -183 18 -18 35 7 44 66 14 86 13 124 -4 124 -8 0 -17 -3 -19 -7z"></path>
													<path d="M1873 930 c-29 -12 -43 -40 -43 -87 0 -51 44 -97 93 -97 39 0 91 34 117 77 l18 30 7 -46 c11 -74 29 -78 60 -13 15 31 45 72 71 94 24 22 44 42 44 46 0 3 -12 6 -27 6 -18 0 -38 -13 -64 -40 l-39 -40 -6 25 c-8 31 -30 33 -38 3 -9 -30 -104 -108 -132 -108 -12 0 -27 6 -33 14 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path>
													<path d="M2293 930 c-29 -12 -43 -40 -43 -87 0 -52 44 -97 94 -97 40 0 99 41 121 85 21 39 12 37 -42 -11 -48 -42 -82 -50 -102 -26 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path>
													<path d="M2088 609 c-14 -6 -29 -16 -32 -24 -10 -27 21 -42 101 -49 91 -7 142 -19 126 -29 -18 -11 -250 -64 -343 -79 -113 -17 -526 -17 -640 0 -141 22 -307 61 -454 108 -141 45 -184 47 -131 6 60 -47 310 -124 530 -163 301 -53 768 -28 1028 54 42 14 77 23 77 21 0 -14 -355 -204 -381 -204 -23 0 -31 -26 -13 -41 22 -18 70 -6 177 44 123 58 357 196 364 215 10 24 -10 45 -71 75 -104 51 -284 86 -338 66z"></path>
												</g>
											</svg>
										</div>
										<span class="timeline__slide-icon eicon-plus-circle"></span>
									</div>
								</div>
								<div class="md-timeline_card__slide2">
									<div class="md-timeline__card-back mdSlidePrev">
										<h3 class="md-timeline__card-back-title"><?php echo wp_kses_post($item['card_back_title']); ?></h3>
										<div class="md-timeline__card-back-description"><?php echo wp_kses_post($item['card_back_description']); ?></div>
										<span class="timeline__slide-icon eicon-close-circle"></span>
									</div>
								</div>
							</div>
						</div>
					<?php
					} else {
					?>
						<div class="md-timeline__timeline-phase__ahead">
							<div class="md-timeline__timeline-phase-icon">
								<img src="<?php echo esc_url($item['timeline_ahead_phase_icon']['url']); ?>" alt="<?php echo esc_attr($item['timeline_ahead_card_title']); ?>">
							</div>
							<div class="md-timeline__timeline-phase-content">
								<div class="md-timeline__timeline-phase-card">
									<h3 class="md-timeline__timeline-phase-card-title"><?php echo wp_kses_post($item['timeline_ahead_card_title']); ?></h3>
									<div class="md-timeline__timeline-phase-card-image">
										<img src="<?php echo esc_url($item['timeline_ahead_card_image']['url']); ?>" alt="<?php echo esc_attr($item['timeline_ahead_card_title']); ?>">
									</div>
								</div>
								<?php if (!empty($item['timeline_ahead_why_content'])) { ?>
									<div class="md-timeline__timeline-phase-why-content"><mark><?php esc_html_e("Why you’re ahead:", "md-real-facts"); ?></mark> <?php echo wp_kses_post($item['timeline_ahead_why_content']); ?></div>
								<?php } ?>
							</div>
						</div>
						<div class="md-timeline__timeline-phase__behind">
							<div class="md-timeline__timeline-phase-icon">
								<i class="<?php echo esc_attr($item['timeline_behind_phase_icon']['value']); ?>"></i>
							</div>
							<div class="md-timeline__timeline-phase-content">
								<div class="md-timeline__timeline-phase-card">
									<h3 class="md-timeline__timeline-phase-card-title"><?php echo wp_kses_post($item['timeline_behind_card_title']); ?></h3>
									<div class="md-timeline__timeline-phase-card-image">
										<img src="<?php echo esc_url($item['timeline_behind_card_image']['url']); ?>" alt="<?php echo esc_attr($item['timeline_behind_card_title']); ?>">
									</div>
								</div>
								<?php if (!empty($item['timeline_behind_why_content'])) { ?>
									<div class="md-timeline__timeline-phase-why-content"><mark><?php esc_html_e("Why you’re behind:", "md-real-facts"); ?></mark> <?php echo wp_kses_post($item['timeline_behind_why_content']); ?></div>
								<?php } ?>
							</div>
						</div>
				<?php }
				}
				?>
				<div class="md-timeline__timeline-finish">
					<div class="md-timeline__timeline-finish-icon">
						<img src="<?php echo esc_url($settings['timeline_finish_icon']['url']); ?>" alt="<?php echo esc_attr($settings['timeline_finish_card_title']); ?>">
					</div>
					<div class="md-timeline__timeline-finish-content">
						<h4 class="md-timeline__timeline-finish-title"><?php echo wp_kses_post($settings['timeline_finish_card_title']); ?></h4>
						<div class="md-timeline__timeline-finish-description"><?php echo wp_kses_post($settings['timeline_finish_card_content']); ?></div>
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
	protected function content_template()
	{
	?>

		<div class="md-timeline">
			<div class="md-timeline_line"></div>
			<div class="md-timeline__heading">
				<h2 class="md-timeline__title">{{{ settings.title }}}</h2>
			</div>
			<div class="md-timeline__timeline-phase__wrapper">
				<# _.each( settings.timeline, function( item, index ) { #>
					<# if ( 'card'===item.card_or_phase ) { #>
					<div class="md-timeline__cards">
						<div class="md-timeline__card mdTimelineSlide">
							<div class="md-timeline_card__slide1">
								<div class="md-timeline__card-front mdSlideNext">
									<div class="md-timeline__card-front-icon">
										<img src="{{{ item.card_front_icon.url }}}" alt="{{{ item.card_front_title }}}">
									</div>
									<div class="md-timeline__card-front-content">
										<h3 class="md-timeline__card-front-title">{{{ item.card_front_title }}}</h3>
										<div class="md-timeline__card-front-description">{{{ item.card_front_description }}}</div>
									</div>
									<div class="md-click-here">
										<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="305.000000pt" height="144.000000pt" viewBox="0 0 305.000000 144.000000" preserveAspectRatio="xMidYMid meet">
											<g transform="translate(0.000000,144.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
												<path d="M1251 1097 c-5 -12 -15 -58 -22 -102 -7 -44 -19 -90 -26 -102 -8 -12 -12 -30 -9 -41 5 -15 -5 -22 -55 -40 -47 -17 -65 -19 -75 -11 -23 19 -16 47 21 75 40 30 45 54 12 54 -52 0 -108 -98 -86 -152 15 -36 48 -42 111 -18 63 24 68 24 68 6 0 -18 30 -29 35 -13 2 6 6 24 9 40 4 15 11 27 16 27 6 0 38 -14 71 -31 48 -24 64 -28 75 -18 21 17 9 28 -74 66 -87 39 -86 50 11 77 55 16 71 31 44 42 -8 3 -35 -2 -61 -11 -26 -9 -50 -14 -53 -11 -3 2 0 28 6 56 14 64 14 130 1 130 -6 0 -14 -10 -19 -23z"></path>
												<path d="M594 1086 c-72 -32 -154 -130 -169 -202 -9 -45 16 -99 57 -120 72 -39 183 -15 281 60 l47 36 0 -49 c0 -30 5 -53 14 -60 23 -19 36 17 36 96 0 37 7 103 15 145 14 74 12 108 -5 108 -17 0 -30 -30 -41 -98 -12 -72 -12 -73 -73 -121 -84 -66 -116 -81 -179 -81 -44 0 -59 5 -81 25 -31 29 -32 44 -6 95 24 47 66 81 144 115 42 19 57 30 54 43 -4 22 -53 26 -94 8z"></path>
												<path d="M1674 1054 c-17 -41 -54 -228 -54 -275 0 -15 6 -29 14 -32 16 -6 32 10 67 68 l24 40 7 -43 c9 -55 14 -62 44 -62 27 0 29 3 12 33 -6 12 -14 51 -17 87 -5 56 -9 65 -26 65 -13 0 -28 -15 -45 -45 -34 -62 -38 -33 -10 87 16 68 19 98 11 106 -7 7 -15 -1 -27 -29z"></path>
												<path d="M953 1023 c-23 -9 -15 -35 10 -31 12 2 22 9 22 17 0 16 -14 22 -32 14z"></path>
												<path d="M937 933 c-12 -21 -30 -174 -21 -183 18 -18 35 7 44 66 14 86 13 124 -4 124 -8 0 -17 -3 -19 -7z"></path>
												<path d="M1873 930 c-29 -12 -43 -40 -43 -87 0 -51 44 -97 93 -97 39 0 91 34 117 77 l18 30 7 -46 c11 -74 29 -78 60 -13 15 31 45 72 71 94 24 22 44 42 44 46 0 3 -12 6 -27 6 -18 0 -38 -13 -64 -40 l-39 -40 -6 25 c-8 31 -30 33 -38 3 -9 -30 -104 -108 -132 -108 -12 0 -27 6 -33 14 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path>
												<path d="M2293 930 c-29 -12 -43 -40 -43 -87 0 -52 44 -97 94 -97 40 0 99 41 121 85 21 39 12 37 -42 -11 -48 -42 -82 -50 -102 -26 -10 12 -7 18 18 30 35 19 46 47 30 78 -20 38 -36 44 -76 28z m43 -45 c7 -18 -12 -45 -32 -45 -14 0 -20 41 -7 53 11 12 33 7 39 -8z"></path>
												<path d="M2088 609 c-14 -6 -29 -16 -32 -24 -10 -27 21 -42 101 -49 91 -7 142 -19 126 -29 -18 -11 -250 -64 -343 -79 -113 -17 -526 -17 -640 0 -141 22 -307 61 -454 108 -141 45 -184 47 -131 6 60 -47 310 -124 530 -163 301 -53 768 -28 1028 54 42 14 77 23 77 21 0 -14 -355 -204 -381 -204 -23 0 -31 -26 -13 -41 22 -18 70 -6 177 44 123 58 357 196 364 215 10 24 -10 45 -71 75 -104 51 -284 86 -338 66z"></path>
											</g>
										</svg>
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
					<# } else { #>
						<div class="md-timeline__timeline-phase__ahead">
							<div class="md-timeline__timeline-phase-icon">
								<img src="{{{ item.timeline_ahead_phase_icon.url }}}" alt="{{{ item.timeline_ahead_card_title }}}">
							</div>
							<div class="md-timeline__timeline-phase-content">
								<div class="md-timeline__timeline-phase-card">
									<h3 class="md-timeline__timeline-phase-card-title">{{{ item.timeline_ahead_card_title }}}</h3>
									<div class="md-timeline__timeline-phase-card-image">
										<img src="{{{ item.timeline_ahead_card_image.url }}}" alt="{{{ item.timeline_ahead_card_title }}}">
									</div>
								</div>
								<div class="md-timeline__timeline-phase-why-content">{{{ item.timeline_ahead_why_content }}}</div>
							</div>
						</div>
						<div class="md-timeline__timeline-phase__behind">
							<div class="md-timeline__timeline-phase-icon">
								<i class="{{{ item.timeline_behind_phase_icon.value }}}"></i>
							</div>
							<div class="md-timeline__timeline-phase-content">
								<div class="md-timeline__timeline-phase-card">
									<h3 class="md-timeline__timeline-phase-card-title">{{{ item.timeline_behind_card_title }}}</h3>
									<div class="md-timeline__timeline-phase-card-image">
										<img src="{{{ item.timeline_behind_card_image.url }}}" alt="{{{ item.timeline_behind_card_title }}}">
									</div>
								</div>
								<div class="md-timeline__timeline-phase-why-content">{{{ item.timeline_behind_why_content }}}</div>
							</div>
						</div>
					<# } #>
				<# }); #>
				<div class="md-timeline__timeline-finish">
					<div class="md-timeline__timeline-finish-icon">
						<img src="{{{ settings.timeline_finish_icon.url }}}" alt="{{{ settings.timeline_finish_card_title }}}">
					</div>
					<div class="md-timeline__timeline-finish-content">
						<h4 class="md-timeline__timeline-finish-title">{{{ settings.timeline_finish_card_title }}}</h4>
						<div class="md-timeline__timeline-finish-description">{{{ settings.timeline_finish_card_content }}}</div>
					</div>
				</div>
			</div>
		</div>

<?php
	}
}

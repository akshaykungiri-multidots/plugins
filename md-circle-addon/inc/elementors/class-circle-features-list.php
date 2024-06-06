<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_Features_List class
 * 
 * @since 1.0.0
 */
class Circle_Features_List extends \Elementor\Widget_Base {

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
		return 'circle_features_list';
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
		return esc_html__( 'Circle Features List', 'circle-addon' );
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
		return 'eicon-bullet-list';
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
		return [ 'circle', 'features', 'list' ];
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
                'label' => esc_html__( 'Heading', 'circle-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'heading',
            [
                'label' => esc_html__( 'Heading', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'All the features you need to get started in minutes', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        // Sub Text Control

        $this->add_control(
            'sub_text',
            [
                'label' => esc_html__( 'Sub Text', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'You have a vision for your community experience. Circle provides you with the building blocks to bring your vision to life — fast and without the headaches.', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

		// Features List Section

		$this->start_controls_section(
			'features_list_section',
			[
				'label' => esc_html__( 'Features List', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Repeater including feature main title and inside features list as repeater.

		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'feature_title',
			[
				'label' => esc_html__( 'Feature Title', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Feature Title', 'circle-addon' ),
				'label_block' => true,
			]
		);

		// Feature Title Circle Color.

		$repeater->add_control(
			'feature_title_circle_color',
			[
				'label' => esc_html__( 'Feature Title Circle Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '#333',
			]
		);

		$feature_list = new \Elementor\Repeater();

		$feature_list->add_control(
			'feature_list_title',
			[
				'label' => esc_html__( 'Feature List Title', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Feature List Title', 'circle-addon' ),
				'label_block' => true,
			]
		);

		$repeater->add_control(
			'feature_list',
			[
				'label' => esc_html__( 'Feature List', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $feature_list->get_controls(),
				'default' => [
					[
						'feature_list_title' => esc_html__( 'Feature List Title', 'circle-addon' ),
					],
				],
				'title_field' => '{{{ feature_list_title }}}',
			]
		);

		$this->add_control(
			'features_list',
			[
				'label' => esc_html__( 'Features List', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'feature_title' => esc_html__( 'Feature Title', 'circle-addon' ),
						'feature_title_circle_color' => '#333',
						'feature_list' => [
							[
								'feature_list_title' => esc_html__( 'Feature List Title', 'circle-addon' ),
							],
						],
					],
				],
				'title_field' => '{{{ feature_title }}}',
			]
		);

		$this->end_controls_section();

		// Heading Style Section

		$this->start_controls_section(
			'heading_style_section',
			[
				'label' => esc_html__( 'Heading', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Heading Typography and Color

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'heading_typography',
				'label' => esc_html__( 'Heading Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-features-list-heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label' => esc_html__( 'Heading Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '#333',
				'selectors' => [
					'{{WRAPPER}} .circle-features-list-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Sub Text Typography and Color

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'sub_text_typography',
				'label' => esc_html__( 'Sub Text Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-features-list-sub-text',
			]
		);

		$this->add_control(
			'sub_text_color',
			[
				'label' => esc_html__( 'Sub Text Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '#333',
				'selectors' => [
					'{{WRAPPER}} .circle-features-list-sub-text' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_section();
		
		// Features List Style Section

		$this->start_controls_section(
			'features_list_style_section',
			[
				'label' => esc_html__( 'Features List', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Feature Title Typography and Color

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'feature_title_typography',
				'label' => esc_html__( 'Feature Title Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-features-list-feature-title',
			]
		);

		$this->add_control(
			'feature_title_color',
			[
				'label' => esc_html__( 'Feature Title Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '#333',
				'selectors' => [
					'{{WRAPPER}} .circle-features-list-feature-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Feature List Title Typography and Color

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'feature_list_title_typography',
				'label' => esc_html__( 'Feature List Title Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-features-list-feature-list-title',
			]
		);

		$this->add_control(
			'feature_list_title_color',
			[
				'label' => esc_html__( 'Feature List Title Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '#333',
				'selectors' => [
					'{{WRAPPER}} .circle-features-list-feature-list-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Feature List Icon Selector

		$this->add_control(
			'feature_list_icon_selector',
			[
				'label' => esc_html__( 'Feature List Icon Selector', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-check',
					'library' => 'solid',
				],
			]
		);

		// Feature List Icon Color

		$this->add_control(
			'feature_list_icon_color',
			[
				'label' => esc_html__( 'Feature List Icon Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'default' => '#333',
				'selectors' => [
					'{{WRAPPER}} .circle-features-list-feature-list-icon i' => 'color: {{VALUE}}',
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

		<div class="circle-features-list">
			<div class="container">
				<div class="circle-features-list-inner">
					<div class="circle-features-list-heading__wrapper">
						<div class="circle-features-list-heading">
							<?php echo esc_html( $settings['heading'] ); ?>
						</div>
						<div class="circle-features-list-sub-text">
							<?php echo esc_html( $settings['sub_text'] ); ?>
						</div>
					</div>
					<div class="circle-features-list-features">
						<?php foreach ( $settings['features_list'] as $feature ) : ?>
							<div class="circle-features-list-feature">
								<div class="circle-features-list-feature-title">
									<div class="circle-features-list-feature-title--circle" style="background-color: <?php echo esc_attr( $feature['feature_title_circle_color'] ); ?>"></div>
									<div class="circle-features-list-feature-title--text">
										<?php echo esc_html( $feature['feature_title'] ); ?>
									</div>
								</div>
								<div class="circle-features-list-feature-list">
									<?php foreach ( $feature['feature_list'] as $feature_list ) : ?>
										<div class="circle-features-list-feature-list-item">
											<div class="circle-features-list-feature-list-icon">
												<i class="<?php echo esc_attr( $settings['feature_list_icon_selector']['value'] ); ?>"></i>
											</div>
											<div class="circle-features-list-feature-list-title">
												<?php echo esc_html( $feature_list['feature_list_title'] ); ?>
											</div>
										</div>
									<?php endforeach; ?>
								</div>
							</div>
						<?php endforeach; ?>
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

		<div class="circle-features-list">
			<div class="container">
				<div class="circle-features-list-inner">
					<div class="circle-features-list-heading__wrapper">
						<div class="circle-features-list-heading">
							{{{ settings.heading }}}
						</div>
						<div class="circle-features-list-sub-text">
							{{{ settings.sub_text }}}
						</div>
					</div>
					<div class="circle-features-list-features">
						<# _.each( settings.features_list, function( feature ) { #>
							<div class="circle-features-list-feature">
								<div class="circle-features-list-feature-title">
									<div class="circle-features-list-feature-title--circle" style="background-color: {{ feature.feature_title_circle_color }}"></div>
									<div class="circle-features-list-feature-title--text">
										{{{ feature.feature_title }}}
									</div>
								</div>
								<div class="circle-features-list-feature-list">
									<# _.each( feature.feature_list, function( feature_list ) { #>
										<div class="circle-features-list-feature-list-item">
											<div class="circle-features-list-feature-list-icon">
												<i class="{{ settings.feature_list_icon_selector.value }}"></i>
											</div>
											<div class="circle-features-list-feature-list-title">
												{{{ feature_list.feature_list_title }}}
											</div>
										</div>
									<# }); #>
								</div>
							</div>
						<# }); #>
					</div>
				</div>
			</div>
		</div>

        <?php
	}

}
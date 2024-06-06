<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_Courses_Block class
 * 
 * @since 1.0.0
 */
class Circle_Courses_Block extends \Elementor\Widget_Base {

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
		return 'circle-courses-block';
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
		return esc_html__( 'Circle Courses Block', 'circle-addon' );
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
		return 'eicon-kit-details';
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
		return [ 'circle', 'courses', 'block' ];
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
                'default' => esc_html__( 'Built for community-powered courses', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        // Sub Text Control

        $this->add_control(
            'sub_text',
            [
                'label' => esc_html__( 'Sub Text', 'circle-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Goodbye one-dimensional lectures, hello immersive experiences. Bring your course to life with:', 'circle-addon' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

		// Course List Section as repeater

		$this->start_controls_section(
			'course_list_section',
			[
				'label' => esc_html__( 'Course List', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$repeater = new \Elementor\Repeater();

		$repeater->add_control(
			'course_title',
			[
				'label' => esc_html__( 'Course Title', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::TEXT,
				'default' => esc_html__( 'Course Title', 'circle-addon' ),
				'label_block' => true,
			]
		);

		$this->add_control(
			'course_list',
			[
				'label' => esc_html__( 'Course List', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'course_title' => esc_html__( 'Course Title', 'circle-addon' ),
					],
				],
				'title_field' => '{{{ course_title }}}',
			]
		);

		$this->end_controls_section();

		// Image Section

		$this->start_controls_section(
			'image_section',
			[
				'label' => esc_html__( 'Image', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'image',
			[
				'label' => esc_html__( 'Image', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->end_controls_section();

		// Heading Style Section including typography and color

		$this->start_controls_section(
			'heading_style_section',
			[
				'label' => esc_html__( 'Heading', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'heading_typography',
				'label' => esc_html__( 'Heading Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-courses-block .heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label' => esc_html__( 'Heading Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-courses-block .heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Sub Text Style Section including typography and color

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'sub_text_typography',
				'label' => esc_html__( 'Sub Text Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-courses-block .sub-text',
			]
		);

		$this->add_control(
			'sub_text_color',
			[
				'label' => esc_html__( 'Sub Text Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-courses-block .sub-text' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_section();

		// Course List Style Section including typography and color

		$this->start_controls_section(
			'course_list_style_section',
			[
				'label' => esc_html__( 'Course List', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Number of Courses per row

		$this->add_responsive_control(
			'course_list_columns',
			[
				'label' => esc_html__( 'Columns', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'1' => esc_html__( '1', 'circle-addon' ),
					'2' => esc_html__( '2', 'circle-addon' ),
					'3' => esc_html__( '3', 'circle-addon' ),
					'4' => esc_html__( '4', 'circle-addon' ),
					'5' => esc_html__( '5', 'circle-addon' ),
					'6' => esc_html__( '6', 'circle-addon' ),
				],
				'default' => '2',
				'selectors' => [
					'{{WRAPPER}} .circle-courses-block .course-list' => 'grid-template-columns: repeat({{VALUE}}, 1fr)',
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'course_list_typography',
				'label' => esc_html__( 'Course List Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-courses-block .course-list .course-title',
			]
		);

		$this->add_control(
			'course_list_color',
			[
				'label' => esc_html__( 'Course List Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-courses-block .course-list .course-title' => 'color: {{VALUE}}',
				],
			]
		);

		// Course List Icon Selector

		$this->add_control(
			'course_list_icon',
			[
				'label' => esc_html__( 'Course List Icon', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::ICONS,
				'default' => [
					'value' => 'fas fa-check',
					'library' => 'solid',
				],
			]
		);

		$this->add_control(
			'course_list_icon_color',
			[
				'label' => esc_html__( 'Course List Icon Color', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-courses-block .course-list .course-title i' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_section();

		// Image Style Section including image width, height, margin, and border

		$this->start_controls_section(
			'image_style_section',
			[
				'label' => esc_html__( 'Image', 'circle-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'image_width',
			[
				'label' => esc_html__( 'Width', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
					],
					'em' => [
						'min' => 0,
						'max' => 50,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => '%',
				],
				'selectors' => [
					'{{WRAPPER}} .circle-courses-block .image img' => 'width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'image_height',
			[
				'label' => esc_html__( 'Height', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 500,
					],
					'em' => [
						'min' => 0,
						'max' => 50,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => '%',
				],
				'selectors' => [
					'{{WRAPPER}} .circle-courses-block .image img' => 'height: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'image_margin',
			[
				'label' => esc_html__( 'Margin', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .circle-courses-block .image img' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'image_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .circle-courses-block .image img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
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

		<div class="circle-courses-block">
			<div class="circle-courses-block__inner">
				<div class="heading_wrapper">
					<div class="heading"><?php echo esc_html( $settings['heading'] ); ?></div>
					<div class="sub-text"><?php echo esc_html( $settings['sub_text'] ); ?></div>
				</div>
				<div class="course-list">
					<?php foreach ( $settings['course_list'] as $item ) { ?>
					<div class="course-title">
						<i class="<?php echo esc_attr( $settings['course_list_icon']['value'] ); ?>"></i>
						<span><?php echo esc_html( $item['course_title'] ); ?></span>
					</div>
					<?php } ?>
				</div>
			</div>
			<div class="image">
				<img src="<?php echo esc_url( $settings['image']['url'] ); ?>" alt="Image">
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

		<div class="circle-courses-block">
			<div class="circle-courses-block__inner">
				<div class="heading_wrapper">
					<div class="heading">{{{ settings.heading }}}</div>
					<div class="sub-text">{{{ settings.sub_text }}}</div>
				</div>
				<div class="course-list">
					<# _.each( settings.course_list, function( item ) { #>
					<div class="course-title">
						<i class="{{{ settings.course_list_icon.value }}}"></i>
						<span>{{{ item.course_title }}}</span>
					</div>
					<# } ); #>
				</div>
			</div>
			<div class="image">
				<img src="{{{ settings.image.url }}}" alt="Image">
			</div>
		</div>

        <?php
	}

}
<?php

/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Fiery_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Fiery_Addon\Inc\Elementors;

use Elementor\Controls_Manager;


/**
 * Elementor Hero Banner Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Fiery_Case_Studies extends \Elementor\Widget_Base {

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
		return 'fiery_case_studies_slider';
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
		return esc_html__( 'Case Studies Slider', 'md-fiery-addon' );
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
		return 'eicon-banner';
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
		return [ 'md-fiery-addons' ];
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
		return [ 'case', 'fiery', 'slider', 'studies' ];
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
	 * Register list widget controls.
	 *
	 * Add input fields to allow the user to customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls() {
        $this->start_controls_section(
            'section_heading',
            [
                'label' => esc_html__( 'Heading', 'elementor-list-widget' ),
            ]
        );

        $this->add_control(
            'heading_title',
            [
                'label' => esc_html__( 'Title', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Fiery Journey: From Challenge to Success', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'heading_subtitle',
            [
                'label' => esc_html__( 'Subtitle', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( '', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

        // Case Studies Repeater including image, title, subtitle, description, and link text and link URL

        $this->start_controls_section(
            'section_case_studies',
            [
                'label' => esc_html__( 'Case Studies', 'elementor-list-widget' ),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'case_studies_image',
            [
                'label' => esc_html__( 'Image', 'elementor-list-widget' ),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $repeater->add_control(
            'case_studies_title',
            [
                'label' => esc_html__( 'Title', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Case Studies Title', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'case_studies_subtitle',
            [
                'label' => esc_html__( 'Subtitle', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Case Studies Subtitle', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'case_studies_description',
            [
                'label' => esc_html__( 'Description', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'Case Studies Description', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'case_studies_link_text',
            [
                'label' => esc_html__( 'Link Text', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Read More', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'case_studies_link_url',
            [
                'label' => esc_html__( 'Link URL', 'elementor-list-widget' ),
                'type' => Controls_Manager::URL,
                'placeholder' => esc_html__( 'https://your-link.com', 'elementor-list-widget' ),
                'show_external' => true,
                'default' => [
                    'url' => '#',
                ],
            ]
        );

        // Case Studies Content Background Color.

        $repeater->add_control(
            'case_studies_content_background_color',
            [
                'label' => esc_html__( 'Content Background Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
            ]
        );

        $this->add_control(
            'case_studies_list',
            [
                'label' => esc_html__( 'Case Studies List', 'elementor-list-widget' ),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'case_studies_title' => esc_html__( 'Case Studies Title #1', 'elementor-list-widget' ),
                        'case_studies_subtitle' => esc_html__( 'Case Studies Subtitle #1', 'elementor-list-widget' ),
                        'case_studies_description' => esc_html__( 'Case Studies Description #1', 'elementor-list-widget' ),
                        'case_studies_link_text' => esc_html__( 'Read More', 'elementor-list-widget' ),
                        'case_studies_link_url' => '#',
                    ],
                    [
                        'case_studies_title' => esc_html__( 'Case Studies Title #2', 'elementor-list-widget' ),
                        'case_studies_subtitle' => esc_html__( 'Case Studies Subtitle #2', 'elementor-list-widget' ),
                        'case_studies_description' => esc_html__( 'Case Studies Description #2', 'elementor-list-widget' ),
                        'case_studies_link_text' => esc_html__( 'Read More', 'elementor-list-widget' ),
                        'case_studies_link_url' => '#',
                    ],
                    [
                        'case_studies_title' => esc_html__( 'Case Studies Title #3', 'elementor-list-widget' ),
                        'case_studies_subtitle' => esc_html__( 'Case Studies Subtitle #3', 'elementor-list-widget' ),
                        'case_studies_description' => esc_html__( 'Case Studies Description #3', 'elementor-list-widget' ),
                        'case_studies_link_text' => esc_html__( 'Read More', 'elementor-list-widget' ),
                        'case_studies_link_url' => '#',
                    ],
                ],
                'title_field' => '{{{ case_studies_title }}}',
            ]
        );

        $this->end_controls_section();

        // Slider Settings.

        $this->start_controls_section(
            'section_slider_settings',
            [
                'label' => esc_html__( 'Slider Settings', 'elementor-list-widget' ),
            ]
        );

        $this->add_control(
            'slides_to_show',
            [
                'label' => esc_html__( 'Slides to Show', 'elementor-list-widget' ),
                'type' => Controls_Manager::NUMBER,
                'default' => 3,
            ]
        );

        $this->add_control(
            'slides_to_scroll',
            [
                'label' => esc_html__( 'Slides to Scroll', 'elementor-list-widget' ),
                'type' => Controls_Manager::NUMBER,
                'default' => 1,
            ]
        );

        $this->add_control(
            'autoplay',
            [
                'label' => esc_html__( 'Autoplay', 'elementor-list-widget' ),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'elementor-list-widget' ),
                'label_off' => esc_html__( 'No', 'elementor-list-widget' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'autoplay_speed',
            [
                'label' => esc_html__( 'Autoplay Speed', 'elementor-list-widget' ),
                'type' => Controls_Manager::NUMBER,
                'default' => 5000,
                'condition' => [
                    'autoplay' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'infinite',
            [
                'label' => esc_html__( 'Infinite Loop', 'elementor-list-widget' ),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'elementor-list-widget' ),
                'label_off' => esc_html__( 'No', 'elementor-list-widget' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'arrows',
            [
                'label' => esc_html__( 'Arrows', 'elementor-list-widget' ),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'elementor-list-widget' ),
                'label_off' => esc_html__( 'No', 'elementor-list-widget' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'dots',
            [
                'label' => esc_html__( 'Dots', 'elementor-list-widget' ),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'elementor-list-widget' ),
                'label_off' => esc_html__( 'No', 'elementor-list-widget' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'pause_on_hover',
            [
                'label' => esc_html__( 'Pause on Hover', 'elementor-list-widget' ),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'elementor-list-widget' ),
                'label_off' => esc_html__( 'No', 'elementor-list-widget' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'adaptive_height',
            [
                'label' => esc_html__( 'Adaptive Height', 'elementor-list-widget' ),
                'type' => Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'elementor-list-widget' ),
                'label_off' => esc_html__( 'No', 'elementor-list-widget' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->end_controls_section();

        // Heading Style Section.

        $this->start_controls_section(
            'section_heading_style',
            [
                'label' => esc_html__( 'Heading', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Heading Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Heading Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .elementor-list-widget-heading',
            ]
        );

        // Heading Color.

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .elementor-list-widget-heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Subtitle Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'subtitle_typography',
                'label' => esc_html__( 'Sub Title Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .elementor-list-widget-subtitle',
            ]
        );

        // Subtitle Color.

        $this->add_control(
            'subtitle_color',
            [
                'label' => esc_html__( 'Sub Title Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .elementor-list-widget-subtitle' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_section();

        // Case Studies Style Section.

        $this->start_controls_section(
            'section_case_studies_style',
            [
                'label' => esc_html__( 'Case Studies', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Title Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'case_studies_title_typography',
                'label' => esc_html__( 'Title Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .fiery-case-studies-slider-item-title',
            ]
        );

        // Title Color.

        $this->add_control(
            'case_studies_title_color',
            [
                'label' => esc_html__( 'Title Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .fiery-case-studies-slider-item-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Subtitle Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'case_studies_subtitle_typography',
                'label' => esc_html__( 'Subtitle Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .fiery-case-studies-slider-item-subtitle',
            ]
        );

        // Subtitle Color.

        $this->add_control(
            'case_studies_subtitle_color',
            [
                'label' => esc_html__( 'Subtitle Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .fiery-case-studies-slider-item-subtitle' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Description Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'case_studies_description_typography',
                'label' => esc_html__( 'Description Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .fiery-case-studies-slider-item-description',
            ]
        );

        // Description Color.

        $this->add_control(
            'case_studies_description_color',
            [
                'label' => esc_html__( 'Description Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .fiery-case-studies-slider-item-description' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Link Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'case_studies_link_typography',
                'label' => esc_html__( 'Link Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .fiery-case-studies-slider-item-link',
            ]
        );

        // Link Color.

        $this->add_control(
            'case_studies_link_color',
            [
                'label' => esc_html__( 'Link Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .fiery-case-studies-slider-item-link' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Slider Border Group.

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'slider_border',
                'label' => esc_html__( 'Border', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .elementor-list-widget-slider',
            ]
        );

        // Slider Border Radius.

        $this->add_control(
            'slider_border_radius',
            [
                'label' => esc_html__( 'Border Radius', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'selectors' => [
                    '{{WRAPPER}} .elementor-list-widget-slider' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();
        
	}

	/**
	 * Render list widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {
        $settings = $this->get_settings_for_display();
        ?>

        <div class="fiery-case-studies-slider">
            <div class="fiery-case-studies-slider-heading">
                <h2 class="fiery-case-studies-slider-title"><?php echo esc_html( $settings['heading_title'] ); ?></h2>
                <p class="fiery-case-studies-slider-subtitle"><?php echo esc_html( $settings['heading_subtitle'] ); ?></p>
            </div>
            <div class="fiery-case-studies-slider-wrapper">
                <div class="fiery-case-studies-slider-inner md-slick-slider" data-slide-to-show="<?php echo esc_attr( $settings['slides_to_show'] ); ?>" data-slide-to-scroll="<?php echo esc_attr( $settings['slides_to_scroll'] ); ?>" data-autoplay="<?php echo esc_attr( $settings['autoplay'] ); ?>" data-autoplay-speed="<?php echo esc_attr( $settings['autoplay_speed'] ); ?>" data-infinite="<?php echo esc_attr( $settings['infinite'] ); ?>" data-arrows="<?php echo esc_attr( $settings['arrows'] ); ?>" data-dots="<?php echo esc_attr( $settings['dots'] ); ?>" data-pause-on-hover="<?php echo esc_attr( $settings['pause_on_hover'] ); ?>" data-adaptive-height="<?php echo esc_attr( $settings['adaptive_height'] ); ?>">
                    <?php
                    foreach ( $settings['case_studies_list'] as $case_studies ) {
                        ?>
                        <div class="fiery-case-studies-slider-item">
                            <div class="fiery-case-studies-slider-item-image">
                                <img src="<?php echo esc_url( $case_studies['case_studies_image']['url'] ); ?>" alt="<?php echo esc_attr( $case_studies['case_studies_title'] ); ?>">
                            </div>
                            <div class="fiery-case-studies-slider-item-content">
                                <p class="fiery-case-studies-slider-item-subtitle"><?php echo esc_html( $case_studies['case_studies_subtitle'] ); ?></p>
                                <h3 class="fiery-case-studies-slider-item-title"><?php echo esc_html( $case_studies['case_studies_title'] ); ?></h3>
                                <p class="fiery-case-studies-slider-item-description"><?php echo esc_html( $case_studies['case_studies_description'] ); ?></p>
                                <a href="<?php echo esc_url( $case_studies['case_studies_link_url']['url'] ); ?>" class="fiery-case-studies-slider-item-link"><?php echo esc_html( $case_studies['case_studies_link_text'] ); ?></a>
                                <div class="fiery-case-studies-slider-item-content-background" style="background-color: <?php echo esc_attr( $case_studies['case_studies_content_background_color'] ); ?>;"></div>
                            </div>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </div>
        <?php
	}

	/**
	 * Render list widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function content_template() {
        ?>

        <div class="fiery-case-studies-slider">
            <div class="fiery-case-studies-slider-heading">
                <h2 class="fiery-case-studies-slider-title">{{{ settings.heading_title }}}</h2>
                <p class="fiery-case-studies-slider-subtitle">{{{ settings.heading_subtitle }}}</p>
            </div>
            <div class="fiery-case-studies-slider-wrapper">
                <div class="fiery-case-studies-slider-inner md-slick-slider" data-slide-to-show="{{ settings.slides_to_show }}" data-slide-to-scroll="{{ settings.slides_to_scroll }}" data-autoplay="{{ settings.autoplay }}" data-autoplay-speed="{{ settings.autoplay_speed }}" data-infinite="{{ settings.infinite }}" data-arrows="{{ settings.arrows }}" data-dots="{{ settings.dots }}" data-pause-on-hover="{{ settings.pause_on_hover }}" data-adaptive-height="{{ settings.adaptive_height }}">
                    <# _.each( settings.case_studies_list, function( case_studies ) { #>
                        <div class="fiery-case-studies-slider-item">
                            <div class="fiery-case-studies-slider-item-image">
                                <img src="{{ case_studies.case_studies_image.url }}" alt="{{ case_studies.case_studies_title }}">
                            </div>
                            <div class="fiery-case-studies-slider-item-content">
                                <p class="fiery-case-studies-slider-item-subtitle">{{ case_studies.case_studies_subtitle }}</p>
                                <h3 class="fiery-case-studies-slider-item-title">{{ case_studies.case_studies_title }}</h3>
                                <p class="fiery-case-studies-slider-item-description">{{ case_studies.case_studies_description }}</p>
                                <a href="{{ case_studies.case_studies_link_url.url }}" class="fiery-case-studies-slider-item-link">{{ case_studies.case_studies_link_text }}</a>
                                <div class="fiery-case-studies-slider-item-content-background" style="background-color: {{ case_studies.case_studies_content_background_color }}"></div>
                            </div>
                        </div>
                    <# }); #>
                </div>
            </div>
        </div>

        <?php
	}

}
<?php

/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Elementor
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Elementor\Inc\Elementors;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Background;


/**
 * Elementor List Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Elementor_Resource_Block extends \Elementor\Widget_Base {

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
		return 'resource_block';
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
		return esc_html__( 'Resource Block', 'elementor-list-widget' );
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
		return [ 'md-elements' ];
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
		return [ 'list', 'lists', 'ordered', 'unordered' ];
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

        // Heading section with title and subtitle.

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
                'default' => esc_html__( 'Resource Block', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'heading_subtitle',
            [
                'label' => esc_html__( 'Subtitle', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Subtitle', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

        // Resource section with repeater fields like image, content and button.

        $this->start_controls_section(
            'section_resource',
            [
                'label' => esc_html__( 'Resource', 'elementor-list-widget' ),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'resource_image',
            [
                'label' => esc_html__( 'Image', 'elementor-list-widget' ),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $repeater->add_control(
            'resource_content',
            [
                'label' => esc_html__( 'Content', 'elementor-list-widget' ),
                'type' => Controls_Manager::WYSIWYG,
                'default' => esc_html__( 'Content', 'elementor-list-widget' ),
            ]
        );

        $repeater->add_control(
            'resource_button_text',
            [
                'label' => esc_html__( 'Button Text', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Button', 'elementor-list-widget' ),
            ]
        );

        $repeater->add_control(
            'resource_button_link',
            [
                'label' => esc_html__( 'Button Link', 'elementor-list-widget' ),
                'type' => Controls_Manager::URL,
                'placeholder' => esc_html__( 'https://your-link.com', 'elementor-list-widget' ),
                'show_external' => true,
                'default' => [
                    'url' => '#',
                ],
            ]
        );

        $this->add_control(
            'resources',
            [
                'label' => esc_html__( 'Resources', 'elementor-list-widget' ),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'resource_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'resource_content' => esc_html__( 'Content', 'elementor-list-widget' ),
                        'resource_button_text' => esc_html__( 'Button', 'elementor-list-widget' ),
                        'resource_button_link' => [
                            'url' => '#',
                        ],
                    ],
                    [
                        'resource_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'resource_content' => esc_html__( 'Content', 'elementor-list-widget' ),
                        'resource_button_text' => esc_html__( 'Button', 'elementor-list-widget' ),
                        'resource_button_link' => [
                            'url' => '#',
                        ],
                    ],
                    [
                        'resource_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'resource_content' => esc_html__( 'Content', 'elementor-list-widget' ),
                        'resource_button_text' => esc_html__( 'Button', 'elementor-list-widget' ),
                        'resource_button_link' => [
                            'url' => '#',
                        ],
                    ],
                    [
                        'resource_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'resource_content' => esc_html__( 'Content', 'elementor-list-widget' ),
                        'resource_button_text' => esc_html__( 'Button', 'elementor-list-widget' ),
                        'resource_button_link' => [
                            'url' => '#',
                        ],
                    ],
                ],
                'title_field' => '{{{ resource_content }}}',
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

        // Create style for background section with background color and image.

        $this->start_controls_section(
            'section_background_style',
            [
                'label' => esc_html__( 'Background', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'background_color',
            [
                'label' => esc_html__( 'Background Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .resource-block' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'background_image',
            [
                'label' => esc_html__( 'Background Image', 'elementor-list-widget' ),
                'type' => Controls_Manager::MEDIA,
                'selectors' => [
                    '{{WRAPPER}} .resource-block' => 'background-image: url({{URL}})',
                ],
            ]
        );

        // Add padding.

        $this->add_responsive_control(
            'padding',
            [
                'label' => esc_html__( 'Padding', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .resource-block' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Create style for heading section with typography.

        $this->start_controls_section(
            'section_heading_style',
            [
                'label' => esc_html__( 'Heading', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'heading_title_color',
            [
                'label' => esc_html__( 'Title Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .heading-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'heading_subtitle_color',
            [
                'label' => esc_html__( 'Subtitle Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .heading-subtitle' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'heading_title_typography',
                'label' => esc_html__( 'Heading Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .heading-title',
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'heading_subtitle_typography',
                'label' => esc_html__( 'Sub Heading Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .heading-subtitle',
            ]
        );

        $this->end_controls_section();

        // Create style for resource section with background, border, padding, and content and button styles.

        $this->start_controls_section(
            'section_resource_style',
            [
                'label' => esc_html__( 'Resource', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'resource_background_color',
            [
                'label' => esc_html__( 'Background Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .resource' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'resource_border',
                'label' => esc_html__( 'Border', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .resource',
            ]
        );

        $this->add_responsive_control(
            'resource_padding',
            [
                'label' => esc_html__( 'Padding', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .resource' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'resource_content_color',
            [
                'label' => esc_html__( 'Content Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .resource-content' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'resource_content_typography',
                'label' => esc_html__( 'Content Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .resource-content',
            ]
        );
        
        // Button text color and background color, typography and border for normal and hover.

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'button_typography',
                'label' => esc_html__( 'Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .resource-button',
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'button_border',
                'label' => esc_html__( 'Border', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .resource-button',
            ]
        );

        // border radius and padding for button.

        $this->add_responsive_control(
            'button_border_radius',
            [
                'label' => esc_html__( 'Border Radius', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .resource-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'button_padding',
            [
                'label' => esc_html__( 'Padding', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .resource-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->start_controls_tabs( 'tabs_button_style' );

        $this->start_controls_tab(
            'tab_button_normal',
            [
                'label' => esc_html__( 'Normal', 'elementor-list-widget' ),
            ]
        );

        $this->add_control(
            'button_text_color',
            [
                'label' => esc_html__( 'Text Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .resource-button' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'button_background_color',
            [
                'label' => esc_html__( 'Background Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .resource-button' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab(
            'tab_button_hover',
            [
                'label' => esc_html__( 'Hover', 'elementor-list-widget' ),
            ]
        );

        $this->add_control(
            'button_text_hover_color',
            [
                'label' => esc_html__( 'Text Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .resource-button:hover' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'button_background_hover_color',
            [
                'label' => esc_html__( 'Background Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .resource-button:hover' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();
        

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

        <div class="resource-block">
            <div class="resource-block__inner">
                <div class="heading">
                    <p class="heading-subtitle"><?php echo esc_html( $settings['heading_subtitle'] ); ?></p>
                    <h2 class="heading-title"><?php echo esc_html( $settings['heading_title'] ); ?></h2>
                </div>

            </div>
        </div>
        <div class="resources-slider">
            <div class="md-slick-slider" data-slide-to-show="<?php echo esc_attr( $settings['slides_to_show'] ); ?>" data-slide-to-scroll="<?php echo esc_attr( $settings['slides_to_scroll'] ); ?>" data-autoplay="<?php echo esc_attr( $settings['autoplay'] ); ?>" data-autoplay-speed="<?php echo esc_attr( $settings['autoplay_speed'] ); ?>" data-infinite="<?php echo esc_attr( $settings['infinite'] ); ?>" data-arrows="<?php echo esc_attr( $settings['arrows'] ); ?>" data-dots="<?php echo esc_attr( $settings['dots'] ); ?>" data-pause-on-hover="<?php echo esc_attr( $settings['pause_on_hover'] ); ?>" data-adaptive-height="<?php echo esc_attr( $settings['adaptive_height'] ); ?>">
            <?php foreach ( $settings['resources'] as $index => $item ) : ?>
                <div class="resource">
                    <img src="<?php echo esc_url( $item['resource_image']['url'] ); ?>" alt="<?php echo esc_attr( $item['resource_content'] ); ?>">
                    <div class="resource-content">
                        <?php echo wp_kses_post( $item['resource_content'] ); ?>
                        <div class="resource-content__button">
                            <a href="<?php echo esc_url( $item['resource_button_link']['url'] ); ?>" class="resource-button"><?php echo esc_html( $item['resource_button_text'] ); ?></a>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
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

        <div class="resource-block">
            <div class="resource-block__inner">
                <div class="heading">
                    <p class="heading-subtitle">{{{ settings.heading_subtitle }}}</p>
                    <h2 class="heading-title">{{{ settings.heading_title }}}</h2>
                </div>

            </div>
        </div>
        <div class="resources-slider">
            <div class="md-slick-slider" data-slide-to-show="{{ settings.slides_to_show }}" data-slide-to-scroll="{{ settings.slides_to_scroll }}" data-autoplay="{{ settings.autoplay }}" data-autoplay-speed="{{ settings.autoplay_speed }}" data-infinite="{{ settings.infinite }}" data-arrows="{{ settings.arrows }}" data-dots="{{ settings.dots }}" data-pause-on-hover="{{ settings.pause_on_hover }}" data-adaptive-height="{{ settings.adaptive_height }}">
            <# _.each( settings.resources, function( item ) { #>
                <div class="resource">
                    <img src="{{ item.resource_image.url }}" alt="{{ item.resource_content }}">
                    <div class="resource-content">
                        {{{ item.resource_content }}}
                        <div class="resource-content__button">
                            <a href="{{ item.resource_button_link.url }}" class="resource-button">{{ item.resource_button_text }}</a>
                        </div>
                    </div>
                </div>
            <# }); #>
            </div>
        </div>

        <?php
	}

}
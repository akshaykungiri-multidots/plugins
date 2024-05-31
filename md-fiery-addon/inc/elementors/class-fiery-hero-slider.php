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
class Fiery_Hero_Slider extends \Elementor\Widget_Base {

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
		return 'fiery_hero_slider';
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
		return esc_html__( 'Hero Slider', 'md-fiery-addon' );
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
		return [ 'hero', 'fiery', 'slider', 'hero-slider' ];
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
        
        // Create a section for slider content.

        $this->start_controls_section(
            'section_slider_content',
            [
                'label' => esc_html__( 'Slider Content', 'md-fiery-addon' ),
            ]
        );

        // Create a repeater for slider content.
        $repeater = new \Elementor\Repeater();

        // Add a subtitle, title and content and background image for each slide.
        $repeater->add_control(
            'subtitle',
            [
                'label' => esc_html__( 'Subtitle', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Subtitle', 'md-fiery-addon' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'title',
            [
                'label' => esc_html__( 'Title', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Title', 'md-fiery-addon' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'content',
            [
                'label' => esc_html__( 'Content', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => esc_html__( 'Content', 'md-fiery-addon' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'background_image',
            [
                'label' => esc_html__( 'Background Image', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        // Add the repeater control.

        $this->add_control(
            'slides',
            [
                'label' => esc_html__( 'Slides', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'subtitle' => esc_html__( 'Subtitle #1', 'md-fiery-addon' ),
                        'title' => esc_html__( 'Title #1', 'md-fiery-addon' ),
                        'content' => esc_html__( 'Content #1', 'md-fiery-addon' ),
                    ],
                    [
                        'subtitle' => esc_html__( 'Subtitle #2', 'md-fiery-addon' ),
                        'title' => esc_html__( 'Title #2', 'md-fiery-addon' ),
                        'content' => esc_html__( 'Content #2', 'md-fiery-addon' ),
                    ],
                ],
                'title_field' => '{{{ title }}}',
            ]
        );

        $this->end_controls_section();

        // Create a section for slider settings.

        $this->start_controls_section(
            'section_slider_settings',
            [
                'label' => esc_html__( 'Slider Settings', 'md-fiery-addon' ),
            ]
        );

        $this->add_control(
            'slides_to_show',
            [
                'label' => esc_html__( 'Slides to Show', 'elementor-list-widget' ),
                'type' => Controls_Manager::NUMBER,
                'default' => 1,
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

        // Create Layout section for style setting.

        $this->start_controls_section(
            'section_layout',
            [
                'label' => esc_html__( 'Layout', 'md-fiery-addon' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Add slider height and width settings.

        $this->add_responsive_control(
            'slider_width',
            [
                'label' => esc_html__( 'Slider Width', 'md-fiery-addon' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 2000,
                        'step' => 1,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        // Slider Height.

        $this->add_responsive_control(
            'slider_height',
            [
                'label' => esc_html__( 'Slider Height', 'md-fiery-addon' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', 'vh' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 1000,
                        'step' => 1,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                    'vh' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->end_controls_section();

        // Background settings for slider.

        $this->start_controls_section(
            'section_slider_background',
            [
                'label' => esc_html__( 'Slider Background', 'md-fiery-addon' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'background_position',
            [
                'label' => esc_html__( 'Background Position', 'md-fiery-addon' ),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    'left top' => esc_html__( 'Left Top', 'md-fiery-addon' ),
                    'left center' => esc_html__( 'Left Center', 'md-fiery-addon' ),
                    'left bottom' => esc_html__( 'Left Bottom', 'md-fiery-addon' ),
                    'center top' => esc_html__( 'Center Top', 'md-fiery-addon' ),
                    'center center' => esc_html__( 'Center Center', 'md-fiery-addon' ),
                    'center bottom' => esc_html__( 'Center Bottom', 'md-fiery-addon' ),
                    'right top' => esc_html__( 'Right Top', 'md-fiery-addon' ),
                    'right center' => esc_html__( 'Right Center', 'md-fiery-addon' ),
                    'right bottom' => esc_html__( 'Right Bottom', 'md-fiery-addon' ),
                ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__slide' => 'background-position: {{VALUE}}',
                ],
                "default" => "center center"
            ]
        );

        $this->add_control(
            'background_repeat',
            [
                'label' => esc_html__( 'Background Repeat', 'md-fiery-addon' ),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    'no-repeat' => esc_html__( 'No Repeat', 'md-fiery-addon' ),
                    'repeat' => esc_html__( 'Repeat', 'md-fiery-addon' ),
                    'repeat-x' => esc_html__( 'Repeat Horizontally', 'md-fiery-addon' ),
                    'repeat-y' => esc_html__( 'Repeat Vertically', 'md-fiery-addon' ),
                ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__slide' => 'background-repeat: {{VALUE}}',
                ],
                "default" => "no-repeat",
            ]
        );

        $this->add_control(
            'background_size',
            [
                'label' => esc_html__( 'Background Size', 'md-fiery-addon' ),
                'type' => Controls_Manager::SELECT,
                'options' => [
                    'auto' => esc_html__( 'Auto', 'md-fiery-addon' ),
                    'cover' => esc_html__( 'Cover', 'md-fiery-addon' ),
                    'contain' => esc_html__( 'Contain', 'md-fiery-addon' ),
                ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__slide' => 'background-size: {{VALUE}}',
                ],
                "default" => "cover",
            ]
        );

        $this->add_control(
            'background_overlay',
            [
                'label' => esc_html__( 'Background Overlay', 'md-fiery-addon' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__slide' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'background_overlay_opacity',
            [
                'label' => esc_html__( 'Background Overlay Opacity', 'md-fiery-addon' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ '%' ],
                'range' => [
                    '%' => [
                        'min' => 0,
                        'max' => 1,
                        'step' => 0.01,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__slide' => 'background-color: rgba(0,0,0,{{SIZE}})',
                ],
            ]
        );

        // Add slider padding settings.

        $this->add_responsive_control(
            'slider_padding',
            [
                'label' => esc_html__( 'Slider Padding', 'md-fiery-addon' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__slide' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
                "default" => [
                    "unit" => "px",
                    "top" => 50,
                    "right" => 0,
                    "bottom" => 50,
                    "left" => 0,
                ],
            ]
        );

        $this->end_controls_section();

        // Create a section for subtitle style settings.

        $this->start_controls_section(
            'section_slider_style',
            [
                'label' => esc_html__( 'Subtitle', 'md-fiery-addon' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Background::get_type(),
            [
                'name' => 'background',
                'label' => esc_html__( 'Subtitle Background Color', 'md-fiery-addon' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .fiery-hero-slider__subtitle',
                "default" => [
                    'background' => 'classic',
                    'color' => '#FF0000',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'subtitle_typography',
                'label' => esc_html__( 'Subtitle Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .fiery-hero-slider__subtitle',
            ]
        );

        $this->end_controls_section();

        // Create a section for title and content style settings.

        $this->start_controls_section(
            'section_content_style',
            [
                'label' => esc_html__( 'Title & Content', 'md-fiery-addon' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Add title typography and color settings.

        $this->add_control(
            'title_color',
            [
                'label' => esc_html__( 'Title Color', 'md-fiery-addon' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'label' => esc_html__( 'Title Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .fiery-hero-slider__title',
            ]
        );

        // Add content typography and color settings.

        $this->add_control(
            'content_color',
            [
                'label' => esc_html__( 'Content Color', 'md-fiery-addon' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__text' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'label' => esc_html__( 'Content Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .fiery-hero-slider__text',
            ]
        );

        $this->end_controls_section();

        // Create a section for slider box style settings.

        $this->start_controls_section(
            'section_slider_box_style',
            [
                'label' => esc_html__( 'Slider Box', 'md-fiery-addon' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Add slider content width settings.

        $this->add_responsive_control(
            'content_width',
            [
                'label' => esc_html__( 'Content Width', 'md-fiery-addon' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 2000,
                        'step' => 1,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                        'step' => 1,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__content' => 'max-width: {{SIZE}}{{UNIT}};',
                ],
                "default" => [
                    "unit" => "%",
                    "size" => 45,
                ],
            ]
        );

        // Add slider content padding settings.

        $this->add_responsive_control(
            'content_padding',
            [
                'label' => esc_html__( 'Content Padding', 'md-fiery-addon' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__content' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
                "default" => [
                    "unit" => "px",
                    "top" => 50,
                    "right" => 70,
                    "bottom" => 70,
                    "left" => 80,
                ],
            ]
        );

        // Slider content background group control.

        $this->add_group_control(
            \Elementor\Group_Control_Background::get_type(),
            [
                'name' => 'content_background',
                'label' => esc_html__( 'Content Background', 'md-fiery-addon' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .fiery-hero-slider__content',
                "default" => [
                    'background' => 'classic',
                    'color' => '#FF0000',
                ],
            ]
        );

        // Content border radius.

        $this->add_responsive_control(
            'content_border_radius',
            [
                'label' => esc_html__( 'Content Border Radius', 'md-fiery-addon' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__content' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
                "default" => [
                    "unit" => "px",
                    "top" => 25,
                    "right" => 0,
                    "bottom" => 0,
                    "left" => 25,
                ],
            ]
        );
        

        // content horizontal alignment and vertical alignment.

        $this->add_control(
            'content_horizontal_alignment',
            [
                'label' => esc_html__( 'Content Horizontal Alignment', 'md-fiery-addon' ),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'flex-start' => [
                        'title' => esc_html__( 'Left', 'md-fiery-addon' ),
                        'icon' => 'eicon-h-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__( 'Center', 'md-fiery-addon' ),
                        'icon' => 'eicon-h-align-center',
                    ],
                    'flex-end' => [
                        'title' => esc_html__( 'Right', 'md-fiery-addon' ),
                        'icon' => 'eicon-h-align-right',
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__content' => 'justify-self: {{VALUE}};',
                ],
                "default" => "flex-end",
            ]
        );

        $this->add_control(
            'content_vertical_alignment',
            [
                'label' => esc_html__( 'Content Vertical Alignment', 'md-fiery-addon' ),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'flex-start' => [
                        'title' => esc_html__( 'Top', 'md-fiery-addon' ),
                        'icon' => 'eicon-v-align-top',
                    ],
                    'center' => [
                        'title' => esc_html__( 'Center', 'md-fiery-addon' ),
                        'icon' => 'eicon-v-align-middle',
                    ],
                    'flex-end' => [
                        'title' => esc_html__( 'Bottom', 'md-fiery-addon' ),
                        'icon' => 'eicon-v-align-bottom',
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-slider__content' => 'align-self: {{VALUE}};',
                ],
                "default" => "center",
            ]
        );
        
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

        <div class="fiery-hero-slider">
            <div class="fiery-hero-slider__inner md-slick-slider" data-slide-to-show="<?php echo esc_attr( $settings['slides_to_show'] ); ?>" data-slide-to-scroll="<?php echo esc_attr( $settings['slides_to_scroll'] ); ?>" data-autoplay="<?php echo esc_attr( $settings['autoplay'] ); ?>" data-autoplay-speed="<?php echo esc_attr( $settings['autoplay_speed'] ); ?>" data-infinite="<?php echo esc_attr( $settings['infinite'] ); ?>" data-arrows="<?php echo esc_attr( $settings['arrows'] ); ?>" data-dots="<?php echo esc_attr( $settings['dots'] ); ?>" data-pause-on-hover="<?php echo esc_attr( $settings['pause_on_hover'] ); ?>" data-adaptive-height="<?php echo esc_attr( $settings['adaptive_height'] ); ?>">
                <?php foreach ( $settings['slides'] as $slide ) : ?>
                    <div class="fiery-hero-slider__slide" style="background-image: url(<?php echo esc_url( $slide['background_image']['url'] ); ?>);">
                        <div class="fiery-hero-slider__content">
                            <div class="fiery-hero-slider__subtitle"><?php echo esc_html( $slide['subtitle'] ); ?></div>
                            <h2 class="fiery-hero-slider__title"><?php echo esc_html( $slide['title'] ); ?></h2>
                            <div class="fiery-hero-slider__text"><?php echo wp_kses_post( $slide['content'] ); ?></div>
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
        <div class="fiery-hero-slider">
            <div class="fiery-hero-slider__inner md-slick-slider" data-slide-to-show="{{ settings.slides_to_show }}" data-slide-to-scroll="{{ settings.slides_to_scroll }}" data-autoplay="{{ settings.autoplay }}" data-autoplay-speed="{{ settings.autoplay_speed }}" data-infinite="{{ settings.infinite }}" data-arrows="{{ settings.arrows }}" data-dots="{{ settings.dots }}" data-pause-on-hover="{{ settings.pause_on_hover }}" data-adaptive-height="{{ settings.adaptive_height }}">
                <# _.each( settings.slides, function( slide ) { #>
                    <div class="fiery-hero-slider__slide" style="background-image: url({{ slide.background_image.url }});">
                        <div class="fiery-hero-slider__content">
                            <div class="fiery-hero-slider__subtitle">{{ slide.subtitle }}</div>
                            <h2 class="fiery-hero-slider__title">{{ slide.title }}</h2>
                            <div class="fiery-hero-slider__text">{{{ slide.content }}}</div>
                        </div>
                    </div>
                <# } ); #>
            </div>
        </div>
        <?php
	}

}
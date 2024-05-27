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
class Elementor_Logo_Slider extends \Elementor\Widget_Base {

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
		return 'logo_slider';
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
		return esc_html__( 'Logo Slider', 'elementor-list-widget' );
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

		// Create Heading section with heading title and view more title and view more link.

        $this->start_controls_section(
            'heading_section',
            [
                'label' => esc_html__( 'Heading', 'elementor-list-widget' ),
            ]
        );

        // Add Heading Title

        $this->add_control(
            'heading_title',
            [
                'label' => esc_html__( 'Heading Title', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Our Partners', 'elementor-list-widget' ),
            ]
        );

        // Add View More Title

        $this->add_control(
            'view_more_title',
            [
                'label' => esc_html__( 'View More Title', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'View More', 'elementor-list-widget' ),
            ]
        );

        // Add View More Link

        $this->add_control(
            'view_more_link',
            [
                'label' => esc_html__( 'View More Link', 'elementor-list-widget' ),
                'type' => Controls_Manager::URL,
                'placeholder' => esc_html__( 'https://your-link.com', 'elementor-list-widget' ),
            ]
        );

        $this->end_controls_section();

        // Create Logo Slider section with repeater control.

        $this->start_controls_section(
            'logo_slider_section',
            [
                'label' => esc_html__( 'Logo Slider', 'elementor-list-widget' ),
            ]
        );

        // Add Logo Slider Repeater

        $repeater = new \Elementor\Repeater();

        // Add Logo Image

        $repeater->add_control(
            'logo_image',
            [
                'label' => esc_html__( 'Logo Image', 'elementor-list-widget' ),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        // Add Logo Title

        $repeater->add_control(
            'logo_title',
            [
                'label' => esc_html__( 'Logo Title', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Logo Title', 'elementor-list-widget' ),
            ]
        );

        $this->add_control(
            'logo_slider',
            [
                'label' => esc_html__( 'Logo Slider', 'elementor-list-widget' ),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'logo_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'logo_title' => esc_html__( 'Logo Title', 'elementor-list-widget' ),
                    ],
                    [
                        'logo_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'logo_title' => esc_html__( 'Logo Title', 'elementor-list-widget' ),
                    ],
                ],
                'title_field' => '{{{ logo_title }}}',
            ]
        );

        // Add slider settings.

        $this->add_control(
            'slides_to_show',
            [
                'label' => esc_html__( 'Slides to Show', 'elementor-list-widget' ),
                'type' => Controls_Manager::NUMBER,
                'default' => 4,
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

        // Create Style section with heading style and logo slider style.

        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__( 'Style', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Add Heading Color and Typography.

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Heading Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .heading',
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Add View More Link Style

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'view_more_typography',
                'label' => esc_html__( 'View More Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .view_view_more_link',
            ]
        );

        $this->add_control(
            'view_more_color',
            [
                'label' => esc_html__( 'View More Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .view_view_more_link' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Add Logo Title Style and color.

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'logo_title_typography',
                'label' => esc_html__( 'Logo Title Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .logo-title',
            ]
        );

        $this->add_control(
            'logo_title_color',
            [
                'label' => esc_html__( 'Logo Title Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .logo-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Add Logo Slider Style like image size, border, background etc.

        $this->add_control(
            'logo_slider_image_size',
            [
                'label' => esc_html__( 'Image Size', 'elementor-list-widget' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', 'rem' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 500,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .logo-slider .logo-item img' => 'width: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        // Add logo border and radius.
        
        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'logo_slider_border',
                'label' => esc_html__( 'Border', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .logo-slider .logo-item img',
            ]
        );
        
        $this->add_control(
            'logo_slider_border_radius',
            [
                'label' => esc_html__( 'Border Radius', 'elementor-list-widget' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .logo-slider .logo-item img' => 'border-radius: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'logo_slider_border',
            [
                'label' => esc_html__( 'Border', 'elementor-list-widget' ),
                'type' => Group_Control_Border::get_type(),
                'selector' => '{{WRAPPER}} .logo-slider .logo-item img',
            ]
        );

        $this->add_control(
            'logo_slider_background',
            [
                'label' => esc_html__( 'Background', 'elementor-list-widget' ),
                'type' => Group_Control_Background::get_type(),
                'selector' => '{{WRAPPER}} .logo-slider .logo-item img',
            ]
        );

        $this->add_control(
            'logo_slider_padding',
            [
                'label' => esc_html__( 'Padding', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .logo-slider .logo-item img' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'logo_slider_margin',
            [
                'label' => esc_html__( 'Margin', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .logo-slider .logo-item img' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'logo_slider_title_padding',
            [
                'label' => esc_html__( 'Title Padding', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .logo-slider .logo-item .logo-title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'logo_slider_title_margin',
            [
                'label' => esc_html__( 'Title Margin', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .logo-slider .logo-item .logo-title' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'logo_slider_title_background',
            [
                'label' => esc_html__( 'Title Background', 'elementor-list-widget' ),
                'type' => Group_Control_Background::get_type(),
                'selector' => '{{WRAPPER}} .logo-slider .logo-item .logo-title',
            ]
        );

        $this->add_control(
            'logo_slider_title_border',
            [
                'label' => esc_html__( 'Title Border', 'elementor-list-widget' ),
                'type' => Group_Control_Border::get_type(),
                'selector' => '{{WRAPPER}} .logo-slider .logo-item .logo-title',
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

        <div class="logo-slider">
            <div class="logo-slider-heading">
                <div class="heading"><?php echo esc_html( $settings['heading_title'] ); ?></div>
                <a href="<?php echo esc_url( $settings['view_more_link']['url'] ); ?>" class="view_view_more_link">
                    <?php echo esc_html( $settings['view_more_title'] ); ?>
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="logo-slider-inner md-slick-slider" data-slide-to-show="<?php echo esc_attr( $settings['slides_to_show'] ); ?>" data-slide-to-scroll="<?php echo esc_attr( $settings['slides_to_scroll'] ); ?>" data-autoplay="<?php echo esc_attr( $settings['autoplay'] ); ?>" data-autoplay-speed="<?php echo esc_attr( $settings['autoplay_speed'] ); ?>" data-infinite="<?php echo esc_attr( $settings['infinite'] ); ?>" data-arrows="<?php echo esc_attr( $settings['arrows'] ); ?>" data-dots="<?php echo esc_attr( $settings['dots'] ); ?>" data-pause-on-hover="<?php echo esc_attr( $settings['pause_on_hover'] ); ?>" data-adaptive-height="<?php echo esc_attr( $settings['adaptive_height'] ); ?>">
                <?php
                foreach ( $settings['logo_slider'] as $item ) {
                    ?>
                    <div class="logo-item">
                        <img src="<?php echo esc_url( $item['logo_image']['url'] ); ?>" alt="<?php echo esc_attr( $item['logo_title'] ); ?>">
                        <div class="logo-title"><?php echo esc_html( $item['logo_title'] ); ?></div>
                    </div>
                    <?php
                }
                ?>
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

        <div class="logo-slider">
            <div class="logo-slider-heading">
                <div class="heading">{{{ settings.heading_title }}}</div>
                <a href="{{{ settings.view_more_link.url }}}" class="view_view_more_link">
                    {{{ settings.view_more_title }}}
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="logo-slider-inner md-slick-slider" data-slide-to-show="{{{ settings.slides_to_show }}}" data-slide-to-scroll="{{{ settings.slides_to_scroll }}}" data-autoplay="{{{ settings.autoplay }}}" data-autoplay-speed="{{{ settings.autoplay_speed }}}" data-infinite="{{{ settings.infinite }}}" data-arrows="{{{ settings.arrows }}}" data-dots="{{{ settings.dots }}}" data-pause-on-hover="{{{ settings.pause_on_hover }}}" data-adaptive-height="{{{ settings.adaptive_height }}}">
                <# _.each( settings.logo_slider, function( item ) { #>
                    <div class="logo-item">
                        <img src="{{{ item.logo_image.url }}}" alt="{{{ item.logo_title }}}">
                        <div class="logo-title">{{{ item.logo_title }}}</div>
                    </div>
                <# } ); #>
            </div>
        </div>
        
        <?php
	}

}
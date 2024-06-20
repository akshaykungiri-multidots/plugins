<?php

/**
 * Elementor Widgets.
 *
 * @package    MD_Foursquare
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Foursquare\Inc\Elementors;


/**
 * Elementor Logo Slider Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Foursquare_Logo_Slider extends \Elementor\Widget_Base {

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
		return 'foursquare_logo_slider';
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
		return esc_html__( 'Foursquare Logo Slider', 'md-foursquare' );
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
		return [ 'md-foursquare-addons' ];
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
		return [ 'foursquare', 'logo', 'slider', 'widget' ];
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

		// Create Heading section with heading title and sub title.

        $this->start_controls_section(
            'heading_section',
            [
                'label' => esc_html__( 'Heading', 'md-foursquare' ),
            ]
        );

        // Add sub title
        $this->add_control(
            'heading_sub_title',
            [
                'label' => esc_html__( 'Sub Title', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'We are proud to work with', 'md-foursquare' ),
            ],
        );

        // Add Heading Title
        $this->add_control(
            'heading_title',
            [
                'label' => esc_html__( 'Heading Title', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Our Partners', 'md-foursquare' ),
            ]
        );

        $this->end_controls_section();

        // Create Logo Slider section with repeater control.

        $this->start_controls_section(
            'logo_slider_section',
            [
                'label' => esc_html__( 'Logo Slider', 'md-foursquare' ),
            ]
        );

        // Add Logo Slider Repeater

        $repeater = new \Elementor\Repeater();

        // Add Logo Image

        $repeater->add_control(
            'logo_image',
            [
                'label' => esc_html__( 'Logo Image', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        // Add Logo Title

        $repeater->add_control(
            'logo_title',
            [
                'label' => esc_html__( 'Logo Title', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Logo Title', 'md-foursquare' ),
            ]
        );

        $this->add_control(
            'logo_slider',
            [
                'label' => esc_html__( 'Logo Slider', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'logo_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'logo_title' => esc_html__( 'Logo Title', 'md-foursquare' ),
                    ],
                    [
                        'logo_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'logo_title' => esc_html__( 'Logo Title', 'md-foursquare' ),
                    ],
                    [
                        'logo_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'logo_title' => esc_html__( 'Logo Title', 'md-foursquare' ),
                    ],
                    [
                        'logo_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'logo_title' => esc_html__( 'Logo Title', 'md-foursquare' ),
                    ],
                    [
                        'logo_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'logo_title' => esc_html__( 'Logo Title', 'md-foursquare' ),
                    ],
                    [
                        'logo_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'logo_title' => esc_html__( 'Logo Title', 'md-foursquare' ),
                    ],
                    [
                        'logo_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'logo_title' => esc_html__( 'Logo Title', 'md-foursquare' ),
                    ],
                    [
                        'logo_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'logo_title' => esc_html__( 'Logo Title', 'md-foursquare' ),
                    ],
                ],
                'title_field' => '{{{ logo_title }}}',
            ]
        );

        // Add slider settings.

        $this->add_control(
            'slides_to_show',
            [
                'label' => esc_html__( 'Slides to Show', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 6,
            ]
        );

        $this->add_control(
            'slides_to_scroll',
            [
                'label' => esc_html__( 'Slides to Scroll', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 1,
            ]
        );

        $this->add_control(
            'autoplay',
            [
                'label' => esc_html__( 'Autoplay', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-foursquare' ),
                'label_off' => esc_html__( 'No', 'md-foursquare' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'autoplay_speed',
            [
                'label' => esc_html__( 'Autoplay Speed', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 5000,
                'condition' => [
                    'autoplay' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'infinite',
            [
                'label' => esc_html__( 'Infinite Loop', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-foursquare' ),
                'label_off' => esc_html__( 'No', 'md-foursquare' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'arrows',
            [
                'label' => esc_html__( 'Arrows', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-foursquare' ),
                'label_off' => esc_html__( 'No', 'md-foursquare' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'dots',
            [
                'label' => esc_html__( 'Dots', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-foursquare' ),
                'label_off' => esc_html__( 'No', 'md-foursquare' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'pause_on_hover',
            [
                'label' => esc_html__( 'Pause on Hover', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-foursquare' ),
                'label_off' => esc_html__( 'No', 'md-foursquare' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'adaptive_height',
            [
                'label' => esc_html__( 'Adaptive Height', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-foursquare' ),
                'label_off' => esc_html__( 'No', 'md-foursquare' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->end_controls_section();

        // Create Style section with heading style and logo slider style.

        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__( 'Style', 'md-foursquare' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        // Heading alignment.

        $this->add_control(
            'heading_alignment',
            [
                'label' => esc_html__( 'Alignment', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__( 'Left', 'md-foursquare' ),
                        'icon' => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__( 'Center', 'md-foursquare' ),
                        'icon' => 'eicon-text-align-center',
                    ],
                    'right' => [
                        'title' => esc_html__( 'Right', 'md-foursquare' ),
                        'icon' => 'eicon-text-align-right',
                    ],
                ],
                'default' => 'center',
                'selectors' => [
                    '{{WRAPPER}} .foursquare-logo-slider-heading' => 'text-align: {{VALUE}}',
                ],
            ]
        );

        // Add Heading Color and Typography.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Heading Typography', 'md-foursquare' ),
                'selector' => '{{WRAPPER}} .heading',
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'heading_sub_title_typography',
                'label' => esc_html__( 'Sub Title Typography', 'md-foursquare' ),
                'selector' => '{{WRAPPER}} .heading_sub_title',
            ],
        );

        $this->add_control(
            'heading_sub_title_color',
            [
                'label' => esc_html__( 'Sub Title Color', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .heading_sub_title' => 'color: {{VALUE}}',
                ],
            ],
        );

        // Add Logo Title Style and color.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'logo_title_typography',
                'label' => esc_html__( 'Logo Title Typography', 'md-foursquare' ),
                'selector' => '{{WRAPPER}} .logo-title',
            ]
        );

        $this->add_control(
            'logo_title_color',
            [
                'label' => esc_html__( 'Logo Title Color', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .logo-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Add Logo Slider Style like image width, height, border, background etc.

        $this->add_control(
            'logo_slider_image_width',
            [
                'label' => esc_html__( 'Image Width', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .foursquare-logo-slider .logo-item img' => 'width: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'logo_slider_image_height',
            [
                'label' => esc_html__( 'Image Height', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .foursquare-logo-slider .logo-item img' => 'max-height: {{SIZE}}{{UNIT}}',
                ],
            ]
        );
        
        // Logo Image Filter.

        $this->add_group_control(
            \Elementor\Group_Control_Css_Filter::get_type(),
            [
                'name' => 'logo_slider_image_filter',
                'label' => esc_html__( 'Image Filter', 'md-foursquare' ),
                'selector' => '{{WRAPPER}} .foursquare-logo-slider .logo-item img',
            ]
        );

        // Add logo border and radius.
        
        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'logo_slider_border',
                'label' => esc_html__( 'Logo Slider Border', 'md-foursquare' ),
                'selector' => '{{WRAPPER}} .foursquare-logo-slider .logo-item img',
            ]
        );
        
        $this->add_control(
            'logo_slider_border_radius',
            [
                'label' => esc_html__( 'Border Radius', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .foursquare-logo-slider .logo-item img' => 'border-radius: {{SIZE}}{{UNIT}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Background::get_type(),
            [
                'name' => 'logo_slider_background',
                'label' => esc_html__( 'Logo Slider Background', 'md-foursquare' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .foursquare-logo-slider .logo-item img',
            ]
        );

        $this->add_control(
            'logo_slider_padding',
            [
                'label' => esc_html__( 'Padding', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .foursquare-logo-slider .logo-item img' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
                ],
                'default' => [
                    'top' => '5',
                    'right' => '5',
                    'bottom' => '5',
                    'left' => '5',
                    'unit' => 'px',
                ],
            ]
        );

        $this->add_control(
            'logo_slider_margin',
            [
                'label' => esc_html__( 'Margin', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .foursquare-logo-slider .logo-item img' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'logo_slider_title_padding',
            [
                'label' => esc_html__( 'Title Padding', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .foursquare-logo-slider .logo-item .logo-title' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
                ],
            ]
        );

        $this->add_control(
            'logo_slider_title_margin',
            [
                'label' => esc_html__( 'Title Margin', 'md-foursquare' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .foursquare-logo-slider .logo-item .logo-title' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
                ],
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Background::get_type(),
            [
                'name' => 'logo_slider_title_background',
                'label' => esc_html__( 'Title Background', 'md-foursquare' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .foursquare-logo-slider .logo-item .logo-title',
            ]
        );

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'logo_slider_title_border',
                'label' => esc_html__( 'Title Border', 'md-foursquare' ),
                'selector' => '{{WRAPPER}} .foursquare-logo-slider .logo-item .logo-title',
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

        <div class="foursquare-logo-slider">
            <div class="foursquare-logo-slider-heading">
                <div class="heading_sub_title"><?php echo esc_html( $settings['heading_sub_title'] ); ?></div>
                <div class="heading"><?php echo esc_html( $settings['heading_title'] ); ?></div>
            </div>
            <div class="foursquare-logo-slider-inner foursquare_slick_slider" data-slide-to-show="<?php echo esc_attr( $settings['slides_to_show'] ); ?>" data-slide-to-scroll="<?php echo esc_attr( $settings['slides_to_scroll'] ); ?>" data-autoplay="<?php echo esc_attr( $settings['autoplay'] ); ?>" data-autoplay-speed="<?php echo esc_attr( $settings['autoplay_speed'] ); ?>" data-infinite="<?php echo esc_attr( $settings['infinite'] ); ?>" data-arrows="<?php echo esc_attr( $settings['arrows'] ); ?>" data-dots="<?php echo esc_attr( $settings['dots'] ); ?>" data-pause-on-hover="<?php echo esc_attr( $settings['pause_on_hover'] ); ?>" data-adaptive-height="<?php echo esc_attr( $settings['adaptive_height'] ); ?>">
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

        <div class="foursquare-logo-slider">
            <div class="foursquare-logo-slider-heading">
                <div class="heading_sub_title">{{{ settings.heading_sub_title }}}</div>
                <div class="heading">{{{ settings.heading_title }}}</div>
            </div>
            <div class="foursquare-logo-slider-inner foursquare_slick_slider" data-slide-to-show="{{{ settings.slides_to_show }}}" data-slide-to-scroll="{{{ settings.slides_to_scroll }}}" data-autoplay="{{{ settings.autoplay }}}" data-autoplay-speed="{{{ settings.autoplay_speed }}}" data-infinite="{{{ settings.infinite }}}" data-arrows="{{{ settings.arrows }}}" data-dots="{{{ settings.dots }}}" data-pause-on-hover="{{{ settings.pause_on_hover }}}" data-adaptive-height="{{{ settings.adaptive_height }}}">
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
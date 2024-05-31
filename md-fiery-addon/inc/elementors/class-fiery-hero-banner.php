<?php

/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Fiery_Addon
 * @author     Multidots <info@multidots.com>
 */

 namespace MD_Fiery_Addon\Inc\Elementors;


/**
 * Elementor Hero Banner Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Fiery_Hero_Banner extends \Elementor\Widget_Base {

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
		return 'fiery_hero_banner';
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
		return esc_html__( 'Hero Banner', 'md-fiery-addon' );
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
		return [ 'hero', 'slider', 'banner', 'hero-banner' ];
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
        // Content Section.
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__( 'Content', 'md-fiery-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        // Heading, Content and Button.

        $this->add_control(
            'heading',
            [
                'label' => esc_html__( 'Heading', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Heading', 'md-fiery-addon' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'content',
            [
                'label' => esc_html__( 'Content', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => esc_html__( 'Content', 'md-fiery-addon' ),
                'show_label' => true,
            ]
        );

        $this->add_control(
            'button_text',
            [
                'label' => esc_html__( 'Button Text', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Button', 'md-fiery-addon' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'button_link',
            [
                'label' => esc_html__( 'Button Link', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__( 'https://your-link.com', 'md-fiery-addon' ),
                'show_label' => true,
            ]
        );

        $this->end_controls_section();

        // Image Section.

        $this->start_controls_section(
            'image_section',
            [
                'label' => esc_html__( 'Image', 'md-fiery-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'image',
            [
                'label' => esc_html__( 'Choose Image', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'label_block' => true,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->end_controls_section();

        // Style Section.

        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__( 'Style', 'md-fiery-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );

        // Boxed and Full width for hero-banner__boxed.

        $this->add_control(
            'boxed',
            [
                'label' => esc_html__( 'Boxed', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'boxed',
                'default' => 'boxed',
                "selectors" => [
                    "{{WRAPPER}} .hero-banner__inner" => "max-width: 1200px; margin: 0 auto;",
                ],
            ]
        );

        // Background Group Control.

        $this->add_group_control(
            \Elementor\Group_Control_Background::get_type(),
            [
                'name' => 'background',
                'label' => esc_html__( 'Background', 'md-fiery-addon' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .hero-banner__background',
            ]
        );

        // Background Absolute Position Left.

        $this->add_control(
            'background_absolute_position_left',
            [
                'label' => esc_html__( 'Background Absolute Position Left', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => -2000,
                        'max' => 2000,
                    ],
                    'em' => [
                        'min' => -100,
                        'max' => 100,
                    ],
                    '%' => [
                        'min' => -100,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .hero-banner__background' => 'left: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        // Background Absolute Position Top.

        $this->add_control(
            'background_absolute_position_top',
            [
                'label' => esc_html__( 'Background Absolute Position Top', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => -2000,
                        'max' => 2000,
                    ],
                    'em' => [
                        'min' => -100,
                        'max' => 100,
                    ],
                    '%' => [
                        'min' => -100,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .hero-banner__background' => 'top: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        // Background Absolute Position Right.

        $this->add_control(
            'background_absolute_position_right',
            [
                'label' => esc_html__( 'Background Absolute Position Right', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => -2000,
                        'max' => 2000,
                    ],
                    'em' => [
                        'min' => -100,
                        'max' => 100,
                    ],
                    '%' => [
                        'min' => -100,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .hero-banner__background' => 'right: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        // Background Absolute Position Bottom.

        $this->add_control(
            'background_absolute_position_bottom',
            [
                'label' => esc_html__( 'Background Absolute Position Bottom', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => -2000,
                        'max' => 2000,
                    ],
                    'em' => [
                        'min' => -100,
                        'max' => 100,
                    ],
                    '%' => [
                        'min' => -100,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .hero-banner__background' => 'bottom: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        // Background Image width and height.

        $this->add_control(
            'background_image_width',
            [
                'label' => esc_html__( 'Background Image Width', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 2000,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .hero-banner__background' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'background_image_height',
            [
                'label' => esc_html__( 'Background Image Height', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 2000,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .hero-banner__background' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        
        // Heading Typography and Color.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Heading Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .heading',
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Content Typography and Color.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'label' => esc_html__( 'Content Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .content',
            ]
        );

        $this->add_control(
            'content_color',
            [
                'label' => esc_html__( 'Content Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .content' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Button Typography and Color.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'button_typography',
                'label' => esc_html__( 'Button Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .button',
            ]
        );

        $this->add_control(
            'button_color',
            [
                'label' => esc_html__( 'Button Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'button_background_color',
            [
                'label' => esc_html__( 'Button Background Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        // Button Border and Padding and Radius.

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'button_border',
                'label' => esc_html__( 'Button Border', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .button',
            ]
        );

        $this->add_control(
            'button_padding',
            [
                'label' => esc_html__( 'Button Padding', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'button_radius',
            [
                'label' => esc_html__( 'Button Radius', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        // Image Width and Height.

        $this->add_control(
            'image_width',
            [
                'label' => esc_html__( 'Image Width', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 2000,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .hero-banner__image img' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'image_height',
            [
                'label' => esc_html__( 'Image Height', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 2000,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .hero-banner__image img' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        // Image Position Alignment.

        $this->add_control(
            'image_position',
            [
                'label' => esc_html__( 'Image Position', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'row-reverse' => [
                        'title' => esc_html__( 'Left', 'md-fiery-addon' ),
                        'icon' => 'eicon-h-align-left',
                    ],
                    'row' => [
                        'title' => esc_html__( 'Right', 'md-fiery-addon' ),
                        'icon' => 'eicon-h-align-right',
                    ],
                ],
                'default' => 'left',
                'toggle' => true,
                'selectors' => [
                    '{{WRAPPER}} .hero-banner__boxed' => 'flex-direction: {{VALUE}};',
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
        <div class="hero-banner">
            <div class="hero-banner__inner">
                <div class="hero-banner__background"></div>
                <div class="hero-banner__boxed">
                    <div class="hero-banner__content">
                        <h2 class="heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
                        <div class="content"><?php echo wp_kses_post( $settings['content'] ); ?></div>
                        <div class="button__wrapper">
                            <a href="<?php echo esc_url( $settings['button_link']['url'] ); ?>" class="button"><?php echo esc_html( $settings['button_text'] ); ?></a>
                        </div>
                    </div>
                    <div class="hero-banner__image">
                        <img src="<?php echo esc_url( $settings['image']['url'] ); ?>" alt="<?php echo esc_attr( $settings['heading'] ); ?>">
                    </div>
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
        <div class="hero-banner">
            <div class="hero-banner__inner">
                <div class="hero-banner__background"></div>
                <div class="hero-banner__boxed">
                    <div class="hero-banner__content">
                        <h2 class="heading">{{{ settings.heading }}}</h2>
                        <div class="content">{{{ settings.content }}}</div>
                        <div class="button__wrapper">
                            <a href="{{{ settings.button_link.url }}}" class="button">{{{ settings.button_text }}}</a>
                        </div>
                    </div>
                    <div class="hero-banner__image">
                        <img src="{{{ settings.image.url }}}" alt="{{{ settings.heading }}}">
                    </div>
                </div>
            </div>
        </div>
        <?php
	}

}
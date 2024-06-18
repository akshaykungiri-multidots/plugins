<?php

/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Plus
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Plus\Inc\Elementors;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Background;


/**
 * Image_Box_Plus class
 * 
 * @since 1.0.0
 */
class Image_Box_Plus extends \Elementor\Widget_Base {

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
		return 'image_box_plus';
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
		return esc_html__( 'Image Box Plus', 'md-circle-plus' );
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
		return [ 'md-circle-plus' ];
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
		return [ 'image', 'box', 'plus', 'circle' ];
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

		// Heading section with title and subtitle text.
        $this->start_controls_section(
            'section_heading',
            [
                'label' => esc_html__( 'Heading', 'md-circle-plus' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => esc_html__( 'Title', 'md-circle-plus' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Title', 'md-circle-plus' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label' => esc_html__( 'Subtitle', 'md-circle-plus' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Subtitle', 'md-circle-plus' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

        // Content section with content text as editor.
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Image Box', 'md-circle-plus' ),
            ]
        );

        // Create repeater with imagebox like image, heading and content.

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'image',
            [
                'label' => esc_html__( 'Image', 'md-circle-plus' ),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $repeater->add_control(
            'heading',
            [
                'label' => esc_html__( 'Heading', 'md-circle-plus' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Heading', 'md-circle-plus' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'content',
            [
                'label' => esc_html__( 'Content', 'md-circle-plus' ),
                'type' => Controls_Manager::WYSIWYG,
                'default' => esc_html__( 'Content', 'md-circle-plus' ),
                'show_label' => false,
            ]
        );

        $this->add_control(
            'imagebox',
            [
                'label' => esc_html__( 'Image Box', 'md-circle-plus' ),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'heading' => esc_html__( 'Heading', 'md-circle-plus' ),
                        'content' => esc_html__( 'Content', 'md-circle-plus' ),
                    ],
                    [
                        'heading' => esc_html__( 'Heading', 'md-circle-plus' ),
                        'content' => esc_html__( 'Content', 'md-circle-plus' ),
                    ],
                    [
                        'heading' => esc_html__( 'Heading', 'md-circle-plus' ),
                        'content' => esc_html__( 'Content', 'md-circle-plus' ),
                    ],
                    [
                        'heading' => esc_html__( 'Heading', 'md-circle-plus' ),
                        'content' => esc_html__( 'Content', 'md-circle-plus' ),
                    ],
                ],
                'title_field' => '{{{ heading }}}',
            ]
        );
        
        $this->end_controls_section();

        // Create style tab for design options.
        $this->start_controls_section(
            'section_title_style',
            [
                'label' => esc_html__( 'Title', 'md-circle-plus' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'title_color',
            [
                'label' => esc_html__( 'Color', 'md-circle-plus' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-box-plus__heading h2' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'label' => esc_html__( 'Typography', 'md-circle-plus' ),
                'selector' => '{{WRAPPER}} .image-box-plus__heading h2',
            ]
        );

        $this->end_controls_section();

        // Style control for subtitle text.

        $this->start_controls_section(
            'section_subtitle_style',
            [
                'label' => esc_html__( 'Subtitle', 'md-circle-plus' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'subtitle_color',
            [
                'label' => esc_html__( 'Color', 'md-circle-plus' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-box-plus__heading p' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'subtitle_typography',
                'label' => esc_html__( 'Typography', 'md-circle-plus' ),
                'selector' => '{{WRAPPER}} .image-box-plus__heading p',
            ]
        );

        $this->end_controls_section();

        // Style control for image box.

        $this->start_controls_section(
            'section_image_box_style',
            [
                'label' => esc_html__( 'Image Box', 'md-circle-plus' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Number of Image Box item per row.
        $this->add_control(
            'items_per_row',
            [
                'label' => esc_html__( 'Items Per Row', 'md-circle-plus' ),
                'type' => Controls_Manager::SELECT,
                'default' => '3',
                'options' => [
                    '1' => esc_html__( '1', 'md-circle-plus' ),
                    '2' => esc_html__( '2', 'md-circle-plus' ),
                    '3' => esc_html__( '3', 'md-circle-plus' ),
                    '4' => esc_html__( '4', 'md-circle-plus' ),
                    '5' => esc_html__( '5', 'md-circle-plus' ),
                    '6' => esc_html__( '6', 'md-circle-plus' ),
                ],
                'selectors' => [
                    '{{WRAPPER}} .image-box-plus__item' => 'width: calc(100% / {{VALUE}} - 30px);',
                ],
            ]
        );

        // Space between Image Box item.
        $this->add_control(
            'item_spacing',
            [
                'label' => esc_html__( 'Item Spacing', 'md-circle-plus' ),
                'type' => Controls_Manager::SLIDER,
                'default' => [
                    'size' => 30,
                ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .image-box-plus-inner' => 'gap: {{SIZE}}px;',
                ],
            ]
        );

        // Style control for image box heading text.

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'md-circle-plus' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-box-plus__heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Typography', 'md-circle-plus' ),
                'selector' => '{{WRAPPER}} .image-box-plus__heading',
            ]
        );

        // Style control for image box content text.

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'label' => esc_html__( 'Content Typography', 'md-circle-plus' ),
                'selector' => '{{WRAPPER}} .image-box-plus__content',
            ]
        );

        $this->add_control(
            'content_color',
            [
                'label' => esc_html__( 'Content Color', 'md-circle-plus' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-box-plus__content' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Image Box Content Width.
        $this->add_responsive_control(
            'content_width',
            [
                'label' => esc_html__( 'Content Width', 'md-circle-plus' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ 'px', '%' ],
                'range' => [
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                    'px' => [
                        'min' => 0,
                        'max' => 500,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .image-box-plus__content .image-box-plus__desc' => 'width: {{SIZE}}{{UNIT}};',
                ],
                'default' => [
                    'unit' => 'px',
                    'size' => 300,
                ],
            ]
        );

        // Style control for image.

        // Image width.
        $this->add_responsive_control(
			'image_box_image_width',
			[
				'label'     => esc_html__( 'Image Width', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'     => [
					'%' => [
						'min' => 0,
						'max' => 100,
					],
					'px' => [
						'min' => 0,
						'max' => 500,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .image-box-plus .image-box-plus-inner .image-box-plus__item .image-box-plus__image img' => 'width: {{SIZE}}{{UNIT}};',
				],
                'default' => [
                    'unit' => 'px',
                    'size' => 32,
                ],
			]
		);

        $this->add_control(
            'image_border_radius',
            [
                'label' => esc_html__( 'Image Border Radius', 'md-circle-plus' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .image-box-plus__image img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'image_border',
                'label' => esc_html__( 'Border', 'md-circle-plus' ),
                'selector' => '{{WRAPPER}} .image-box-plus__image img',
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'image_background',
                'label' => esc_html__( 'Background', 'md-circle-plus' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .image-box-plus__image img',
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
        <div class="image-box-plus">
            <div class="image-box-plus__heading">
                <p><?php echo esc_html( $settings['subtitle'] ); ?></p>
                <h2><?php echo esc_html( $settings['title'] ); ?></h2>
            </div>
            <div class="image-box-plus-inner">
                <?php foreach ( $settings['imagebox'] as $item ) : ?>
                    <div class="image-box-plus__item">
                        <div class="image-box-plus__image">
                            <img src="<?php echo esc_url( $item['image']['url'] ); ?>" alt="<?php echo esc_attr( $item['heading'] ); ?>">
                        </div>
                        <div class="image-box-plus__content">
                            <h3 class="image-box-plus__heading"><?php echo esc_html( $item['heading'] ); ?></h3>
                            <div class="image-box-plus__desc"><?php echo wp_kses_post( $item['content'] ); ?></div>
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
        <div class="image-box-plus">
            <div class="image-box-plus__heading">
                <p>{{{ settings.subtitle }}}</p>
                <h2>{{{ settings.title }}}</h2>
            </div>
            <div class="image-box-plus-inner">
            <# _.each( settings.imagebox, function( item ) { #>
                <div class="image-box-plus__item">
                    <div class="image-box-plus__image">
                        <img src="{{ item.image.url }}" alt="{{ item.heading }}">
                    </div>
                    <div class="image-box-plus__content">
                        <h3 class="image-box-plus__heading">{{ item.heading }}</h3>
                        <div class="image-box-plus__desc">{{ item.content }}</div>
                    </div>
                </div>
            <# }); #>
            </div>
        </div>
        <?php
	}

}
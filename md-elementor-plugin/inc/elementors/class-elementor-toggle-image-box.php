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
class Elementor_Toggle_Image_Box extends \Elementor\Widget_Base {

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
		return 'toggle_image_box';
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
		return esc_html__( 'Toogle Image Box', 'elementor-list-widget' );
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

        // Image Box section with repeater fields like image, title and content.

        $this->start_controls_section(
            'section_image_box',
            [
                'label' => esc_html__( 'Image Box', 'elementor-list-widget' ),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'image',
            [
                'label' => esc_html__( 'Image', 'elementor-list-widget' ),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => '',
                ],
            ]
        );

        $repeater->add_control(
            'title',
            [
                'label' => esc_html__( 'Title', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Title', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'content',
            [
                'label' => esc_html__( 'Content', 'elementor-list-widget' ),
                'type' => Controls_Manager::WYSIWYG,
                'default' => esc_html__( 'Content', 'elementor-list-widget' ),
                'show_label' => false,
            ]
        );

        $this->add_control(
            'image_boxes',
            [
                'label' => esc_html__( 'Image Boxes', 'elementor-list-widget' ),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'title' => esc_html__( 'Title #1', 'elementor-list-widget' ),
                        'content' => esc_html__( 'Content #1', 'elementor-list-widget' ),
                    ],
                    [
                        'title' => esc_html__( 'Title #2', 'elementor-list-widget' ),
                        'content' => esc_html__( 'Content #2', 'elementor-list-widget' ),
                    ],
                ],
                'title_field' => '{{{ title }}}',
            ]
        );

        $this->end_controls_section();

        // Create Style tab with heading section with typography and color.

        $this->start_controls_section(
            'section_heading_style',
            [
                'label' => esc_html__( 'Heading', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'heading_title_typography',
                'label' => esc_html__( 'Title Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .heading .heading-title',
            ]
        );

        $this->add_control(
            'heading_title_color',
            [
                'label' => esc_html__( 'Title Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .heading .heading-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'heading_subtitle_typography',
                'label' => esc_html__( 'Subtitle Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .heading .heading-subtitle',
            ]
        );

        $this->add_control(
            'heading_subtitle_color',
            [
                'label' => esc_html__( 'Subtitle Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .heading .heading-subtitle' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_section();

        // Style tab with image box section including image width, height, border, background, title and content typography and color.

        $this->start_controls_section(
            'section_image_box_style',
            [
                'label' => esc_html__( 'Image Box', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Add item per row control.

        $this->add_responsive_control(
            'items_per_row',
            [
                'label' => esc_html__( 'Items Per Row', 'elementor-list-widget' ),
                'type' => Controls_Manager::SELECT,
                'default' => '3',
                'options' => [
                    '1' => esc_html__( '1', 'elementor-list-widget' ),
                    '2' => esc_html__( '2', 'elementor-list-widget' ),
                    '3' => esc_html__( '3', 'elementor-list-widget' ),
                    '4' => esc_html__( '4', 'elementor-list-widget' ),
                    '5' => esc_html__( '5', 'elementor-list-widget' ),
                    '6' => esc_html__( '6', 'elementor-list-widget' ),
                ],
                'selectors' => [
                    '{{WRAPPER}} .image-toggle-boxes__item' => 'width: calc(100% / {{VALUE}} - 40px);',
                ],
            ]
        );

        // Add content background control.

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'content_background',
                'label' => esc_html__( 'Content Background', 'elementor-list-widget' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .image-toggle-boxes__item .image-box__toggle-content',
            ]
        );

        $this->add_responsive_control(
            'image_width',
            [
                'label' => esc_html__( 'Image Width', 'elementor-list-widget' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ 'px', '%' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 500,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .image-toggle-boxes__item img' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'image_height',
            [
                'label' => esc_html__( 'Image Height', 'elementor-list-widget' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ 'px', '%' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 500,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .image-toggle-boxes__item img' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'image_border',
                'label' => esc_html__( 'Border', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-toggle-boxes__item img',
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'image_background',
                'label' => esc_html__( 'Background', 'elementor-list-widget' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .image-toggle-boxes__item img',
            ]
        );
        
        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'label' => esc_html__( 'Title Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-toggle-boxes__item .title',
            ]
        );

        $this->add_control(
            'title_color',
            [
                'label' => esc_html__( 'Title Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-toggle-boxes__item .title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'label' => esc_html__( 'Content Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-toggle-boxes__item .content',
            ]
        );
        
        $this->add_control(
            'content_color',
            [
                'label' => esc_html__( 'Content Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-toggle-boxes__item .content' => 'color: {{VALUE}}',
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

        <div class="image-toggle-box">
            <div class="heading">
                <h2 class="heading-title"><?php echo esc_html( $settings['heading_title'] ); ?></h2>
                <p class="heading-subtitle"><?php echo esc_html( $settings['heading_subtitle'] ); ?></p>
            </div>

            <div class="image-toggle-boxes__items">
                <?php foreach ( $settings['image_boxes'] as $index => $item ) : ?>
                    <div class="image-toggle-boxes__item">
                        <img src="<?php echo esc_url( $item['image']['url'] ); ?>" alt="<?php echo esc_attr( $item['title'] ); ?>">
                        <div class="image-box__toggle-content">
                            <h3 class="title">
                                <i class="fas fa-angle-right"></i>
                                <?php echo esc_html( $item['title'] ); ?>
                            </h3>
                            <div class="content" style="display: none;" ><?php echo wp_kses_post( $item['content'] ); ?></div>
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

        <div class="image-toggle-box">
            <div class="heading">
                <h2 class="heading-title">{{{ settings.heading_title }}}</h2>
                <p class="heading-subtitle">{{{ settings.heading_subtitle }}}</p>
            </div>

            <div class="image-boxes">
                <# _.each( settings.image_boxes, function( item ) { #>
                    <div class="image-box">
                        <img src="{{ item.image.url }}" alt="{{ item.title }}">
                        <div class="content">
                            <h3 class="title">
                                <i class="fas fa-angle-right"></i>
                                {{ item.title }}
                            </h3>
                        </div>
                        <div class="content" style="display: none;" >{{ item.content }}</div>
                    </div>
                <# }); #>
            </div>
        </div>

        <?php
	}

}
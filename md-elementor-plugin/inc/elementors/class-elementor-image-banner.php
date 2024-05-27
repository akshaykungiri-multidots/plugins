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
class Elementor_Image_Banner extends \Elementor\Widget_Base {

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
		return 'image_banner';
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
		return esc_html__( 'Image Banner', 'elementor-list-widget' );
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

		// Heading section with title and subtitle text.
        $this->start_controls_section(
            'section_heading',
            [
                'label' => esc_html__( 'Heading', 'elementor-list-widget' ),
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => esc_html__( 'Title', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Title', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label' => esc_html__( 'Subtitle', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Subtitle', 'elementor-list-widget' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

        // Content section with content text as editor.
        $this->start_controls_section(
            'section_content',
            [
                'label' => esc_html__( 'Content', 'elementor-list-widget' ),
            ]
        );

        $this->add_control(
            'content',
            [
                'label' => esc_html__( 'Content', 'elementor-list-widget' ),
                'type' => Controls_Manager::WYSIWYG,
                'default' => esc_html__( 'Content', 'elementor-list-widget' ),
                'show_label' => false,
            ]
        );

        $this->end_controls_section();

        // Image section with image as media control.

        $this->start_controls_section(
            'section_image',
            [
                'label' => esc_html__( 'Image', 'elementor-list-widget' ),
            ]
        );

        $this->add_control(
            'image',
            [
                'label' => esc_html__( 'Choose Image', 'elementor-list-widget' ),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => '',
                ],
            ]
        );

        // Image options.
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
                'default' => [
                    'unit' => '%',
                    'size' => 50,
                ],
                'selectors' => [
                    '{{WRAPPER}} .image-banner__image' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        // Image height.
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
                'default' => [
                    'unit' => 'px',
                    'size' => 200,
                ],
                'selectors' => [
                    '{{WRAPPER}} .image-banner__image' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        // Image position.
        $this->add_responsive_control(
            'image_position',
            [
                'label' => esc_html__( 'Image Position', 'elementor-list-widget' ),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__( 'Left', 'elementor-list-widget' ),
                        'icon' => 'eicon-h-align-left',
                    ],
                    'right' => [
                        'title' => esc_html__( 'Right', 'elementor-list-widget' ),
                        'icon' => 'eicon-h-align-right',
                    ],
                ],
                'default' => 'left',
            ]
        );

        $this->end_controls_section();

        // Create style tab for design options.

        $this->start_controls_section(
            'section_style',
            [
                'label' => esc_html__( 'Style', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Style control for title text.

        $this->add_control(
            'title_color',
            [
                'label' => esc_html__( 'Title Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-banner__title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'label' => esc_html__( 'Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-banner__title',
            ]
        );

        // Style control for subtitle text.

        $this->add_control(
            'subtitle_color',
            [
                'label' => esc_html__( 'Subtitle Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-banner__subtitle' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'subtitle_typography',
                'label' => esc_html__( 'Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-banner__subtitle',
            ]
        );

        // Style control for content text.

        $this->add_control(
            'content_color',
            [
                'label' => esc_html__( 'Content Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-banner__content-text' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'label' => esc_html__( 'Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-banner__content-text',
            ]
        );

        // Style control for image.

        $this->add_control(
            'image_border_radius',
            [
                'label' => esc_html__( 'Image Border Radius', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%', 'em' ],
                'selectors' => [
                    '{{WRAPPER}} .image-banner__image img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'image_border',
                'label' => esc_html__( 'Border', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-banner__image img',
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'image_background',
                'label' => esc_html__( 'Background', 'elementor-list-widget' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .image-banner__image img',
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

        // Get Image position.
        $image_position = $settings['image_position'];
        $flex_direction = 'left' === $image_position ? 'row' : 'row-reverse';
        ?>
        <div class="image-banner" style="<?php echo 'flex-direction: ' . esc_attr($flex_direction); ?>">
            <div class="image-banner__content">
                <p class="image-banner__subtitle"><?php echo $settings['subtitle']; ?></p>
                <h2 class="image-banner__title"><?php echo $settings['title']; ?></h2>
                <div class="image-banner__content-text"><?php echo $settings['content']; ?></div>
            </div>
            <div class="image-banner__image">
                <img src="<?php echo $settings['image']['url']; ?>" alt="<?php echo $settings['title']; ?>">
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
        <#
        var image_position = settings.image_position;
        var flex_direction = 'left' === image_position ? 'row' : 'row-reverse';
        #>
        <div class="image-banner" style="flex-direction: {{{ flex_direction }}}">
            <div class="image-banner__content">
                <p class="image-banner__subtitle">{{{ settings.subtitle }}}</p>
                <h2 class="image-banner__title">{{{ settings.title }}}</h2>
                <div class="image-banner__content-text">{{{ settings.content }}}</div>
            </div>
            <div class="image-banner__image">
                <img src="{{{ settings.image.url }}}" alt="{{{ settings.title }}}">
            </div>
        </div>
        <?php
	}

}
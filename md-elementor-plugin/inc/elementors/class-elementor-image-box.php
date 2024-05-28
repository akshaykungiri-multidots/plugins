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
class Elementor_Image_Box extends \Elementor\Widget_Base {

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
		return 'image_box';
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
		return esc_html__( 'Image Box', 'elementor-list-widget' );
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
                'label' => esc_html__( 'Image Box', 'elementor-list-widget' ),
            ]
        );

        // Create repeater with imagebox like image, heading and content.

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'image',
            [
                'label' => esc_html__( 'Image', 'elementor-list-widget' ),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $repeater->add_control(
            'heading',
            [
                'label' => esc_html__( 'Heading', 'elementor-list-widget' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Heading', 'elementor-list-widget' ),
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
            'imagebox',
            [
                'label' => esc_html__( 'Image Box', 'elementor-list-widget' ),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'heading' => esc_html__( 'Heading', 'elementor-list-widget' ),
                        'content' => esc_html__( 'Content', 'elementor-list-widget' ),
                    ],
                    [
                        'heading' => esc_html__( 'Heading', 'elementor-list-widget' ),
                        'content' => esc_html__( 'Content', 'elementor-list-widget' ),
                    ],
                    [
                        'heading' => esc_html__( 'Heading', 'elementor-list-widget' ),
                        'content' => esc_html__( 'Content', 'elementor-list-widget' ),
                    ],
                    [
                        'heading' => esc_html__( 'Heading', 'elementor-list-widget' ),
                        'content' => esc_html__( 'Content', 'elementor-list-widget' ),
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
                'label' => esc_html__( 'Title', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'title_color',
            [
                'label' => esc_html__( 'Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-box__heading h2' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'title_typography',
                'label' => esc_html__( 'Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-box__heading h2',
            ]
        );

        $this->end_controls_section();

        // Style control for subtitle text.

        $this->start_controls_section(
            'section_subtitle_style',
            [
                'label' => esc_html__( 'Subtitle', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'subtitle_color',
            [
                'label' => esc_html__( 'Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-box__heading p' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'subtitle_typography',
                'label' => esc_html__( 'Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-box__heading p',
            ]
        );

        $this->end_controls_section();

        // Style control for image box.

        $this->start_controls_section(
            'section_image_box_style',
            [
                'label' => esc_html__( 'Image Box', 'elementor-list-widget' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Style control for image box heading text.

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-box__heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-box__heading',
            ]
        );

        // Style control for image box content text.

        $this->add_control(
            'content_color',
            [
                'label' => esc_html__( 'Content Color', 'elementor-list-widget' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .image-box__content' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'label' => esc_html__( 'Typography', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-box__content',
            ]
        );

        // Style control for image.

        $this->add_control(
            'image_border_radius',
            [
                'label' => esc_html__( 'Image Border Radius', 'elementor-list-widget' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .image-box__image img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'image_border',
                'label' => esc_html__( 'Border', 'elementor-list-widget' ),
                'selector' => '{{WRAPPER}} .image-box__image img',
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'image_background',
                'label' => esc_html__( 'Background', 'elementor-list-widget' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .image-box__image img',
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
        <div class="image-box">
            <div class="image-box__heading">
                <p><?php echo $settings['subtitle']; ?></p>
                <h2><?php echo $settings['title']; ?></h2>
            </div>
            <div class="image-box-inner">
                <?php foreach ( $settings['imagebox'] as $item ) : ?>
                    <div class="image-box__item">
                        <div class="image-box__image">
                            <img src="<?php echo $item['image']['url']; ?>" alt="<?php echo $item['heading']; ?>">
                        </div>
                        <div class="image-box__content">
                            <h3 class="image-box__heading"><?php echo $item['heading']; ?></h3>
                            <div class="image-box__desc"><?php echo $item['content']; ?></div>
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
        <div class="image-box">
            <div class="image-box__heading">
                <p>{{{ settings.subtitle }}}</p>
                <h2>{{{ settings.title }}}</h2>
            </div>
            <div class="image-box-inner">
            <# _.each( settings.imagebox, function( item ) { #>
                <div class="image-box__item">
                    <div class="image-box__image">
                        <img src="{{ item.image.url }}" alt="{{ item.heading }}">
                    </div>
                    <div class="image-box__content">
                        <h3 class="image-box__heading">{{ item.heading }}</h3>
                        <div class="image-box__desc">{{ item.content }}</div>
                    </div>
                </div>
            <# }); #>
            </div>
        </div>
        <?php
	}

}
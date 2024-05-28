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
class Elementor_Customer_Stories extends \Elementor\Widget_Base {

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
		return 'customer_stories';
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
		return esc_html__( 'Customer Stories', 'elementor-list-widget' );
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

        // Create Heading Section including Heading and Sub Heading and View More text and link.

        $this->start_controls_section(
            'heading_section',
            [
                'label' => esc_html__( 'Heading', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'heading',
            [
                'label' => esc_html__( 'Heading', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Customer Stories', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'sub_heading',
            [
                'label' => esc_html__( 'Sub Heading', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'What our customers say about us', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'view_more_text',
            [
                'label' => esc_html__( 'View More Text', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'View More Stories', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'view_more_link',
            [
                'label' => esc_html__( 'View More Link', 'md-elementor' ),
                'type' => Controls_Manager::URL,
                'placeholder' => esc_html__( 'https://your-link.com', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

        // Create Repeatable Section for Customer Stories including content, author name, author image and author position.

        $this->start_controls_section(
            'customer_stories_section',
            [
                'label' => esc_html__( 'Customer Stories', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'content',
            [
                'label' => esc_html__( 'Content', 'md-elementor' ),
                'type' => Controls_Manager::TEXTAREA,
                'default' => esc_html__( 'Content goes here', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'author_name',
            [
                'label' => esc_html__( 'Author Name', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Author Name', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'author_image',
            [
                'label' => esc_html__( 'Author Image', 'md-elementor' ),
                'type' => Controls_Manager::MEDIA,
                'label_block' => true,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $repeater->add_control(
            'author_position',
            [
                'label' => esc_html__( 'Author Position', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Author Position', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'customer_stories',
            [
                'label' => esc_html__( 'Customer Stories', 'md-elementor' ),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'content' => esc_html__( 'Content goes here', 'md-elementor' ),
                        'author_name' => esc_html__( 'Author Name', 'md-elementor' ),
                        'author_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'author_position' => esc_html__( 'Author Position', 'md-elementor' ),
                    ],
                    [
                        'content' => esc_html__( 'Content goes here', 'md-elementor' ),
                        'author_name' => esc_html__( 'Author Name', 'md-elementor' ),
                        'author_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'author_position' => esc_html__( 'Author Position', 'md-elementor' ),
                    ],
                    [
                        'content' => esc_html__( 'Content goes here', 'md-elementor' ),
                        'author_name' => esc_html__( 'Author Name', 'md-elementor' ),
                        'author_image' => [
                            'url' => \Elementor\Utils::get_placeholder_image_src(),
                        ],
                        'author_position' => esc_html__( 'Author Position', 'md-elementor' ),
                    ],
                ],
                'title_field' => '{{{ author_name }}}',
            ]
        );

        $this->end_controls_section();

        // Create slider settings for customer stories.

        $this->start_controls_section(
            'slider_settings',
            [
                'label' => esc_html__( 'Slider Settings', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_CONTENT,
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

        // Create Style for Background Section.

        $this->start_controls_section(
            'background_style_section',
            [
                'label' => esc_html__( 'Background', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'background',
                'label' => esc_html__( 'Background', 'md-elementor' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .customer-stories',
            ]
        );

        $this->end_controls_section();

        // Create Style Section like typography and color for Heading including Heading and Sub Heading and view more text.

        $this->start_controls_section(
            'heading_style_section',
            [
                'label' => esc_html__( 'Heading', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .heading',
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'sub_heading_typography',
                'label' => esc_html__( 'Sub Heading Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .sub-heading',
            ]
        );

        $this->add_control(
            'sub_heading_color',
            [
                'label' => esc_html__( 'Sub Heading Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .sub-heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'view_more_typography',
                'label' => esc_html__( 'View More Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .view-more',
            ]
        );

        $this->add_control(
            'view_more_color',
            [
                'label' => esc_html__( 'View More Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .view-more' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_section();

        // Create Style Section like typography and color for Customer Stories including content, author name and author position.

        $this->start_controls_section(
            'customer_stories_style_section',
            [
                'label' => esc_html__( 'Customer Stories', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'label' => esc_html__( 'Content Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .content',
            ]
        );

        $this->add_control(
            'content_color',
            [
                'label' => esc_html__( 'Content Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .content' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Style for Author Image like width, height, border radius, background and margin.

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'author_image_border',
                'label' => esc_html__( 'Border', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .author-image img',
            ]
        );

        $this->add_responsive_control(
            'author_image_width',
            [
                'label' => esc_html__( 'Width', 'md-elementor' ),
                'type' => Controls_Manager::SLIDER,
                'selectors' => [
                    '{{WRAPPER}} .author-image img' => 'width: {{SIZE}}px',
                ],
            ]
        );

        $this->add_responsive_control(
            'author_image_height',
            [
                'label' => esc_html__( 'Height', 'md-elementor' ),
                'type' => Controls_Manager::SLIDER,
                'selectors' => [
                    '{{WRAPPER}} .author-image img' => 'height: {{SIZE}}px',
                ],
            ]
        );

        $this->add_control(
            'author_image_border_radius',
            [
                'label' => esc_html__( 'Border Radius', 'md-elementor' ),
                'type' => Controls_Manager::SLIDER,
                'selectors' => [
                    '{{WRAPPER}} .author-image img' => 'border-radius: {{SIZE}}px',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'author_image_background',
                'label' => esc_html__( 'Background', 'md-elementor' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}} .author-image img',
            ]
        );

        $this->add_responsive_control(
            'author_image_margin',
            [
                'label' => esc_html__( 'Margin', 'md-elementor' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .author-image img' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'author_name_typography',
                'label' => esc_html__( 'Author Name Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .author-name',
            ]
        );

        $this->add_control(
            'author_name_color',
            [
                'label' => esc_html__( 'Author Name Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .author-name' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'author_position_typography',
                'label' => esc_html__( 'Author Position Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .author-position',
            ]
        );

        $this->add_control(
            'author_position_color',
            [
                'label' => esc_html__( 'Author Position Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .author-position' => 'color: {{VALUE}}',
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

        <div class="customer-stories">
            <div class="customer-stories__inner">
                <div class="customer-stories__content">
                    <div class="heading_section">
                        <h2 class="heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
                        <p class="sub-heading"><?php echo esc_html( $settings['sub_heading'] ); ?></p>
                    </div>
        
                    <div class="customer-stories-wrapper md-stories-slider" data-slide-to-show="<?php echo esc_attr( $settings['slides_to_show'] ); ?>" data-slide-to-scroll="<?php echo esc_attr( $settings['slides_to_scroll'] ); ?>" data-autoplay="<?php echo esc_attr( $settings['autoplay'] ); ?>" data-autoplay-speed="<?php echo esc_attr( $settings['autoplay_speed'] ); ?>" data-infinite="<?php echo esc_attr( $settings['infinite'] ); ?>" data-arrows="<?php echo esc_attr( $settings['arrows'] ); ?>" data-dots="<?php echo esc_attr( $settings['dots'] ); ?>" data-pause-on-hover="<?php echo esc_attr( $settings['pause_on_hover'] ); ?>" data-adaptive-height="<?php echo esc_attr( $settings['adaptive_height'] ); ?>">
                        <?php
                        foreach ( $settings['customer_stories'] as $index => $item ) {
                            ?>
                            <div class="customer-story">
                                <p class="content"><?php echo esc_html( $item['content'] ); ?></p>
                                <div class="author">
                                    <div class="author-image">
                                        <img src="<?php echo esc_url( $item['author_image']['url'] ); ?>" alt="<?php echo esc_attr( $item['author_name'] ); ?>">
                                    </div>
                                    <div class="author-details">
                                        <p class="author-name"><?php echo esc_html( $item['author_name'] ); ?></p>
                                        <p class="author-position"><?php echo esc_html( $item['author_position'] ); ?></p>
                                    </div>
                                </div>
                            </div>
                            <?php
                        }
                        ?>
                    </div>
                </div>
                <div class="customer-stories__bottom">
                    <div class="view-more">
                        <a href="<?php echo esc_url( $settings['view_more_link']['url'] ); ?>"><?php echo esc_html( $settings['view_more_text'] ); ?></a>
                    </div>
                    <?php if ($settings['arrows'] === 'yes') {
                    ?>
                    <div class="slick-arrows">
                        <button type="button" class="slick-prev"></button>
                        <button type="button" class="slick-next"></button>
                    </div>
                    <?php } ?>
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

        <div class="customer-stories">
            <div class="customer-stories__content">
                <div class="heading_section">
                    <h2 class="heading">{{{ settings.heading }}}</h2>
                    <p class="sub-heading">{{{ settings.sub_heading }}}</p>
                </div>
    
                <div class="customer-stories-wrapper md-stories-slider" data-slide-to-show="{{ settings.slides_to_show }}" data-slide-to-scroll="{{ settings.slides_to_scroll }}" data-autoplay="{{ settings.autoplay }}" data-autoplay-speed="{{ settings.autoplay_speed }}" data-infinite="{{ settings.infinite }}" data-arrows="{{ settings.arrows }}" data-dots="{{ settings.dots }}" data-pause-on-hover="{{ settings.pause_on_hover }}" data-adaptive-height="{{ settings.adaptive_height }}">
                    <# _.each( settings.customer_stories, function( item ) { #>
                        <div class="customer-story">
                            <p class="content">{{{ item.content }}}</p>
                            <div class="author">
                                <div class="author-image">
                                    <img src="{{{ item.author_image.url }}}" alt="{{{ item.author_name }}}">
                                </div>
                                <div class="author-details">
                                    <p class="author-name">{{{ item.author_name }}}</p>
                                    <p class="author-position">{{{ item.author_position }}}</p>
                                </div>
                            </div>
                        </div>
                    <# } ); #>
                </div>
            </div>
            <div class="customer-stories__bottom">
                <div class="view-more">
                    <a href="{{{ settings.view_more_link.url }}}">{{{ settings.view_more_text }}}</a>
                </div>
                <# if (settings.arrows === 'yes') { #>
                <div class="slick-arrows">
                    <button type="button" class="slick-prev"></button>
                    <button type="button" class="slick-next"></button>
                </div>
                <# } #>
            </div>
        </div>
        
        <?php
	}

}
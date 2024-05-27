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


/**
 * Elementor List Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Elementor_Media_Content extends \Elementor\Widget_Base {

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
		return 'md_media_content';
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
		return esc_html__( 'MD Media Content', 'elementor-list-widget' );
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

        // Create Content Section For Media Content
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__( 'Content', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        // Add Heading Field

        $this->add_control(
            'heading',
            [
                'label' => esc_html__( 'Heading', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Heading', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        // Add subheading Field

        $this->add_control(
            'subheading',
            [
                'label' => esc_html__( 'Subheading', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( 'Subheading', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        $this->end_controls_section();

        // Add Repeatable Media Content Fields like image, title and subtitle and subtitle link.

        $this->start_controls_section(
            'media_content_section',
            [
                'label' => esc_html__( 'Media Content', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'media_image',
            [
                'label' => esc_html__( 'Image', 'md-elementor' ),
                'type' => Controls_Manager::MEDIA,
                'default' => [
                    'url' => '',
                ],
            ]
        );

        $repeater->add_control(
            'media_title',
            [
                'label' => esc_html__( 'Title', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( '', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'media_subtitle',
            [
                'label' => esc_html__( 'Subtitle', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => esc_html__( '', 'md-elementor' ),
                'label_block' => true,
            ]
        );

        $repeater->add_control(
            'media_subtitle_link',
            [
                'label' => esc_html__( 'Subtitle Link', 'md-elementor' ),
                'type' => Controls_Manager::URL,
                'placeholder' => esc_html__( 'https://your-link.com', 'md-elementor' ),
            ]
        );

        $this->add_control(
            'media_content',
            [
                'label' => esc_html__( 'Media Content', 'md-elementor' ),
                'type' => Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'media_title' => esc_html__( 'Title #1', 'md-elementor' ),
                        'media_subtitle' => esc_html__( 'Subtitle #1', 'md-elementor' ),
                    ],
                    [
                        'media_title' => esc_html__( 'Title #2', 'md-elementor' ),
                        'media_subtitle' => esc_html__( 'Subtitle #2', 'md-elementor' ),
                    ],
                ],
                'title_field' => '{{{ media_title }}}',
            ]
        );

        $this->end_controls_section();

        // Add Style Section For Media Content

        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__( 'Style', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Heading Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .md-media-content-heading',
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .md-media-content-heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'subheading_typography',
                'label' => esc_html__( 'Subheading Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .md-media-content-subheading',
            ]
        );

        $this->add_control(
            'subheading_color',
            [
                'label' => esc_html__( 'Subheading Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .md-media-content-subheading' => 'color: {{VALUE}}',
                ],
            ]
        );
        
        // Add Media heding and subtitle style.

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'media_title_typography',
                'label' => esc_html__( 'Media Title Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .md-media-content-title',
            ]
        );

        $this->add_control(
            'media_title_color',
            [
                'label' => esc_html__( 'Media Title Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .md-media-content-title' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'media_subtitle_typography',
                'label' => esc_html__( 'Media Subtitle Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .md-media-content-subtitle',
            ]
        );

        $this->add_control(
            'media_subtitle_color',
            [
                'label' => esc_html__( 'Media Subtitle Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .md-media-content-subtitle' => 'color: {{VALUE}}',
                ],
            ]
        );
        
        // Add style for media image like width, height and border and border spacing.

        $this->add_control(
            'media_image_width',
            [
                'label' => esc_html__( 'Image Width', 'md-elementor' ),
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
                    '{{WRAPPER}} .md-media-content-image img' => 'width: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'media_image_height',
            [
                'label' => esc_html__( 'Image Height', 'md-elementor' ),
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
                    '{{WRAPPER}} .md-media-content-image img' => 'height: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'media_image_border',
                'label' => esc_html__( 'Image Border', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .md-media-content-image img',
            ]
        );

        $this->add_control(
            'media_image_border_radius',
            [
                'label' => esc_html__( 'Image Border Radius', 'md-elementor' ),
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
                    '{{WRAPPER}} .md-media-content-image img' => 'border-radius: {{SIZE}}{{UNIT}};',
                ],
            ]
        );

        $this->add_control(
            'media_image_spacing',
            [
                'label' => esc_html__( 'Image Spacing', 'md-elementor' ),
                'type' => Controls_Manager::SLIDER,
                'size_units' => [ 'px', 'em', '%' ],
                'range' => [
                    'px' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                    'em' => [
                        'min' => 0,
                        'max' => 10,
                    ],
                    '%' => [
                        'min' => 0,
                        'max' => 100,
                    ],
                ],
                'selectors' => [
                    '{{WRAPPER}} .md-media-content-item' => 'margin-bottom: {{SIZE}}{{UNIT}};',
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
        
        <div class="md-media-content">
            <div class="md-media-content__heading">
                <div class="md-media-content-subheading"><?php echo esc_html( $settings['subheading'] ); ?></div>
                <div class="md-media-content-heading"><?php echo esc_html( $settings['heading'] ); ?></div>
            </div>
            <div class="md-media-content__items">
                <?php foreach ( $settings['media_content'] as $media_content ) : ?>
                    <div class="md-media-content__items--item">
                        <div class="md-media-content-image">
                            <img src="<?php echo esc_url( $media_content['media_image']['url'] ); ?>" alt="<?php echo esc_attr( $media_content['media_title'] ); ?>">
                        </div>
                        <div class="md-media-content__items-item_content">
                            <div class="md-media-content-title"><?php echo esc_html( $media_content['media_title'] ); ?></div>
                            <div class="md-media-content-subtitle">
                                <a href="<?php echo esc_url( $media_content['media_subtitle_link']['url'] ); ?>">
                                    <?php echo esc_html( $media_content['media_subtitle'] ); ?>
                                </a>
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

        <div class="md-media-content">
            <div class="md-media-content__heading">
                <div class="md-media-content-subheading">{{{ settings.subheading }}}</div>
                <div class="md-media-content-heading">{{{ settings.heading }}}</div>
            </div>
            <div class="md-media-content__items">
                <# _.each( settings.media_content, function( media_content ) { #>
                    <div class="md-media-content__items--item">
                        <div class="md-media-content-image">
                            <img src="{{ media_content.media_image.url }}" alt="{{ media_content.media_title }}">
                        </div>
                        <div class="md-media-content__items-item_content">
                            <div class="md-media-content-title">{{ media_content.media_title }}</div>
                            <div class="md-media-content-subtitle">
                                <a href="{{ media_content.media_subtitle_link.url }}">
                                    {{ media_content.media_subtitle }}
                                </a>
                            </div>
                        </div>
                    </div>
                <# }); #>
            </div>
        </div>

        <?php
	}
}
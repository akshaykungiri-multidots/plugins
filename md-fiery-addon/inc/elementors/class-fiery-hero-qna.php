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
 * Elementor Hero QNA Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Fiery_Hero_QNA extends \Elementor\Widget_Base {

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
		return 'fiery_hero_qna';
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
		return esc_html__( 'Hero QNA', 'md-fiery-addon' );
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
		return [ 'hero', 'question', 'qna', 'hero-qna' ];
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

        // Style Section.

        $this->start_controls_section(
            'style_section',
            [
                'label' => esc_html__( 'Style', 'md-fiery-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_STYLE,
            ]
        );
        
        // Background Group Control.

        $this->add_group_control(
            \Elementor\Group_Control_Background::get_type(),
            [
                'name' => 'background',
                'label' => esc_html__( 'Background', 'md-fiery-addon' ),
                'types' => [ 'classic', 'gradient' ],
                'selector' => '{{WRAPPER}}',
            ]
        );

        // Alignment Control.

        $this->add_control(
            'alignment',
            [
                'label' => esc_html__( 'Alignment', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => esc_html__( 'Left', 'md-fiery-addon' ),
                        'icon' => 'eicon-text-align-left',
                    ],
                    'center' => [
                        'title' => esc_html__( 'Center', 'md-fiery-addon' ),
                        'icon' => 'eicon-text-align-center',
                    ],
                    'right' => [
                        'title' => esc_html__( 'Right', 'md-fiery-addon' ),
                        'icon' => 'eicon-text-align-right',
                    ],
                ],
                'default' => 'left',
                'toggle' => true,
                'selectors' => [
                    '{{WRAPPER}}' => 'text-align: {{VALUE}}',
                ],
            ]
        );

        // Heading Typography Control and Color Control.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'label' => esc_html__( 'Heading Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .fiery-hero-qna-heading',
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label' => esc_html__( 'Heading Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#333',
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-qna-heading' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Content Typography Control and Color Control.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'content_typography',
                'label' => esc_html__( 'Content Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .fiery-hero-qna-content',
            ]
        );

        $this->add_control(
            'content_color',
            [
                'label' => esc_html__( 'Content Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#333',
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-qna-content' => 'color: {{VALUE}}',
                ],
            ]
        );

        // Button Typography Control and Color Control.

        $this->add_group_control(
            \Elementor\Group_Control_Typography::get_type(),
            [
                'name' => 'button_typography',
                'label' => esc_html__( 'Button Typography', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .fiery-hero-qna-button',
            ]
        );

        $this->add_control(
            'button_color',
            [
                'label' => esc_html__( 'Button Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#333',
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-qna-button' => 'color: {{VALUE}}',
                ],
            ]
        );
        
        // Button Border Group Control.

        $this->add_group_control(
            \Elementor\Group_Control_Border::get_type(),
            [
                'name' => 'button_border',
                'label' => esc_html__( 'Button Border', 'md-fiery-addon' ),
                'selector' => '{{WRAPPER}} .fiery-hero-qna-button',
            ]
        );

        // Button Border Radius Control.

        $this->add_control(
            'button_border_radius',
            [
                'label' => esc_html__( 'Button Border Radius', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-qna-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        // Button Padding Control.

        $this->add_control(
            'button_padding',
            [
                'label' => esc_html__( 'Button Padding', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-qna-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        // Button Normal and Hover Tabs Background Color and Text Color Control.

        $this->start_controls_tabs( 'button_tabs' );

        // Button Normal Tab.

        $this->start_controls_tab(
            'button_normal_tab',
            [
                'label' => esc_html__( 'Normal', 'md-fiery-addon' ),
            ]
        );

        $this->add_control(
            'button_bg_color',
            [
                'label' => esc_html__( 'Background Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#333',
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-qna-button' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'button_text_color',
            [
                'label' => esc_html__( 'Text Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#fff',
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-qna-button' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_tab();

        // Button Hover Tab.

        $this->start_controls_tab(
            'button_hover_tab',
            [
                'label' => esc_html__( 'Hover', 'md-fiery-addon' ),
            ]
        );

        $this->add_control(
            'button_bg_hover_color',
            [
                'label' => esc_html__( 'Background Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#333',
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-qna-button:hover' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'button_text_hover_color',
            [
                'label' => esc_html__( 'Text Color', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::COLOR,
                'default' => '#fff',
                'selectors' => [
                    '{{WRAPPER}} .fiery-hero-qna-button:hover' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->end_controls_tab();

        $this->end_controls_tabs();

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

        <div class="fiery-hero-qna">
            <div class="fiery-hero-qna-content">
                <h2 class="fiery-hero-qna-heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
                <p class="fiery-hero-qna-content"><?php echo esc_html( $settings['content'] ); ?></p>
            </div>
            <div class="fiery-hero-qna-button-group">
                <a href="<?php echo esc_url( $settings['button_link']['url'] ); ?>" class="fiery-hero-qna-button"><?php echo esc_html( $settings['button_text'] ); ?></a>
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
        <div class="fiery-hero-qna">
            <div class="fiery-hero-qna-content">
                <h2 class="fiery-hero-qna-heading">{{{ settings.heading }}}</h2>
                <p class="fiery-hero-qna-content">{{{ settings.content }}}</p>
            </div>
            <div class="fiery-hero-qna-button-group">
                <a href="{{{ settings.button_link.url }}}" class="fiery-hero-qna-button">{{{ settings.button_text }}}</a>
            </div>
        </div>
        <?php
	}

}
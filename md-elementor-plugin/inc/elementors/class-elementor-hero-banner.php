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
class Elementor_Hero_Banner extends \Elementor\Widget_Base {

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
		return 'hero_banner';
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
		return esc_html__( 'Hero Banner', 'elementor-list-widget' );
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

		$this->start_controls_section(
			'heading_section',
			[
				'label' => esc_html__( 'Heading', 'elementor-list-widget' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

        $this->add_control(
            'pre_text',
            [
                'label' => __( 'Pre Text', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => __( 'The Fastest Path to ', 'md-elementor' ),
                'placeholder' => __( 'Enter the pre-highlight text', 'md-elementor' ),
            ]
        );

        $this->add_control(
            'highlighted_text',
            [
                'label' => __( 'Highlighted Text', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => __( 'FEDRAMP', 'md-elementor' ),
                'placeholder' => __( 'Enter the text to highlight', 'md-elementor' ),
            ]
        );

        $this->add_control(
            'post_text',
            [
                'label' => __( 'Post Text', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => __( ' Compliance', 'md-elementor' ),
                'placeholder' => __( 'Enter the post-highlight text', 'md-elementor' ),
            ]
        );

        $this->add_control(
            'highlight_color',
            [
                'label' => __( 'Highlight Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'default' => '#f75227', // Default yellow color
                'selectors' => [
                    '{{WRAPPER}} .highlighted-text .highlight' => 'color: {{VALUE}};',
                ],
            ]
        );

		$this->end_controls_section();

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'elementor-list-widget' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

        $this->add_control(
            'editor',
            [
                'label' => __( 'Text Editor', 'md-elementor' ),
                'type' => Controls_Manager::WYSIWYG,
                'default' => __( 'Add your content here.', 'md-elementor' ),
            ]
        );

		$this->end_controls_section();

        $this->start_controls_section(
			'button_section',
			[
				'label' => esc_html__( 'Button', 'elementor-list-widget' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

        $this->add_control(
            'button1_text',
            [
                'label' => __( 'Button 1 Text', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => __( 'Button 1', 'md-elementor' ),
                'placeholder' => __( 'Enter button 1 text', 'md-elementor' ),
            ]
        );
        
        $this->add_control(
            'button1_url',
            [
                'label' => __( 'Button 1 URL', 'md-elementor' ),
                'type' => Controls_Manager::URL,
                'placeholder' => __( 'https://your-link.com', 'md-elementor' ),
            ]
        );
        
        $this->add_control(
            'button2_text',
            [
                'label' => __( 'Button 2 Text', 'md-elementor' ),
                'type' => Controls_Manager::TEXT,
                'default' => __( 'Button 2', 'md-elementor' ),
                'placeholder' => __( 'Enter button 2 text', 'md-elementor' ),
            ]
        );
        
        $this->add_control(
            'button2_url',
            [
                'label' => __( 'Button 2 URL', 'md-elementor' ),
                'type' => Controls_Manager::URL,
                'placeholder' => __( 'https://your-link.com', 'md-elementor' ),
            ]
        );

		$this->end_controls_section();

        // Style Sections
        $this->start_controls_section(
            'layout_section',
            [
                'label' => __( 'Layout', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        // Add alignment control
        $this->add_responsive_control(
            'alignment',
            [
                'label' => __( 'Alignment', 'md-elementor' ),
                'type' => Controls_Manager::CHOOSE,
                'options' => [
                    'left' => [
                        'title' => __( 'Left', 'md-elementor' ),
                        'icon' => 'eicon-h-align-left',
                    ],
                    'center' => [
                        'title' => __( 'Center', 'md-elementor' ),
                        'icon' => 'eicon-h-align-center',
                    ],
                    'right' => [
                        'title' => __( 'Right', 'md-elementor' ),
                        'icon' => 'eicon-h-align-right',
                    ],
                ],
            ]
        );

        // Add padding control

        $this->add_responsive_control(
            'padding',
            [
                'label' => __( 'Padding', 'md-elementor' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}}' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        // Add Border Radius control for 4 corners

        $this->add_responsive_control(
            'border_radius',
            [
                'label' => __( 'Border Radius', 'md-elementor' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', 'em', '%' ],
                'selectors' => [
                    '{{WRAPPER}}' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        
        
        $this->end_controls_section();

        $this->start_controls_section(
            'style_background_section',
            [
                'label' => __( 'Background', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );
        
        $this->add_group_control(
            Group_Control_Background::get_type(),
            [
                'name' => 'background',
                'label' => __( 'Background', 'md-elementor' ),
                'types' => [ 'classic', 'gradient', 'video' ],
                'selector' => '{{WRAPPER}}',
            ]
        );
        
        $this->end_controls_section();

        $this->start_controls_section(
            'style_heading_section',
            [
                'label' => __( 'Heading', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'heading_color',
            [
                'label' => __( 'Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .highlighted-text' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'heading_typography',
                'selector' => '{{WRAPPER}} .highlighted-text',
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'style_editor_section',
            [
                'label' => __( 'Text Editor', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_control(
            'editor_color',
            [
                'label' => __( 'Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .editor-content' => 'color: {{VALUE}};',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'editor_typography',
                'selector' => '{{WRAPPER}} .editor-content',
            ]
        );

        $this->end_controls_section();

        $this->start_controls_section(
            'button_style_section',
            [
                'label' => __( 'Button', 'md-elementor' ),
                'tab' => Controls_Manager::TAB_STYLE,
            ]
        );
        
        // Button 1 Styles
        $this->add_control(
            'button1_heading',
            [
                'label' => __( 'Button 1', 'md-elementor' ),
                'type' => Controls_Manager::HEADING,
            ]
        );
        
        $this->start_controls_tabs('button1_tabs');
        
        // Normal State
        $this->start_controls_tab(
            'button1_normal_tab',
            [
                'label' => __( 'Normal', 'md-elementor' ),
            ]
        );
        
        $this->add_control(
            'button1_text_color',
            [
                'label' => __( 'Text Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button1' => 'color: {{VALUE}};',
                ],
            ]
        );
        
        $this->add_control(
            'button1_background_color',
            [
                'label' => __( 'Background Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button1' => 'background-color: {{VALUE}};',
                ],
            ]
        );
        
        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'button1_border',
                'label' => __( 'Border', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .button1',
            ]
        );
        
        $this->add_control(
            'button1_border_radius',
            [
                'label' => __( 'Border Radius', 'md-elementor' ),
                'type' => Controls_Manager::SLIDER,
                'selectors' => [
                    '{{WRAPPER}} .button1' => 'border-radius: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_control(
            'button1_padding',
            [
                'label' => __( 'Padding', 'md-elementor' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%', 'em' ],
                'selectors' => [
                    '{{WRAPPER}} .button1' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'button1_typography',
                'label' => __( 'Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .button1',
            ]
        );
        
        $this->end_controls_tab();
        
        // Hover State
        $this->start_controls_tab(
            'button1_hover_tab',
            [
                'label' => __( 'Hover', 'md-elementor' ),
            ]
        );
        
        $this->add_control(
            'button1_hover_text_color',
            [
                'label' => __( 'Text Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button1:hover' => 'color: {{VALUE}};',
                ],
            ]
        );
        
        $this->add_control(
            'button1_hover_background_color',
            [
                'label' => __( 'Background Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button1:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );
        
        $this->add_control(
            'button1_hover_border_color',
            [
                'label' => __( 'Border Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button1:hover' => 'border-color: {{VALUE}};',
                ],
            ]
        );
        
        $this->end_controls_tab();
        $this->end_controls_tabs();
        
        // Button 2 Styles
        $this->add_control(
            'button2_heading',
            [
                'label' => __( 'Button 2', 'md-elementor' ),
                'type' => Controls_Manager::HEADING,
            ]
        );
        
        $this->start_controls_tabs('button2_tabs');
        
        // Normal State
        $this->start_controls_tab(
            'button2_normal_tab',
            [
                'label' => __( 'Normal', 'md-elementor' ),
            ]
        );
        
        $this->add_control(
            'button2_text_color',
            [
                'label' => __( 'Text Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button2' => 'color: {{VALUE}};',
                ],
            ]
        );
        
        $this->add_control(
            'button2_background_color',
            [
                'label' => __( 'Background Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button2' => 'background-color: {{VALUE}};',
                ],
            ]
        );
        
        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name' => 'button2_border',
                'label' => __( 'Border', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .button2',
            ]
        );
        
        $this->add_control(
            'button2_border_radius',
            [
                'label' => __( 'Border Radius', 'md-elementor' ),
                'type' => Controls_Manager::SLIDER,
                'selectors' => [
                    '{{WRAPPER}} .button2' => 'border-radius: {{SIZE}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_control(
            'button2_padding',
            [
                'label' => __( 'Padding', 'md-elementor' ),
                'type' => Controls_Manager::DIMENSIONS,
                'size_units' => [ 'px', '%', 'em' ],
                'selectors' => [
                    '{{WRAPPER}} .button2' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );
        
        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name' => 'button2_typography',
                'label' => __( 'Typography', 'md-elementor' ),
                'selector' => '{{WRAPPER}} .button2',
            ]
        );
        
        $this->end_controls_tab();
        
        // Hover State
        $this->start_controls_tab(
            'button2_hover_tab',
            [
                'label' => __( 'Hover', 'md-elementor' ),
            ]
        );
        
        $this->add_control(
            'button2_hover_text_color',
            [
                'label' => __( 'Text Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button2:hover' => 'color: {{VALUE}};',
                ],
            ]
        );
        
        $this->add_control(
            'button2_hover_background_color',
            [
                'label' => __( 'Background Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button2:hover' => 'background-color: {{VALUE}};',
                ],
            ]
        );
        
        $this->add_control(
            'button2_hover_border_color',
            [
                'label' => __( 'Border Color', 'md-elementor' ),
                'type' => Controls_Manager::COLOR,
                'selectors' => [
                    '{{WRAPPER}} .button2:hover' => 'border-color: {{VALUE}};',
                ],
            ]
        );
        
        $this->end_controls_tab();
        $this->end_controls_tabs();
        
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
        $align_items = "";
        if ($settings['alignment'] === "right") {
            $align_items = "flex-end";
        } else if ($settings['alignment'] === "center") {
            $align_items = "center";
        } else {
            $align_items = "flex-start";
        }
        ?>
        <div class="hero-banner" style="<?php echo esc_attr( $this->get_render_attribute_string( 'wrapper' ) ); ?> display: flex; <?php echo 'align-items: '. esc_attr( $align_items ) . "; text-align: ". esc_attr( $settings['alignment'] ); ?>">
            <div class="highlighted-text" style="width: 70%;" >
                <span><?php echo esc_html( $settings['pre_text'] ); ?></span>
                <span class="highlight" style="color: <?php echo esc_attr( $settings['highlight_color'] ); ?>;"><?php echo esc_html( $settings['highlighted_text'] ); ?></span>
                <span><?php echo esc_html( $settings['post_text'] ); ?></span>
            </div>
            <div class="editor-content" style="width: 70%;">
                <?php echo $settings['editor']; ?>
            </div>
            <div class="button-section">
                <a href="<?php echo esc_url( $settings['button1_url']['url'] ); ?>" class="button button1"><?php echo esc_html( $settings['button1_text'] ); ?></a>
                <a href="<?php echo esc_url( $settings['button2_url']['url'] ); ?>" class="button button2"><?php echo esc_html( $settings['button2_text'] ); ?></a>
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
        var pre_text = settings.pre_text;
        var highlighted_text = settings.highlighted_text;
        var post_text = settings.post_text;
        var highlight_color = settings.highlight_color;
        var editor = settings.editor;

        var align_items = "";
        if (settings.alignment === "right") {
            align_items = "flex-end";
        } else if (settings.alignment === "center") {
            align_items = "center";
        } else {
            align_items = "flex-start";
        }

        #>
        <div class="hero-banner" style="display: flex; align-items: {{{ align_items }}}; text-align: {{{ settings.alignment }}} ">
            <div class="highlighted-text" style="width: 70%;">
                <span>{{{ pre_text }}}</span>
                <span class="highlight" style="color: {{{ highlight_color }}};">{{{ highlighted_text }}}</span>
                <span>{{{ post_text }}}</span>
            </div>
            <div class="editor-content" style="width: 70%;">
                {{{ editor }}}
            </div>
            <div class="button-section">
                <a href="{{ settings.button1_url.url }}" class="button button1">{{{ settings.button1_text }}}</a>
                <a href="{{ settings.button2_url.url }}" class="button button2">{{{ settings.button2_text }}}</a>
            </div>
        </div>
        <?php
	}

}
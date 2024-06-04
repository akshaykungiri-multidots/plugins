<?php

/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Fiery_Addon
 * @author     Multidots <info@multidots.com>
 */

 namespace MD_Fiery_Addon\Inc\Elementors;


/**
 * Elementor Hero Partner Widget.
 *
 * Elementor widget that inserts an embbedable content into the page, from any given URL.
 *
 * @since 1.0.0
 */
class Fiery_Hero_Partner extends \Elementor\Widget_Base {

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
		return 'fiery_hero_partner';
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
		return esc_html__( 'Hero Partner', 'md-fiery-addon' );
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
		return 'eicon-posts-group';
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
		return [ 'hero', 'partner', 'fiery', 'hero-partner' ];
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
        
        // Button 1.

        $this->add_control(
            'button_text',
            [
                'label' => esc_html__( 'Button Text 1', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Button', 'md-fiery-addon' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'button_link',
            [
                'label' => esc_html__( 'Button Link 1', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__( 'https://your-link.com', 'md-fiery-addon' ),
                'show_label' => true,
            ]
        );
        
        // Button 2.

        $this->add_control(
            'button_text_2',
            [
                'label' => esc_html__( 'Button Text 2', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__( 'Button 2', 'md-fiery-addon' ),
                'label_block' => true,
            ]
        );

        $this->add_control(
            'button_link_2',
            [
                'label' => esc_html__( 'Button Link 2', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::URL,
                'placeholder' => esc_html__( 'https://your-link.com', 'md-fiery-addon' ),
                'show_label' => true,
            ]
        );

        $this->end_controls_section();

        // Repeater Logos Section.

        $this->start_controls_section(
            'logos_section',
            [
                'label' => esc_html__( 'Logos', 'md-fiery-addon' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'logo',
            [
                'label' => esc_html__( 'Logo', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'label_block' => true,
				'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'logos',
            [
                'label' => esc_html__( 'Logos', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
				'default' => [
					[
						'logo' => [
							'url' => \Elementor\Utils::get_placeholder_image_src(),
						],
					],
					[
						'logo' => [
							'url' => \Elementor\Utils::get_placeholder_image_src(),
						],
					],
					[
						'logo' => [
							'url' => \Elementor\Utils::get_placeholder_image_src(),
						],
					],
					[
						'logo' => [
							'url' => \Elementor\Utils::get_placeholder_image_src(),
						],
					],
					[
						'logo' => [
							'url' => \Elementor\Utils::get_placeholder_image_src(),
						],
					],
					[
						'logo' => [
							'url' => \Elementor\Utils::get_placeholder_image_src(),
						],
					],
					[
						'logo' => [
							'url' => \Elementor\Utils::get_placeholder_image_src(),
						],
					],
					[
						'logo' => [
							'url' => \Elementor\Utils::get_placeholder_image_src(),
						],
					],
				],
            ]
        );

        $this->end_controls_section();

        // Heading Style including heading, content, button1, button2.

		$this->start_controls_section(
			'heading_style',
			[
				'label' => esc_html__( 'Heading', 'md-fiery-addon' ),
				'tab' => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);
		
		// Heading Typography and Color.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'heading_typography',
				'label' => esc_html__( 'Typography', 'md-fiery-addon' ),
				'selector' => '{{WRAPPER}} .hero-partner-heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label' => esc_html__( 'Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Content Typography and Color.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'content_typography',
				'label' => esc_html__( 'Typography', 'md-fiery-addon' ),
				'selector' => '{{WRAPPER}} .hero-partner-content',
			]
		);

		$this->add_control(
			'content_color',
			[
				'label' => esc_html__( 'Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-content' => 'color: {{VALUE}}',
				],
			]
		);

		// Button 1 Typography and Color.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'button_typography',
				'label' => esc_html__( 'Typography', 'md-fiery-addon' ),
				'selector' => '{{WRAPPER}} .hero-partner-button',
			]
		);

		$this->add_control(
			'button_color',
			[
				'label' => esc_html__( 'Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button' => 'color: {{VALUE}}',
				],
			]
		);

		// Buttone 1 Border Group Control, Bordaer Radius and Padding.

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'button_border',
				'label' => esc_html__( 'Border', 'md-fiery-addon' ),
				'selector' => '{{WRAPPER}} .hero-partner-button',
			]
		);

		$this->add_control(
			'button_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'button_padding',
			[
				'label' => esc_html__( 'Padding', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button 1 Normal and Hover Background Color and Text Color.

		$this->start_controls_tabs( 'button_tabs' );

		$this->start_controls_tab(
			'normal',
			[
				'label' => esc_html__( 'Normal', 'md-fiery-addon' ),
			]
		);

		$this->add_control(
			'button_bg_color',
			[
				'label' => esc_html__( 'Background Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_text_color',
			[
				'label' => esc_html__( 'Text Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'hover',
			[
				'label' => esc_html__( 'Hover', 'md-fiery-addon' ),
			]
		);

		$this->add_control(
			'button_bg_color_hover',
			[
				'label' => esc_html__( 'Background Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_text_color_hover',
			[
				'label' => esc_html__( 'Text Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button:hover' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		// Button 2 Typography and Color.

		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name' => 'button_typography_2',
				'label' => esc_html__( 'Typography', 'md-fiery-addon' ),
				'selector' => '{{WRAPPER}} .hero-partner-button-2',
			]
		);

		$this->add_control(
			'button_color_2',
			[
				'label' => esc_html__( 'Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button-2' => 'color: {{VALUE}}',
				],
			]
		);

		// Buttone 2 Border Group Control, Bordaer Radius and Padding.

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name' => 'button_border_2',
				'label' => esc_html__( 'Border', 'md-fiery-addon' ),
				'selector' => '{{WRAPPER}} .hero-partner-button-2',
			]
		);

		$this->add_control(
			'button_border_radius_2',
			[
				'label' => esc_html__( 'Border Radius', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button-2' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'button_padding_2',
			[
				'label' => esc_html__( 'Padding', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::DIMENSIONS,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button-2' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button 2 Normal and Hover Background Color and Text Color.

		$this->start_controls_tabs( 'button_tabs_2' );

		$this->start_controls_tab(
			'normal',
			[
				'label' => esc_html__( 'Normal', 'md-fiery-addon' ),
			]
		);

		$this->add_control(
			'button_bg_color_2',
			[
				'label' => esc_html__( 'Background Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button-2' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_text_color_2',
			[
				'label' => esc_html__( 'Text Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button-2' => 'color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'hover',
			[
				'label' => esc_html__( 'Hover', 'md-fiery-addon' ),
			]
		);

		$this->add_control(
			'button_bg_color_hover_2',
			[
				'label' => esc_html__( 'Background Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button-2:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_text_color_hover_2',
			[
				'label' => esc_html__( 'Text Color', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .hero-partner-button-2:hover' => 'color: {{VALUE}}',
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
        ?>

		<div class="hero-partner">
			<div class="hero-partner__container">
				<div class="hero-partner__inner">
					<div class="hero-partner__left">
						<div class="hero-partner-content">
							<h2 class="hero-partner-heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
							<div class="hero-partner-content"><?php echo wp_kses_post( $settings['content'] ); ?></div>
							<div class="hero-partner-buttons">
								<a href="<?php echo esc_url( $settings['button_link']['url'] ); ?>" class="hero-partner-button"><?php echo esc_html( $settings['button_text'] ); ?></a>
								<a href="<?php echo esc_url( $settings['button_link_2']['url'] ); ?>" class="hero-partner-button-2"><?php echo esc_html( $settings['button_text_2'] ); ?></a>
							</div>
						</div>
					</div>
					<div class="hero-partner__right">
						<div class="hero-partner-logos">
							<?php
							if ( $settings['logos'] ) {
								foreach ( $settings['logos'] as $logo ) {
									?>
									<div class="hero-partner-logo">
										<figure class="hero-partner-logo__image">
											<img src="<?php echo esc_url( $logo['logo']['url'] ); ?>" alt="<?php echo esc_attr( get_post_meta( $logo['logo']['id'], '_wp_attachment_image_alt', true ) ); ?>">
										</figure>
									</div>
									<?php
								}
							}
							?>
						</div>
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
		
		<div class="hero-partner">
			<div class="hero-partner__container">
				<div class="hero-partner__inner">
					<div class="hero-partner__left">
						<div class="hero-partner-content">
							<h2 class="hero-partner-heading">{{{ settings.heading }}}</h2>
							<div class="hero-partner-content">{{{ settings.content }}}</div>
							<div class="hero-partner-buttons">
								<a href="{{{ settings.button_link.url }}}" class="hero-partner-button">{{{ settings.button_text }}}</a>
								<a href="{{{ settings.button_link_2.url }}}" class="hero-partner-button-2">{{{ settings.button_text_2 }}}</a>
							</div>
						</div>
					</div>
					<div class="hero-partner__right">
						<div class="hero-partner-logos">
							<# if ( settings.logos.length ) { #>
								<# _.each( settings.logos, function( logo ) { #>
									<div class="hero-partner-logo">
										<figure class="hero-partner-logo__image">
											<img src="{{{ logo.logo.url }}}" alt="{{{ logo.logo.alt }}}">
										</figure>
									</div>
								<# }); #>
							<# } #>
						</div>
					</div>
				</div>
			</div>
		</div>

        <?php
	}

}
<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Addon
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Addon\Inc\Elementors;


/**
 * Circle_Testimonials class
 * 
 * @since 1.0.0
 */
class Circle_Testimonials extends \Elementor\Widget_Base {

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
		return 'circle-testimonials';
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
		return esc_html__( 'Circle Testimonials', 'circle-addon' );
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
		return 'eicon-testimonial';
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
		return [ 'md-circle-addon' ];
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
		return [ 'circle', 'testimonials', 'slider' ];
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
	 * Register faq widget controls.
	 *
	 * Add input fields to allow the user to customize the widget settings.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function register_controls() {
        
		// Content Section

		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'circle-addon' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Heading
		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'circle-addon' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Loved by thousands of creators and brands', 'circle-addon' ),
			]
		);

		// Testimonials as Repeater including content, author name, position, and image.
		
		$repeaters = new \Elementor\Repeater();

		$repeaters->add_control(
			'content',
			[
				'label'       => esc_html__( 'Content', 'circle-addon' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Enter your content', 'circle-addon' ),
			]
		);

		$repeaters->add_control(
			'author_name',
			[
				'label'       => esc_html__( 'Author Name', 'circle-addon' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'John Doe', 'circle-addon' ),
			]
		);

		$repeaters->add_control(
			'position',
			[
				'label'       => esc_html__( 'Position', 'circle-addon' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'CEO, Company Name', 'circle-addon' ),
			]
		);

		$repeaters->add_control(
			'image',
			[
				'label'   => esc_html__( 'Image', 'circle-addon' ),
				'type'    => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->add_control(
			'testimonials',
			[
				'label'  => esc_html__( 'Testimonials', 'circle-addon' ),
				'type'   => \Elementor\Controls_Manager::REPEATER,
				'fields' => $repeaters->get_controls(),
				'title_field' => '{{{ author_name }}}',
			]
		);

		$this->end_controls_section();

		// Slider Settings Section
		
        $this->start_controls_section(
            'section_slider_settings',
            [
                'label' => esc_html__( 'Slider Settings', 'md-fiery-addon' ),
            ]
        );

        $this->add_control(
            'slides_to_show',
            [
                'label' => esc_html__( 'Slides to Show', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 3,
            ]
        );

        $this->add_control(
            'slides_to_scroll',
            [
                'label' => esc_html__( 'Slides to Scroll', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 1,
            ]
        );

        $this->add_control(
            'autoplay',
            [
                'label' => esc_html__( 'Autoplay', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'autoplay_speed',
            [
                'label' => esc_html__( 'Autoplay Speed', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 5000,
                'condition' => [
                    'autoplay' => 'yes',
                ],
            ]
        );

        $this->add_control(
            'infinite',
            [
                'label' => esc_html__( 'Infinite Loop', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'arrows',
            [
                'label' => esc_html__( 'Arrows', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );

        $this->add_control(
            'dots',
            [
                'label' => esc_html__( 'Dots', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'pause_on_hover',
            [
                'label' => esc_html__( 'Pause on Hover', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'adaptive_height',
            [
                'label' => esc_html__( 'Adaptive Height', 'md-fiery-addon' ),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
                'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

		// Center Mode
		$this->add_control(
			'center_mode',
			[
				'label' => esc_html__( 'Center Mode', 'md-fiery-addon' ),
				'type' => \Elementor\Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'md-fiery-addon' ),
				'label_off' => esc_html__( 'No', 'md-fiery-addon' ),
				'return_value' => 'yes',
				'default' => 'yes',
			]
		);

        $this->end_controls_section();

		// Style Section

		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'circle-addon' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Heading Typography
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-testimonials-heading',
			]
		);

		// Heading Color
		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Heading Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-testimonials-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Testimonials Content Typography
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'testimonials_content_typography',
				'label'    => esc_html__( 'Testimonials Content Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-testimonials-content',
			]
		);

		// Testimonials Content Color
		$this->add_control(
			'testimonials_content_color',
			[
				'label'     => esc_html__( 'Testimonials Content Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-testimonials-content' => 'color: {{VALUE}}',
				],
			]
		);

		// Author Name Typography
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'author_name_typography',
				'label'    => esc_html__( 'Author Name Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-testimonials-author-name',
			]
		);

		// Author Name Color
		$this->add_control(
			'author_name_color',
			[
				'label'     => esc_html__( 'Author Name Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-testimonials-author-name' => 'color: {{VALUE}}',
				],
			]
		);

		// Position Typography
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'position_typography',
				'label'    => esc_html__( 'Position Typography', 'circle-addon' ),
				'selector' => '{{WRAPPER}} .circle-testimonials-position',
			]
		);

		// Position Color
		$this->add_control(
			'position_color',
			[
				'label'     => esc_html__( 'Position Color', 'circle-addon' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .circle-testimonials-position' => 'color: {{VALUE}}',
				],
			]
		);

		// Author Image Size, border radius, and spacing
		$this->add_group_control(
			\Elementor\Group_Control_Image_Size::get_type(),
			[
				'name' => 'author_image_size',
				'default' => 'thumbnail',
			]
		);

		$this->add_responsive_control(
			'author_image_size',
			[
				'label' => esc_html__( 'Image Size', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 200,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .circle-testimonials-author-image img' => 'width: {{SIZE}}{{UNIT}}; height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'author_image_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .circle-testimonials-author-image img' => 'border-radius: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'author_image_spacing',
			[
				'label' => esc_html__( 'Spacing', 'circle-addon' ),
				'type' => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .circle-testimonials-author-image' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Render faq widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function render() {
        $settings = $this->get_settings_for_display();
        ?>

		<div class="circle-testimonials">
			<div class="circle-testimonials-heading">
				<div class="circle-testimonials-heading__inner">
					<?php echo esc_html( $settings['heading'] ); ?>
				</div>
			</div>
			<div class="circle-testimonials-slider circle_slick_slider" data-slide-to-show="<?php echo esc_attr( $settings['slides_to_show'] ); ?>" data-slide-to-scroll="<?php echo esc_attr( $settings['slides_to_scroll'] ); ?>" data-autoplay="<?php echo esc_attr( $settings['autoplay'] ); ?>" data-autoplay-speed="<?php echo esc_attr( $settings['autoplay_speed'] ); ?>" data-infinite="<?php echo esc_attr( $settings['infinite'] ); ?>" data-arrows="<?php echo esc_attr( $settings['arrows'] ); ?>" data-dots="<?php echo esc_attr( $settings['dots'] ); ?>" data-pause-on-hover="<?php echo esc_attr( $settings['pause_on_hover'] ); ?>" data-adaptive-height="<?php echo esc_attr( $settings['adaptive_height'] ); ?>" data-center-mode="<?php echo esc_attr( $settings['center_mode'] ); ?>">
				<?php foreach ( $settings['testimonials'] as $testimonial ) : ?>
					<div class="circle-testimonials-slide">
						<div class="circle-testimonials-content"><?php echo esc_html( $testimonial['content'] ); ?></div>
						<div class="circle-testimonials-author">
							<div class="circle-testimonials-author-image">
								<img src="<?php echo esc_url( $testimonial['image']['url'] ); ?>" alt="<?php echo esc_attr( $testimonial['author_name'] ); ?>">
							</div>
							<div class="circle-testimonials-author-details">
								<div class="circle-testimonials-author-name"><?php echo esc_html( $testimonial['author_name'] ); ?></div>
								<div class="circle-testimonials-position"><?php echo esc_html( $testimonial['position'] ); ?></div>
							</div>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

        <?php
	}

	/**
	 * Render faq widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 1.0.0
	 * @access protected
	 */
	protected function content_template() {
        ?>

		<div class="circle-testimonials">
			<div class="circle-testimonials-heading">
				<div class="circle-testimonials-heading__inner">{{{ settings.heading }}}</div>
			</div>
			<div class="circle-testimonials-slider circle_slick_slider" data-slide-to-show="{{{ settings.slides_to_show }}}" data-slide-to-scroll="{{{ settings.slides_to_scroll }}}" data-autoplay="{{{ settings.autoplay }}}" data-autoplay-speed="{{{ settings.autoplay_speed }}}" data-infinite="{{{ settings.infinite }}}" data-arrows="{{{ settings.arrows }}}" data-dots="{{{ settings.dots }}}" data-pause-on-hover="{{{ settings.pause_on_hover }}}" data-adaptive-height="{{{ settings.adaptive_height }}}" data-center-mode="{{{ settings.center_mode }}}">
				<# _.each( settings.testimonials, function( testimonial ) { #>
					<div class="circle-testimonials-slide">
						<div class="circle-testimonials-content">{{{ testimonial.content }}}</div>
						<div class="circle-testimonials-author">
							<div class="circle-testimonials-author-image">
								<img src="{{{ testimonial.image.url }}}" alt="{{{ testimonial.author_name }}}">
							</div>
							<div class="circle-testimonials-author-details">
								<div class="circle-testimonials-author-name">{{{ testimonial.author_name }}}</div>
								<div class="circle-testimonials-position">{{{ testimonial.position }}}</div>
							</div>
						</div>
					</div>
				<# }); #>
			</div>
		</div>

        <?php
	}

}
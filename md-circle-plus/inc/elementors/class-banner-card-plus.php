<?php
/**
 * The localization functionality of the plugin.
 *
 * @package    MD_Circle_Plus
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Circle_Plus\Inc\Elementors;


/**
 * Banner_Card_Plus class
 * 
 * @since 1.0.0
 */
class Banner_Card_Plus extends \Elementor\Widget_Base {

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
		return 'banner-card-plus';
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
		return esc_html__( 'Banner Card Plus', 'md-circle-plus' );
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
		return 'eicon-posts-carousel';
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
		return [ 'banner', 'card', 'plus' ];
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

		// Content Section.
		$this->start_controls_section(
			'content_section',
			[
				'label' => esc_html__( 'Content', 'md-circle-plus' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Heading, Description, Features as repeater, Link Text, Link URL, Image.
		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Enter your heading', 'md-circle-plus' ),
			]
		);

		$this->add_control(
			'description',
			[
				'label'       => esc_html__( 'Description', 'md-circle-plus' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Enter your description', 'md-circle-plus' ),
			]
		);

		$this->add_control(
			'image',
			[
				'label'   => esc_html__( 'Image', 'md-circle-plus' ),
				'type'    => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->end_controls_section();

		// Style Section.
		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'md-circle-plus' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Heading Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .banner-card-plus__heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Heading Color', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .banner-card-plus__heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Description Typography and Color.
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'description_typography',
				'label'    => esc_html__( 'Description Typography', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .banner-card-plus__description',
			]
		);

		$this->add_control(
			'description_color',
			[
				'label'     => esc_html__( 'Description Color', 'md-circle-plus' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .banner-card-plus__description' => 'color: {{VALUE}}',
				],
			]
		);

		// Content Margin.
		$this->add_responsive_control(
			'content_margin',
			[
				'label'      => esc_html__( 'Content Margin', 'md-circle-plus' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .banner-card-plus__content' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Image Width, Height, Border Group and Border Radius.
		$this->add_responsive_control(
			'image_width',
			[
				'label'      => esc_html__( 'Image Width', 'md-circle-plus' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'      => [
					'px' => [
						'min'  => 50,
						'max'  => 500,
						'step' => 1,
					],
					'%'  => [
						'min'  => 10,
						'max'  => 100,
						'step' => 1,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .banner-card-plus__image img' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'image_height',
			[
				'label'      => esc_html__( 'Image Height', 'md-circle-plus' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'      => [
					'px' => [
						'min'  => 50,
						'max'  => 500,
						'step' => 1,
					],
					'%'  => [
						'min'  => 10,
						'max'  => 100,
						'step' => 1,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .banner-card-plus__image img' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		// Image margin.
		$this->add_responsive_control(
			'image_margin',
			[
				'label'      => esc_html__( 'Image Margin', 'md-circle-plus' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .banner-card-plus__image' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'image_border',
				'label'    => esc_html__( 'Image Border', 'md-circle-plus' ),
				'selector' => '{{WRAPPER}} .banner-card-plus__image img',
			]
		);

		$this->add_responsive_control(
			'image_border_radius',
			[
				'label'      => esc_html__( 'Image Border Radius', 'md-circle-plus' ),
				'type'       => \Elementor\Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%' ],
				'range'      => [
					'px' => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
					'%'  => [
						'min'  => 0,
						'max'  => 100,
						'step' => 1,
					],
				],
				'selectors'  => [
					'{{WRAPPER}} .banner-card-plus__image img' => 'border-radius: {{SIZE}}{{UNIT}};',
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

		<div class="banner-card-plus">
			<div class="banner-card-plus__content">
				<h2 class="banner-card-plus__heading"><?php echo esc_html( $settings['heading'] ); ?></h2>
				<p class="banner-card-plus__description"><?php echo esc_html( $settings['description'] ); ?></p>
			</div>
			<?php if ( ! empty( $settings['image']['url'] ) ) : ?>
				<div class="banner-card-plus__image">
					<img src="<?php echo esc_url( $settings['image']['url'] ); ?>" alt="<?php echo esc_attr( $settings['heading'] ); ?>">
				</div>
			<?php endif; ?>
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

		<div class="banner-card-plus">
			<div class="banner-card-plus__content">
				<h2 class="banner-card-plus__heading">{{{ settings.heading }}}</h2>
				<p class="banner-card-plus__description">{{{ settings.description }}}</p>
			</div>
			<# if ( settings.image.url ) { #>
				<div class="banner-card-plus__image">
					<img src="{{{ settings.image.url }}}" alt="{{{ settings.heading }}}">
				</div>
			<# } #>
		</div>

        <?php
	}

}
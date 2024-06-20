<?php
/**
 * Elementor Widgets.
 *
 * @package    MD_Foursquare
 * @author     Multidots <info@multidots.com>
 */

namespace MD_Foursquare\Inc\Elementors;


/**
 * Foursquare_Media_Text class
 * 
 * @since 1.0.0
 */
class Foursquare_Media_Text extends \Elementor\Widget_Base {

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
		return 'foursquare-media-text';
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
		return esc_html__( 'Foursquare Media Text', 'md-foursquare' );
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
		return [ 'md-foursquare-addons' ];
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
		return [ 'foursquare', 'media', 'text' ];
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
				'label' => esc_html__( 'Content', 'md-foursquare' ),
				'tab'   => \Elementor\Controls_Manager::TAB_CONTENT,
			]
		);

		// Heading
		$this->add_control(
			'heading',
			[
				'label'       => esc_html__( 'Heading', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Loved by thousands of creators and brands', 'md-foursquare' ),
			]
		);

		// Description
		$this->add_control(
			'description',
			[
				'label'       => esc_html__( 'Description', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXTAREA,
				'placeholder' => esc_html__( 'Create a beautiful website with Elementor and choose from our fully customizable templates.', 'md-foursquare' ),
			]
		);

		// Button Text
		$this->add_control(
			'button_text',
			[
				'label'       => esc_html__( 'Button Text', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'Get Started', 'md-foursquare' ),
			]
		);

		// Button Link
		$this->add_control(
			'button_link',
			[
				'label'       => esc_html__( 'Button Link', 'md-foursquare' ),
				'type'        => \Elementor\Controls_Manager::URL,
				'placeholder' => esc_html__( 'https://your-link.com', 'md-foursquare' ),
			]
		);

		// Image
		$this->add_control(
			'image',
			[
				'label'   => esc_html__( 'Image', 'md-foursquare' ),
				'type'    => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
				],
			]
		);

		$this->end_controls_section();

		// Style Section
		
		$this->start_controls_section(
			'style_section',
			[
				'label' => esc_html__( 'Style', 'md-foursquare' ),
				'tab'   => \Elementor\Controls_Manager::TAB_STYLE,
			]
		);

		// Heading Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'heading_typography',
				'label'    => esc_html__( 'Heading Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-media-text-heading',
			]
		);

		$this->add_control(
			'heading_color',
			[
				'label'     => esc_html__( 'Heading Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-media-text-heading' => 'color: {{VALUE}}',
				],
			]
		);

		// Description Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'description_typography',
				'label'    => esc_html__( 'Description Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-media-text-description',
			]
		);

		$this->add_control(
			'description_color',
			[
				'label'     => esc_html__( 'Description Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-media-text-description' => 'color: {{VALUE}}',
				],
			]
		);

		// Button Typography and Color
		$this->add_group_control(
			\Elementor\Group_Control_Typography::get_type(),
			[
				'name'     => 'button_typography',
				'label'    => esc_html__( 'Button Typography', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-media-text-button',
			]
		);

		// Button Padding.
		$this->add_control(
			'button_padding',
			[
				'label'      => esc_html__( 'Button Padding', 'md-foursquare' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .foursquare-media-text-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button Border Group.
		$this->add_group_control(
			\Elementor\Group_Control_Border::get_type(),
			[
				'name'     => 'button_border',
				'label'    => esc_html__( 'Button Border', 'md-foursquare' ),
				'selector' => '{{WRAPPER}} .foursquare-media-text-button',
			]
		);

		// Button Border Radius.
		$this->add_control(
			'button_border_radius',
			[
				'label'      => esc_html__( 'Button Border Radius', 'md-foursquare' ),
				'type'       => \Elementor\Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors'  => [
					'{{WRAPPER}} .foursquare-media-text-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		// Button Normal and Hover Tabs.
		$this->start_controls_tabs( 'button_tabs' );

		// Button Normal Tab.
		$this->start_controls_tab(
			'button_normal',
			[
				'label' => esc_html__( 'Normal', 'md-foursquare' ),
			]
		);

		$this->add_control(
			'button_color',
			[
				'label'     => esc_html__( 'Button Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-media-text-button' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_background_color',
			[
				'label'     => esc_html__( 'Button Background Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-media-text-button' => 'background-color: {{VALUE}}',
				],
			]
		);

		// Button Border Color
		$this->add_control(
			'foursquare_media_text_button_border_color',
			[
				'label'     => esc_html__( 'Button Border Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-media-text-button' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		// Button Hover Tab.
		$this->start_controls_tab(
			'button_hover',
			[
				'label' => esc_html__( 'Hover', 'md-foursquare' ),
			]
		);

		$this->add_control(
			'button_hover_color',
			[
				'label'     => esc_html__( 'Button Hover Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-media-text-button:hover' => 'color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'button_hover_background_color',
			[
				'label'     => esc_html__( 'Button Hover Background Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-media-text-button:hover' => 'background-color: {{VALUE}}',
				],
			]
		);

		// Button Hover Border Color
		$this->add_control(
			'button_hover_border_color',
			[
				'label'     => esc_html__( 'Button Hover Border Color', 'md-foursquare' ),
				'type'      => \Elementor\Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .foursquare-media-text-button:hover' => 'border-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		// Image Size.
		$this->add_control(
			'image_size',
			[
				'label'   => esc_html__( 'Image Size', 'md-foursquare' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'full'  => esc_html__( 'Full', 'md-foursquare' ),
					'cover' => esc_html__( 'Cover', 'md-foursquare' ),
					'auto'  => esc_html__( 'Auto', 'md-foursquare' ),
				],
				'default' => 'cover',
			]
		);

		// Image Position.
		$this->add_control(
			'image_position',
			[
				'label'   => esc_html__( 'Image Position', 'md-foursquare' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => [
					'left'  => esc_html__( 'Left', 'md-foursquare' ),
					'right' => esc_html__( 'Right', 'md-foursquare' ),
				],
				'default' => 'left',
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

		<div class="foursquare-media-text foursquare-container">
			<div class="foursquare-media-text-content">
				<div class="foursquare-media-text-content__inner">
					<span class="fsq-anim-vbar vbar-1" style="background-color:#3333ff"></span>
					<span class="fsq-anim-hbar hbar-1 fsq-anim-h-rtl" style="background-color:#3333ff"></span>
					<div class="foursquare-media-text-heading_title">
						<svg class="fsq-anim-title-bullet" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.1125 10.616L19.5 1.73206L34.8875 10.616V28.384L19.5 37.2679L4.1125 28.384V10.616Z" fill="#ffffff" stroke="#3333ff" stroke-width="3" class="hexaone"></path></svg>
						<?php if ( ! empty( $settings['heading'] ) ) : ?>
							<h2 class="foursquare-media-text-heading">
								<?php echo esc_html( $settings['heading'] ); ?>
							</h2>
						<?php endif; ?>
					</div>
					<?php if ( ! empty( $settings['description'] ) ) : ?>
						<p class="foursquare-media-text-description"><?php echo esc_html( $settings['description'] ); ?></p>
					<?php endif; ?>
					<?php if ( ! empty( $settings['button_text'] ) ) : ?>
						<div class="foursquare-media-text-button-wrapper">
							<a class="foursquare-media-text-button" href="<?php echo esc_url( $settings['button_link']['url'] ); ?>"><?php echo esc_html( $settings['button_text'] ); ?></a>
						</div>
					<?php endif; ?>
				</div>
			</div>
			<?php if ( ! empty( $settings['image']['url'] ) ) : ?>
				<div class="foursquare-media-text-image">
					<img src="<?php echo esc_url( $settings['image']['url'] ); ?>" alt="<?php echo esc_attr( $settings['heading'] ); ?>" style="object-fit: <?php echo esc_attr( $settings['image_size'] ); ?>;">
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

		<div class="foursquare-media-text">
			<div class="foursquare-media-text-content">
				<# if ( settings.heading ) { #>
					<h2 class="foursquare-media-text-heading">{{{ settings.heading }}}</h2>
				<# } #>
				<# if ( settings.description ) { #>
					<p class="foursquare-media-text-description">{{{ settings.description }}}</p>
				<# } #>
				<# if ( settings.button_text ) { #>
					<div class="foursquare-media-text-button-wrapper">
						<a class="foursquare-media-text-button" href="{{{ settings.button_link.url }}}">{{{ settings.button_text }}}</a>
					</div>
				<# } #>
			</div>
			<# if ( settings.image.url ) { #>
				<div class="foursquare-media-text-image">
					<img src="{{{ settings.image.url }}}" alt="{{{ settings.heading }}}" style="object-fit: {{{ settings.image_size }}};">
				</div>
			<# } #>
		</div>

        <?php
	}

}